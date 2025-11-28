// import './BoletinCard.module.css';
// import styles from './BoletinCard.module.css';

export default function BoletinCard({BackgroundImage}: {BackgroundImage: string}) {
    return (
        <>
            <div className="w-[300px]">
                <div className="w-full relative mb-2">
                    <img className="object-cover w-full h-full" src={BackgroundImage} />
                    <div className="absolute bg-darkpink w-full h-4 bottom-0" />
                </div>

                <div className="mr-15">
                    <h3 className="text-lg font-medium">Título de item</h3>
                    <p className="text-sm text-justify font-light">Algum texto informativo falando sobre o item acima. Esse é um exemplo de como deve ficar</p>
                    <button className="cursor-pointer bg-darkpink py-1 px-10 rounded-lg hover:bg-pink transition-colors duration-300 mt-3">Saiba mais</button>
                </div>
            </div>
        </>
    );
}