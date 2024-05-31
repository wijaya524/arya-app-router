import { NextResponse, NextRequest } from "next/server";
import {  retrievebestData } from "@/app/library/firebase/service";



//Logic for get product
export async function GET(request: NextRequest) {

      //Logic for get data best seller
      const bestProduct = await retrievebestData("bestseller");

      return NextResponse.json({
       status: 200,
       message: "Success",
       data: bestProduct
      })
}


