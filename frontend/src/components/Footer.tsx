import Logo from '../assets/width_766.webp';
import UFPI from '../../public/images/ufpi.jpg'
import {
    AiFillFacebook,
    AiFillInstagram,
    AiFillLinkedin
} from "react-icons/ai";
import { navItems } from '../constants/navitems';

export default function Footer() {
    return (
        <footer className="bg-darkgray text-white grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 py-10 px-6 lg:px-15">

            {/* Coluna 1 */}
            <div>
                <div className="flex items-center gap-4 mb-10">
                    <img className="w-20" src={Logo} />
                    <div>
                        <h3 className="text-2xl font-bold">IEP/UFPI</h3>
                        <p className='text-sm'>Instituto de Economia Política</p>
                        <p className='text-sm'>Universidade Federal do Piauí</p>
                    </div>
                </div>

                <div>
                    <h3 className="text-pink font-semibold">Redes Sociais</h3>
                    <ul className="flex gap-5 mt-5">
                        <li className="p-2 bg-white text-darkgray rounded-full hover:text-white hover:bg-darkpink transition-colors duration-200 cursor-pointer"><AiFillInstagram size={20} /></li>
                        <li className="p-2 bg-white text-darkgray rounded-full hover:text-white hover:bg-darkpink transition-colors duration-200 cursor-pointer"><AiFillFacebook size={20} /></li>
                        <li className="p-2 bg-white text-darkgray rounded-full hover:text-white hover:bg-darkpink transition-colors duration-200 cursor-pointer"><AiFillLinkedin size={20} /></li>
                    </ul>
                </div>
            </div>

            <div>
                <h3 className="text-pink font-semibold">Atalhos</h3>
                <ul className="flex flex-col gap-1 mt-5">
                    {navItems.map((item, index) => (
                        item.label != "Login" &&
                        <li key={index}>
                            <a href={item.href} className="hover:text-pink text-sm transition-colors duration-200">
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            {/* <div>
                <h3 className="text-pink font-semibold">Endereços</h3>
                <ul className="flex flex-col gap-1 mt-5">
                    {contactItems.map((item, index) => (
                        <li key={index} className="flex items-center gap-2 text-pink text-sm">
                            {item.icon}
                            <p className="text-white">{item.label}</p>
                        </li>
                    ))}
                </ul>
            </div> */}

            <div>
                <h3 className="text-pink font-semibold">Patrocínios</h3>
                <div className="flex flex-wrap gap-3 mt-5">
                    <a href="https://ufpi.br/">
                        <img className="w-50" src={UFPI} />
                    </a>
                </div>
            </div>
        </footer>
    );
}
