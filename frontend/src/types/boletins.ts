export interface Boletins {
    id: number;
    title: string;
    category: string;
    date: string;
    content: string;
    reference: string;
    proofreader: string;
    image: string | null;
    legend_image: string | null;
    created_by_id: number;
    created_in: string;
    autor?: {
        membro?: {
            name: string;
        };
    };
}