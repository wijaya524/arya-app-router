import { NextAuthOptions } from "next-auth";
import CredentialsProviders from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";
import { login } from "../firebase/service";
import { compare } from "bcrypt";


//SetUp NextAuth
export const authOptions: NextAuthOptions = {
    session: {
        strategy: "jwt"
    },
    secret: process.env.SECRET_KEY,
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
            const user: any = await login({email});
            if (user) {
              const passwordConfirm = await compare(password, user.password);
              if (passwordConfirm) {
                return user
              }
              return null
            }else{
                return null
              }
        
        }
        }),
        //Use provider github
        GitHubProvider({
            clientId: process.env.GITHUB_ID || '',
            clientSecret: process.env.GITHUB_SECRET || '',
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