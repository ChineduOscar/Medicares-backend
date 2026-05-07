import mongoose from "mongoose";

const subscriptionSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    }
}, {timestamps: true})


const Subscription = mongoose.model('Subscriptions', subscriptionSchema)

export default Subscription