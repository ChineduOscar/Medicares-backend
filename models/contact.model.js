import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
    fullName: {
        type: String,
        trim: true,
        minLength: [2, "Name is too short"],
        maxLength: [100, "Name is too long"]
    },

    email: {
        type: String,
        required: [true, 'Email is required'],
        trim: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },

    message: {
        type: String,
        required: [true, 'Message is required'],
        trim: true,
    }
}, {timestamps: true})

const Contact = mongoose.model('contact', contactSchema)

export default Contact