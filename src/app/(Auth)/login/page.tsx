"use client"

import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import FullWidthTextField from "./Input";
import PasswordInput from "./password";
import Link from "next/link"
import BasicButtons from "./button";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import GitHubIcon from '@mui/icons-material/GitHub'



//Login page
export default function Login({searchParams}: any) {
   console.log("🚀 ~ Login ~ searchParams:", searchParams)
   console.log(searchParams)
   const { push } = useRouter()

   //Logic when submit
  const HandleSubmit = async (e: any) => {
    e.preventDefault();
    try{
      const res = await  signIn("credentials", {
        email: e.target.email.value,
        password: e.target.password.value,
        redirect: false,
        callbackUrl: "/login"
      })
      if(!res?.error) {  
        push("/product")
      } else {
        console.log(res.error)
      }
    } catch(err) {
      console.log(err)
    }
  } 
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
        <div className="flex justify-center items-center h-screen w-full ">
          <form onSubmit={HandleSubmit} className=" bg-slate-900   max-w-full px-5 py-5 rounded-xl border-2 border-blue-600 shadow-md shadow-blue-900">
            <h1 className=" text-white py-3 text-3xl font-bold text-center">Login</h1>
            <FullWidthTextField type="email" label="Email" />
            <PasswordInput/>
            <BasicButtons text="SIGN in" />
            <button onClick={() => signIn("github")} className=" bg-slate-950 w-full text-white flex justify-center items-center gap-2  py-2 px-4 border border-slate-300 rounded shadow"><GitHubIcon/> GitHub</button>
            <p className=" text-center py-4">Not have an account? <Link href="/register" className=" font-semibold">Register</Link></p>
          </form>
        </div> 
      </Container>
    </React.Fragment>
  );
}
