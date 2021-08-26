import CourseData from '../models/course.js';

export const getCourses = async(req, res)=> {
    try {
        const courses = await CourseData.find();
        
        res.status(200).json(courses);
    } catch (error) {
        res.status(404).json({ message: error.message});
    }
}

export const getSpecificCourse = async(req, res)=> {
    try {
        const selectedCourse = await CourseData.findOne({ _id: req.query.courseId });
        
        res.status(200).json(selectedCourse);
    } catch (error) {
        res.status(404).json({ message: error.message});
    }
}


// const keywords = req.body.keywords
// const field = req.body.field
// const minCredits = req.body.minCredits
// const maxCredits = req.body.maxCredits