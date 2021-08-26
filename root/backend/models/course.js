import mongoose from 'mongoose';

const courseSchema = mongoose.Schema({
    _id: Number,
    fields: Array,
    number: Number,
    name: String,
    minCredits: Number,
    maxCredits: Number,
    description: String,
    isSaved: { type: Boolean, default: false },
});

const course = mongoose.model('courses', courseSchema);

export default course;
