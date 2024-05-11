import { NextRequest, NextResponse } from "next/server";

const data = [
    {
        id: 1,
        name: "Product 1",
        category : "Category 1"
    },
    {
        id: 2,
        name: "Product 2",
        category : "Category 2"
    }
]

export async function GET(request: NextRequest) {
    const { searchParams } =  new URL(request.url);
    const id = searchParams.get("id")

    if(id){
      const dataProduct =  data.find(product => product.id === Number(id));
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
   return NextResponse.json({
    status: 200,
    message: "Success",
    data
   })
}