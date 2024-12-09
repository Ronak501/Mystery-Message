import NextAuth from "next-auth";
import { authOptions } from "./options";

const handle = NextAuth(authOptions);

export { handle as GET, handle as POST };