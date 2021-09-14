import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import courseRoutes from './routes/courses.js';
import savedCourseRoutes from './routes/savedCourses.js';
import fieldRoutes from './routes/fields.js';

const app = express();

app.use(express.json());
app.use(cors());
app.use('/courses', courseRoutes);
app.use('/saved-courses', savedCourseRoutes);
app.use('/fields', fieldRoutes);

const PORT = process.env.PORT || 5000;

const mongoUrl = "mongodb+srv://admin:1234@madison-courses.49jwn.mongodb.net"
mongoose.connect(mongoUrl, {dbName: "madison-courses"})
    .then(() => app.listen(PORT, () =>
        console.log(`Connection is established and running on port: ${PORT}`)
        )).catch((err) => console.log(err.message));
