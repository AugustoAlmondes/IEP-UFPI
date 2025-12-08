// import './Equipe.module.css';
// import styles from './Equipe.module.css';
import { teamMembers } from "../constants/teamMembers";

export default function Equipe() {
    return (
        <>
            <div className="h-screen bg-white">
                <div className="w-full h-[600px] flex flex-col items-center gap-10 justify-center relative bg-[url(image_1.jpeg)] bg-cover bg-center bg-filter bg-blend-multiply bg-black/70">
                    <div className="text-white text-center">
                        <h1 className="text-5xl font-bold mb-8">
                            NOSSA EQUIPE
                        </h1>
                        <h2 className="text-1xl font-light text-justify max-w-[700px]">
                            Nossa equipe é formada por profissionais dedicados e multidisciplinares, com o objetivo de unir talentos, experiências e perspectivas para desenvolver soluções que impulsionam o crescimento da organização e entregam valor real às pessoas que atendemos.
                        </h2>
                    </div>
                    <div className="text-white flex flex-col items-center justify-center gap-5">
                        <a href="\">
                            <button className="btn-outline">Ver membros</button>
                        </a>
                        <a href="\">
                            <button className="btn-pink">Fazer parte</button>
                        </a>
                    </div>
                </div>

            </div>

            <div className="bg-white pb-20">
                <h2 className="text-5xl text-darkpink font-bold text-center">MEMBROS</h2>

                {/* VIEW USER CARD COMPONENT */}
                {/* <div className="grid grid-cols-3 items-center justify-center gap-10"> */}
                <div className="w-max">
                    <div className={`flex items-start flex-col`}>
                        <div className="w-[300px] h-[300px] relative">
                            <img src="https://github.com/augustoalmondes.png" alt="Augusto Almondes" />
                            <div className="absolute h-7 w-full bg-darkpink bottom-0" />
                        </div>
                        <h3 className="w-full my-5 text-lg">Augusto Almondes (Desenvolvedor)</h3>
                        <button className="btn-pink text ">Ver perfil</button>
                    </div>
                </div>

                {/* </div> */}
            </div>

        </>
    );
}