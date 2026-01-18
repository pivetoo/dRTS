import { AuthContextData } from '../types/auth';
import * as React from "react";
export declare const useAuth: () => AuthContextData;
interface AuthProviderProps {
    children: React.ReactNode;
    onLogout?: () => void;
}
export declare const AuthProvider: React.FC<AuthProviderProps>;
export {};
