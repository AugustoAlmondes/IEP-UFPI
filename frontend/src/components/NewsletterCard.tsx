import { Link } from "react-router-dom";
import type { Newsletter } from "../types/newsletter";

export default function NewsletterCard({ newsletter, index }: { newsletter: Newsletter, index: number }) {
    // Função para criar um slug a partir do título
    const createSlug = (title: string) => {
        return title
            .toLowerCase()
            .replace(/ /g, '-')
            .replace(/[^\w-]+/g, '');
    };

    const slug = createSlug(newsletter.title);

    return (
        <>
            <div className="w-full h-full flex justify-center items-start">
                <div className={`flex items-start flex-col`}>
                    <div className="w-[300px] h-[200px] relative">
                        <img src={newsletter.imageUrl} alt={newsletter.caption} className="w-full h-full object-cover" />
                        <div className="absolute h-7 w-full bg-darkpink bottom-0" />
                    </div>
                    <h3 className="w-full mt-2 text-md font-bold">{newsletter.title}</h3>
                    <p className="mb-2 text-sm h-12 overflow-hidden">
                        {newsletter.text[0].substring(0, 70)}...
                    </p>
                    <Link
                        to={`/info-newsletter/${index + 1}/${slug}`}
                        state={{newsletter, index}}
                        className="btn-pink text-white text-center"
                    >
                        Saiba mais
                    </Link>
                </div>
            </div>
        </>
    );
}