import { NextRequest, NextResponse } from "next/server";
import { register } from "@/app/library/firebase/service";

export async function POST(request: NextRequest) {
    const req = await request.json()
    await register(req, ({status, message} : {status: boolean, message: string}) => {
       if (status) {
        return NextResponse.json({ status, message}, {status: 200})
    }else {
        return NextResponse.json({ status, message}, {status: 400})
    }
  })
 }