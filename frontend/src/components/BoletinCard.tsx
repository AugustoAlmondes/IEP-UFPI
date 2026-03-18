import type { Boletins } from "../types/boletins";

export default function BoletinCard({ newsletter }: { newsletter: Boletins }) {
    return (
        <>
            <div className="w-[300px]">
                <div className="w-full relative mb-2">
                    {
                        newsletter.image ? (
                            <img src={newsletter.image} className="w-full h-full object-cover" />
                        ) : (
                            <img src="../assets/images/boletim_default.jpg" className="w-full h-full object-cover" />
                        )
                    }   
                    <div className="absolute bg-darkpink w-full h-4 bottom-0" />
                </div>

                <div className="mr-15">
                    <h3 className="text-lg font-medium">{newsletter.title}</h3>
                    <p className="text-sm text-justify font-light">{newsletter.content}</p>
                    <button className="btn-pink mt-4">Ver Boletim</button>
                </div>
            </div>
        </>
    );
}