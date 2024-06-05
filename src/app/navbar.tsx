"use client"

import * as React from "react";
import { signIn, signOut } from "next-auth/react";
import Link from "next/link";
import Button from "@mui/material/Button";
import { useSession } from "next-auth/react";
import DrawerContentUI from "@/components/core/drawer/page";
import Navbardefault from "@/components/core/navbar/page";

//Navbar Page
export default function Navbar() {
  const { status } : { status: string} = useSession();

  return (
    <nav className="  fixed z-10 max-w-full flex py-3 px-5 justify-between items-center w-full bg-gray-900  
    ">
      <Navbardefault/>
      <DrawerContentUI/>
    </nav>
  );
}
