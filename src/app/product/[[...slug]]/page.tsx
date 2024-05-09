type ProductPageProps = {
  params: { slug: string[] };
};

async function getData( ) {
  const res = await fetch(" https://fakestoreapi.com/products");
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
  return ( 
    <div>
       {JSON.stringify(products) && products.map((product : any) => (
        <div key={product.id}>
          <h1>{product.title}</h1>
        </div>
       ))}
    </div>
  );
}
