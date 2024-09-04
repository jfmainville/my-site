import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  host: process.env.OUTLOOK_SMTP_SERVER,
  port: process.env.OUTLOOK_SMTP_SERVER_PORT,
  tls: {
    ciphers: "SSLv3",
    rejectUnauthorized: false,
  },
  auth: {
    user: process.env.OUTLOOK_EMAIL,
    pass: process.env.OUTLOOK_APP_PASSWORD,
  },
});
