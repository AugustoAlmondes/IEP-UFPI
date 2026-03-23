import { useState } from "react";
import { AiOutlineSetting, AiOutlineLogout, AiOutlinePlus } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { GiHamburgerMenu } from "react-icons/gi";

export type Role = "ADMIN" | "ALUNO";

export type MenuItem = {
    label: string;
    icon: React.ReactNode;
    action: () => void;
    roles?: Role[];
};

export default function UserMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const { signOut, user, name } = useAuth();
    const navigate = useNavigate();

    const menuItems: MenuItem[] = [
        {
            label: "Configurações",
            icon: <AiOutlineSetting />,
            action: () => navigate("/settings"),
            roles: ["ADMIN"],
        },
        {
            label: "Novo boletim",
            icon: <AiOutlinePlus />,
            action: () => navigate("/form-newsletter"),
            roles: ["ADMIN"],
        },
        {
            label: "Sair",
            icon: <AiOutlineLogout />,
            action: () => signOut(),
        },
    ];

    const visibleItems = menuItems.filter((item) => {
        if (!item.roles) return true;
        return item.roles.includes(user as Role);
    });

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white flex items-center justify-center text-2xl hover:text-pink transition cursor-pointer"
            >
                <GiHamburgerMenu size={20} />
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-3 w-56 bg-darkgray shadow-xl rounded-lg p-4 text-white z-50">
                    <h2 className="font-semibold text-lg text-pink">
                        Seja bem-vindo!
                    </h2>
                    <p className="mb-4 text-pink">
                        {name}
                    </p>

                    <div className="flex flex-col gap-3">
                        {visibleItems.map((item, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    item.action();
                                    setIsOpen(false);
                                }}
                                className="flex items-center gap-3 text-sm hover:text-pink transition cursor-pointer"
                            >
                                {item.icon}
                                {item.label}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}