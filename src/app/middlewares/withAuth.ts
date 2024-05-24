import { getToken } from "next-auth/jwt";
import { NextFetchEvent, NextMiddleware, NextRequest } from "next/server";

export default function withAuth(
    middlewares: NextMiddleware,
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
            secret 
         });
        }
    }
}