import { NextAuthOptions } from "next-auth";
import CredentialsProviders from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";;


//SetUp NextAuth
export const authOptions: NextAuthOptions = {
    session: {
        strategy: "jwt"
    },
    secret: "aryA",
    providers: [
        //Use provider credentials
        CredentialsProviders({
            name: 'Credentials',
            type: 'credentials',
            //Credentials
            credentials:{
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
        //Authorize for Credentials    
        async authorize(credentials) {
            const  {email, password} = credentials as {
                email: string;
                password: string;
            }
            const user : any = {
                id : 1,
                name: "admin",
                email: "pandanwangi250@gmail.com",
                role: "admin"
            }
            if(email === "pandanwangi250@gmail.com" && password === "admin"){
                return user
            } else {
                return null
            }
        }
        }),
        //Use provider github
        GitHubProvider({
            clientId: "Ov23liTegvuRJM67NSrN",
            clientSecret: "36465775a54078c945ed4fa00b74b54c25ffe501",
        })
    ],
    //For callback
    callbacks: {
        //Callback JWT
        async jwt ({ token, user, profile, account } : any ) {
            if (account?.provider === "credentials") {
                token.fullname = user.fullname
                token.email = user.email
                token.role = user.role
            }
            return token
        },
    //Callback Session
    async session ({ session, token } : any) {
      if ("email" in token) {
        session.user.email = token.email
      }
      if ("fullname" in token) {
        session.user.fullname = token.fullname
    }
    if ("role" in token) {
        session.user.role = token.role
    }
      return session
    },
    },
    pages: {
        signIn: "/login"
    }
}