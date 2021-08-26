import CourseData from '../models/course.js'; 

export const getSavedCourses = async (req, res)=> {
    try {
        const courses = await CourseData.find({ isSaved: true });

        res.status(200).json(courses);
    } catch (error) {
        res.status(404).json({ message: error.message});
    }
}

export const addCourse = async (req, res)=> {
    const id = req.body.id;
    const add = req.body.bool;

    try {
        const savedCourse = await CourseData.findByIdAndUpdate({_id: id}, { isSaved: add });

        res.status(200).json(savedCourse);
    } catch (error) {
        res.status(404).json({ message: error.message});
    }
}