import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minLength: 6,
    },
    gender: {
        type: String,
        required: true,
        enum: ['male', 'female'],
    },
    profilePicture: {
        type: String,
        default: '',
    },

}, { timestamps: true });

const User = mongoose.model('User', userSchema);

export default User;