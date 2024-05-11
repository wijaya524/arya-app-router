

type ProductPageProps = {
  params: { slug: string[] };
};

async function getData() {
  const res = await fetch("http://localhost:3000/api/productAPI");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Page(props: ProductPageProps) {
  const { params } = props;

  const products = await getData();
  console.log(products)
  return (
    <div className="  grid grid-cols-4 place-items-center mt-20 gap-10">
      { products.data.length > 0 && products.data.map((product : any) => {
         <div key={product.data.id}>
            <h1>{product.title}</h1>
            <img src={product.image} alt="" />
            <h3>{product.price}</h3>
         </div>
      })}
    </div>
    
  );
}
