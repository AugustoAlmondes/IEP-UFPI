import type { Sponsors } from "../types/sponsors";
import { IoTrashOutline } from "react-icons/io5";

export default function SponsorCard({ sponsor }: { sponsor: Sponsors }) {
    return (
        <div className="
        bg-gray2 
        mx-4 sm:mx-8 
        mb-6 
        flex flex-col sm:flex-row 
        items-start sm:items-center 
        border border-gray 
        rounded-md 
        px-4 py-4 
        hover:border-pink-500
        transition
    ">
            {/* Imagem */}
            <div className="w-full sm:w-[130px] flex justify-center sm:justify-start mb-4 sm:mb-0">
                <div className="w-[100px] h-[100px] sm:w-[130px] sm:h-[130px]">
                    <img
                        src={sponsor.imageUrl}
                        alt={sponsor.name}
                        className="w-full h-full object-cover rounded-md"
                    />
                </div>
            </div>

            {/* Informações */}
            <div className="
        sm:ml-5 
        grid 
        grid-cols-1 sm:grid-cols-3 
        gap-y-4 sm:gap-x-4 
        w-full
        ">
                <div>
                    <p className="text-sm text-gray-400">Nome do Patrocinador</p>
                    <p className="text-base font-bold">{sponsor.name}</p>
                </div>
            </div>

            {/* Ações */}
            <div className="
        w-full sm:w-auto 
        flex justify-end 
        mt-4 sm:mt-0 
        sm:ml-auto">
                <IoTrashOutline
                    className="text-pink cursor-pointer hover:text-darkpink transition"
                    size={28}
                />
            </div>
        </div>
    );
}
