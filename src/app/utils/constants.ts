export const currentDateTime: Date = new Date(
  new Date().toISOString().slice(0, -5) + "Z",
);

export const PORT = process.env.PORT || "3000";
export const RESUME_FILENAME = "Resume_Jean_Frederic_Mainville.pdf";
export const GMAIL_SMTP_SERVER =
  process.env.GMAIL_SMTP_SERVER || "smtp.gmail.com";
export const GMAIL_SMTP_SERVER_PORT =
  process.env.GMAIL_SMTP_SERVER_PORT || "587";
export const GMAIL_EMAIL = process.env.GMAIL_EMAIL;
export const GMAIL_APP_PASSWORD = process.env.GMAIL_APP_PASSWORD;
export const NEXT_PUBLIC_AWS_BUCKET_URL =
  process.env.NEXT_PUBLIC_AWS_BUCKET_URL;
