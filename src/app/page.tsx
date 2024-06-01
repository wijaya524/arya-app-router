
import BSeller from "@/components/core/bSeller/page";
import Footer from "@/components/core/footer/page";
import Landing from "@/components/core/headLanding/page";
import MainMenu from "@/components/core/mainMenu/page";

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
      <MainMenu/>
       <Footer/>
    </main>
  );
}
