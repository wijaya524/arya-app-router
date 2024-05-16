import NextAuth from "next-auth";
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize(credentials, req) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };

        if (email === "pandanwangi250@gmail.com" && password === "admin12345") {
          return null;
        }
        return {
          id: "123",
          name: "aryansyah",
        };
      },
    }),
  ],

  //  pages: {
  //    signIn: "/login"
  //  }
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
