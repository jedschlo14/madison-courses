
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import NoSuchElementException
import pymongo
# -----

# open safari webdriver
driver = webdriver.Safari(executable_path="/usr/bin/safaridriver")

# connection to database
cluster = pymongo.MongoClient("mongodb+srv://admin:1234@madison-courses.49jwn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
db = cluster["madison-courses"]
courseCollection = db["courses"]
fieldCollection = db["fields"]

# reset collections
courseCollection.drop()
fieldCollection.drop()
courseCollection = db["courses"]
fieldCollection = db["fields"]

# loop through every single field and record their information
course_id = 0
field_id = 0
idList = []
for first in range(1, 22):
    for second in range(1, 24):

        # reload page and goto the next field
        url = "https://guide.wisc.edu/courses/"
        driver.get(url)
        xpath = '//*[@id="atozindex"]/ul[' + str(first) + ']/li[' + str(second) + ']/a'

        # make sure the given xpath is valid
        try:
            driver.find_element_by_xpath(xpath).click()
        except NoSuchElementException:
            continue

        # wait until the field page loads to continue
        try:
            WebDriverWait(driver, 50).until(EC.presence_of_element_located((By.CLASS_NAME, "courseblock")))
        except:
            driver.quit()

        # create variables for individual headers and fields
        header = driver.find_element_by_class_name("page-title").text.split(" (")
        headerField = header[1].strip(") ") 
        header = header[0].title()

        # add data to field collection
        fieldCollection.insert_one({"_id": field_id, "header": header, "field": headerField})
        field_id += 1

        # declare varaibles regarding the content of the field's page
        content = driver.find_element_by_id("content")
        courseBlocks = content.find_elements_by_class_name("courseblock")
        for courseBlock in courseBlocks:

            # find infomation for course fields, number, and name
            title = courseBlock.find_element_by_class_name("courseblocktitle").text.replace("\xa0", " ").split("—")

            # course name
            nameSplit = title[1].strip().title().split()

            # check for false roman numerals
            if nameSplit[-1] == "Ii":
                nameSplit[-1] = "II"

            if nameSplit[-1] == "Iii":
                nameSplit[-1] = "III"

            if nameSplit[-1] == "Iv":
                nameSplit[-1] = "IV"

            if nameSplit[-1] == "Vi":
                nameSplit[-1] = "VI"

            if nameSplit[-1] == "Vii":
                nameSplit[-1] = "Vii"

            if nameSplit[-1] == "Viii":
                nameSplit[-1] = "VIII"

            # create name with items in nameSplit
            name = ""
            for item in range(len(nameSplit)):
                name += " " + nameSplit[item]
            name = name.strip()

            # course fields
            title = title[0].split("/")
            fields = title[:-1]
            ending = title[-1][::-1].strip().split(" ", 1)
            fields.append(ending[1][::-1].strip())
            fields.sort()

            # course number
            number = ending[0][::-1]

            # list for minimum and maximum number of credits
            credit = courseBlock.find_element_by_class_name("courseblockcredits").text.strip(" credits.").split("-")
            
            # credit minimum
            creditMin = credit[0]

            # credit maximum
            if len(credit) == 1:
                creditMax = credit[0]
            else:
                creditMax = credit[1]

            # course description
            description = courseBlock.find_element_by_class_name("courseblockdesc").text

            # check for duplicate course
            if len(fields) > 1:
                # create temporary id
                identification = fields[0] + str(number)

                # check if temporary id exists elsewhere
                if identification in idList:

                    # do nothing
                    continue
                    
                else:
                    # add temp id to list
                    idList.append(identification)

                    # do insert
                    pass

            # add data to course collection
            courseCollection.insert_one({"_id": course_id, "fields": fields, "number": number, "name": name, "creditMin": creditMin, "creditMax": creditMax, "description": description})
            course_id += 1

# close driver and application
driver.close()
exit()
