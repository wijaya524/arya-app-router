
import BSeller from "@/components/core/bSeller/page";
import Landing from "@/components/core/headLanding/page";
import Hero from "@/components/core/hero/page";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});


//Home page or landing page
export default async function Home() {

  return (
    <main className="flex items-center justify-center  flex-col">
      <Landing/>
      <Hero/>
      <BSeller/>
      <h1>haha</h1>
    </main>
  );
}
