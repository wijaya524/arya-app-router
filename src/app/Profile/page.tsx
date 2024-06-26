"use client";

import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

//Profile page
export default function Profile() {
  const { data: session, status }: { data: any; status: string } = useSession();
  const router = useRouter();
  console.log(session);
  console.log(status);

  useEffect(() => {
    if (status === "unauthenticated") {
      signIn();
    }
  }, [router, status]);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Profile</h1>
      <Image
        src={session?.user?.image}
        alt={session?.user?.fullname}
        width={200}
        height={200}
        className=" rounded-full"
      />
      <h1>{session?.user?.email}</h1>
      <h1>{session?.user?.username}</h1>
      <h1>{session?.user?.role}</h1>
    </main>
  );
}
