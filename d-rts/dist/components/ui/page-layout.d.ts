import * as React from "react";
export interface PageAction {
    key: string;
    label: string;
    icon?: React.ReactNode;
    variant?: "primary" | "secondary" | "outline" | "outline-primary" | "outline-secondary" | "outline-warning" | "outline-danger" | "ghost" | "danger";
    onClick: () => void;
    disabled?: boolean;
}
export interface PageLayoutProps {
    title: string;
    subtitle?: string;
    icon?: React.ReactNode;
    actions?: PageAction[];
    showDefaultActions?: boolean;
    onAdd?: () => void;
    onEdit?: () => void;
    onDelete?: () => void;
    onRefresh?: () => void;
    selectedRowsCount?: number;
    children?: React.ReactNode;
    className?: string;
}
export declare const PageLayout: React.FC<PageLayoutProps>;
