import { useState } from "react";
import { Link } from "react-router-dom";
import type { Boletins } from "../types/boletins";
import { useAuth } from "../context/AuthContext";
import { FaPen, FaTrash } from "react-icons/fa6";
import { apiFetch } from "../service/api";
import { toast } from "react-toastify";
import boletimDefault from "../assets/images/boletim_default.jpg";

export default function NewsletterCard({ newsletter, index, onDelete }: { newsletter: Boletins, index: number, onDelete?: (id: number) => void }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);

    const createSlug = (title: string) => {
        return title
            .toLowerCase()
            .replace(/ /g, '-')
            .replace(/[^\w-]+/g, '');
    };

    const { isAuthenticated } = useAuth();

    const slug = createSlug(newsletter.title);

    const handleDelete = async () => {
        setIsDeleting(true);
        try {
            await apiFetch(`/boletins/${newsletter.id}`, {
                method: 'DELETE',
            });
            toast.success("Boletim removido com sucesso!");
            if (onDelete) onDelete(newsletter.id);
        } catch (error) {
            console.error('Erro ao deletar boletim:', error);
            toast.error("Erro ao remover o boletim.");
        } finally {
            setIsDeleting(false);
            setIsModalOpen(false);
        }
    };

    return (
        <>
            <div className="max-w-[350px] h-full mb-10 flex justify-between items-start">
                <div className={`flex items-start flex-col`}>
                    <div className="w-[350px] h-[200px] relative">
                        {
                            newsletter.image ? (
                                <img src={newsletter.image} className="w-full h-full object-cover" />
                            ) : (
                                <img src={boletimDefault} className="w-full h-full object-cover" />
                            )
                        }
                        <div className="absolute h-7 w-full bg-darkpink bottom-0" />
                    </div>
                    <h3 className="w-full h-[50px] mt-2 text-md font-bold line-clamp-2">{newsletter.title}</h3>
                    <p className="mb-2 text-sm h-[60px] text-start line-clamp-2">
                        <p
                            className="text-justify line-clamp-3"
                            dangerouslySetInnerHTML={{ __html: newsletter.content }}
                        />
                    </p>
                    <div className="flex items-center justify-between w-full">
                        <Link
                            to={`/info-newsletter/${index + 1}/${slug}`}
                            state={{ newsletter, index }}
                            className="btn-pink text-white text-center mt-4"
                        >
                            Saiba mais
                        </Link>
                        {
                            isAuthenticated && (
                                <div className="flex gap-2 items-center mt-4">
                                    <Link to={`/form-newsletter/${newsletter.id}`} className="block">
                                        <FaPen size={30} className="text-white cursor-pointer bg-darkpink p-2 rounded-full hover:bg-pink transition" />
                                    </Link>
                                    <button onClick={() => setIsModalOpen(true)} className="block">
                                        <FaTrash size={30} className="text-white cursor-pointer bg-darkpink p-2 rounded-full hover:bg-pink transition" />
                                    </button>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-lg p-6 max-w-sm w-full shadow-lg">
                        <h3 className="text-xl font-bold mb-4 text-gray-800">Confirmar exclusão</h3>
                        <p className="text-gray-600 mb-6">Tem certeza que deseja remover o boletim "{newsletter.title}"? Esta ação não pode ser desfeita.</p>
                        <div className="flex justify-end gap-3">
                            <button 
                                onClick={() => setIsModalOpen(false)}
                                className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition cursor-pointer"
                                disabled={isDeleting}
                            >
                                Cancelar
                            </button>
                            <button 
                                onClick={handleDelete}
                                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition cursor-pointer"
                                disabled={isDeleting}
                            >
                                {isDeleting ? "Removendo..." : "Remover"}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}