import Link from "next/link"
import { signIn, signOut } from "next-auth/react"
import { useSession } from "next-auth/react";
import Button from "@mui/material/Button";

export default function Navbardefault() {
    const { status } : { status: string} = useSession();
    return(
        <div className="flex items-center justify-between px-4 gap-5 vsm:hidden"> 
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
    )
}