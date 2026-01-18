import * as React from "react";
export interface BreadcrumbItem {
    label: string;
    onClick?: () => void;
}
export interface BreadcrumbProps extends React.HTMLAttributes<HTMLElement> {
    items: BreadcrumbItem[];
    separator?: React.ReactNode;
}
declare const Breadcrumb: React.ForwardRefExoticComponent<BreadcrumbProps & React.RefAttributes<HTMLElement>>;
export { Breadcrumb };
