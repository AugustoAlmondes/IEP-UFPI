import type { SignInProps } from './../providers/AuthProvider';

export type AuthContextData = {
    isAuthenticated: boolean;
    user: string;
    signIn: (props: SignInProps) => Promise<boolean>;
    signOut: () => void;
};