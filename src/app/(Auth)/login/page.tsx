"use client"

import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import FullWidthTextField from "./Input";
import PasswordInput from "./password";
import Link from "next/link"
import BasicButtons from "./button";
export default function Login() {
   
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
        <div className="flex justify-center items-center h-screen">
          <form action="" className=" bg-slate-900 w-2/4 mb-28 max-w-full px-5 py-5 rounded-xl border-2 border-blue-600 shadow-md shadow-blue-900">
            <h1 className=" text-white py-3 text-3xl font-bold text-center">Login</h1>
            <FullWidthTextField type="email" label="Email" />
            <PasswordInput/>
            <BasicButtons text="SIGN in"/>
            <p className=" text-center">Dont have an account? <Link href="/register" className=" font-semibold">Register</Link></p>
          </form>
        </div> 
      </Container>
    </React.Fragment>
  );
}
