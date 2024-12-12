import dbConnect from "@/lib/dbConnect";
import { NextResponse } from "next/server";
import OpenAI from "openai";
const openai = new OpenAI();

export async function POST(req: Request) {
    try {

        await dbConnect();

        const { message } = await req.json()
        
        const completion = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
                { role: "system", content: "You are a helpful assistant." },
                {
                role: "user",
                content: message,
                },
            ],
        });

        return NextResponse.json({ message: completion.choices[0].message.content }, { status: 200 });

    } catch (error: unknown) {
        if (error instanceof OpenAI.APIError) {
            // Handle the case where error is an instance of OpenAI.APIError
            const { name, message, headers, status } = error;
            return NextResponse.json(
            { error: { name, message, headers, status } },
            { status: 500 }
            );
        } else {
            // Handle the case where error is not an instance of Error
            return NextResponse.json(
            { error: "An unknown error occurred" },
            { status: 500 }
            );
        }
    }
}