import Image from "next/image";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const Landing = () => {
  return (
    <div className="  image object-contain flex flex-wrap items-center justify-center mt-0 gap-10 w-full max-w-full min-w-96 ">
      <Image
        width={500}
        height={0}
        className=" w-full object-cover pt-16 "
        src="/burger1.jpg"
        alt="burger"
        style={{
          maxWidth: "100%",
          height: "auto"
        }}></Image>

      <div className=" absolute left-2 flex flex-col ">
        <div className={poppins.className}>
          <h1 className=" text-2xl z-10 left-0 top-40 font-bold drop-shadow-xl"><span className="text-orange-500">Enjoy</span> Our</h1>
          <h1 className=" text-2xl z-10 left-0 top-40 font-bold ">
            Delicious Meal
          </h1>
          <p className=" text-[10px]">Arya Restaurant, since 2022</p>
        </div>
      </div>
    </div>
  );
};

export default Landing;
