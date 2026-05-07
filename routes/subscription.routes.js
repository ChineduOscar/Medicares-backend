import { sendEmail } from "../controllers/subscription.controller.js";
import { Router } from "express";

const router = Router()

router.post('/send', sendEmail)

export default router