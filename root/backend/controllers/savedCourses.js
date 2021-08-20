import CourseData from '../models/course.js'; 

export const getSavedCourses = async(req, res)=> {
    try {
        const allSavedCourses = await CourseData.find({ saved: true });

        res.status(200).json(allSavedCourses);
    } catch (error) {
        res.status(404).json({ message: error.message});
    }
}

export const addCourse = async (req, res)=> {
    const id = req.body.id;
    const add = req.body.bool;
    // const id = parseInt(req.params.id);

    try {
        const savedCourse = await CourseData.findByIdAndUpdate({_id: id}, { saved: add });

        res.status(200).json(savedCourse);
    } catch (error) {
        res.status(404).json({ message: error.message});
    }
}

// export const addCourse = async (req, res)=> {
//     const  = req.body;

//     const newCourse = new CourseData(student);

//     try {
//         await newCourse.save();
//         res.status(201).json(newCourse);
//     } catch (error) {
//         res.status(409).json({ message: error.message});
//     }
// }

export const deleteCourse = async (req, res)=> {
    const id = req.params.id;

    try {
        await CourseData.findByIdAndRemove(id).exec();
        res.send('Successfully Deleted!');
    } catch (error) {
        console.log(error);
    }
}