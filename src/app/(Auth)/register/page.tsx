"use client"

import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import FullWidthTextField from "./Input";
import InputAdornments from "./password";
import BasicButtons from "./button";
import Link from "next/link"
export default function Login() {
   
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
        <div className="flex justify-center items-center h-screen ">
          <form action="" className=" bg-slate-900 w-2/4 max-w-full px-5 py-5 rounded-xl border-2 border-blue-600 shadow-md shadow-blue-900">
            <h1 className=" text-white py-3 text-3xl font-bold text-center">Register</h1>
            <FullWidthTextField type="email" label="Email" />
            <FullWidthTextField type="text" label="Username"/>
            <InputAdornments/>
            <BasicButtons text="SIGN up"/>
            <p className=" text-center"> have an account? <Link href="/login" className="font-semibold">Login</Link></p>
          </form>
        </div>
      </Container>
    </React.Fragment>
  );
}
