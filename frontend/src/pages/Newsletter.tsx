import NewsletterCard from "../components/NewsletterCard";
import type { Boletins } from "../types/boletins";
import { toast } from "react-toastify";
import Loading from "../components/Loading";
import useBoletins from "../context/BoletinsContext";

export default function Newsletter() {

    const { loading, boletins, handleDelete } = useBoletins();

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
                            className="w-full px-4 py-2 bg-gray2 text-black rounded-lg placeholder-gray-500 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 mr-3"
                        />
                        <button
                            className="cursor-pointer border bg-darkpink text-white py-1.5 px-4 rounded-lg hover:bg-darkpink/70 hover:text-white transition-colors duration-300 min-w"
                            onClick={() => { toast.warning("Essa ação ainda não funciona :(") }}
                        >
                            Buscar
                        </button>
                    </div>
                </div>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-center justify-center gap-4 mt-20">
                    {boletins && boletins.length > 0 ? boletins.map((boletim: Boletins) => (
                        <div key={boletim.id} className="w-full flex items-center justify-center">
                            <NewsletterCard newsletter={boletim} index={boletim.id} onDelete={handleDelete} />
                        </div>
                    )) : (
                        <div className="w-full flex items-center justify-center">
                            <p className="text-center text-gray-500 text-xl">Erro ao carregar os boletins...</p>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}