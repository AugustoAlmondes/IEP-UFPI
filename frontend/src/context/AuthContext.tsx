import { createContext, useContext} from "react";
import type { AuthContextData } from "../types/auth";


export const AuthContext = createContext({} as AuthContextData);

export function useAuth() {
    return useContext(AuthContext);
}