import express from 'express';
import { getAllCourse, getCourseId } from '../controllers/courseController.js';

const courseRouter = express.Router();

// Ge All Course
courseRouter.get('/all', getAllCourse);

// Ge Course Data By Id
courseRouter.get('/:id', getCourseId);

export default courseRouter;
