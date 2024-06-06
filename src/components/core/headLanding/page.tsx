import Image from "next/image";
import { Poppins } from "next/font/google";
import ButtonContrast from "@/components/fragments/button/page";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const Landing = () => {
  return (
    <div className=" w-full  bg-[url('/bg.jpg')] bg-no-repeat bg-cover flex items-center justify-center py-10">
      <div className=" px-3 mt-16 py-5 font-bold flex w-[90%] h-[90%] bg-gray-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 items-center justify-between lg:justify-around">
        <div className=" h-full w-[50%]   ">
          <h1 className="poppins md:text-3xl lg:text-5xl"> Enjoy Our</h1>
          <h1 className="poppins  md:text-3xl lg:text-5xl">Delicious Meal</h1>
          <p className=" text-[7px] py-2  md:text-[12px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora </p>
          <div className=" w-[50%]">
          <ButtonContrast text="Explore"/>
          </div>
        </div>
        <aside>
          <Image
            src="/beef.png"
            alt="landing"
            width={300}
            height={400}
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              (max-width: 1920px) 30vw,
              33vw"
            className=" w-56 object-contain bg-no-repeat md:w-[400px] md:h-w-[800px]"
          />
        </aside>
      </div>
    </div>
  );
};

export default Landing;
