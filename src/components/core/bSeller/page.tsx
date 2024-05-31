import { json } from "stream/consumers";
import { Button } from "@mui/material";

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
    <div className=" flex flex-col border rounded-lg bg-red-700 ">
    <h1 className="  font-bold text-center py-5">Best Menu</h1>
     <div className=" flex flex-wrap items-center justify-center gap-10 ">
      {bestData.data.length &&
        bestData.data.map((item: any) => (
          <div key={item.id} className=" w-[40%] max-w-sm bg-slate-800 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <img
              className=" p-3 rounded-t-lg object-cover w-full "
              src={item.image}
              alt="product image"
            />
            <div className="px-3 pb-5">
              <h5 className=" font-semibold text-[10px] tracking-tight text-white dark:text-white">
                {item.title}
              </h5>
              <div className="grid  gap-3">
                <span className=" text-[7px] text-white dark:text-white">
                  {item.price.toLocaleString("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  })}
                </span>
                  <button className=" bg-sky-700 text-white text-[10px] py-1 px-4 rounded w-full">Detail</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </>
  );
}
