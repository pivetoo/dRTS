import { BreadcrumbItem } from './breadcrumb';
import * as React from "react";
export interface NotificationItem {
    id: string;
    title: string;
    message: string;
    timestamp: Date;
    read: boolean;
    type?: 'info' | 'success' | 'warning' | 'error';
}
export interface Module {
    id: string;
    name: string;
    icon?: React.ReactNode;
}
export interface NavbarProps extends React.HTMLAttributes<HTMLElement> {
    isCollapsed?: boolean;
    breadcrumbs?: BreadcrumbItem[];
    user?: {
        name: string;
        role?: string;
        avatarUrl?: string;
    };
    notifications?: NotificationItem[];
    onNotificationRead?: (id: string) => void;
    onMarkAllAsRead?: () => void;
    onClearAllNotifications?: () => void;
    onViewAllNotifications?: () => void;
    userMenuTrigger?: React.ReactNode;
    actions?: React.ReactNode;
    modules?: Module[];
    currentModule?: string;
    onModuleChange?: (moduleId: string) => void;
    onLogout?: () => void;
}
export type { BreadcrumbItem };
declare const Navbar: React.ForwardRefExoticComponent<NavbarProps & React.RefAttributes<HTMLElement>>;
export { Navbar };
