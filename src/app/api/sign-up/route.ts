import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/User";
import bcrypt from "bcryptjs";
import { sendVerificationEmail } from "@/helpers/sendVerificationEmail";

export async function POST(request: Request) { 
    await dbConnect();
    try {
        const { username, email, password } = await request.json();
        
        const existingUserVerifiedByUsername = await UserModel.findOne({
            username,
            isVerified: true,
        })

        if (existingUserVerifiedByUsername) { 
            return Response.json({
                success: false,
                message: "Username already exists",
            }, { status: 400 });
        }

        const existingUserByEmail = await UserModel.findOne({ email })
        
        const verifiedCode = Math.floor(Math.random() * 900000 + 100000).toString();

        if (existingUserByEmail) { 
            if (existingUserByEmail.isVerified) {
                return Response.json({
                    success: false,
                    message: "Email already exists",
                }, { status: 400 });
            } else {
                const hasedPassword = await bcrypt.hash(password, 10);
                existingUserByEmail.password = hasedPassword;
                existingUserByEmail.verifyCode = verifiedCode;
                existingUserByEmail.verifyCodeExpiry = new Date(Date.now() + 60 * 60 * 1000);
                await existingUserByEmail.save();
            }
        } else {
            const hasedPassword = await bcrypt.hash(password, 10);
            const expiryDate = new Date();
            //this expiry is not change new Date is the hall object and setHours is the inner change in object so object is not change
            expiryDate.setHours(expiryDate.getHours() + 1);

            const newUser = new UserModel({
                username,
                email,
                password: hasedPassword,
                verifyCode: verifiedCode,
                verifyCodeExpiry: expiryDate,
                isVerified: false,
                isAcceptingMessages: false,
                messages: [],
            });
            await newUser.save();
        }

        const emailResponse = await sendVerificationEmail(email, username, verifiedCode);

        if (!emailResponse.success) {
            return Response.json({
                success: false,
                message: emailResponse.message,
            },{ status: 500 });
        }

        return Response.json({ success: true, message: "User Registered.Plz verify your email" }, { status: 201 });
        
    } catch (error) {
        console.error("Error Registering User:", error);
        return Response.json({ success: false, message: "Error Registering User" },{ status: 500 });
    }
}   