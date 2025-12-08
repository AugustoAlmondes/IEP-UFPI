// import './Institutional.module.css';
// import styles from './Institutional.module.css';
import { aboutItems } from "../constants/aboutitens";
// import BackgroundImage from '../assets/image_3.jpeg';

export default function Institutional() {
    const institutionalItem = aboutItems.find(item => item.title === "INSTITUCIONAL");

    if (!institutionalItem) {
        return <div>Informação institutional não encontrada</div>;
    }

    return (
        <section className="bg-white min-h-screen">
            <div
                className="h-screen w-full flex flex-col items-center gap-10 justify-center relative bg-cover bg-center bg-blend-multiply bg-black/70"
                style={{
                    backgroundImage: `url(${institutionalItem.imageUrl})`
                }}
            >
                <div className="text-white text-center">
                    <h1 className="text-5xl font-bold mb-8">{institutionalItem.title}</h1>
                    <h2 className="text-1xl font-light text-justify max-w-[700px]">{institutionalItem.description}</h2>
                </div>
                <div className="text-white flex flex-wrap items-center justify-center gap-5">
                    <a href="\">
                        <button className="cursor-pointer border border-white py-1.5 px-15 rounded-lg hover:bg-white hover:text-darkgray transition-colors duration-300 min-w-55">Voltar ao início</button>
                    </a>
                </div>
            </div>
        </section>
    );
}