import * as React from "react";
export interface AreaChartDataItem {
    name: string;
    [key: string]: any;
}
export interface AreaChartProps {
    data: AreaChartDataItem[];
    dataKeys: string[];
    xAxisKey?: string;
    colors?: string[];
    showGrid?: boolean;
    showLegend?: boolean;
    showTooltip?: boolean;
    width?: number | `${number}%`;
    height?: number | `${number}%`;
    className?: string;
    strokeWidth?: number;
    fillOpacity?: number;
}
export declare const AreaChart: React.ForwardRefExoticComponent<AreaChartProps & React.RefAttributes<HTMLDivElement>>;
