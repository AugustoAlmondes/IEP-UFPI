import { useLocation } from "react-router-dom";
import { TbPointFilled } from "react-icons/tb";
import { FaArrowLeft, FaPen, FaTrash } from "react-icons/fa6";
import { useAuth } from "../context/AuthContext";
import { FaArrowCircleLeft } from "react-icons/fa";

export default function InfoNewslatter() {
    const location = useLocation();
    const { newsletter, index } = location.state || {};
    const { isAuthenticated } = useAuth();

    if (!newsletter) {
        return <div>Boletim não encontrado.</div>;
    }

    return (
        <>
            <div className="bg-white pb-40 pt-30 px-4">
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
                            <h2 className="text-xl font-bold">Boletim Gaep, N. {index + 1}, {newsletter.date}</h2>
                        </div>

                        {
                            isAuthenticated && (
                                <div className="flex gap-2 items-center">
                                    <FaPen size={30} className="text-white cursor-pointer bg-darkpink p-2 rounded-full hover:bg-pink transition" />
                                    <FaTrash size={30} className="text-white cursor-pointer bg-darkpink p-2 rounded-full hover:bg-pink transition" />
                                </div>
                            )
                        }
                    </div>

                </section>

                <section className="mx-4 sm:mx-8">
                    <div className="items-center mb-4">
                        <h3 className="text-lg font-bold">{newsletter.title}</h3>
                        <p>{newsletter.category}</p>
                        <p className="mb-2">Por {newsletter.author}</p>
                    </div>

                    <div className="mb-8 w-full max-w-none prose prose-slate [&_p]:mb-4 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:mb-4 [&_h3]:text-xl [&_h3]:font-bold [&_h3]:mb-3 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:mb-4 [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:mb-4 [&_img]:max-w-full [&_img]:rounded-md [&_img]:shadow-md">
                        {/* Imagem principal do boletim */}
                        {newsletter.image && (
                            <div className="flex flex-col justify-center items-center my-8">
                                <img src={newsletter.image} alt={newsletter.caption || 'Imagem do boletim'} className="max-w-[500px] w-full max-h-[400px] object-cover rounded-md shadow-sm" />
                                {newsletter.caption && (
                                    <p className="text-sm text-gray-500 italic mt-2 text-center">{newsletter.caption}</p>
                                )}
                            </div>
                        )}

                        {/* Conteúdo Rico do Tiptap */}
                        <div
                            className="text-justify"
                            dangerouslySetInnerHTML={{ __html: newsletter.content }}
                        />
                    </div>

                    <div className="items-center mb-4">
                        <p className="font-bold">Referência</p>
                        <p>{newsletter.reference}</p>
                        <p className="font-bold">Revisão e edição</p>
                        <p>{newsletter.review}</p>
                    </div>


                </section>



            </div>
        </>
    );
}