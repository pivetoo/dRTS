import { IdentifyResult, LoginResult, LoginCredentials, ContractLoginRequest, RefreshTokenResponse, ActiveSession } from '../../types/auth';
export declare class AuthService {
    static identify(credentials: LoginCredentials): Promise<IdentifyResult | LoginResult | null>;
    static loginWithContract(request: ContractLoginRequest): Promise<LoginResult>;
    static login(credentials: LoginCredentials): Promise<LoginResult>;
    static logout(): void;
    static isAuthenticated(): boolean;
    static getCurrentUser(): any | null;
    static getAccessToken(): string | null;
    static getRefreshToken(): string | null;
    static logoutFromServer(): Promise<void>;
    static logoutAllDevices(): Promise<void>;
    static refreshAccessToken(): Promise<RefreshTokenResponse | null>;
    static revokeRefreshToken(refreshToken?: string): Promise<void>;
    static getActiveSessions(): Promise<ActiveSession[]>;
    static isTokenExpiringSoon(token: string, minutesBeforeExpiry?: number): boolean;
    static ensureValidToken(): Promise<boolean>;
}
