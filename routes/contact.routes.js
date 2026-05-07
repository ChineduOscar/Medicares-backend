import { sendMessage } from "../controllers/contact.controller.js";
import { Router } from "express";

const router = Router()

router.post('/contact', sendMessage)

export default router
