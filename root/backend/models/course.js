import mongoose from 'mongoose';

const courseSchema = mongoose.Schema({
    fields: Array,
    number: Number,
    name: String,
    minCredits: Number,
    maxCredits: Number,
    description: String,
});

const course = mongoose.model('courses', courseSchema);

export default course;
