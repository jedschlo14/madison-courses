import express from 'express';
import { getCourses } from '../controllers/courses.js';
import { addCourse } from '../controllers/savedCourses.js';

const router = express.Router();

router.get('/', getCourses);

export default router;