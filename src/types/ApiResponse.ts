import { Message } from "@/model/User";

export interface ApiReponse{
    success: boolean,
    message: string,
    isAcceptingMessages?: boolean
    messages ?: Message
}