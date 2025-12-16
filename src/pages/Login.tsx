import { useState } from "react";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { RiKeyFill } from "react-icons/ri";
import Logo from "../assets/width_766.webp"
import { MdEmail } from "react-icons/md";

export default function Login() {

    const [viewPassword, setViewPassword] = useState(true);

    return (
        <div className="
            h-screen 
            bg-[url(Background_Login.png)] 
            bg-cover 
            bg-black/90 
            grid 
            grid-cols-1 
            lg:grid-cols-2
        ">
            {/* Coluna esquerda */}
            <div className="
                hidden 
                lg:flex 
                justify-center 
                items-center 
                gap-5
            ">
                <img className="w-40 h-40" src={Logo} alt="Logo" />
                <div>
                    <h1 className="text-white text-7xl font-bold mb-2">
                        IEP/UFPI
                    </h1>
                    <h3 className="text-white text-2xl font-extralight leading-6">
                        Instituto de Economia Política <br />
                        Universidade Federal do Piauí
                    </h3>
                </div>
            </div>

            {/* Coluna direita (Login) */}
            <div className="
                flex 
                flex-col 
                items-center 
                justify-center 
                px-6
            ">
                <h2 className="
                    text-pink 
                    text-3xl 
                    sm:text-4xl 
                    text-center 
                    font-extrabold 
                    mb-14 
                    sm:mb-15
                ">
                    LOGIN
                </h2>

                {/* Email */}
                <div className="relative mb-10 w-full max-w-xs">
                    <label className="text-white absolute -top-5 left-2 font-light text-sm">
                        Email
                    </label>
                    <MdEmail
                        size={20}
                        className="text-pink absolute bottom-2 -left-7"
                    />
                    <input
                        type="text"
                        className="
                            bg-gray2/35 
                            text-white 
                            border 
                            outline-0 
                            border-pink/40 
                            focus:border-pink/70 
                            px-4 
                            py-1 
                            w-full 
                            rounded-md 
                            placeholder:text-white/40 
                            placeholder:font-extralight
                            placeholder:text-sm
                        "
                        placeholder="Digite seu Email"
                    />
                </div>

                {/* Senha */}
                <div className="relative w-full max-w-xs">
                    <label className="text-white absolute -top-5 left-2 font-light text-sm">
                        Senha
                    </label>

                    <div className="absolute bottom-2 right-3">
                        {viewPassword ? (
                            <IoEyeOff
                                size={17}
                                onClick={() => setViewPassword(false)}
                                className="text-white/60 cursor-pointer"
                            />
                        ) : (
                            <IoEye
                                size={17}
                                onClick={() => setViewPassword(true)}
                                className="text-white/60 cursor-pointer"
                            />
                        )}
                    </div>

                    <RiKeyFill
                        size={20}
                        className="text-pink absolute bottom-2 -left-7"
                    />

                    <input
                        type={viewPassword ? "password" : "text"}
                        className="
                            bg-gray2/35
                            text-white 
                            border 
                            outline-0 
                            border-pink/40 
                            focus:border-pink/70 
                            px-4 
                            py-1 
                            w-full 
                            rounded-md 
                            placeholder:text-white/40 
                            placeholder:font-extralight
                            placeholder:text-sm
                        "
                        placeholder="Digite sua Senha"
                    />
                </div>

                <div className="w-64 h-1 border bg-pink/40 my-10"></div>

                <button className="btn-pink w-full max-w-xs">
                    Entrar
                </button>
            </div>
        </div>
    );
}
