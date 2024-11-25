import * as nodemailer from "nodemailer";
import handlebars from "handlebars";

// Validation helpers
const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const isValidPhone = (phone) => /^[0-9\+\-\(\)\s]+$/.test(phone);
const isRequiredFieldEmpty = (field) => !field || field.trim() === "";

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const body = await readBody(event);

  // Validate Turnstile token
  if (!body.token) {
    throw createError({ statusCode: 422, message: "Token not provided." });
  }

  const captchaValidationOutcome = await verifyTurnstileToken(body.token);
  if (!captchaValidationOutcome.success) {
    throw createError({ statusCode: 403, message: "Invalid CAPTCHA token." });
  }

  // Validation based on action
  const errors = [];
  if (body.action === "subscribe") {
    if (isRequiredFieldEmpty(body.email)) errors.push("Email is required.");
    if (!isValidEmail(body.email)) errors.push("Invalid email format.");
  } else if (body.action === "contact") {
    if (isRequiredFieldEmpty(body.name)) errors.push("Name is required.");
    if (isRequiredFieldEmpty(body.phone)) errors.push("Phone number is required.");
    if (!isValidPhone(body.phone)) errors.push("Invalid phone number format.");
    if (isRequiredFieldEmpty(body.email)) errors.push("Email is required.");
    if (!isValidEmail(body.email)) errors.push("Invalid email format.");
    if (isRequiredFieldEmpty(body.message)) errors.push("Message is required.");
  } else {
    throw createError({ statusCode: 400, message: "Unknown action." });
  }

  if (errors.length > 0) return { success: false, errors };

  // Load template
  const templatePath = `email-templates:${body.action}.html`;
  const source = await useStorage("assets:server").getItem(templatePath);

  if (!source) {
    console.error("Template file not found or empty.");
    throw createError({ statusCode: 500, message: "Email template not found." });
  }

  const templateSource = handlebars.compile(source);
  const renderedHtml = templateSource({
    name: body.name,
    phone: body.phone,
    email: body.email,
    subject: body.action === "contact" ? body.subject : "Subscribe",
    messageText: body.message,
  });

  // Nodemailer transport
  const transporter = nodemailer.createTransport({
    host: "smtp.zoho.eu",
    port: 465,
    secure: true,
    auth: { user: config.MAILER_USER, pass: config.MAILER_PASSWORD },
  });

  const mailOptions = {
    from: `Aroma Grinder <info@aromagrinder.com>`,
    to: "stefanbozic@protonmail.com",
    subject: body.action === "contact" ? body.subject : "Newsletter Subscription",
    html: renderedHtml,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true, message: "Email sent successfully." };
  } catch (error) {
    console.error("Error sending email:", error);
    throw createError({ statusCode: 500, message: "Failed to send email." });
  }
});
