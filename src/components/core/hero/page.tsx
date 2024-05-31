import Image from "next/image";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});
export default function Hero() {
  return (
    <div className="poppins w-full max-w-[90%] py-7">
      <div className=" bg-[url('/wallpaper.jpg')] w-full flex items-center justify-around py-5 rounded-xl border">
  
        <div className="  w-36  flex flex-col  drop-shadow-2xl shadow-black ">
          
          <h1 className=" text-sm  font-bold drop-shadow-xl">Local flavour made</h1>
          <p className=" text-[8px] py-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
             
        </div>
        <aside className=" right-3 drop-shadow-2xl shadow-black">
            <Image src="/beef.png" 
            alt="beef" 
            width={300} 
            height={400}
            className=" w-32 object-contain "
            />
        </aside>
      </div>
    </div>
  );
}
