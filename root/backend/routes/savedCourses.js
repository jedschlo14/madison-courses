import express from 'express';
import { getSavedCourses, addCourse } from '../controllers/savedCourses.js';

const router = express.Router();

router.get('/', getSavedCourses);
router.put('/', addCourse);

export default router;