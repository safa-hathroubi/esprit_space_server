import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const ClassesSchema = new Schema(
    {
       
        clas: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        iduser : {
            type: String,
        },
    },
    {
        timestamps: true
    }
);

export default model('Classes', ClassesSchema);