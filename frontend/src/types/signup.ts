export type SignupPayload = {
    email: string;
    password: string;
    name: string;
    role?: 'ADMIN' | 'ALUNO';
    curriculum?: string;
};
