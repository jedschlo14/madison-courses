import CourseData from '../models/course.js';

export const getCourses = async(req, res)=> {
    try {
        const allCourses = await CourseData.find({ number: { $eq: "100" }});

        res.status(200).json(allCourses);
    } catch (error) {
        res.status(404).json({ message: error.message});
    }
}