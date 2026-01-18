import { default as React } from 'react';
export interface ProtectedRouteProps {
    children: React.ReactElement;
    isAuthenticated: boolean;
    redirectTo?: string;
    externalRedirect?: boolean;
}
export declare const ProtectedRoute: React.FC<ProtectedRouteProps>;
