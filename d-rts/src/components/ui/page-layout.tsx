import * as React from "react"
import { Plus, Edit, Trash2, RefreshCw } from "lucide-react"
import { cn } from "../../lib/utils"
import { Button } from "./button"

export interface PageAction {
  key: string
  label: string
  icon?: React.ReactNode
  variant?: "primary" | "secondary" | "outline" | "ghost" | "danger"
  onClick: () => void
  disabled?: boolean
}

export interface PageLayoutProps {
  title: string
  icon?: React.ReactNode
  actions?: PageAction[]
  showDefaultActions?: boolean
  onAdd?: () => void
  onEdit?: () => void
  onDelete?: () => void
  onRefresh?: () => void
  children?: React.ReactNode
  className?: string
}

export const PageLayout: React.FC<PageLayoutProps> = ({
  title,
  icon,
  actions = [],
  showDefaultActions = true,
  onAdd,
  onEdit,
  onDelete,
  onRefresh,
  children,
  className
}) => {
  const defaultActions: PageAction[] = []

  if (showDefaultActions) {
    if (onAdd) {
      defaultActions.push({
        key: "add",
        label: "Incluir",
        icon: <Plus className="h-4 w-4" />,
        variant: "primary",
        onClick: onAdd
      })
    }

    if (onEdit) {
      defaultActions.push({
        key: "edit",
        label: "Editar",
        icon: <Edit className="h-4 w-4" />,
        variant: "outline",
        onClick: onEdit
      })
    }

    if (onDelete) {
      defaultActions.push({
        key: "delete",
        label: "Excluir",
        icon: <Trash2 className="h-4 w-4" />,
        variant: "outline",
        onClick: onDelete
      })
    }
  }

  const allActions = [...defaultActions, ...actions]

  return (
    <div className={cn("flex flex-col h-full w-full", className)}>
      <div className="flex items-center justify-between mb-6 pb-4 border-b">
        <div className="flex items-center gap-3">
          {icon && (
            <div className="flex items-center justify-center w-10 h-10 rounded-md bg-primary/10 text-primary">
              {icon}
            </div>
          )}
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold text-foreground tracking-tight">
              {title}
            </h1>
            {onRefresh && (
              <button
                onClick={onRefresh}
                className="p-1.5 rounded-md transition-colors hover:bg-accent text-muted-foreground hover:text-foreground"
                title="Atualizar"
              >
                <RefreshCw className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>

        {allActions.length > 0 && (
          <div className="flex items-center gap-2">
            {allActions.map(action => (
              <Button
                key={action.key}
                variant={action.variant || "outline"}
                size="sm"
                onClick={action.onClick}
                disabled={action.disabled}
                className="gap-2"
              >
                {action.icon}
                {action.label}
              </Button>
            ))}
          </div>
        )}
      </div>

      <div className="flex-1 overflow-auto">
        {children}
      </div>
    </div>
  )
}
