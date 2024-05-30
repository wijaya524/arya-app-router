import Image from "next/image";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});
export default function Hero() {
  return (
    <div className={poppins.className}>
      <div className="hero-content text-center w-full ">
        <Image
          src="/wallpaper.jpg"
          alt="wallpaper"
          width={400}
          height={400}
          className=" w-full object-contain"
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
        />
        <div className=" left-8 w-36 absolute drop-shadow-2xl shadow-black">
          
          <h1 className=" text-sm z-10 left-0 top-40 font-bold drop-shadow-xl">Local flavour made</h1>
          <p className=" text-[9px] py-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, quibusdam. Molestiae exercitationem nulla nostrum dolore incidunt aut at obcaecati! Deserunt vitae aliquid dolores esse enim exercitationem ad impedit alias voluptatibus? </p>
             
        </div>
        <aside className="absolute right-3 drop-shadow-2xl shadow-black">
            <Image src="/beef.png" 
            alt="beef" 
            width={400} 
            height={400}
            className=" w-52 object-contain "
            />
        </aside>
      </div>
    </div>
  );
}
