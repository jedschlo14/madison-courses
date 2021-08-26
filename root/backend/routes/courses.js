import express from 'express';
import { getCourses } from '../controllers/courses.js';
import { getSpecificCourse } from '../controllers/courses.js';

const router = express.Router();

router.get('/', getCourses);
router.get('/courseId', getSpecificCourse);

export default router;