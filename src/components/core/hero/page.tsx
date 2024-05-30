import Image from "next/image";
export default function Hero() {
    return (
        <div className="hero w-full">
            <div className="hero-content text-center w-full">
                <Image
                 src="/wallpaper.jpg"
                 alt="wallpaper"
                 width={400}
                 height={400}
                 className=" w-full object-contain" 
                 />
                
     
            </div>
        </div>
    );
}       