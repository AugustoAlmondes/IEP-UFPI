import { useEffect, useState } from "react";
import Logo from "../assets/width_766.webp";
import { navItems } from "../constants/navitems";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`
                ${isScrolled ? "md:h-16 md:bg-darkgray/70 md:backdrop-blur-md" : "h-20 bg-darkgray"} 
                flex justify-between w-full px-10 items-center fixed z-20 shadow-xl 
                transition-all duration-300
            `}
        >
            {/* Logo */}
            <img className="h-13" src={Logo} alt="logo" />

            {/* Menu Desktop */}
            <ul className="text-white list-none gap-15 items-center mr-8 hidden md:flex text-sm">
                {navItems.map((item, index) => (
                    <li
                        key={index}
                        className="hover:text-pink cursor-pointer transition-colors duration-200"
                    >
                        <Link to={item.href} className="inherit">
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>

            {/* Botão Mobile */}
            <button
                className="md:hidden text-white text-3xl"
                onClick={() => setIsOpen(true)}
            >
                <AiOutlineMenu />
            </button>

            {/* MENU MOBILE */}
            <div
                className={`
                    fixed top-0 right-0 h-full w-64 bg-darkgray shadow-xl 
                    transform ${isOpen ? "translate-x-0" : "translate-x-full"}
                    transition-transform duration-300 z-30
                `}
            >
                <div className="flex justify-between items-center p-5 border-b border-white/10">
                    <h2 className="text-white text-xl font-semibold">Menu</h2>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="text-white text-3xl"
                    >
                        <AiOutlineClose />
                    </button>
                </div>

                <ul className="text-white list-none flex flex-col gap-6 p-6">
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <Link
                                to={item.href}
                                onClick={() => setIsOpen(false)}
                                className="hover:text-pink transition-colors duration-200"
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Overlay atrás do menu */}
            {isOpen && (
                <div
                    onClick={() => setIsOpen(false)}
                    className="fixed inset-0 bg-black/40 backdrop-blur-sm z-10 md:hidden"
                />
            )}
        </header>
    );
}
