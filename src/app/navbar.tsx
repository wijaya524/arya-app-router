"use client"

import * as React from "react";
import { signIn, signOut } from "next-auth/react";
import Link from "next/link";
import Button from "@mui/material/Button";
import { useSession } from "next-auth/react";

//Navbar Page
export default function Navbar() {
  const { status } : { status: string} = useSession();

  return (
    <nav className="  w-full max-w-full flex py-3 px-5 bg-slate-600 justify-between items-center">
      <h1>Navbar</h1>
      <div className="flex items-center justify-between px-4 gap-5"> 
        <ul className="flex justify-around gap-5">
          <Link href={"/"}>
            <li>Home</li>
          </Link>
          <Link href={"/product"}>
            <li>Menu</li>
          </Link>
          <Link href={"/profile"}>
            <li>Profile</li>
          </Link>
          <Link href={"/about"}>
            <li>About</li>
          </Link>
        </ul>
        {status === "authenticated" ? (       
          <Button
          variant="contained"
          type="submit"
          onClick={() => signOut()}
        >
          Log out
        </Button>
        ) : (
          <Button
          variant="contained"
          type="submit"
          onClick={() => signIn()}
        >
          sign in
        </Button>
        )}

      </div>
    </nav>
  );
}
