import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { Link } from "react-router-dom";

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="flex items-center lg:justify-around max-lg:justify-between max-lg:mx-6 lg:mx-10 font-epilogue">
            <Link to="/">
                <div className="flex items-end justify-end gap-x-2">
                    <img src="./logo.png" alt="Logo" className="w-10" />
                    <h4 className="font-bold text-2xl">IdeaFlux</h4>
                </div>
            </Link>
            <ul className="hidden lg:flex text-md gap-x-24">
                <Link to="/">
                    <li>Home</li>
                </Link>
                <Link to="/about">
                    <li>About</li>
                </Link>
                <Link to="/contact">
                    <li>Contact</li>
                </Link>
            </ul>
            <button className="hidden lg:block border font-bold border-gray-500 rounded-lg px-9 py-3">
                CONTACT
            </button>
            <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden md:flex relative md:items-end border p-3 rounded-lg transition-all duration-300"
            >
                {isMenuOpen ? <ImCross /> : <GiHamburgerMenu />}
            </button>
            {isMenuOpen && (
                <ul className="lg:hidden bg-gray-800 text-white flex flex-col text-md gap-y-6 mt-4 p-8 rounded-md absolute top-14 right-6">
                    <Link to="/about">
                        <li>About</li>
                    </Link>
                    <Link to="/contact">
                        <li>Contact</li>
                    </Link>
                </ul>
            )}
        </nav>
    );
}

export default Navbar;
