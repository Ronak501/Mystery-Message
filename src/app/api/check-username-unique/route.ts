import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/User";
import { z } from "zod";
import { usernameValidation } from "@/schemas/signUpSchema";

const UsernameQuerySchema = z.object({
    username: usernameValidation,
});

export async function GET(request: Request) { 

    await dbConnect();
    
    try {
        const { searchParams } = new URL(request.url);

        const queryParams = { username: searchParams.get("username")};

        //validate with zod 
        const result = UsernameQuerySchema.safeParse(queryParams);

        console.log(result);

        if (!result.success) {
            const usernameError = result.error.format().username?._errors || []

            return Response.json({ success: false, message: usernameError?.length > 0 ? usernameError.join(", ") : "Invalid Query Parameters" }, { status: 400 });
        }

        const { username } = result.data;

        const existingVerifiedUser = await UserModel.findOne({ username, isVerified: true });

        if (existingVerifiedUser) {
            return Response.json({ success: false, message: "Username already exists" }, { status: 400 });
        }

        return Response.json({ success: true, message: "Username is Unique" }, { status: 200 });
    } catch (err) {
        console.log("Error checking username: ", err);

        return Response.json({ success: false, message: "failed checking username" }, { status: 500 });
    }
}