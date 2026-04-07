import NewsletterCard from "../components/NewsletterCard";
import type { Boletins } from "../types/boletins";
import Loading from "../components/Loading";
import useBoletins from "../context/BoletinsContext";
import { useState } from "react";
import { Search, X } from "lucide-react";

export default function Newsletter() {

    const { loading, boletins, handleDelete } = useBoletins();
    const [searchTerm, setSearchTerm] = useState("");
    const [submittedSearch, setSubmittedSearch] = useState("");

    const handleSearch = () => {
        setSubmittedSearch(searchTerm);
    };

    const handleClearSearch = () => {
        setSearchTerm("");
        setSubmittedSearch("");
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    const displayedBoletins = boletins?.filter((boletim) =>
        boletim.title.toLowerCase().includes(submittedSearch.toLowerCase())
    );

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
                    <div className="flex w-full max-w-xl items-center gap-3">
                        <div className="relative flex-1">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                            <input
                                type="text"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                onKeyDown={handleKeyDown}
                                placeholder="Pesquisar boletim"
                                className="w-full pl-10 pr-10 py-2 bg-gray2 text-black rounded-lg placeholder-gray-500 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-darkpink transition-all"
                            />
                            {searchTerm && (
                                <button
                                    onClick={handleClearSearch}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-darkpink transition-colors cursor-pointer"
                                    title="Limpar busca"
                                >
                                    <X size={18} />
                                </button>
                            )}
                        </div>
                        <button
                            className="cursor-pointer border bg-darkpink text-white py-1.5 px-6 rounded-lg hover:bg-darkpink/80 hover:text-white transition-colors duration-300 font-medium"
                            onClick={handleSearch}
                        >
                            Buscar
                        </button>
                    </div>
                </div>

                {submittedSearch && (
                    <div className="flex flex-col items-center mb-8 animate-in fade-in duration-500">
                        <p className="text-gray-600">
                            Resultados para: <span className="font-bold text-darkpink">"{submittedSearch}"</span>
                        </p>
                        <p className="text-sm text-gray-400 mt-1">
                            {displayedBoletins?.length} {displayedBoletins?.length === 1 ? 'boletim encontrado' : 'boletins encontrados'}
                        </p>
                    </div>
                )}

                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-center justify-center gap-4 mt-20">
                    {displayedBoletins && displayedBoletins.length > 0 ? displayedBoletins.map((boletim: Boletins) => (
                        <div key={boletim.id} className="w-full flex items-center justify-center">
                            <NewsletterCard newsletter={boletim} index={boletim.id} onDelete={handleDelete} />
                        </div>
                    )) : (
                        <div className="w-full flex flex-col items-center justify-center md:col-span-2 lg:col-span-3 py-10">
                            <div className="bg-gray-50 p-10 rounded-2xl flex flex-col items-center max-w-md w-full border border-dashed border-gray-300 shadow-sm">
                                <Search className="text-gray-300 mb-4" size={48} />
                                <p className="text-center text-gray-500 text-xl font-semibold mb-2">
                                    {boletins && boletins.length > 0 
                                        ? "Nenhum boletim encontrado" 
                                        : "Nenhum boletim disponível"}
                                </p>
                                <p className="text-center text-gray-400 text-sm mb-6">
                                    {boletins && boletins.length > 0 
                                        ? `Não encontramos resultados para "${submittedSearch}". Tente outros termos.` 
                                        : "Aguarde novas publicações em breve."}
                                </p>
                                {submittedSearch && (
                                    <button 
                                        onClick={handleClearSearch}
                                        className="px-6 py-2 border border-darkpink text-darkpink rounded-lg font-bold hover:bg-darkpink hover:text-white transition-all cursor-pointer"
                                    >
                                        Ver todos os boletins
                                    </button>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}