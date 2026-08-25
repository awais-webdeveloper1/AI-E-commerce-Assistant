"use client"
import Link from "next/link";
import Logo from "../public/logo-group.png"


export default function Footer(){
    return(
        <footer className="flex justify-between">
            <div><Link href="/"><img src="logo-group.png" alt="" /></Link></div>
            <div><p>© 2026 ShopGenie AI Inc. All rights reserved.</p></div>
        </footer>
    )
}