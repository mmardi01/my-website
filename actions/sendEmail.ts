'use server'
import { FormData } from "@/components/Contact"
import { Resend } from "resend"

const resend = new Resend(process.env.API_KEY);
console.log(process.env.API_KEY);

export const sendEmail = async (formData: FormData) => {
    const { emailSender, message } = formData
    if (!emailSender || !message) throw new Error("Missing fields")
    try {
        await resend.emails.send({
            from: 'Contact Form <onboarding@resend.dev>',
            to: "mmardi@student.1337.ma",
            subject: "Message from portfolio",
            reply_to: emailSender as string,
            text: message, 
        });
        return "Email sent successfully"
    }
    catch (err) {
        throw new Error("Error sending email");
    }
}