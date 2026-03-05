/**
 * Decodes the payload of a JWT token (without signature verification).
 * Signature verification is done server-side; this is safe to use for
 * read-only claims like `role` to drive UI decisions.
 */
export function decodeJwtPayload<T = Record<string, unknown>>(token: string): T | null {
    try {
        const base64Payload = token.split('.')[1];
        const json = atob(base64Payload.replace(/-/g, '+').replace(/_/g, '/'));
        return JSON.parse(json) as T;
    } catch {
        return null;
    }
}

export type JwtPayload = {
    sub: number;
    email: string;
    role: "ADMIN" | "ALUNO";
    iat: number;
    exp: number;
};
