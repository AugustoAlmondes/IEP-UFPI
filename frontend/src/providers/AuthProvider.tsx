import { AuthContext } from '../context/AuthContext';
import { useState } from "react";
import { decodeJwtPayload, type JwtPayload } from '../service/jwt';

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
    const [token, setToken] = useState<string | null>(storedToken);
    const [user, setUser] = useState<"ADMIN" | "ALUNO">(() => getRoleFromToken(storedToken));
    const [name, setName] = useState<string | null>(() => getNameFromToken(storedToken));

    const isAuthenticated = !!token;

    async function signIn(props: SignInProps): Promise<boolean> {
        const response = await fetch("http://localhost:3000/auth/signin", {
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

    function signOut() {
        localStorage.removeItem('token');
        setToken(null);
        setUser("ALUNO");
        window.location.href = "/";
    }

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
