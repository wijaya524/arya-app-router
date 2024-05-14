import { NextResponse, NextRequest } from "next/server";
import { retrieveDataById, retrieveData } from "@/app/library/firebase/service";

const data = [
    {
        id: 1,
         title: "Burger",
         image: "https://www.certifiedirishangus.ie/wp-content/uploads/2019/11/TheUltimateBurgerwBacon_RecipePic.jpg",
         price: 10000
    },
    {
        id: 2,
         title: "Pizza",
         image: "https://tse3.mm.bing.net/th?id=OIP.ODzNVC9vgjSXIHv35FqzMAHaEo&pid=Api&P=0&h=180",
         price: 10000
    },
    {
        id: 3,
         title: "Hot Dog",
         image: "https://tse2.mm.bing.net/th?id=OIP.kyeBTKc6CGGTftB0sB2YQAHaE7&pid=Api&P=0&h=180",
         price: 10000
    },
    {
        id: 4,
         title: "Taco",
         image: "https://tacobell.com.my/wp-content/uploads/2020/09/2-Taco-Supreme.jpg",
         price: 10000
    },
    {
        id: 5,
         title: "Kebab",
         image: "https://tse3.mm.bing.net/th?id=OIP.gMt8j-ZsFyQkXvYk_kG1GgHaFn&pid=Api&P=0&h=180",
         price: 10000
    },
    {
        id: 6,
         title: "Rendang",
         image: "https://4.bp.blogspot.com/-3uPtenut5Zc/V0MOsAJWdvI/AAAAAAAASes/FLGioCXJC10xM9bStlyRQA934Que2zJmQCLcB/s1600/Rendang%2BPadang.jpg",
         price: 10000
    },
    {
        id: 7,
         title: "Ramen",
         image: "https://tse4.mm.bing.net/th?id=OIP.FeIh8txpVVzLJP5lwdVhLwHaF7&pid=Api&P=0&h=180",
         price: 10000
    },
    {
        id: 8,
         title: "Tapokki",
         image: "https://tse2.mm.bing.net/th?id=OIP.jLa_-gP7ZN__m_pbE7cn8AHaFA&pid=Api&P=0&h=180",
         price: 10000
    },
    {
        id: 9,
         title: "Beef Steak",
         image: "https://tse1.mm.bing.net/th?id=OIP.vNwEV9yK5j7JdifFbm3LGQHaE8&pid=Api&P=0&h=180",
         price: 10000
    },
  
]

export async function GET(request: NextRequest) {
   const { searchParams } =  new URL(request.url);
   const id = searchParams.get("id")

   if(id){
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

   const product = await retrieveData("products");

   return NextResponse.json({
    status: 200,
    message: "Success",
    data: product
   })
}