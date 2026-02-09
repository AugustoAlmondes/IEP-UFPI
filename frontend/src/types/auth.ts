import type { User } from "./user";

export type AuthContextData = {
    user: User | null;
    isAuthenticated: boolean;
    login: (token: string) => void;
    logout: () => void;
};