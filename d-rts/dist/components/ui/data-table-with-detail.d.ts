import * as React from "react";
export interface DataTableWithDetailColumn<T = any> {
    key: string;
    title: string;
    dataIndex?: keyof T;
    render?: (value: any, record: T) => React.ReactNode;
    width?: string | number;
}
export interface DataTableWithDetailProps<T = any> {
    columns: DataTableWithDetailColumn<T>[];
    data: T[];
    rowKey: keyof T | ((record: T) => string | number);
    selectedRow?: T | null;
    onRowSelect?: (record: T | null) => void;
    renderDetail?: (record: T) => React.ReactNode;
    renderPagination?: () => React.ReactNode;
    emptyDetailMessage?: string;
    emptyDetailDescription?: string;
    className?: string;
    tableClassName?: string;
    detailClassName?: string;
    gridRatio?: [number, number];
}
export declare function DataTableWithDetail<T = any>({ columns, data, rowKey, selectedRow, onRowSelect, renderDetail, renderPagination, emptyDetailMessage, emptyDetailDescription, className, tableClassName, detailClassName, gridRatio, }: DataTableWithDetailProps<T>): import("react/jsx-runtime").JSX.Element;
