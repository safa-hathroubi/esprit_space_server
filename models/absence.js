import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const AbsenceSchema = new Schema(
    {
        matiere: {
            type: String,
            required: true
        },
        date: {
            type: String,
            required: true
        },
        justificatif: {
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

export default model('Absences', AbsenceSchema);