import * as React from "react";
interface GlobalLoaderContextType {
    isLoading: boolean;
    showLoader: () => void;
    hideLoader: () => void;
}
export declare const useGlobalLoader: () => GlobalLoaderContextType;
interface GlobalLoaderProviderProps {
    children: React.ReactNode;
}
export declare const GlobalLoaderProvider: React.FC<GlobalLoaderProviderProps>;
export {};
