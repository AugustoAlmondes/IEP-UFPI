import { useLocation } from "react-router-dom";
import { TbPointFilled } from "react-icons/tb";

export default function InfoNewslatter() {
    const location = useLocation();
    const { newsletter, index } = location.state || {};

    if (!newsletter) {
        return <div>Boletim não encontrado.</div>;
    }

    return (
        <>
            <div className="bg-white pb-40 pt-30 px-4">
                <h1 className="text-3xl sm:text-4xl text-darkpink font-bold text-center mb-5">
                    BOLETIM GAEP
                </h1>

                <section className="mx-4 sm:mx-8">
                    <div className="flex items-center mb-4">
                        <TbPointFilled className="text-darkpink text-xl mr-2" />
                        <h2 className="text-xl font-bold">Boletim Gaep, N. {index + 1}, {newsletter.date}</h2>
                    </div>

                </section>

                <section className="mx-4 sm:mx-8">
                    <div className="items-center mb-4">
                        <h3 className="text-lg font-bold">{newsletter.title}</h3>
                        <p>{newsletter.category}</p>
                        <p className="mb-2">Por {newsletter.author}</p>

                        {newsletter.text.map((paragraph: string, idx: number) => (
                            <p
                                key={idx}
                                className="my-1 text-justify indent-8"
                            >
                                {paragraph}
                            </p>
                        ))}
                    </div>

                    <div className="flex flex-col justify-center items-center">
                        <img src={newsletter.imageUrl} alt={newsletter.caption} className="w-[500px] h-[300px] object-cover" />
                        <p className="text-justify mt-2">{newsletter.caption}</p>
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