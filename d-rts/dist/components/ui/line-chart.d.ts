import * as React from "react";
export interface LineChartDataItem {
    name: string;
    [key: string]: any;
}
export interface LineChartProps {
    data: LineChartDataItem[];
    dataKeys: string[];
    xAxisKey?: string;
    colors?: string[];
    showGrid?: boolean;
    showLegend?: boolean;
    showTooltip?: boolean;
    showDots?: boolean;
    width?: number | `${number}%`;
    height?: number | `${number}%`;
    className?: string;
    strokeWidth?: number;
}
export declare const LineChart: React.ForwardRefExoticComponent<LineChartProps & React.RefAttributes<HTMLDivElement>>;
