"use client"
import Link from "next/link";


export default function Footer(){
    return(
        <footer className="flex flex-col gap-2 lg:flex-row justify-between items-center px-8 py-4 bg-[#0F172A] h-30 lg:h-25 w-full text-white" >
            <div><Link href="/"><img src="logo-group.png" alt="" /></Link></div>
            <div><p>© 2026 ShopGenie AI Inc. All rights reserved.</p></div>
        </footer>
    )
}