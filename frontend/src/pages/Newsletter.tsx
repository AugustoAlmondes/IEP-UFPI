import { useEffect, useState } from "react";
import NewsletterCard from "../components/NewsletterCard";
import type { Boletins } from "../types/boletins";
import { apiFetch } from "../service/api";
import { toast } from "react-toastify";
import Loading from "../components/Loading";

export default function Newsletter() {

    const [boletins, setBoletins] = useState<Boletins[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBoletins = async () => {
            try {
                setLoading(true)
                const response = await apiFetch('/boletins', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                setBoletins(response);
            } catch (error) {
                setLoading(false)
                toast.error("Erro ao buscar boletins");
                console.error('Erro ao buscar boletins:', error);
            }
            setLoading(false)
        };
        fetchBoletins();
    }, []);

    if (loading) {
        return (
            <Loading />
        )
    }

    return (
        <>
            <div className="bg-white pb-40 min-h-screen pt-30 px-4">
                <h1 className="text-3xl sm:text-4xl text-darkpink font-bold text-center mb-5">
                    BOLETINS
                </h1>
                <h2 className="text-1xl text-center mb-5">
                    Mantenha-se informado com nossos últimos boletins. <br /> Veja as edições mais recentes abaixo.
                </h2>

                <div className="flex justify-center mb-8">
                    <div className="flex w-full max-w-xl">
                        <input
                            type="text"
                            placeholder="Pesquisar boletim"
                            className="cursor-pointer w-full px-4 py-2 bg-gray2 text-black rounded-lg placeholder-gray-500 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 mr-3"
                        />
                        <button
                            className="cursor-pointer border bg-darkpink text-white py-1.5 px-4 rounded-lg hover:bg-darkpink/70 hover:text-white transition-colors duration-300 min-w"
                        >
                            Buscar
                        </button>
                    </div>
                </div>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-center justify-center gap-4 mt-20">
                    {boletins && boletins.map((boletim: Boletins) => (
                        <div key={boletim.id} className="w-full flex items-center justify-center">
                            <NewsletterCard newsletter={boletim} index={boletim.id} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}