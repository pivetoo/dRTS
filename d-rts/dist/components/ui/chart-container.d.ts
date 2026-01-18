import * as React from "react";
export interface ChartContainerProps {
    title?: string;
    icon?: React.ReactNode;
    children: React.ReactNode;
    emptyMessage?: string;
    isEmpty?: boolean;
    height?: number | string;
    className?: string;
}
export declare const ChartContainer: React.ForwardRefExoticComponent<ChartContainerProps & React.RefAttributes<HTMLDivElement>>;
