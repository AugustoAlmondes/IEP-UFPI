import AboutCard from "../components/AboutCard";
import BoletinCard from "../components/BoletinCard";
import { aboutItems } from "../constants/aboutitens";
import BackgroundImage from "/image_2.jpeg";
export default function Home() {

    return (
        <section className="bg-white min-h-screen">
            {/* IEP/UFPI */}
            <div className="h-screen w-full flex flex-col items-center gap-10 justify-center relative bg-[url(image_2.jpeg)] bg-cover bg-center bg-filter bg-blend-multiply bg-black/70">
                <div className="text-white text-center">
                    <h1 className="text-7xl font-bold mb-1">IEP/UFPI</h1>
                    <h2 className="text-2xl font-light">Instituto de Economia Política</h2>
                    <h2 className="text-2xl font-light">Universidade Federal do Piauí</h2>
                </div>
                <div className="text-white flex flex-wrap items-center justify-center gap-5">
                    <button className="cursor-pointer border border-white py-1.5 px-15 rounded-lg hover:bg-white hover:text-darkgray transition-colors duration-300">Ver boletins</button>
                    <div className="hidden sm:block w-px h-10 bg-white rounded-full" />
                    <button className="cursor-pointer bg-darkpink py-1.5 px-15 rounded-lg hover:bg-pink transition-colors duration-300">Saiba mais</button>
                </div>
            </div>

            {/* ULTIMMOS BBOLETINS */}
            <div className="min-h-screen bg-darkgray px-15 py-30 flex flex-col items-center text-white">
                <h2 className="text-4xl mb-5 text-center font-light">ÚLTIMOS BOLETINS</h2>
                <p className="text-center text-md text-pink max-w-[500px]">
                    Veja os Boletins mais recentes que foram publicados, tenta por mais algum texto aqui para ficar bom
                </p>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-40 mt-20">
                    <BoletinCard BackgroundImage={BackgroundImage} />
                    <BoletinCard BackgroundImage={BackgroundImage} />
                    <BoletinCard BackgroundImage={BackgroundImage} />
                </div>
                <p className="cursor-pointer mt-20 text-white underline py-1.5 px-10 rounded-lg hover:text-pink transition-colors duration-200">
                    Ver mais boletins
                </p>
            </div>

            {/* SOBRE NÓS */}
            <div className="bg-white relative min-h-screen py-20">
                <h1 className="text-4xl text-center font-light text-white absolute left-0 right-0 mx-auto -top-10">SOBRE NÓS</h1>
                <div className="h-50 w-full bg-darkgray absolute top-0"></div>
                <div className="flex justify-center items-center flex-col gap-20">
                    {
                        aboutItems.map((item, index) => (
                            <AboutCard key={index} {...item} />
                        ))
                    }
                </div>
            </div>

            {/* DÚVIDAS */}
            <div className="h-[600px] mt-20 w-full flex flex-col items-center gap-10 justify-center relative bg-[url(image_2.jpeg)] bg-cover bg-center bg-filter bg-blend-multiply bg-black/70">

                <div className="text-white text-center">
                    <h1 className="text-5xl font-bold mb-1">FICOU COM DÚVIDA?</h1>
                    <p className="text-xl font-light w-2/3 mx-auto">Veja algumas Perguntas Frequentes e veja se sua dúvida de encaixa em alguma dessas perguntas</p>
                </div>

                <div className="text-white flex flex-col items-center justify-center gap-5">
                    <button className="cursor-pointer border border-white py-1.5 px-15 rounded-lg hover:bg-white hover:text-darkgray transition-colors duration-300 w-70">Perguntas Frequentes</button>
                    <button className="cursor-pointer bg-darkpink py-1.5 px-15 rounded-lg hover:bg-pink transition-colors duration-300 w-70">Enviar Email</button>
                </div>
            </div>
        </section>
    );
}