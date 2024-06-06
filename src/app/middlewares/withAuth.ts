import { getToken } from "next-auth/jwt";
import { NextFetchEvent, NextMiddleware, NextRequest, NextResponse } from "next/server";

export default function withAuth(
    middleware: NextMiddleware,
    requiredAuth: string[] = [],
){
    return async(
         req: NextRequest,
         next: NextFetchEvent

    )=> {
        const  pathname  = req.nextUrl.pathname;

        if(requiredAuth.includes(pathname)){
          const token = await getToken({ 
            req, 
            secret: process.env.SECRET_KEY
         });
         if(!token) {
            const url = new URL("/login", req.url);
            url.searchParams.set("callbackUrl", req.url);
            return NextResponse.redirect(url);
         }
        }
        return middleware(req, next)
    }
}