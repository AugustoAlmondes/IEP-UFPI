const API_URL = import.meta.env.VITE_API_URL;
import { createClient } from "@supabase/supabase-js"

const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_PUBLISHABLE_DEFAULT_KEY)

export async function apiFetch(
    endpoint: string,
    options: RequestInit = {}
) {
    const token = localStorage.getItem('token');

    const headers = {
        'Content-Type': 'application/json',
        ...(token && { Authorization: `Bearer ${token}` }),
        ...options.headers
    };

    const response = await fetch(`${API_URL}${endpoint}`, {
        ...options,
        headers
    })

    if (response.status === 401) {
        localStorage.removeItem('token');
        window.location.href = '/';
        throw new Error("Sessão expirada. Faça login novamente.");
    }

    if (!response.ok) {
        throw new Error("Erro na requisição");
    }

    return response.json();
}

/**
 * Envia um arquivo como multipart/form-data.
 * NÃO define Content-Type manualmente — o browser adiciona o boundary correto.
 */
export async function apiUploadFileDepreacated(
    endpoint: string,
    file: File,
    fieldName = 'file'
): Promise<{ url: string }> {
    const token = localStorage.getItem('token');

    const formData = new FormData();
    formData.append(fieldName, file);

    const response = await fetch(`${API_URL}${endpoint}`, {
        method: 'POST',
        headers: {
            ...(token && { Authorization: `Bearer ${token}` }),
        },
        body: formData,
    });

    if (response.status === 401) {
        localStorage.removeItem('token');
        window.location.href = '/';
        throw new Error("Sessão expirada. Faça login novamente.");
    }

    if (!response.ok) {
        throw new Error("Erro ao enviar imagem");
    }

    return response.json();
}

export async function apiUploadFile(file: File) {
    const filename = `${Date.now()}-${file.name}`;
    const { error: uploadError } = await supabase.storage
        .from('users_profile')
        .upload('public/' + filename, file);

    if (uploadError) {
        throw uploadError;
    }

    const { data: publicUrlData } = supabase.storage
        .from('users_profile')
        .getPublicUrl('public/' + filename);

    return publicUrlData.publicUrl;
}