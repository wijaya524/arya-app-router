import { getData } from "@/service/product";
import Link from "next/link";
import Image from "next/image";

//Default product page
export default async function Page() {
  const products = await getData("http://localhost:3000/api/productAPI");
  console.log(products);

  return (
    <div className=" flex flex-wrap items-center justify-center pt-16  w-full">
      {products.data.length > 0 &&
        products.data.map((product: any) => (
          <div className="card w-[50%]  shadow-xl " key={product.id}>
          <Link href={`/product/detail/${product.id}`} >
             <Image width={100} height={200} className=" w-full h-[50%] object-cover bg-no-repeat rounded-2xl p-2 HOVER " src={product.image} alt="Shoes" />   
            </Link>
            <div className=" flex justify-center">
            <h2 className="card-title text-[15px] px-4">{product.title}</h2> 
            </div>
        </div>
        ))}
    </div>
  );
}
