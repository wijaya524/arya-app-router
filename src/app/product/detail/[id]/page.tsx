import { getData } from "@/service/product"

export default async function ProductDetail(props: any) {
  const { params } = props
  const product = await getData('https://fakestoreapi.com/products/?id=' + params.id);
  console.log(product)
  return (
    <div className=" container mx-auto my-10">
         <div className=" w-3/6 mx-auto border">
            <h1>{product.data.title}</h1>
         </div>
    </div>
  )
}