import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const NotesSchema = new Schema(
    {
        matiere: {
            type: String,
            required: true
        },
        cc: {
            type: String,
            required: true
        },
        examen: {
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

export default model('Notes', NotesSchema);