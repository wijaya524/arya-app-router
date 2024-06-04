import Image from "next/image";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const Landing = () => {
  return (
    <div className=" w-full  bg-[url('/bg.jpg')] bg-no-repeat bg-cover flex items-center justify-center py-10">
      <div className=" px-3 mt-16 py-5 font-bold flex w-[90%] h-[90%] bg-gray-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 border-2 border-gray-100 items-center justify-between">
        <div className=" h-full w-[50%]   ">
          <h1 className="poppins md:text-3xl"> Enjoy Our</h1>
          <h1 className="poppins  md:text-3xl">Delicious Meal</h1>
          <p className=" text-[7px] py-2  md:text-[12px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora </p>
          <button className="bg-yellow-500 w-full text-white text-[10px] py-1 px-4 rounded md:text-lg md:mt-5 border">Explore</button>
        </div>
        <aside>
          <Image
            src="/beef.png"
            alt="landing"
            width={300}
            height={400}
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
            className=" w-56 object-contain bg-no-repeat "
          />
        </aside>
      </div>
    </div>
  );
};

export default Landing;
