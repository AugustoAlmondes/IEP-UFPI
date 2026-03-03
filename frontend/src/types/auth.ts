import type { SignInProps } from './../providers/AuthProvider';

export type AuthContextData = {
    isAuthenticated: boolean;
    signIn: (props: SignInProps) => Promise<boolean>;
    signOut: () => void;
};