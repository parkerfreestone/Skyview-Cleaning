import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_KEY);

export const sendEmail = async (
  fullname: string,
  submissionTemplate: string
) => {
  try {
    let recipientEmail = "parkerfreestone@gmail.com";

    let info = {
      from: "Ryftt Support <skyview-cleaning-submissions@ryftt.dev>",
      to: [recipientEmail],
      subject: `New Contact Submission from ${fullname}`,
      html: submissionTemplate,
    };

    await resend.emails.send(info);

    return { success: true, message: "Email sent successfully!" };
  } catch (e) {
    console.error(e);

    return { success: false, message: "Failed to send email." };
  }
};
