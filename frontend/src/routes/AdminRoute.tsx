import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export function AdminRoute({ children, onlyAdmin = false }: { children: React.ReactNode, onlyAdmin?: boolean }) {
    const { user, isAuthenticated } = useAuth();

    if (!isAuthenticated) {
        return <Navigate to="/error" replace />;
    }

    if (onlyAdmin && user !== 'ADMIN') {
        return <Navigate to="/" replace />;
    }

    return children;
}