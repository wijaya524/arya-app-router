import { getData } from "@/service/product"
export default async function Page() {
  const products = await getData('http://localhost:3000/api/productAPI')
  console.log(products)
  return(
    <div>
      {products.data.length > 0 && products.data.map((product : any) => (
        <div key={product.id}>
          <h1>{product.title}</h1>
          <img src={product.image} alt="" />
        </div>
      ))}
    </div>
  )
}