// import './Institutional.module.css';
// import styles from './Institutional.module.css';
import { aboutItems } from "../constants/aboutitens";
// import BackgroundImage from '../assets/image_3.jpeg';

export default function Institutional() {
    const podcastItem = aboutItems.find(item => item.title === "PODCAST");

    if (!podcastItem) {
        return <div>Informação sobre o podcast não encontrada</div>;
    }

    return (
        <section className="bg-white min-h-screen">
            <div
                className="h-screen w-full flex flex-col items-center gap-10 justify-center relative bg-cover bg-center bg-blend-multiply bg-black/70"
                style={{
                    backgroundImage: `url(${podcastItem.imageUrl})`
                }}
            >
                <div className="text-white text-center">
                    <h1 className="text-5xl font-bold mb-8">{podcastItem.title}</h1>
                    <h2 className="text-1xl font-light text-justify max-w-[700px]">{podcastItem.description}</h2>
                </div>
                <div className="text-white flex flex-wrap items-center justify-center gap-5">
                    <a href="https://www.youtube.com/@manualdomundo" target="_blank" rel="noopener noreferrer">
                        <button className="cursor-pointer border border-white py-1.5 px-15 rounded-lg hover:bg-white hover:text-darkgray transition-colors duration-300 min-w-55">Ir para o canal</button>
                    </a>
                </div>
            </div>
        </section>
    );
}