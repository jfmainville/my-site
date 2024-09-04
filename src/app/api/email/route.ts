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
    subject: "My Site Contact Form",
    html: `<p>Hello,<p><br><p>You received a message with the following information: </p><ul><li>First Name: ${firstName}</li><li>Last Name: ${lastName}</li><li>Email: ${email}</li><li>Phone: ${phone}</li><li>Message: ${message}</li></ul>`,
  });
  console.log("Message sent: %s", info.messageId);
  return Response.json({ firstName, lastName, email, phone, message });
}
