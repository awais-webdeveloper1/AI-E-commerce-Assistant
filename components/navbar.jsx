"use client"
import Link from "next/link";

export default function NavBar() {
    return (
        <nav className="fixed w-full flex justify-between items-center px-8 py-4 bg-white">
            <div>
                <Link href="/">
                    <img
                        src="logo-group.png"
                        alt=""
                    />
                </Link>
            </div>
            <div className="flex items-center gap-5">
                <Link href="/">Home</Link>
                <Link href="/">Products</Link>
                <Link href="/">About</Link>
            </div>
            <div className="flex items-center gap-7">
                <div><Link href="/"><img src="/icon-container.png" alt="" /></Link></div>
                <Link href="/"><div className="border rounded-3xl h-10 w-17 flex justify-center items-center">Login</div></Link>
            </div>
        </nav>
    )
}


