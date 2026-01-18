import { SidebarItemData, SidebarGroup } from '../components/ui/sidebar';
import { BreadcrumbItem } from '../components/ui/breadcrumb';
interface UseBreadcrumbsOptions {
    pathname: string;
    navigate: (path: string) => void;
    home?: {
        label: string;
        path: string;
    };
    menuItems?: SidebarItemData[];
    menuGroups?: SidebarGroup[];
}
export declare function useBreadcrumbs(options: UseBreadcrumbsOptions): BreadcrumbItem[];
export {};
