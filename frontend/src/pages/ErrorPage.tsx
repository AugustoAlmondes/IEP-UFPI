import { useNavigate } from "react-router-dom";

export default function ErrorPage() {

    const navigate = useNavigate()

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="text-center">
                <h1 className="text-6xl font-bold text-pink">404</h1>
                <p className="text-2xl text-gray-600">Página não encontrada</p>
                <button onClick={() => navigate("/")} className="btn-pink mt-4">Voltar para a página inicial</button>
            </div>
        </div>
    );
}