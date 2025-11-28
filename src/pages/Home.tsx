// import BackgroundImage from "../../public/images/image_2.jpeg";
export default function Home() {

    return (
        <section className="bg-white min-h-screen">
            <div className="h-screen w-full flex flex-col items-center gap-10 justify-center relative bg-[url(image_2.jpeg)] bg-cover bg-center bg-filter bg-blend-multiply bg-black/70">
                {/* <img
                    className="object-cover w-full h-full opacity-30 absolute top-0 left-0 z-[-1]"
                    src="image_2.jpeg"
                /> */}

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

            <div className="h-screen bg-darkgray">

            </div>
        </section>
    );
}