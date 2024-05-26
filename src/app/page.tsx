import Corrousel from "@/components/core/corrousel/page";



//Home page or landing page
export default async function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Home</h1>
      <Corrousel/>
    </main>
  );
}
