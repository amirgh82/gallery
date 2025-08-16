"use client";

import Link from "next/link";
import { NavbarMobile } from "./NavbarMobile";
import { NavbarDesktop } from "./NavbarDesktop";

export function Navbar() {
    return (
        <header className="border-b">
            <div className=" mx-auto flex h-16 items-center justify-between ">
                {/* Mobile */}
                <NavbarMobile />

                {/* Logo */}
                <Link
                    href="/"
                    className="hidden md:flex text-2xl font-extrabold tracking-tight text-primary flex-1 text-center md:text-left md:flex-none"
                >
                    گالری ابوتراب
                </Link>

                {/* Desktop */}

                <NavbarDesktop />
            </div>
        </header>
    );
}
