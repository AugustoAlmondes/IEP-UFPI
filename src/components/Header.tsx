// import './Header.module.css';
// import styles from './Header.module.css';
import { useEffect, useState } from "react";
import Logo from "../assets/width_766.webp";
import { navItems } from "../constants/navitems";
export default function Header() {

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header
            className={`${isScrolled ? "h-16 bg-darkgray/70 backdrop-blur-md" : "h-20 bg-darkgray"
                } flex justify-between w-full px-10 items-center fixed z-10 shadow-xl transition-all duration-300`}
        >
            <img
                className="h-13"
                src={Logo}
                alt="logo" />

            <ul className="text-white list-none flex gap-15 items-center mr-8">
                {
                    navItems.map((item, index) => (
                        <li
                            key={index}
                            className="hover:text-pink cursor-pointer transition-colors duration-200"
                        >
                            {item.label}
                        </li>
                    ))}
            </ul>
        </header>
    );
}