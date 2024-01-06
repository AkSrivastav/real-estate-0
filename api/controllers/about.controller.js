//still in progress
import { errorHandler } from "../utils/error.js";
import Feedback from "../models/feedback.model.js";
//Implement sendEmail function here (use nodemailer or any mailsending service)

export const sendEmail = async (req, res, next) => {
  const { subject, message } = req.body;

  if (!subject || !message) {
    return next(errorHandler(400, "Please fill out all fields!"));
  }

  const newFeedback = new Feedback({
    subject,
    message,
    user: new Date().getTime().toString(),
  });

  try {
    await newFeedback.save();
    //   res.status(201).json("Feedback submitted successfully!");
    res.status(200).json(newFeedback);
  } catch (error) {
    return next(error);
  }
};
