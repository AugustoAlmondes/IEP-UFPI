import { AuthContext } from '../context/AuthContext';
import { useState } from "react";

export interface SignInProps {
    email: string;
    password: string;
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [token, setToken] = useState<string | null>(localStorage.getItem('token'));

    const isAuthenticated = !!token;

    async function signIn(props: SignInProps):Promise<boolean> {
        const response = await fetch("http://localhost:3000/auth/signin", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(props)
        })

        const data = await response.json();

        if(data.token){
            localStorage.setItem('token', data.token);
            setToken(data.token);
            return true;
        }
        return false;
    }

    function signOut(){
        localStorage.removeItem('token');
        setToken(null);
    }

    return (
        <AuthContext.Provider
            value={{
                isAuthenticated, signIn, signOut
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}