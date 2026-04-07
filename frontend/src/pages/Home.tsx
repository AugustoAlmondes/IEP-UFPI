import { Link } from "react-router-dom";
import AboutCard from "../components/AboutCard";
import { aboutItems } from "../constants/aboutitens";
import Loading from "../components/Loading";
import NewsletterCard from "../components/NewsletterCard";
import useBoletins from "../context/BoletinsContext";
import HomeBg from "../assets/image_2.jpeg";
import Helmet from "../components/Helmet";

export default function Home() {

    const { boletins, loading } = useBoletins();
    const lastNewsletters = boletins?.slice(0, 3)

    return (
        <>
            <Helmet
                title="IEP/UFPI"
                description="Página inicial do IEP/UFPI, confira os últimos boletins e saiba mais sobre o IEP/UFPI"
                link="https://iep-ufpi.vercel.app"
            />
            <section className="bg-white min-h-screen">

                {/* IEP / UFPI */}
                <div
                    style={{ backgroundImage: `url(${HomeBg})` }}
                    className="min-h-screen w-full flex flex-col items-center justify-center gap-8 relative bg-cover bg-center bg-blend-multiply bg-black/70 px-6"
                >
                    <div className="text-white text-center">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-2">
                            IEP/UFPI
                        </h1>
                        <h2 className="text-lg sm:text-xl font-light">
                            Instituto de Economia Política
                        </h2>
                        <h2 className="text-lg sm:text-xl font-light">
                            Universidade Federal do Piauí
                        </h2>
                    </div>

                    <div className="text-white flex flex-wrap items-center justify-center gap-4">
                        <Link to="/newsletter" className="btn-outline px-12" >
                            Ver boletins
                        </Link>

                        <div className="hidden sm:block w-px h-8 bg-white rounded-full" />

                        <button onClick={() => { window.scrollTo({ top: document.getElementById('about')?.offsetTop, behavior: 'smooth' }) }} className="btn-pink px-12">
                            Saiba mais
                        </button>
                    </div>
                </div>

                {/* ÚLTIMOS BOLETINS */}
                <div className="bg-darkgray px-6 sm:px-10 lg:px-20 py-24 flex flex-col items-center text-white">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl mb-4 text-center font-light">
                        ÚLTIMOS BOLETINS
                    </h2>

                    <p className="text-center text-sm sm:text-base text-pink max-w-[520px]">
                        Veja os Boletins mais recentes que foram publicados, tenta por mais algum texto aqui para ficar bom
                    </p>

                    {loading ? <Loading background="transparent" /> :

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16 mt-16">
                            {
                                lastNewsletters?.map((newsletter, index) => (
                                    <NewsletterCard key={index} index={index} newsletter={newsletter} />
                                ))
                            }
                        </div>
                    }

                    <Link to="/newsletter" className="cursor-pointer mt-16 text-white underline hover:text-pink transition-colors duration-200">
                        Ver mais boletins
                    </Link>
                </div>

                {/* SOBRE NÓS */}
                <div id="about" className="bg-white relative py-24">
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl text-center font-light text-white absolute left-0 right-0 mx-auto -top-9">
                        SOBRE NÓS
                    </h1>

                    <div className="h-40 w-full bg-darkgray absolute top-0"></div>

                    <div className="relative flex justify-center items-center flex-col gap-16 px-6 sm:px-10">
                        {aboutItems.map((item, index) => (
                            <AboutCard key={index} {...item} />
                        ))}
                    </div>
                </div>

                {/* DÚVIDAS */}
                <div
                    style={{ backgroundImage: `url(${HomeBg})` }}
                    className="py-28 mt-16 w-full flex flex-col items-center gap-8 justify-center relative bg-cover bg-center bg-blend-multiply bg-black/70 px-6"
                >
                    <div className="text-white text-center max-w-2xl">
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">
                            FICOU COM DÚVIDA?
                        </h1>
                        <p className="text-base sm:text-lg font-light">
                            Veja algumas Perguntas Frequentes e veja se sua dúvida se encaixa em alguma dessas perguntas
                        </p>
                    </div>

                    <div className="text-white flex flex-col items-center justify-center gap-4">
                        <Link to="/questions" className="btn-outline w-[220px]">
                            Perguntas Frequentes
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
