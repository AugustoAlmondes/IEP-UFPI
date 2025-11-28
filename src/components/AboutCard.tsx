// import './AboutCard.module.css';
// import styles from './AboutCard.module.css';

type AboutCardProps = {
    imageUrl: string;
    side?: "right" | "left";
};


export default function AboutCard({ imageUrl, side }: AboutCardProps) {
    return (
        <div className={`bg-white z-1 max-w-6xl shadow-xl p-10 flex flex-col ${side === 'left' ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-20 hover:scale-101 transition-all duration-300 hover:shadow-2xl`}>
        {/* <div className="bg-white z-1 max-w-6xl shadow-xl p-10 flex flex-col-reverse lg:flex-row items-center gap-20 hover:scale-101 transition-all duration-300 hover:shadow-2xl"> */}
            <div className="flex-1 flex flex-col gap-5">
                <h3 className="text-2xl font-medium">OBJETIVO DO IEP</h3>
                <p className="text-justify ">
                    Promover e publicar eventos, pesquisas e ensaios produzidos a partir do Grupo de Análise de Economia Política (GAEP) e do Programa de Pesquisas sobre o Nordeste (ProNordeste), ambos da Universidade Federal do Piauí (UFPI) em parceria com docentes de outras IES`s.
                </p>
                <button className="self-start text-white cursor-pointer bg-darkpink py-1 px-10 rounded-lg hover:bg-pink transition-colors duration-300 mt-3">
                    Saiba mais
                </button>
            </div>

            <div className="relative">
                <img className="w-80" src={imageUrl} />
                <div className="absolute bg-darkpink w-full h-full rotate-5 z-[-1] bottom-0" />
            </div>
        </div>
    );
}