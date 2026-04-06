import { AuthContext } from '../context/AuthContext';
import { useState, useEffect, useCallback } from "react";
import { decodeJwtPayload, isTokenExpired, type JwtPayload } from '../service/jwt';

export interface SignInProps {
    email: string;
    password: string;
}

function getRoleFromToken(token: string | null): "ADMIN" | "ALUNO" {
    if (!token) return "ALUNO";
    const payload = decodeJwtPayload<JwtPayload>(token);
    return payload?.role === "ADMIN" ? "ADMIN" : "ALUNO";
}

function getNameFromToken(token: string | null):string | null {
    if(!token) return null
    const payload = decodeJwtPayload<JwtPayload>(token);
    return payload?.name ?? null;
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const storedToken = localStorage.getItem('token');
    
    // Check if token is expired on initial load
    const initialToken = isTokenExpired(storedToken) ? null : storedToken;
    if (storedToken && !initialToken) {
        localStorage.removeItem('token');
    }

    const [token, setToken] = useState<string | null>(initialToken);
    const [user, setUser] = useState<"ADMIN" | "ALUNO">(() => getRoleFromToken(initialToken));
    const [name, setName] = useState<string | null>(() => getNameFromToken(initialToken));

    const signOut = useCallback(() => {
        localStorage.removeItem('token');
        setToken(null);
        setUser("ALUNO");
        window.location.href = "/";
    }, []);

    // Check token expiration on mount and periodically
    useEffect(() => {
        if (token && isTokenExpired(token)) {
            signOut();
        }
    }, [token, signOut]);

    const isAuthenticated = !!token && !isTokenExpired(token);

    async function signIn(props: SignInProps): Promise<boolean> {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/signin`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(props)
        });

        const data = await response.json();

        if (data.token) {
            localStorage.setItem('token', data.token);
            setToken(data.token);
            setUser(getRoleFromToken(data.token));
            setName(getNameFromToken(data.token));
            return true;
        }
        return false;
    }

    // Removed old signOut implementation inside the component to use the memoized one

    return (
        <AuthContext.Provider
            value={{
                isAuthenticated, signIn, signOut, user, name
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}
