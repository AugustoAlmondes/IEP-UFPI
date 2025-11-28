// import './Footer.module.css';
// import styles from './Footer.module.css';
import Logo from '../assets/width_766.webp';
import {
    AiFillFacebook,
    AiFillInstagram,
    AiFillLinkedin
} from "react-icons/ai";
import { navItems } from '../constants/navitems';
import { contactItems } from '../constants/contactItems';

export default function Footer() {
    return (
        <footer className="bg-darkgray text-white grid-cols-[1fr_1fr_1fr_1fr] gap-5 items-center grid py-10 px-15 flex-col">
            <div>
                {/* Coluna 1 */}
                <div className='flex items-center gap-4 mb-10'>
                    <img className='w-20' src={Logo} />
                    <div>
                        <h3 className='text-2xl font-bold'>IEP/UFPI</h3>
                        <p>Instituto de Economia Política</p>
                        <p>Universidade Federal do Piauí</p>
                    </div>

                </div>
                <div>
                    <h3 className='text-pink'>Redes Sociais</h3>
                    <nav>
                        <ul className='list-none flex gap-10 mt-5'>
                            <li className="p-2 bg-white text-darkgray rounded-full hover:text-white hover:bg-darkpink transition-colors duration-200 cursor-pointer"><AiFillInstagram size={20} /></li>
                            <li className="p-2 bg-white text-darkgray rounded-full hover:text-white hover:bg-darkpink transition-colors duration-200 cursor-pointer"><AiFillFacebook size={20} /></li>
                            <li className="p-2 bg-white text-darkgray rounded-full hover:text-white hover:bg-darkpink transition-colors duration-200 cursor-pointer"><AiFillLinkedin size={20} /></li>
                        </ul>
                    </nav>
                </div>
            </div>

            <div>
                {/* Coluna 2 */}
                <h3 className='text-pink'>Atalhos</h3>
                <nav>
                    <ul className='list-none flex flex-col gap-3 mt-5 justify-start'>
                        {
                            navItems.map((item, index) => (
                                <li
                                    key={index}
                                >
                                    <a href={item.href} className='hover:text-pink transition-colors duration-200'>{item.label}</a>
                                </li>
                            ))
                        }
                    </ul>
                </nav>
            </div>

            <div className="h-full">
                {/* Coluna 3 */}
                <h3 className="text-pink">Endereços</h3>

                <ul className="list-none flex flex-col gap-3 mt-5 justify-start mr-10">
                    {contactItems.map((item, index) => (
                        <li key={index} className="flex items-center gap-2 text-pink">
                            {item.icon}
                            <p className="text-white">{item.label}</p>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="h-full">
                {/* Coluna 4 */}
                <h3 className="text-pink">Patrocínios</h3>
                <div className="flex flex-wrap gap-3 mt-5 justify-start">
                    <img className="w-20" src={Logo} />
                    <img className="w-20" src={Logo} />
                    <img className="w-20" src={Logo} />
                </div>
            </div>
        </footer>
    );
}