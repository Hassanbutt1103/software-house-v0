import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

interface EmailPayload {
  name: string;
  email: string;
  company?: string | null;
  budget?: string | null;
  selectedServices?: string[];
  message: string;
}

export async function sendContactEmail(data: EmailPayload) {
  const { name, email, company, budget, selectedServices, message } = data;

  const mailOptions = {
    from: `"${name}" <${process.env.EMAIL_USER}>`,
    to: "1103butt@gmail.com", // جس ای میل پر آپ نے ریسیو کرنا ہے
    replyTo: email,
    subject: `🚀 New Project Inquiry from ${name} ${company ? `(${company})` : ""}`,
    html: `
      <div style="font-family: Arial, sans-serif; padding: 20px; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #eaeaea; border-radius: 10px;">
        <h2 style="color: #6366f1; border-bottom: 2px solid #eaeaea; padding-bottom: 10px;">New Project Inquiry Received</h2>
        
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Company:</strong> ${company || "N/A"}</p>
        <p><strong>Estimated Budget:</strong> ${budget || "N/A"}</p>
        <p><strong>Selected Services:</strong> ${selectedServices && selectedServices.length > 0 ? selectedServices.join(", ") : "None specified"}</p>
        
        <div style="margin-top: 20px; padding: 15px; background: #f9fafb; border-left: 4px solid #6366f1; border-radius: 4px;">
          <p style="margin: 0; font-weight: bold;">Message:</p>
          <p style="margin-top: 5px; white-space: pre-wrap;">${message}</p>
        </div>
        
        <p style="font-size: 12px; color: #888; margin-top: 30px; text-align: center;">This email was sent automatically from your website's contact form.</p>
      </div>
    `,
  };

  return await transporter.sendMail(mailOptions);
}