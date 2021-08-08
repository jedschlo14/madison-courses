import pymongo
import pprint
# -----

# connection to database
cluster = pymongo.MongoClient("mongodb+srv://admin:1234@madison-courses.49jwn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
db = cluster["madison-courses"]
courseCollection = db["courses"]
posts = db["fields"]

# pprint.pprint(fieldCollection.find())

for post in posts.find():
    pprint.pprint(post)