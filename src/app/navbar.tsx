import * as React from "react";
import { signIn } from "next-auth/react";
import Link from "next/link";
import Button from "@mui/material/Button";
export default function Navbar() {
  return (
    <nav className="  w-full max-w-full flex py-5 px-5 bg-slate-600 justify-between items-center">
      <h1>Navbar</h1>
      <div className="flex items-center justify-between px-4 gap-5">
        <ul className="flex justify-around gap-5">
          <Link href={"/"}>
            <li>Home</li>
          </Link>
          <Link href={"/product"}>
            <li>Menu</li>
          </Link>
          <Link href={"/Profile"}>
            <li>Profile</li>
          </Link>
          <Link href={"/about"}>
            <li>About</li>
          </Link>
        </ul>
        <Button variant="contained" type="submit" onClick={() => signIn()}>
          sign in
        </Button>
      </div>
    </nav>
  );
}
