import Image from "next/image"

const Landing = () => {
    return(
   <div className="  image object-contain flex flex-wrap items-center justify-center mt-0 gap-10 w-full max-w-full min-w-96">
      <Image width={800} height={800} className=" w-full object-cover " src="/burger1.jpg" alt="burger">
      </Image>
      <h1 className=" absolute text-5xl z-10 left-0 top-40 ">Burger</h1>
    </div>
    )
}

export default Landing