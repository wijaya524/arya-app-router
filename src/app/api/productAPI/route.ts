import { NextResponse, NextRequest } from "next/server";
import { retrieveDataById, retrieveData, retrievebestData } from "@/app/library/firebase/service";



//Logic for get product
export async function GET(request: NextRequest) {

   //Search parameters in URL 
   const { searchParams } =  new URL(request.url);

   //Get id For parameters url 
   const id = searchParams.get("id")

   //Logic for search id product
   if(id){
    //Access data product id params on database 
     const dataProduct =  await retrieveDataById("products", id);
        if (dataProduct){
            return NextResponse.json({
                status: 200,
                message: "Success",
                data: dataProduct
            })    
        }
    return  NextResponse.json({
        status: 404,
        message: "Not Found",
        data: {}
    })
   }

   //Logic for get all product
   const product = await retrieveData("products");

   return NextResponse.json({
    status: 200,
    message: "Success",
    data: product
   })

      //Logic for get data best seller
      const bestProduct = await retrievebestData("bestseller");

      return NextResponse.json({
       status: 200,
       message: "Success",
       data: bestProduct
      })
}


