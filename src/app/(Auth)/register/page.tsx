"use client"

import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import FullWidthTextField from "./Input";
import InputAdornments from "./password";
import BasicButtons from "./button";
import Link from "next/link"
import { useRouter } from "next/navigation";
import { useState } from "react";


//Register page
export default function Register() {
  const {push} = useRouter()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
    const HandleSubmit = async (e: any) => {
      setError("")
      setLoading(true)
        e.preventDefault();
        const res = await fetch("http://localhost:3000/api/auth/register", {
          method: "POST",
          body: JSON.stringify({
            email: e.target.email.value,
            username: e.target.username.value,
            password: e.target.password.value,
          })
        })
         if(res.status == 200){
          e.target.reset()
          push("/login")
          setLoading(false)
         } else {
          setError("Email or username already exists")
          setLoading(false)
         }
        }
    
   

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
        <div className="flex justify-center items-center h-screen ">
          {error !== "" && (<h1 className=" text-yellow-50">{error}</h1>)}
          <form onSubmit={(e) => HandleSubmit(e)} className="bg-slate-900 w-2/4  max-w-full px-5 py-5 rounded-xl border-2 border-blue-600 shadow-md shadow-blue-900">
            <h1 className=" text-white py-3 text-3xl font-bold text-center">Register</h1>
            <FullWidthTextField type="email" label="Email" name="email"/>
            <FullWidthTextField type="text" label="Username" name="username"/>
            <InputAdornments/>
            <BasicButtons text="SIGN up"/>
            <p className=" text-center"> have an account? <Link href="/login" className="font-semibold">Login</Link></p>
          </form>
        </div>
      </Container>
    </React.Fragment>
  );
}
