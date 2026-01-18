import * as React from "react";
export type Theme = "default";
interface ThemeContextType {
    theme: Theme;
    setTheme: (theme: Theme) => void;
    isDark: boolean;
    toggleDark: () => void;
}
export declare const useTheme: () => ThemeContextType;
interface ThemeProviderProps {
    children: React.ReactNode;
    defaultTheme?: Theme;
    defaultDark?: boolean;
}
export declare const ThemeProvider: React.FC<ThemeProviderProps>;
export {};
