import { getData } from "@/service/product";
import Link from "next/link";
import Button from "@mui/material/Button";
import Image from "next/image";

//Default product page
export default async function Page() {
  const products = await getData("http://localhost:3000/api/productAPI");
  console.log(products);

  return (
    <div className=" flex flex-wrap items-center justify-center pt-16 gap-10 w-full ">
      {products.data.length > 0 &&
        products.data.map((product: any) => (
          <div
            className=" w-[35%] h-[20%] bg-slate-800 border  border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 "
            key={product.id}
          >
            <Image
              className="p-2 rounded-lg object-cover w-full"
              width={100}
              height={100}
              src={product.image}
              alt="product image"
            />

            <section className="px-3 pb-5">
              <h5 className="text-[13px] font-semibold tracking-tight text-white dark:text-white">
                {product.title}
              </h5>
              <div className="grid gap-2">
                <span className="text-[8px] font-bold text-white dark:text-white">
                  {product.price.toLocaleString("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  })}
                </span>
                <Link href={`/product/detail/${product.id}`}>
                  <button className=" w-full bg-blue-700 text-[12px]">View</button>
                </Link>
              </div>
            </section>
          </div>
        ))}
    </div>
  );
}
