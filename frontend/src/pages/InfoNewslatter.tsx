import { Link, useLocation } from "react-router-dom";
import { TbPointFilled } from "react-icons/tb";
import { FaArrowLeft, FaPen, FaTrash } from "react-icons/fa6";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";
import { apiFetch } from "../service/api";
import { toast } from "react-toastify";

export default function InfoNewslatter({ onDelete }: { onDelete?: (id: number) => void }) {
    const location = useLocation();
    const { newsletter, index } = location.state || {};
    const { isAuthenticated } = useAuth();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);

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

    if (!newsletter) {
        return <div>Boletim não encontrado.</div>;
    }

    return (
        <>
            <div className="bg-white pb-40 pt-30 px-4 min-h-screen">
                <FaArrowLeft
                    size={25}
                    onClick={() => window.history.back()}
                    className="text-darkpink cursor-pointer rounded-full p-1 hover:text-white hover:bg-darkpink transition" />
                <h1 className="text-3xl sm:text-4xl text-darkpink font-bold text-center mb-5">
                    BOLETIM GAEP
                </h1>

                <section className="mx-4 sm:mx-8">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                            <TbPointFilled className="text-darkpink text-xl mr-2" />
                            <h2 className="text-xl font-bold">Boletim Gaep, N. {index + 1}, {newsletter.created_in.replace('-', '/').replace('-', '/').replace("T", " ").split(".")[0]}</h2>
                        </div>

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

                </section>

                <section className="mx-4 sm:mx-8">
                    <div className="items-center mb-4">
                        <h3 className="text-lg font-bold">{newsletter.title}</h3>
                        <p>Tipo: {newsletter.category}</p>
                        <p className="mb-2">Por: <span className="font-bold text-darkpink">{newsletter.writers || 'Autor Desconhecido'}</span></p>
                    </div>

                    <div className="mb-8 w-full max-w-none prose prose-slate [&_p]:mb-4 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:mb-4 [&_h3]:text-xl [&_h3]:font-bold [&_h3]:mb-3 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:mb-4 [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:mb-4 [&_img]:max-w-full [&_img]:rounded-md">
                        {/* Imagem principal do boletim */}

                        <div
                            className="text-justify"
                            dangerouslySetInnerHTML={{ __html: newsletter.content }}
                        />
                        {newsletter.image && (
                            <div className="flex flex-col justify-center items-center my-8">
                                <img src={newsletter.image} alt={newsletter.caption || 'Imagem do boletim'} className="max-w-[500px] w-full max-h-[400px] object-contain" />
                                {newsletter.legend_image && (
                                    <p className="text-sm text-gray-500 italic mt-2 text-center">{newsletter.legend_image}</p>
                                )}
                            </div>
                        )}
                    </div>

                    <div className="items-center mb-4">
                        <p className="font-bold">Referência</p>
                        <p>{newsletter.reference}</p>
                        <p className="font-bold">Revisão e edição</p>
                        <p>{newsletter.proofreader}</p>
                    </div>


                </section>



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