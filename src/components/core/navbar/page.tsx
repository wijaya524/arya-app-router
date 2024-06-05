import Link from "next/link";
import { useRouter } from "next/navigation";
import react from "react";

export default function Navbardefault() {
  const router = useRouter();
  const NavLink = [
    { name: "Home", href: "/" },
    { name: "Menu", href: "/product" },
    { name: "Profile", href: "/profile" },
    { name: "About", href: "/about" }, 
    { name: "Contact", href: "/contact" }
  ]

  return (
   <nav className="hidden w-full lg:flex justify-between p-4">
    <h1> Navbar</h1>
    <div className="flex gap-5 ">
      {NavLink.map((link) => (
        <Link
          key={link.name}
          href={link.href}
           className=" relative text-lg w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
        >
          {link.name}
        </Link>
      ))}
    </div>
   </nav>
  );
}
