import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const userSchema = new Schema(
    {
        login: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        status: {
            type: Boolean,
        },
        iduser : {
            type: String,
        },
    },
    {
        timestamps: true
    }
);

export default model('User', userSchema);