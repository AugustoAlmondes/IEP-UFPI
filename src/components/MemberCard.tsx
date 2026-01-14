import type { TeamMember } from "../types/teamMember";
import { IoTrashOutline } from "react-icons/io5";


export default function TeamCard({ member }: { member: TeamMember }) {
    return (
        <>
            <div className="bg-gray2 mx-8 mb-8 h-30 flex items-center text-base placeholder-opacity-18 border-1 border-gray rounded-md px-4 hover:outline-none hover:border-pink-500">
                <div className="w-[130px] h-[130px] relative p-4">
                    <img src={member.imageUrl} alt="Augusto Almondes" />
                </div>

                <div className="ml-5 grid grid-cols-3 gap-x-4 items-center">
                    <div className="w-80">
                        <p className="text-sm">Nome Completo</p>
                        <p className="text-base font-bold">{member.name}</p>
                    </div>

                    <div>
                        <p className="text-sm">Cargo</p>
                        <p className="text-base font-bold">{member.position}</p>
                    </div>

                    <div>
                        <p className="text-sm">Link</p>
                        <p className="text-base font-bold">
                            {member.url ? member.url : "Não informado"}
                        </p>
                    </div>  

                </div>
                    <div className="justify-end align-center ml-auto mr-4">
                        <IoTrashOutline className="text-pink cursor-pointer hover:darkpink" size={28} />
                    </div>
            </div>
        </>
    );
}