import { StatusCodes } from "http-status-codes"
import Subscription from "../models/subscription.model.js"

export const sendEmail = async(req, res)=> {
    try{
        const body = req.body

        if(!body.email){
            return res.status(StatusCodes.BAD_REQUEST).json({
                success: true,
                message: 'Email is required'
            })
        }
        console.log(body.email)

        await Subscription.create(body)

        res.status(StatusCodes.CREATED).json({
            success: true,
            message:'You have successfully subscribed to our newsletter.'
        })
    }catch(error){
        console.log(error.message)

        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Something went wrong. Please try again later.",
        });
    }
    
}