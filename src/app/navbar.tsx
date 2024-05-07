import Link from "next/link"
export default function Navbar() {
    return(
        <nav className=" fixed w-full flex py-5 px-5 bg-slate-600 justify-between items-center">
            <h1>Navbar</h1>
            <ul className="flex justify-around gap-5">
                <Link href={"/"}><li>Home</li></Link> 
                <Link href={"/Profile"}><li>Profile</li></Link> 
                <Link href={"/about"}><li>About</li></Link> 
            </ul>
        </nav>
    )
}