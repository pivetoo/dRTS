import { VariantProps } from 'class-variance-authority';
import * as React from "react";
import * as ToastPrimitives from "@radix-ui/react-toast";
declare const toastIcons: {
    default: null;
    success: React.ForwardRefExoticComponent<Omit<import('lucide-react').LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
    destructive: React.ForwardRefExoticComponent<Omit<import('lucide-react').LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
    warning: React.ForwardRefExoticComponent<Omit<import('lucide-react').LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
    info: React.ForwardRefExoticComponent<Omit<import('lucide-react').LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
};
declare const ToastProvider: React.FC<ToastPrimitives.ToastProviderProps>;
declare const ToastViewport: React.ForwardRefExoticComponent<Omit<ToastPrimitives.ToastViewportProps & React.RefAttributes<HTMLOListElement>, "ref"> & React.RefAttributes<HTMLOListElement>>;
declare const Toast: React.ForwardRefExoticComponent<Omit<ToastPrimitives.ToastProps & React.RefAttributes<HTMLLIElement>, "ref"> & VariantProps<(props?: ({
    variant?: "success" | "warning" | "info" | "default" | "destructive" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string> & {
    showIcon?: boolean;
} & React.RefAttributes<HTMLLIElement>>;
declare const ToastAction: React.ForwardRefExoticComponent<Omit<ToastPrimitives.ToastActionProps & React.RefAttributes<HTMLButtonElement>, "ref"> & React.RefAttributes<HTMLButtonElement>>;
declare const ToastClose: React.ForwardRefExoticComponent<Omit<ToastPrimitives.ToastCloseProps & React.RefAttributes<HTMLButtonElement>, "ref"> & React.RefAttributes<HTMLButtonElement>>;
declare const ToastTitle: React.ForwardRefExoticComponent<Omit<ToastPrimitives.ToastTitleProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const ToastDescription: React.ForwardRefExoticComponent<Omit<ToastPrimitives.ToastDescriptionProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
type ToastProps = React.ComponentPropsWithoutRef<typeof Toast>;
type ToastActionElement = React.ReactElement<typeof ToastAction>;
export { type ToastProps, type ToastActionElement, ToastProvider, ToastViewport, Toast, ToastTitle, ToastDescription, ToastClose, ToastAction, toastIcons, };
