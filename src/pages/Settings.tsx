import { TbPointFilled } from "react-icons/tb";
import { IoIosAddCircle } from "react-icons/io";
import ImageUpload from "../components/ImageUpload";
import MemberCard from "../components/MemberCard";
import { teamMembers } from "../constants/teamMembers";
import { sponsors } from "../constants/sponsors";
import SponsorCard from "../components/SponsorCard";


export default function FormNewsletter() {
    return (
        <div className="bg-white pb-20 pt-24 px-6 sm:px-10 lg:px-30">
            <h2 className="text-3xl sm:text-5xl text-darkpink font-bold text-center mb-10">
                Configurações do site
            </h2>

            {/* FORM MEMBROS */}
            <form className="mx-4 sm:mx-8">
                <section className="mb-10">
                    <div className="flex items-center mb-4">
                        <TbPointFilled className="text-darkpink text-xl mr-2" />
                        <h3 className="text-xl font-bold">Membros</h3>
                    </div>

                    {/* Inputs */}
                    <div className="flex flex-col lg:flex-row gap-4 w-full">
                        <div className="w-full text-sm">
                            <label>Nome Completo</label>
                            <input
                                type="text"
                                placeholder="Digite o nome do membro"
                                required
                                className="w-full text-base placeholder-opacity-18 border border-gray bg-gray2 rounded-md px-4 h-9 focus:outline-none focus:border-pink-500"
                            />
                        </div>

                        <div className="w-full text-sm">
                            <label>Cargo</label>
                            <input
                                type="text"
                                placeholder="Digite o cargo do membro"
                                required
                                className="w-full text-base placeholder-opacity-18 border border-gray bg-gray2 rounded-md px-4 h-9 focus:outline-none focus:border-pink-500"
                            />
                        </div>

                        <div className="w-full text-sm">
                            <label>Link</label>
                            <input
                                type="text"
                                placeholder="Digite o link do membro"
                                className="w-full text-base placeholder-opacity-18 border border-gray bg-gray2 rounded-md px-4 h-9 focus:outline-none focus:border-pink-500"
                            />
                        </div>
                    </div>

                    <div className="mt-4">
                        <label className="text-sm">Foto de perfil</label>
                        <ImageUpload />
                    </div>

                    <div className="flex justify-center sm:justify-end mt-6">
                        <button className="btn-pink">
                            Adicionar membro
                        </button>
                    </div>
                </section>
            </form>

            {/* LISTA DE MEMBROS */}
            <div className="mt-10 space-y-4 px-2 sm:px-0">
                {teamMembers.map((member, index) => (
                    <MemberCard key={index} member={member} />
                ))}
            </div>

            {/* FORM PATROCINADORES */}
            <form className="mx-4 sm:mx-8 mt-14">
                <section className="mb-10">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                            <TbPointFilled className="text-darkpink text-xl mr-2" />
                            <h3 className="text-xl font-bold">Patrocinadores</h3>
                        </div>

                        <IoIosAddCircle
                            className="text-pink cursor-pointer hover:opacity-80 transition"
                            size={28}
                        />
                    </div>

                    <div className="mb-4">
                        <label>Nome</label>
                        <input
                            type="text"
                            placeholder="Digite o nome do patrocinador"
                            required
                            className="w-full text-base placeholder-opacity-18 border border-gray bg-gray2 rounded-md px-4 h-9 focus:outline-none focus:border-pink-500"
                        />
                    </div>

                    <ImageUpload />

                    <div className="flex justify-center sm:justify-end mt-6">
                        <button className="btn-pink">
                            Adicionar Patrocinador
                        </button>
                    </div>

                </section>
            </form>
            
            {/* LISTA DE MEMBROS */}
            <div className="mt-10 space-y-4 px-2 sm:px-0">
                {sponsors.map((sponsor, index) => (
                    <SponsorCard key={index} sponsor={sponsor} />
                ))}
            </div>
        </div>
    );
}
