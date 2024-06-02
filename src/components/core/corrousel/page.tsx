import Image from "next/image";

export default function Corrouselitem() {
  return (
    <>
      <div className="carousel w-[90%]  ">
        <div id="item1" className="carousel-item w-full py-3">
          <Image
            alt="DaisyUI"
            width={200}
            height={100}
            src="/c1.jpg"
            className=" w-full object-contain bg-no-repeat"
          />
        </div>
        <div id="item2" className="carousel-item w-full">
          <Image
            alt="DaisyUI"
            width={200}
            height={100}
            src="/c2.jpg"
            className="w-full object-cover"
          />
        </div>
        <div id="item3" className="carousel-item w-full">
          <Image
            alt="DaisyUI"
            width={200}
            height={100}
            src="/c3.jpg"
            className="w-full object-cover"
          />
        </div>
        <div id="item4" className="carousel-item w-full">
          <Image
            alt="DaisyUI"
            width={200}
            height={100}
            src="/c4.jpg"
            className="w-full object-cover"
          />
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
      </div>
    </>
  );
}
