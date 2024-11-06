import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";

function Home() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="overflow-x-hidden min-h-screen py-4 text-white bg-[#28293E]">
            <nav className="flex items-center lg:justify-around xs:justify-between xs:mx-6 font-epilogue">
                <div className="flex items-end justify-end gap-x-2">
                    <img src="./logo.png" alt="" className="w-10" />
                    <h4 className="font-bold text-2xl">IdeaFlux</h4>
                </div>
                <ul className="hidden lg:flex text-md gap-x-24">
                    <li>About</li>
                    <li>Services</li>
                    <li>Pricing</li>
                    <li>Blog</li>
                </ul>
                <button className="hidden lg:block border font-bold border-[rgb(104,104,119)] rounded-lg px-9 py-3">
                    CONTACT
                </button>
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="lg:hidden md:flex md:items-end border p-3 rounded-lg transition-all duration-300"
                    aria-expanded={isMenuOpen}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <ImCross /> : <GiHamburgerMenu />}
                </button>           
            </nav>
            <main className="flex xs:px-4 xs:flex-col-reverse mt-12 items-center lg:flex-row lg:justify-around ">
                <div className="relative">
                    <p className="text-[#EF6D58] mb-4 tracking-widest">
                        MODERN STUDIO
                    </p>
                    <div>
                    <h1 className="xs:text-5xl md:text-6xl md:w-[8em] font-bold z-20 relative">
                            We're Help To Build Your Dream Project
                        </h1>
                        <img
                            src="./star.png"
                            alt=""
                            className="z-0 absolute top-0 right-5"
                        />
                    </div>
                </div>
                <img src="./hero.png" className="w-min" alt=""/>
            </main>
        </div>
    );
}

export default Home;
