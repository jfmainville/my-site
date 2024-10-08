import nodemailer from "nodemailer";
import {
  GMAIL_SMTP_SERVER,
  GMAIL_SMTP_SERVER_PORT,
  GMAIL_EMAIL,
  GMAIL_APP_PASSWORD,
} from "../../utils/constants";

export const transporter = nodemailer.createTransport({
  service: "gmail",
  host: GMAIL_SMTP_SERVER,
  port: GMAIL_SMTP_SERVER_PORT,
  secure: true,
  auth: {
    user: GMAIL_EMAIL,
    pass: GMAIL_APP_PASSWORD,
  },
});
