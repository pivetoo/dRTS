import * as React from "react";
export interface DataTableColumn<T = any> {
    key: string;
    title: string;
    dataIndex?: keyof T;
    render?: (value: any, record: T, index: number) => React.ReactNode;
    sortable?: boolean;
    width?: string | number;
}
export interface DataTableProps<T = any> {
    columns: DataTableColumn<T>[];
    data: T[];
    loading?: boolean;
    rowKey: keyof T | ((record: T) => string | number);
    selectable?: boolean;
    selectedRows?: T[];
    onSelectionChange?: (selected: T[]) => void;
    onRowClick?: (record: T) => void;
    onRowDoubleClick?: (record: T) => void;
    className?: string;
    emptyText?: string;
    dragSelect?: boolean;
    pageSize?: number;
    pageSizeOptions?: number[];
}
export declare function DataTable<T = any>({ columns, data, loading, rowKey, selectable, selectedRows, onSelectionChange, onRowClick, onRowDoubleClick, className, emptyText, dragSelect, pageSize: initialPageSize, pageSizeOptions }: DataTableProps<T>): import("react/jsx-runtime").JSX.Element;
