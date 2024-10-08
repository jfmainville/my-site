import { NextResponse } from "next/server";
import { transporter } from "../../lib/nodemailer/nodemailerConfig";
import { GMAIL_EMAIL } from "../../utils/constants";

export async function POST(request: Request) {
  const formData = await request.formData();
  const firstName = formData.get("firstName");
  const lastName = formData.get("lastName");
  const email = formData.get("email");
  const phone = formData.get("phone");
  const message = formData.get("message");

  await transporter.sendMail({
    from: GMAIL_EMAIL,
    to: GMAIL_EMAIL,
    subject: "My Site Contact Form",
    html: `<p>Hello,<p><br><p>You received a message with the following information: </p><ul><li>First Name: ${firstName}</li><li>Last Name: ${lastName}</li><li>Email: ${email}</li><li>Phone: ${phone}</li><li>Message: ${message}</li></ul>`,
  });

  return NextResponse.json(
    {
      message:
        "Successfully sent the contact form to the defined email address",
    },
    { status: 201 },
  );
}
