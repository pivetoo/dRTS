import * as React from "react";
export interface SidebarGroup {
    label: string;
    items: SidebarItemData[];
    collapsible?: boolean;
    defaultExpanded?: boolean;
}
export interface SidebarItemData {
    key: string;
    label: string;
    icon?: React.ReactNode;
    onClick?: () => void;
    active?: boolean;
    path?: string;
}
export type SidebarHeaderMode = 'default' | 'companyLogo';
export interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
    title?: string;
    subtitle?: string;
    logo?: React.ReactNode;
    items?: SidebarItemData[];
    groups?: SidebarGroup[];
    isCollapsed?: boolean;
    onToggleCollapse?: () => void;
    width?: number;
    collapsedWidth?: number;
    showCollapseButton?: boolean;
    onLogout?: () => void;
    onLogoClick?: () => void;
    companyLogo?: string;
    headerMode?: SidebarHeaderMode;
    headerLogo?: string;
    headerLogoCollapsed?: string;
}
declare const Sidebar: React.ForwardRefExoticComponent<SidebarProps & React.RefAttributes<HTMLDivElement>>;
declare const SidebarHeader: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
declare const SidebarContent: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
declare const SidebarFooter: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
declare const SidebarNav: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLElement> & React.RefAttributes<HTMLElement>>;
export interface SidebarNavItemProps extends React.HTMLAttributes<HTMLAnchorElement> {
    active?: boolean;
    icon?: React.ReactNode;
    href?: string;
}
declare const SidebarNavItem: React.ForwardRefExoticComponent<SidebarNavItemProps & React.RefAttributes<HTMLAnchorElement>>;
export { Sidebar, SidebarHeader, SidebarContent, SidebarFooter, SidebarNav, SidebarNavItem };
