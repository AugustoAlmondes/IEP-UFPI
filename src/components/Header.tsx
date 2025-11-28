// import './Header.module.css';
// import styles from './Header.module.css';
import Logo from "../assets/width_766.webp";
import { navItems } from "../constants/navitems";
export default function Header() {
    return (
        <div className="bg-darkgray h-20 flex justify-between w-full px-10 items-center fixed z-10">
            <img
                className="h-15"
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
        </div>
    );
}