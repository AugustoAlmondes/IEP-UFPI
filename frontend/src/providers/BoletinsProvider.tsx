import React, { useEffect, useState } from "react";
import type { Boletins } from "../types/boletins";
import { apiFetch } from "../service/api";
import { BoletinsContext } from "../context/BoletinsContext";

export function BoletinsProvider({ children }: { children: React.ReactNode }) {

    const [boletins, setBoletins] = useState<Boletins[]>([])
    const [loading, setLoading] = useState<boolean>(true)

    const handleDelete = (id: number) => {
        setBoletins(prev => prev.filter(b => b.id !== id));
    };

    useEffect(() => {
        const fetchBoletins = async () => {
            try {
                setLoading(true)
                const response = await apiFetch('/boletins', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                setBoletins(response);
            } catch (error) {
                setLoading(false)
                console.error('Erro ao buscar boletins:', error);
            }
            setLoading(false)
        };
        fetchBoletins();
    }, [])

    return (
        <BoletinsContext.Provider value={{ boletins, loading, handleDelete }}>
            {children}
        </BoletinsContext.Provider>
    )
}