import Link from "next/link";



export default function Navbardefault() {
 
  return (
   <nav className="hidden w-full lg:flex justify-between p-4">
    <h1> Navbar</h1>
    <div className="flex gap-5">
      <Link href="/">Home</Link>
      <Link href="/product">Menu</Link>
      <Link href="/profile">Profile</Link>
      <Link href="/about">About</Link>
    </div>
   </nav>
  );
}
