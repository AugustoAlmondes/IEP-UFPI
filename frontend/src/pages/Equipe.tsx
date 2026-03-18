import { useEffect, useState, useRef } from "react";
import TeamCard from "../components/TeamCard";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { apiFetch } from "../service/api";
import type { MemberApiData } from "../types/member";
import Loading from "../components/Loading";
import TeamBg from "../assets/image_1.jpeg";

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

    const [members, setMembers] = useState<MemberApiData[]>([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const membersPerPage = 9;

    useEffect(() => {
        async function fetchMembers() {
            try {
                const data = await apiFetch('/membros');
                const sortedMembers = data.sort((a: MemberApiData, b: MemberApiData) => {
                    if (a.role === 'ADMIN' && b.role !== 'ADMIN') return -1;
                    if (a.role !== 'ADMIN' && b.role === 'ADMIN') return 1;
                    return 0;
                });
                setMembers(sortedMembers);
            } catch (error) {
                // toast.error("Erro ao carregar membros.");
                console.error(error)
            } finally {
                setLoading(false);
            }
        }
        fetchMembers();
    }, []);

    const totalPages = Math.ceil(members.length / membersPerPage);
    const paginatedMembers = members.slice(
        (currentPage - 1) * membersPerPage,
        currentPage * membersPerPage
    );

    function onSubmit() {
        toast.warning("Essa ação ainda não funciona :(");
        reset();
    }

    return (
        <>
            <div className=" bg-white">
                <div 
                    style={{ backgroundImage: `url(${TeamBg})` }}
                    className="w-full h-[800px] flex flex-col items-center gap-10 justify-center relative bg-cover bg-center bg-filter bg-blend-multiply bg-black/70"
                >
                    <div className="text-white text-center">
                        <h1 className="text-5xl font-bold mb-8">
                            NOSSA EQUIPE
                        </h1>
                        <h2 className="text-md font-light text-justify max-w-[700px] mx-10 md-m-0">
                            Nossa equipe é formada por profissionais dedicados e multidisciplinares, com o objetivo de unir talentos, experiências e perspectivas para desenvolver soluções que impulsionam o crescimento da organização e entregam valor real às pessoas que atendemos.
                        </h2>
                    </div>
                    <div className="text-white flex flex-col items-center justify-center gap-5">
                        <button
                            className="btn-outline w-[200px]"
                            onClick={() => {
                                memberSectionRef.current?.scrollIntoView({
                                    block: "start", behavior: "smooth"
                                })
                            }}
                        >Ver membros</button>
                        <button
                            className="btn-pink w-[200px]"
                            onClick={() => {
                                formSectionRef.current?.scrollIntoView({
                                    block: "start", behavior: "smooth"
                                })
                            }}
                        >Fazer parte</button>
                    </div>
                </div>

            </div>

            <div ref={memberSectionRef} className="bg-white pb-40 pt-30 px-4 min-h-screen">
                <h2 className="text-3xl sm:text-4xl text-darkpink font-bold text-center mb-10">
                    MEMBROS
                </h2>

                {loading ? (
                    <Loading/>
                ) : members.length === 0 ? (
                    <div className="text-center text-gray-500 text-xl">Erro ao carregar os membros...</div>
                ) : (
                    <>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-4xl mx-auto">
                            {paginatedMembers.map((member) => (
                                <TeamCard key={member.id} member={member} />
                            ))}
                        </div>
                        {totalPages > 1 && (
                            <div className="flex justify-center mt-14 gap-2">
                                {Array.from({ length: totalPages }).map((_, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => {
                                            setCurrentPage(idx + 1);
                                            memberSectionRef.current?.scrollIntoView({
                                                block: "start", behavior: "smooth"
                                            });
                                        }}
                                        className={`w-10 h-10 rounded-full font-bold flex items-center justify-center transition-colors ${currentPage === idx + 1
                                                ? "bg-darkpink text-white"
                                                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                                            }`}
                                    >
                                        {idx + 1}
                                    </button>
                                ))}
                            </div>
                        )}
                    </>
                )}
            </div>

            <div ref={formSectionRef} className="min-h-100 bg-darkgray text-white">
                <h1 className="text-4xl font-bold pt-15 pb-5 text-center">
                    FAÇA PARTE DA EQUIPE
                </h1>
                <div className="w-full">
                    <h3 className="text-sm m-auto max-w-200 text-center">
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
                                <label
                                    className="font-extralight text-sm mb-1"
                                    htmlFor="email"
                                >
                                    Endereço do E-mail *
                                </label>
                                <input
                                    className="bg-white px-2 py-1 w-full placeholder:text-[#808080] placeholder:font-extralight placeholder:text-sm rounded-md text-black"
                                    type="email"
                                    {...register("email")}
                                    required
                                    placeholder="Digite seu E-mail"
                                />
                            </div>

                            <div className="flex flex-col">
                                <label
                                    className="font-extralight text-sm mb-1"
                                    htmlFor="name"
                                >
                                    Nome *
                                </label>
                                <input
                                    className="bg-white px-2 py-1 w-full placeholder:text-[#808080] placeholder:font-extralight placeholder:text-sm rounded-md text-black"
                                    type="text"
                                    {...register("name")}
                                    required
                                    placeholder="Digite seu nome"
                                />
                            </div>

                            <div className="flex flex-col">
                                <label
                                    className="font-extralight text-sm mb-1"
                                    htmlFor="instituition">
                                    Instituição *
                                </label>
                                <input
                                    className="bg-white px-2 py-1 w-full placeholder:text-[#808080] placeholder:font-extralight placeholder:text-sm rounded-md text-black"
                                    type="text"
                                    {...register("instituition")}
                                    placeholder="Digite sua insituição"
                                    required
                                />
                            </div>

                        </div>

                        <div className="flex flex-col h-full">
                            <label className="font-extralight text-sm mb-1" htmlFor="description">Descrição *</label>
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