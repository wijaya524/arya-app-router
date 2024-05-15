"use client"
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Profile() {
    const { data: session, status } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (status === "unauthenticated") {
            router.push("/login")
        }
    }, [router, status])
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1>Profile</h1>
        </main>
    );
}