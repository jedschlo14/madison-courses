import express from 'express';
import { getSavedCourses, addCourse, deleteCourse } from '../controllers/savedCourses.js';

const router = express.Router();

router.get('/', getSavedCourses);
router.put('/', addCourse);
router.delete('/:id', deleteCourse);

export default router;