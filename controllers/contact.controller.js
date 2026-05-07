import {StatusCodes} from 'http-status-codes'
import Contact from "../models/contact.model.js";

export const sendMessage = async(req, res) =>{
    try{
        const body = req.body 
        await Contact.create(body)
        
        if(!body.email || !body.message){
            return res.status(StatusCodes.BAD_REQUEST).json({
                success: false,
                message: "Please fill in all required fields.",
            });
        }

        res.status(StatusCodes.CREATED).json({
            success: true,
            message: "Your message has been sent successfully. Our team will get back to you shortly.",
        });

    }catch(error){
        console.log(error.message)
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Something went wrong. Please try again later.",
        });
    }
}