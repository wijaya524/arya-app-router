import { NextRequest, NextResponse } from "next/server";
import { register } from "@/app/library/firebase/service";

export async function POST(request: NextRequest) {
  //Request for register
    const req = await request.json()

    //Import logic for register
    const res =  await register(req)
    
    //Response for register
    return NextResponse.json(
        {status: res.status, message: res.message},
        {status: res.statusCode}
)
  }
 