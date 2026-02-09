import { AuthContext } from '../context/AuthContext';
import { useState } from "react";
import type { User } from "../types/user";


export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null);

    function login(token: string) {
        console.log(token);
        // TODO: decodificar JWT e extrair id e role
        setUser({
            id: 'fake-id',
            role: 'ADMIN'
        })
    }

    function logout() {
        setUser(null);
    }

    return (
        <AuthContext.Provider
            value={{
                user, isAuthenticated: !!user,
                login,
                logout
            }
            }
        >
            {children}
        </AuthContext.Provider>
    )
}