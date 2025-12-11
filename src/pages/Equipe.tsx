// import './Equipe.module.css';
// import styles from './Equipe.module.css';
import TeamCard from "../components/TeamCard";
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
                <h2 className="text-5xl text-darkpink font-bold text-center mb-10">MEMBROS</h2>
                <div className="grid grid-cols-3 items-center justify-center gap-10">
                    {
                        teamMembers.map((member, index) => (
                            <TeamCard key={index} member={member} />
                        ))
                    }
                </div>
            </div>

        </>
    );
}