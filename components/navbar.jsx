"use client"
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const currentPage = usePathname();

    return (
        <nav className="fixed w-full flex justify-between items-center px-4 lg:px-8 py-4 bg-white">
            <div>
                <Link href="/">
                    <img
                        src="logo-group.png"
                        alt=""
                    />
                </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex justify-center items-center gap-5">
                <Link href="/" className={currentPage === "/" ? "text-indigo-600 font-bold" : "text-gray-600"}>
                    Home
                </Link>
                <Link href="/products" className={currentPage === "/products" ? "text-indigo-600 font-bold" : "text-gray-600"}>
                    Products
                </Link>
                <Link href="/about" className={currentPage === "/about" ? "text-indigo-600 font-bold" : "text-gray-600"}>
                    About
                </Link>
            </div>
            <div className="hidden lg:flex items-center gap-7">
                <div>
                    <Link href="/">
                        <img
                            src="/icon-container.png"
                            alt=""
                        />
                    </Link>
                </div>
                <Link href="/">
                    <div className="border border-gray-400 rounded-3xl h-10 w-18 flex justify-center items-center">Login</div>
                </Link>
            </div>



            {/* Mobile Button Menu */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden text-2xl"
            >
                ☰
            </button>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden flex flex-col absolute top-15 right-0 bg-white w-[50%] h-[70vh] pl-10">
                    <div className="flex flex-col gap-2 font-bold">
                        <Link
                            href="/"
                            className={currentPage === "/" ? "font-bold text-indigo-600" : "text-gray-600"}
                        >
                            Home
                        </Link>
                        <Link
                            href="/products"
                            className={currentPage === "/products" ? "font-bold text-indigo-600" : "text-gray-600"}
                        >
                            Products
                        </Link>
                        <Link
                            href="/about"
                            className={currentPage === "/about" ? "font-bold text-indigo-600" : "text-gray-600"}
                        >
                            About
                        </Link>
                    </div>
                    <div className="flex gap-4 items-center pt-3">
                        <div>
                            <Link href="/">
                                <img
                                    src="/icon-container.png"
                                    alt=""
                                />
                            </Link>
                        </div>
                        <Link href="/">
                            <div className="border border-gray-400 rounded-3xl h-10 w-18 flex justify-center items-center">Login</div>
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    )
}


