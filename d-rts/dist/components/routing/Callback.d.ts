import { default as React } from 'react';
export interface CallbackProps {
    redirectTo?: string;
    identityProviderUrl?: string;
    onSuccess?: () => void;
    onError?: (error: Error) => void;
}
export declare const Callback: React.FC<CallbackProps>;
