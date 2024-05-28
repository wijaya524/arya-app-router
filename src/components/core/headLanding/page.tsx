import Image from "next/image"

const Landing = () => {
    return(
   <div className=" relative image object-contain flex flex-wrap items-center justify-center mt-0 gap-10 w-full max-w-full min-w-96">
      <Image width={800} height={800} className=" w-full object-cover pt-16 " src="/burger1.jpg" alt="burger">
      </Image>
      <div className=" absolute left-2 flex flex-col">
        <h1 className=" text-2xl z-10 left-0 top-40 ">Enjoy Our</h1>
        <h1 className=" text-2xl z-10 left-0 top-40 ">Delicious Meal</h1>
      </div>
    </div>
    )
}

export default Landing