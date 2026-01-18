import * as React from "react";
export interface BarChartDataItem {
    name: string;
    [key: string]: any;
}
export interface BarChartProps {
    data: BarChartDataItem[];
    dataKeys: string[];
    xAxisKey?: string;
    colors?: string[];
    showGrid?: boolean;
    showLegend?: boolean;
    showTooltip?: boolean;
    width?: number | `${number}%`;
    height?: number | `${number}%`;
    className?: string;
    barSize?: number;
    layout?: "horizontal" | "vertical";
}
export declare const BarChart: React.ForwardRefExoticComponent<BarChartProps & React.RefAttributes<HTMLDivElement>>;
