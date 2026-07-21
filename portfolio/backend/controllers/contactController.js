import { sendContactEmail } from "../services/emailService.js";

export const sendContactMessage = async (req, res) => {
  const { name, email, subject, message } = req.body;

  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: "Please fill in all required fields (Name, Email, Message).",
    });
  }

  try {
    await sendContactEmail({ name, email, subject, message });
    res.status(200).json({
      success: true,
      message: "Your message has been sent successfully! 🚀",
    });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({
      success: false,
      message: "Failed to send message. Please try again later.",
      error: error.message,
    });
  }
};
