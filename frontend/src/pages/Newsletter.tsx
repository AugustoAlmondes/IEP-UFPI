import { useRef } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

export default function Equipe() {
    return (
        <>
            <div className="bg-white pb-40 pt-30 px-4">
                <h1 className="text-3xl sm:text-4xl text-darkpink font-bold text-center mb-5">
                    BOLETINS
                </h1>
                <h2 className="text-1xl text-center mb-5">
                    Mantenha-se informado com nossos últimos boletins. <br /> Veja as edições mais recentes abaixo.
                </h2>

                <div className="flex justify-center mb-8">
                    <div className="flex w-full max-w-md">
                        <input
                            type="text"
                            placeholder="Pesquisar boletim"
                            className="cursor-pointer w-full px-4 py-2 bg-gray2 text-black placeholder-gray-500 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-gray-400 mr-3"
                        />
                        <button
                            className="cursor-pointer border border-darkgray py-1.5 px-4 rounded-lg hover:bg-darkgray hover:text-white transition-colors duration-300 min-w"
                        >
                            Buscar
                        </button>
                    </div>
                </div>

                {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-4xl mx-auto">
                    {teamMembers.map((member, index) => (
                        <TeamCard key={index} member={member} />
                    ))}
                </div> */}
            </div>
        </>
    );
}