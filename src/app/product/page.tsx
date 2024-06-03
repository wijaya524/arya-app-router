import { getData } from "@/service/product";
import Link from "next/link";
import Button from "@mui/material/Button";
import Image from "next/image";

//Default product page
export default async function Page() {
  const products = await getData("http://localhost:3000/api/productAPI");
  console.log(products);

  return (
    <div className=" flex flex-wrap items-center justify-center pt-16 gap-3 w-full ">
      {products.data.length > 0 &&
        products.data.map((product: any) => (
          <div className="card w-[40%] bg-base-100 shadow-xl" key={product.id}>
          <figure className=" p-2"><Image width={100} height={100} className=" w-full object-cover bg-no-repeat rounded-lg" src={product.image} alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title">{product.title}</h2>
            <p>   {product.price.toLocaleString("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  })}</p>
            <div className="card-actions justify-end">
            <Link href={`/product/detail/${product.id}`}>
              <button className="btn btn-primary w-full">Buy Now</button>
            </Link>
            </div>
          </div>
        </div>
        ))}
    </div>
  );
}
