import { useNavigate } from "react-router-dom";
import Helmet from "../components/Helmet";

export default function ErrorPage() {

    const navigate = useNavigate()

    return (
        <>
            <Helmet
                title="Erro - IEP/UFPI"
                description="Erro - IEP/UFPI"
                link="https://iep-ufpi.vercel.app/error"
            />
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="text-center">
                    <h1 className="text-6xl font-bold text-pink">404</h1>
                    <p className="text-2xl text-gray-600">Página não encontrada</p>
                    <button onClick={() => navigate("/")} className="btn-pink mt-4">Voltar para a página inicial</button>
                </div>
            </div>
        </>
    );
}