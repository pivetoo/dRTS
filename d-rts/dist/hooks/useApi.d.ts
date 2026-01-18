import { ApiError, UseApiOptions } from '../services/http/types';
export declare function useApi<T = any>(options?: UseApiOptions): {
    execute: (apiCall: () => Promise<any>) => Promise<any>;
    reset: () => void;
    isLoading: boolean;
    hasError: boolean;
    hasData: boolean;
    data: T | null;
    loading: boolean;
    error: ApiError | null;
};
