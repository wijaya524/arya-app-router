import { json } from "stream/consumers";
import { Button } from "@mui/material";
import Image from "next/image";

async function getData() {
  const res = await fetch("http://localhost:3000/api/bestProductApi");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Page() {
  const bestData = await getData();
  console.log(bestData);
  return (
    <>
      <div className=" flex flex-col  rounded-lg bg-[url('/wallpaper.jpg')] ">
        <h1 className="  font-bold text-center py-5">Best Menu</h1>
        <div className=" flex flex-wrap items-center justify-center gap-5 ">
          {bestData.data.length &&
            bestData.data.map((item: any) => (
              <div
                className=" w-[35%]  rounded-lg shadow dark:bg-gray-800 "
                key={item.id}
              >
                <img
              
                  className=" m-auto p-1 rounded-t-lg object-contain w-32 h-32"
                  src={item.image}
                  alt="product image"
                />

                <div className=" px-2 pb-5 ">
                  <h5 className="text-[10px] text-left font-semibold tracking-tight text-white dark:text-white">
                    {item.title}
                  </h5>
                  <div className="grid gap-3">
                    <span className="text-[5px] font-bold text-white dark:text-white">
                      {item.price.toLocaleString("id-ID", {
                        style: "currency",
                        currency: "IDR",
                      })}
                    </span>
                    <button className="bg-yellow-500 w-[100%] border text-white text-[10px]   rounded">
                      Add
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
