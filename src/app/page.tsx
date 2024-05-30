
import BSeller from "@/components/core/bSeller/page";
import Landing from "@/components/core/headLanding/page";
import Hero from "@/components/core/hero/page";


//Home page or landing page
export default async function Home() {

  return (
    <main className="flex  flex-col items-center justify-between ">
      <Landing/>
      <Hero/>
      <BSeller/>
      <h1>haha</h1>
    </main>
  );
}
