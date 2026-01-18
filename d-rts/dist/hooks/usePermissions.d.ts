interface UsePermissionsReturn {
    permissions: string[];
    isSuperUser: boolean;
    hasPermission: (permission: string) => boolean;
    hasAnyPermission: (permissions: string[]) => boolean;
    hasAllPermissions: (permissions: string[]) => boolean;
}
export declare function usePermissions(): UsePermissionsReturn;
export {};
