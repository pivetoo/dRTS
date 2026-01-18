import { SidebarItemData, SidebarGroup } from '../components/ui/sidebar';
export interface NavigationConfig {
    basePath?: string;
    items?: SidebarItemData[];
    groups?: SidebarGroup[];
}
export declare const useAppNavigation: (config: NavigationConfig) => {
    isActive: (path: string) => boolean;
    handleNavigate: (path: string) => void;
    createMenuItem: (key: string, label: string, path: string, icon?: React.ReactNode) => SidebarItemData;
    createMenuGroup: (label: string, items: Array<{
        key: string;
        label: string;
        path: string;
        icon?: React.ReactNode;
    }>) => SidebarGroup;
    currentPath: string;
};
