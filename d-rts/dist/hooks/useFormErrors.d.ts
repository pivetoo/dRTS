import { ApiError } from '../services/http/types';
export declare const useFormErrors: () => {
    fieldErrors: Record<string, string>;
    setErrors: (error: ApiError) => void;
    clearErrors: () => void;
    getError: (field: string) => string;
};
