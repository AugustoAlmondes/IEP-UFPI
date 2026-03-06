export type MemberApiData = {
    id: number;
    name: string;
    profile_image: string | null;
    curriculum: string | null;
    user: {
        id: number;
        email: string;
    };
};
