//still in progress

import express from "express";
import { sendEmail } from "../controllers/about.controller.js";
const router = express.Router();

router.post("/", sendEmail);

export default router;
