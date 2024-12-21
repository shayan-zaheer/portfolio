"use client";

import Link from "next/link";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flex items-center lg:justify-around max-lg:justify-between max-lg:mx-6 lg:mx-10 font-epilogue">
                <Link href="/">
                    <div className="flex items-end justify-end gap-x-2">
                        <img src="./logo.png" alt="" className="w-10" />
                        <h4 className="font-bold text-2xl">IdeaFlux</h4>
                    </div>
                </Link>
                <ul className="hidden lg:flex text-md gap-x-24">
                    <Link href="#about"><li>About</li></Link>
                    <Link href="#services"><li>Services</li></Link>
                    <li>Pricing</li>
                    <li>Blog</li>
                </ul>
                <button className="hidden lg:block border font-bold border-[rgb(104,104,119)] rounded-lg px-9 py-3">
                    CONTACT
                </button>
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="lg:hidden md:flex relative md:items-end border p-3 rounded-lg transition-all duration-300"
                    aria-expanded={isMenuOpen}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <ImCross /> : <GiHamburgerMenu />}
                </button>
                {isMenuOpen && (
                    <ul className="lg:hidden bg-[#3A3B54] flex flex-col text-md gap-y-6 mt-4 p-8 rounded-md absolute top-14 right-6">
                        <li>About</li>
                        <li>Services</li>
                        <li>Pricing</li>
                        <li>Blog</li>
                    </ul>
                )}
            </nav>
  )
}

export default Navbar