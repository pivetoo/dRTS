import { AxiosRequestConfig } from 'axios';
import { ApiResponse } from './types';
export declare const setGlobalLoaderContext: (context: any) => void;
export declare const setApiBaseURL: (url: string) => void;
export declare const getApiBaseURL: () => string;
export declare const setIdentityProviderURL: (url: string) => void;
export declare const getIdentityProviderURL: () => string;
declare class HttpClient {
    private instance;
    constructor();
    updateBaseURL(url: string): void;
    private setupInterceptors;
    private transformError;
    get<T = any>(url: string, config?: AxiosRequestConfig): Promise<ApiResponse<T>>;
    post<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<ApiResponse<T>>;
    put<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<ApiResponse<T>>;
    delete<T = any>(url: string, config?: AxiosRequestConfig): Promise<ApiResponse<T>>;
    patch<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<ApiResponse<T>>;
}
export declare const httpClient: HttpClient;
export {};
