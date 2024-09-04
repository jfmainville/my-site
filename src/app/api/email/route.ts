import { transporter } from "../../lib/nodemailer/nodemailerConfig";

export async function POST(request: Request) {
  const formData = await request.formData();
  const firstName = formData.get("firstName");
  const lastName = formData.get("lastName");
  const email = formData.get("email");
  const phone = formData.get("phone");
  const message = formData.get("message");

  const info = await transporter.sendMail({
    from: process.env.OUTLOOK_EMAIL,
    to: process.env.OUTLOOK_EMAIL,
    subject: "Test",
    html: `<h1>${email}</h1>`,
  });
  console.log("Message sent: %s", info.messageId);
  return Response.json({ firstName, lastName, email, phone, message });
}
