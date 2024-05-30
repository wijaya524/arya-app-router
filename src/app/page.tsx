
import Landing from "@/components/core/headLanding/page";
import Hero from "@/components/core/hero/page";


//Home page or landing page
export default async function Home() {

  return (
    <main className="flex  flex-col items-center justify-between ">
      <Landing/>
      <Hero/>
      <h1>haha</h1>
    </main>
  );
}
