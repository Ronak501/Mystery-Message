import { resend } from "@/lib/resend";
import VerificationEmail from "../../emails/VerificationEmail";
import { ApiReponse } from "@/types/ApiResponse";

export async function sendVerificationEmail(
    email: string,
    username: string,
    verifyCode: string
): Promise<ApiReponse> {
    try { 
        await resend.emails.send({
          from: "onboarding@resend.dev",
          to: email,
          subject: "Mystery Message Verification Code",
          react: VerificationEmail({ username, otp: verifyCode }),
        });
        return { success: true, message: "verification email sent" };
    } catch (error) { 
        console.error("Error sending verification email: ", error);
        return { success: false, message: "failed sending verification email" };
    }
}