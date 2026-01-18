import * as React from "react";
export interface PieChartDataItem {
    name: string;
    value: number;
    [key: string]: any;
}
export interface PieChartProps {
    data: PieChartDataItem[];
    dataKey?: string;
    nameKey?: string;
    colors?: string[];
    showLabels?: boolean;
    showLegend?: boolean;
    showTooltip?: boolean;
    innerRadius?: number;
    outerRadius?: number;
    labelFormatter?: (props: any) => string;
    width?: number | `${number}%`;
    height?: number | `${number}%`;
    className?: string;
}
export declare const PieChart: React.ForwardRefExoticComponent<PieChartProps & React.RefAttributes<HTMLDivElement>>;
