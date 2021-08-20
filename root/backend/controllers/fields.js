import FieldData from '../models/fields.js';

export const getFields = async(req, res)=> {
    try {
        const allFields = await FieldData.find();

        res.status(200).json(allFields);
    } catch (error) {
        res.status(404).json({ message: error.message});
    }
}