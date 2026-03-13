import { Link } from "react-router-dom";
import type { Boletins } from "../types/boletins";
import { useAuth } from "../context/AuthContext";
import { FaPen, FaTrash } from "react-icons/fa6";

export default function NewsletterCard({ newsletter, index }: { newsletter: Boletins, index: number }) {
    // Função para criar um slug a partir do título
    const createSlug = (title: string) => {
        return title
            .toLowerCase()
            .replace(/ /g, '-')
            .replace(/[^\w-]+/g, '');
    };

    const { isAuthenticated } = useAuth();

    const slug = createSlug(newsletter.title);

    return (
        <>
            <div className="max-w-[350px] h-full mb-10 flex justify-between items-start">
                <div className={`flex items-start flex-col`}>
                    <div className="w-[350px] h-[200px] relative">
                        {
                            newsletter.image ? (
                                <img src={newsletter.image} className="w-full h-full object-cover" />
                            ) : (
                                <img src="public/images/boletim_default.jpg" className="w-full h-full object-cover" />
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
                                    <FaPen size={30} className="text-white cursor-pointer bg-darkpink p-2 rounded-full hover:bg-pink transition" />
                                    <FaTrash size={30} className="text-white cursor-pointer bg-darkpink p-2 rounded-full hover:bg-pink transition" />
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    );
}