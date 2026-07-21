import transporter from "../config/mail.js";
import dotenv from "dotenv";

dotenv.config();

export const sendContactEmail = async ({ name, email, subject, message }) => {
  const mailOptions = {
    from: `"${name}" <${process.env.EMAIL_USER}>`,
    replyTo: email,
    to: process.env.RECEIVER_EMAIL || process.env.EMAIL_USER,
    subject: subject || `New Portfolio Message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #ddd; border-radius: 8px; padding: 20px;">
        <h2 style="color: #2563EB; border-bottom: 2px solid #2563EB; padding-bottom: 10px; margin-top: 0;">New Portfolio Contact</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Subject:</strong> ${subject || "N/A"}</p>
        <div style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #2563EB; margin-top: 15px; border-radius: 4px;">
          <p style="margin: 0; white-space: pre-wrap;">${message}</p>
        </div>
        <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
        <p style="font-size: 12px; color: #777; margin-bottom: 0;">This email was sent from your portfolio website contact form.</p>
      </div>
    `,
  };

  return transporter.sendMail(mailOptions);
};
