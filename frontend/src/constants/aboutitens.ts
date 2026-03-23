import type { AboutItem } from "../types/aboutitems";
import ObjectiveImage from "../assets/image_2.jpeg";
import InstitutionalImage from "../assets/image_3.jpeg";
import TeamImage from "../assets/image_1.jpeg";

export const aboutItems:AboutItem[] = [
    {
        title: "OBJETIVO DO IEP",
        description: "Promover e publicar eventos, pesquisas e ensaios produzidos a partir do Grupo de Análise de Economia Política (GAEP) e do Programa de Pesquisas sobre o Nordeste (ProNordeste), ambos da Universidade Federal do Piauí (UFPI) em parceria com docentes de outras IES`s.",
        imageUrl: ObjectiveImage,
        side: "left"
    }, {
        title: "INSTITUCIONAL",
        description: "O Instituto de Economia Política (IEP) da Universidade Federal do Piauí (IEP), surgiu no ano de 2025 a partir da necessidade de ampliação das atividades debates no ceio do Grupo de Análise de Economia Política (GAEP) (UFPI) (fundado em maio de 2024), em função de promover as publicidades dos debates e pesquisas do Grupo e incorporar as atividades inseridas no Programa da Pesquisas sobre o Nordeste (ProNordeste) (UFPI) (2025). ",
        imageUrl: InstitutionalImage,
        url: "/institutional",
        side: "right"
    }, {
        title: "EQUIPE",
        description: "Promover e publicar eventos, pesquisas e ensaios produzidos a partir do Grupo de Análise de Economia Política (GAEP) e do Programa de Pesquisas sobre o Nordeste (ProNordeste), ambos da Universidade Federal do Piauí (UFPI) em parceria  com docentes de outras IES`s.",
        imageUrl: TeamImage,
        url: "/equipe",
        side: "left"
    }
]