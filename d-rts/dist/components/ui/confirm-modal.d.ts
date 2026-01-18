import * as React from "react";
export interface ConfirmModalProps {
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    title?: string;
    description?: string;
    confirmText?: string;
    cancelText?: string;
    onConfirm?: () => void;
    onCancel?: () => void;
    variant?: "primary" | "secondary" | "success" | "error" | "danger" | "warning" | "info";
    loading?: boolean;
}
declare const ConfirmModal: React.ForwardRefExoticComponent<ConfirmModalProps & React.RefAttributes<HTMLDivElement>>;
export { ConfirmModal };
