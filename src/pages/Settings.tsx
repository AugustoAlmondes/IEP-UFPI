import { TbPointFilled } from "react-icons/tb";
import { IoIosAddCircle } from "react-icons/io";
import ImageUpload from "../components/ImageUpload";
import MemberCard from "../components/MemberCard";
import { teamMembers } from "../constants/teamMembers"; // 1. Importe a lista de membros

export default function FormNewsletter() {    
    return (
        <div className="bg-white pb-20 pt-30 px-4">
            <h2 className="text-4xl sm:text-5xl text-darkpink font-bold text-center mb-10">
                Configurações do site
            </h2>

            <form className="mx-8">
                <section className="mb-10">
                    <div className="flex items-center">
                        <TbPointFilled className="text-darkpink text-xl mr-2" />
                        <h3 className="text-xl font-bold">
                            Membros
                        </h3>
                    </div>

                    <div className="flex text-base my-4 w-full gap-6">
                        <div className="w-full">
                            <label>Nome Completo</label>
                            <input 
                            type="text" 
                            placeholder="Digite o nome do membro" 
                            required
                            className="text-base placeholder-opacity-18 w-full border-1 border-[var(--color-gray)] bg-[var(--color-gray2)] rounded-md px-4 h-7 focus:outline-none focus:border-pink-500"/>
                        </div>
                        <div className="w-full">
                            <label>Cargo</label>
                            <input 
                                type="text" 
                                placeholder="Digite o cargo do membro" 
                                required
                                className="text-base placeholder-opacity-18 w-full border-1 border-[var(--color-gray)] bg-[var(--color-gray2)] rounded-md px-4 h-7 focus:outline-none focus:border-pink-500"/>
                        </div>
                        <div className="w-full">
                            <label>Link</label>
                            <input 
                                type="text" 
                                placeholder="Digite o link do membro" 
                                required
                                className="text-base placeholder-opacity-18 w-full border-1 border-[var(--color-gray)] bg-[var(--color-gray2)] rounded-md px-4 h-7 focus:outline-none focus:border-pink-500"/>
                        </div>
                    </div>

                    <ImageUpload />

                    <div className="flex justify-end">
                    <button
                        className="bg-darkpink text-white px-12 py-2 rounded-lg font-medium cursor-pointer hover:opacity-90 transition-colors duration-300"
                    >
                        Adicionar membro
                    </button>
                </div>
                </section>
            </form>

            {/* 2. Mapeie a lista e renderize um card para cada membro */}
            <div className="mt-10 space-y-4">
                {teamMembers.map((member, index) => (
                    <MemberCard key={index} member={member} />
                ))}
            </div>


            <form className="mx-8 mt-10">
                <section className="items-center mb-10">
                    <div className="flex justify-between items-center w-full">
                        <div className="items-center w-full flex">
                            <TbPointFilled className="text-darkpink text-xl mr-2" />
                            <h3 className="text-xl font-bold">
                                Patrocinadores
                            </h3>
                        </div>
                        <div>
                            <IoIosAddCircle className="text-pink cursor-pointer" size={28}/>
                        </div>
                    </div>

                    <div className="text-base my-4">
                        <label>Nome</label>
                        <input 
                            type="text" 
                            placeholder="Digite a nome dos patrocinadores"
                            required
                            className="text-base placeholder-opacity-18 w-full border-1 border-[var(--color-gray)] bg-[var(--color-gray2)] rounded-md px-4 h-7 focus:outline-none focus:border-pink-500"/>
                    </div>

                    <ImageUpload />

                    <div className="flex justify-end">
                        <button
                            className="bg-darkpink text-white px-9 py-2 rounded-lg font-medium cursor-pointer hover:opacity-90 transition-colors duration-300"
                        >
                            Adicionar Patrocinador
                        </button>
                    </div>
                </section>
            </form>
        </div>
    )
}