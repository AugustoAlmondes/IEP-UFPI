import { useRef } from "react";
import TeamCard from "../components/TeamCard";
import { teamMembers } from "../constants/teamMembers";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

export default function Equipe() {

    interface JoinTeamForm {
        email: string,
        name: string,
        instituition: string,
        description: string
    }

    const memberSectionRef = useRef<HTMLDivElement | null>(null);
    const formSectionRef = useRef<HTMLDivElement | null>(null);
    const {
        register,
        handleSubmit,
        reset
    } = useForm<JoinTeamForm>();

    function onSubmit(data: JoinTeamForm) {
        toast.success("Seu email foi enviado com sucesso!");
        console.log(data)
        reset();
    }

    return (
        <>
            <div className=" bg-white">
                <div className="w-full h-[800px] flex flex-col items-center gap-10 justify-center relative bg-[url(image_1.jpeg)] bg-cover bg-center bg-filter bg-blend-multiply bg-black/70">
                    <div className="text-white text-center">
                        <h1 className="text-5xl font-bold mb-8">
                            NOSSA EQUIPE
                        </h1>
                        <h2 className="text-1xl font-light text-justify max-w-[700px] mx-10 md-m-0">
                            Nossa equipe é formada por profissionais dedicados e multidisciplinares, com o objetivo de unir talentos, experiências e perspectivas para desenvolver soluções que impulsionam o crescimento da organização e entregam valor real às pessoas que atendemos.
                        </h2>
                    </div>
                    <div className="text-white flex flex-col items-center justify-center gap-5">
                        <button
                            className="btn-outline"
                            onClick={() => {
                                memberSectionRef.current?.scrollIntoView({
                                    block: "start", behavior: "smooth"
                                })
                            }}
                        >Ver membros</button>
                        <button
                            className="btn-pink"
                            onClick={() => {
                                formSectionRef.current?.scrollIntoView({
                                    block: "start", behavior: "smooth"
                                })
                            }}
                        >Fazer parte</button>
                    </div>
                </div>

            </div>

            <div ref={memberSectionRef} className="bg-white pb-20 pt-30 px-4">
                <h2 className="text-4xl sm:text-5xl text-darkpink font-bold text-center mb-10">
                    MEMBROS
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
                    {teamMembers.map((member, index) => (
                        <TeamCard key={index} member={member} />
                    ))}
                </div>
            </div>

            <div ref={formSectionRef} className="min-h-100 bg-darkgray text-white">
                <h1 className="text-5xl font-bold pt-15 pb-5 text-center">
                    FAÇA PARTE DA EQUIPE
                </h1>
                <div className="w-full">
                    <h3 className="text-md m-auto max-w-200 text-center">
                        Se você é um profissional talentoso e deseja fazer parte da nossa equipe, entre em contato conosco. Juntos, podemos alcançar grandes resultados e transformar a maneira como a organização é operada.
                    </h3>
                </div>

                <form
                    className="mt-10 pb-20 m-auto max-w-220 grid grid-cols-1 gap-6 px-4"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        <div className="flex flex-col gap-4">

                            <div className="flex flex-col">
                                <label className="font-extralight mb-1" htmlFor="email">Endereço do E-mail *</label>
                                <input
                                    className="bg-white px-3 py-2 w-full placeholder:text-[#808080] placeholder:font-extralight placeholder:text-sm rounded-md text-black"
                                    type="email"
                                    {...register("email")}
                                    required
                                    placeholder="Digite seu E-mail"
                                />
                            </div>

                            <div className="flex flex-col">
                                <label className="font-extralight mb-1" htmlFor="name">Nome *</label>
                                <input
                                    className="bg-white px-3 py-2 w-full placeholder:text-[#808080] placeholder:font-extralight placeholder:text-sm rounded-md text-black"
                                    type="text"
                                    {...register("name")}
                                    required
                                    placeholder="Digite seu nome"
                                />
                            </div>

                            <div className="flex flex-col">
                                <label className="font-extralight mb-1" htmlFor="instituition">Instituição *</label>
                                <input
                                    className="bg-white px-3 py-2 w-full placeholder:text-[#808080] placeholder:font-extralight placeholder:text-sm rounded-md text-black"
                                    type="text"
                                    {...register("instituition")}
                                    placeholder="Digite sua insituição"
                                    required
                                />
                            </div>

                        </div>

                        <div className="flex flex-col h-full">
                            <label className="font-extralight mb-1" htmlFor="description">Descrição *</label>
                            <textarea
                                className="bg-white px-3 py-2 w-full h-full min-h-[100px] resize-none placeholder:text-[#808080] placeholder:font-extralight placeholder:text-sm rounded-md text-black"
                                id="description"
                                {...register("description")}
                                required
                                placeholder="Digite uma breve descrição sua"
                            />
                        </div>

                    </div>

                    <div className="flex justify-center mt-4">
                        <button className="btn-pink" type="submit">
                            Enviar
                        </button>
                    </div>
                </form>


            </div>

        </>
    );
}