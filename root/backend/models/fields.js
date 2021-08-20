import mongoose from 'mongoose';

const fieldSchema = mongoose.Schema({
    _id: Number,
    header: String,
    field: String,
});

const field = mongoose.model('fields', fieldSchema);

export default field;
