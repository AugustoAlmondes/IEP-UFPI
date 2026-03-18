import { createContext, useContext } from "react";
import type { BoletinsContextData } from "../types/boletins";

export const BoletinsContext = createContext({} as BoletinsContextData)

export default function useBoletins() {
    return useContext(BoletinsContext);
}