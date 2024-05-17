import { authOptions } from "@/app/library/auth/route";
import NextAuth from "next-auth";

//Handler for NextAuth
const handler = NextAuth(authOptions);


export { handler as GET, handler as POST };
