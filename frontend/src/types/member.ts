export type MemberApiData = {
    id: number;
    name: string;
    role: "ADMIN" | "ALUNO";
    profile_image: string | null;
    curriculum: string | null;
    user: {
        id: number;
        email: string;
    };
};
