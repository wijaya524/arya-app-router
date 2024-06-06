import ButtonContrast from "@/components/fragments/button/page";
import Image from "next/image";

export default function MainMenu() {
  return (
    <div className="w-full flex flex-col items-center justify-center py-5 bg-[url('/wallpaper.jpg')] bg-cover bg-no-repeat">
      <h4 className=" text-sm py-3 font-semibold lg:text-xl">Best Menu</h4>
      <div className=" w-[95%] grid grid-cols-2 gap-3 md:flex  ">
        <div className=" w-[100%] bg-gray-900 rounded-lg p-1 ">
          <Image
            src="/food.jpg"
            alt="burger"
            width={300}
            height={400}
            className=" w-full object-contain bg-no-repeat rounded-xl "
          />
          <h1 className=" top-2 px-2 py-1 text-white text-[10px] font-semibold lg:text-lg">
            Wagyu A5
          </h1>
          <ButtonContrast text="View" />
        </div>
        <div className=" w-[100%] bg-gray-900 rounded-lg p-1">
          <Image
            src="/juice.jpg"
            alt="burger"
            width={300}
            height={400}
            className=" w-full object-contain bg-no-repeat rounded-xl  "
          />
          <h1 className=" top-2 px-2 py-1 text-white text-[10px] font-semibold lg:text-lg">
            Indonesian Juice
          </h1>
          <ButtonContrast text="View" />
        </div>
        <div className=" w-[100%] bg-gray-900 rounded-lg p-1">
          <Image
            src="/salad.jpg"
            alt="burger"
            width={300}
            height={400}
            className=" w-full object-contain bg-no-repeat rounded-xl"
          />
          <h1 className=" top-2 px-2 py-1 text-white text-[10px] font-semibold lg:text-lg">
            Salads
          </h1>
          <ButtonContrast text="View" />
        </div>
        <div className=" w-[100%] bg-gray-900 rounded-lg p-1 ">
          <Image
            src="/dessertt.jpg"
            alt="burger"
            width={300}
            height={400}
            className=" w-full object-contain bg-no-repeat rounded-xl "
          />
          <h1 className=" top-2 px-2 py-1 text-white text-[10px] font-semibold lg:text-lg">
            Belgian Desserts
          </h1>
          <ButtonContrast text="View" />
        </div>
      </div>
     
    </div>
  );
}
