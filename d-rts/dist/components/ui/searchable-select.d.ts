import * as React from "react";
export interface SearchableSelectOption {
    label: string;
    value: string;
}
export interface SearchableSelectProps {
    options: SearchableSelectOption[];
    value?: string;
    onValueChange?: (value: string) => void;
    placeholder?: string;
    searchPlaceholder?: string;
    disabled?: boolean;
    className?: string;
    emptyMessage?: string;
}
export declare const SearchableSelect: React.ForwardRefExoticComponent<SearchableSelectProps & React.RefAttributes<HTMLButtonElement>>;
