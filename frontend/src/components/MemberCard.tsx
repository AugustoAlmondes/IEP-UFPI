import { useState } from "react";
import { IoTrashOutline } from "react-icons/io5";
import { IoMdLink } from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";
import type { MemberApiData } from "../types/member";

const DEFAULT_AVATAR = "/images/default_user.png";

interface MemberCardProps {
    member: MemberApiData;
    loggedInUserId?: number;
    onDelete: (id: number) => Promise<void>;
}

export default function MemberCard({ member, loggedInUserId, onDelete }: MemberCardProps) {
    const [confirming, setConfirming] = useState(false);
    const [deleting, setDeleting] = useState(false);

    async function handleConfirmDelete() {
        setDeleting(true);
        try {
            await onDelete(member.id);
        } finally {
            setDeleting(false);
            setConfirming(false);
        }
    }

    const avatarSrc = member.profile_image ?? DEFAULT_AVATAR;
    const isSelf = member.user.id === loggedInUserId;
    const isAdmin = member.role === "ADMIN";
    const canDelete = !isSelf && !isAdmin;

    const roleName = member.role === "ADMIN" ? "Administrador" : "Membro";

    return (
        <div className="
            group
            bg-white
            mx-4 sm:mx-8
            mb-3
            flex flex-col sm:flex-row
            items-center
            border border-gray-200
            rounded-xl
            overflow-hidden
            shadow-sm
            hover:shadow-md
            hover:border-pink-300
            transition-all duration-200
        ">
            {/* Avatar */}
            <div className="w-full sm:w-auto shrink-0">
                <img
                    src={avatarSrc}
                    alt={member.name}
                    onError={(e) => { (e.target as HTMLImageElement).src = DEFAULT_AVATAR; }}
                    className="w-full sm:w-[90px] sm:h-[90px] h-40 object-cover"
                />
            </div>

            {/* Info */}
            <div className="flex-1 px-5 py-3 min-w-0">
                <div className="flex items-center gap-3">
                    <p className="text-base font-bold text-gray-800 leading-tight truncate">
                        {member.name}
                    </p>
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${member.role === 'ADMIN'
                            ? 'bg-green-100 text-green-700 border border-green-200'
                            : 'bg-gray-100 text-gray-600 border border-gray-200'
                        }`}>
                        {roleName}
                    </span>
                </div>
                <div className="flex items-center gap-1.5 mt-1 text-gray-500 text-sm truncate">
                    <MdOutlineMail className="shrink-0 text-pink-400" size={14} />
                    <span className="truncate">{member.user.email}</span>
                </div>
                {member.curriculum && (
                    <a
                        href={member.curriculum}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex w-max items-center gap-1.5 mt-1 text-pink-500 hover:text-pink-700 text-sm truncate transition-colors"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <IoMdLink className="shrink-0" size={14} />
                        <span className="truncate">{member.curriculum}</span>
                    </a>
                )}
            </div>

            {/* Ações */}
            <div className="shrink-0 px-5 py-3 flex items-center">
                {canDelete && (
                    !confirming ? (
                        <button
                            onClick={() => setConfirming(true)}
                            title="Remover membro"
                            className="
                                p-2 rounded-lg cursor-pointer
                                text-red-500 bg-red-50 
                                hover:bg-red-100 hover:text-red-700
                                active:scale-95
                                transition-all duration-150
                            "
                        >
                            <IoTrashOutline size={20} />
                        </button>
                    ) : (
                        <div className="flex items-center gap-2 animate-fade-in">
                            <span className="text-sm text-gray-600 whitespace-nowrap">Remover?</span>
                            <button
                                onClick={handleConfirmDelete}
                                disabled={deleting}
                                className="
                                    px-3 py-1 rounded-md text-xs font-semibold
                                    bg-red-500 text-white cursor-pointer
                                    hover:bg-red-600 disabled:opacity-60
                                    transition-colors
                                "
                            >
                                {deleting ? "..." : "Sim"}
                            </button>
                            <button
                                onClick={() => setConfirming(false)}
                                disabled={deleting}
                                className="
                                    px-3 py-1 rounded-md text-xs font-semibold
                                    bg-gray-100 text-gray-600 cursor-pointer
                                    hover:bg-gray-200 disabled:opacity-60
                                    transition-colors
                                "
                            >
                                Não
                            </button>
                        </div>
                    )
                )}
            </div>
        </div>
    );
}
