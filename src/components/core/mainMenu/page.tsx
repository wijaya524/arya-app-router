import Image from "next/image";

export default function MainMenu() {
    return (
        <div className="w-full flex items-center justify-center py-5">
         <div className=" w-[95%] grid grid-cols-2 gap-3 ">
            <div  className=" w-[100%] relative " >
               <Image src="/burger.jpg" alt="burger" width={300} height={400} className=" w-56 object-contain bg-no-repeat rounded-xl"/>
               <h1 className="absolute top-0 text-white text-[10px] font-bold">Food</h1>
               <button className="bg-yellow-500 w-full text-white text-[10px] py-1 px-4 rounded">View All</button>
            </div>
            <div  className=" w-[100%] relative " >
               <Image src="/drink.jpg" alt="burger" width={300} height={400} className=" w-56 object-cover  bg-no-repeat rounded-xl"/>
               <h1 className="absolute top-0 text-white text-[10px] font-bold">Drinks</h1>
               <button className="bg-yellow-500 w-full text-white text-[10px] py-1 px-4 rounded">View All</button>
            </div>
            <div  className=" w-[100%] relative " >
               <Image src="/burger.jpg" alt="burger" width={300} height={400} className=" w-56 object-contain bg-no-repeat rounded-xl"/>
               <h1 className="absolute top-0 text-white text-[10px] font-bold">Snack</h1>
               <button className="bg-yellow-500 w-full text-white text-[10px] py-1 px-4 rounded">View All</button>
            </div>
            <div  className=" w-[100%] relative " >
               <Image src="/burger.jpg" alt="burger" width={300} height={400} className=" w-56 object-contain bg-no-repeat rounded-xl"/>
               <h1 className="absolute top-0 text-white text-[10px] font-bold">Desert</h1>
               <button className="bg-yellow-500 w-full text-white text-[10px] py-1 px-4 rounded">View All</button>
            </div>
         </div>
        </div>
    );
}