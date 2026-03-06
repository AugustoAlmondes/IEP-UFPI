// import './TeamCard.module.css';
// import styles from './TeamCard.module.css';

import type { MemberApiData } from "../types/member";

export default function TeamCard({ member }: { member: MemberApiData }) {
    return (
        <>
            <div className="w-full h-full flex justify-center items-center">
                <div className={`flex h-full flex-col gap-1 justify-between`}>
                    <div>

                    <div className="w-[200px] h-[200px] relative">
                        <img className="w-full h-full object-cover" src={member.profile_image || "/images/default_user.png"} alt={member.name} />
                        <div className="absolute h-7 w-full bg-darkpink bottom-0" />
                    </div>
                        <h3 className="w-[200px] mt-2 text-lg font-bold leading-tight">{member.name}</h3>
                        <p className="mb-2 text-sm text-gray-600 break-all w-[200px]">{member.user.email}</p>
                    </div>
                    {member.curriculum && (
                        <a
                            href={member.curriculum}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-pink text-white text-center w-auto"
                        >
                            Ver perfil
                        </a>
                    )}
                </div>
            </div>
        </>
    );
}