import { NextResponse, NextRequest } from "next/server";

const data = [
    {
        id: 1,
         title: "Product 1",
         image: "https://www.certifiedirishangus.ie/wp-content/uploads/2019/11/TheUltimateBurgerwBacon_RecipePic.jpg",
         price: 10000
    },
    {
        id: 2,
         title: "Product 1",
         image: "https://www.certifiedirishangus.ie/wp-content/uploads/2019/11/TheUltimateBurgerwBacon_RecipePic.jpg",
         price: 10000
    },
    {
        id: 3,
         title: "Product 1",
         image: "https://www.certifiedirishangus.ie/wp-content/uploads/2019/11/TheUltimateBurgerwBacon_RecipePic.jpg",
         price: 10000
    },
    {
        id: 4,
         title: "Product 1",
         image: "https://www.certifiedirishangus.ie/wp-content/uploads/2019/11/TheUltimateBurgerwBacon_RecipePic.jpg",
         price: 10000
    },
    {
        id: 5,
         title: "Product 1",
         image: "https://www.certifiedirishangus.ie/wp-content/uploads/2019/11/TheUltimateBurgerwBacon_RecipePic.jpg",
         price: 10000
    },
    {
        id: 6,
         title: "Product 1",
         image: "https://www.certifiedirishangus.ie/wp-content/uploads/2019/11/TheUltimateBurgerwBacon_RecipePic.jpg",
         price: 10000
    },
  
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