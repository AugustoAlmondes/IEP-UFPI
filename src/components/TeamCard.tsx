// import './TeamCard.module.css';
// import styles from './TeamCard.module.css';

import type { TeamMember } from "../types/teamMember";

export default function TeamCard({ member }: { member: TeamMember }) {
    return (
        <>
            <div className="w-full h-full flex justify-center items-start">
                <div className={`flex items-start flex-col`}>
                    <div className="w-[250px] h-[250px] relative">
                        <img src={member.imageUrl} alt="Augusto Almondes" />
                        <div className="absolute h-7 w-full bg-darkpink bottom-0" />
                    </div>
                    <h3 className="w-full mt-4 text-xl font-bold">{member.name}</h3>
                    <p className="mb-4">{member.position}</p>
                    <a
                        href={member.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={member.url ? "btn-pink text-white text-center" : "hidden"}
                    >
                        Ver perfil
                    </a>
                </div>
            </div>
        </>
    );
}