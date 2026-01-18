import { Module, NotificationItem } from '../ui/navbar';
import { SidebarItemData, SidebarGroup, SidebarHeaderMode } from '../ui/sidebar';
import { BreadcrumbItem } from '../ui/breadcrumb';
import * as React from "react";
export type { BreadcrumbItem, SidebarItemData, SidebarGroup, SidebarHeaderMode, Module };
export interface AppLayoutProps {
    title: string;
    subtitle?: string;
    logo?: React.ReactNode;
    user: {
        name: string;
        email: string;
        role?: string;
        avatarUrl?: string;
    };
    menuItems?: SidebarItemData[];
    menuGroups?: SidebarGroup[];
    initialCollapsed?: boolean;
    onLogout?: () => void;
    notifications?: NotificationItem[];
    onNotificationRead?: (id: string) => void;
    onMarkAllAsRead?: () => void;
    onClearAllNotifications?: () => void;
    onViewAllNotifications?: () => void;
    breadcrumbs?: BreadcrumbItem[];
    modules?: Module[];
    currentModule?: string;
    onModuleChange?: (moduleId: string) => void;
    onLogoClick?: () => void;
    companyLogo?: string;
    headerMode?: SidebarHeaderMode;
    headerLogo?: string;
    headerLogoCollapsed?: string;
    children?: React.ReactNode;
}
export declare const AppLayout: React.FC<AppLayoutProps>;
