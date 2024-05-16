"use client"
import { push } from "firebase/database";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Profile() {
    const { data: session, status } : {data: any, status: string} = useSession();
    const router = useRouter();
    console.log(session)
    console.log(status)

    useEffect(() => {
        if (status === "unauthenticated" ) {
            signIn()
        }else {
           if(session !== undefined || session?.user.role === "admin"){       
                   router.push("/")
            } 
          router.push("/Profile")
        }
    }, [router, session, session?.user.role, status])
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1>Profile</h1>
        </main>
    );
}