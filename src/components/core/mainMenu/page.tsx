import Image from "next/image";

export default function MainMenu() {
    return (
        <div className="w-full flex flex-col items-center justify-center py-5 bg-[url('/wallpaper.jpg')] bg-cover bg-no-repeat">
         <h4 className=" text-sm py-3 font-semibold">Best Menu</h4>
         <div className=" w-[95%] grid grid-cols-2 gap-3 ">
            <div  className=" w-[100%] bg-gray-900 rounded-lg " >
               <Image src="/food.jpg" alt="burger" width={300} height={400} className=" w-56 object-contain bg-no-repeat rounded-xl p-1"/>
               <h1 className=" top-2 px-2 py-1 text-white text-[10px] font-bold">Wagyu A5</h1>
               <button className="bg-yellow-500 w-full text-white text-[8px] py-1 px-4 rounded">View </button>
            </div>
            <div  className=" w-[100%] bg-gray-900 rounded-lg " >
               <Image src="/juice.jpg" alt="burger" width={300} height={400} className=" w-56 object-contain bg-no-repeat rounded-xl p-1 "/>
               <h1 className=" top-2 px-2 py-1 text-white text-[10px] font-bold">Indonesian Juice</h1>
               <button className="bg-yellow-500 w-full text-white text-[8px] py-1 px-4 rounded">View </button>
            </div>
            <div  className=" w-[100%] bg-gray-900 rounded-lg " >
               <Image src="/salad.jpg" alt="burger" width={300} height={400} className=" w-56 object-contain bg-no-repeat rounded-xl p-1"/>
               <h1 className=" top-2 px-2 py-1 text-white text-[10px] font-bold">Salads</h1>
               <button className="bg-yellow-500 w-full text-white text-[8px] py-1 px-4 rounded">View</button>
            </div>
            <div  className=" w-[100%] bg-gray-900 rounded-lg " >
               <Image src="/dessertt.jpg" alt="burger" width={300} height={400} className=" w-56 object-contain bg-no-repeat rounded-xl p-1"/>
               <h1 className=" top-2 px-2 py-1 text-white text-[10px] font-bold"> Belgian Desserts</h1>
               <button className="bg-yellow-500 w-full text-white text-[8px] py-1 px-4 rounded">View </button>
            </div>
         </div>
        </div>
    );
}