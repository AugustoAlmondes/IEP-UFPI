const API_URL = "http://localhost:3000";


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

    if (!response.ok) {
        throw new Error("Erro na requisição");
    }

    return response.json();
}

/**
 * Envia um arquivo como multipart/form-data.
 * NÃO define Content-Type manualmente — o browser adiciona o boundary correto.
 */
export async function apiUploadFile(
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

    if (!response.ok) {
        throw new Error("Erro ao enviar imagem");
    }

    return response.json();
}