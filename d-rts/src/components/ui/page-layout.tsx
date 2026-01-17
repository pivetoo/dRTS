import * as React from "react"
import { Plus, Edit, Trash2, RefreshCw } from "lucide-react"
import { cn } from "../../lib/utils"
import { Button } from "./button"
import { useToast } from "./use-toast"

export interface PageAction {
  key: string
  label: string
  icon?: React.ReactNode
  variant?: "primary" | "secondary" | "outline" | "outline-primary" | "outline-secondary" | "outline-warning" | "outline-danger" | "ghost" | "danger"
  onClick: () => void
  disabled?: boolean
}

export interface PageLayoutProps {
  title: string
  subtitle?: string
  icon?: React.ReactNode
  actions?: PageAction[]
  showDefaultActions?: boolean
  onAdd?: () => void
  onEdit?: () => void
  onDelete?: () => void
  onRefresh?: () => void
  selectedRowsCount?: number
  children?: React.ReactNode
  className?: string
}

export const PageLayout: React.FC<PageLayoutProps> = ({
  title,
  subtitle,
  icon,
  actions = [],
  showDefaultActions = true,
  onAdd,
  onEdit,
  onDelete,
  onRefresh,
  selectedRowsCount = 0,
  children,
  className
}) => {
  const { toast } = useToast()
  const [isRefreshing, setIsRefreshing] = React.useState(false)

  const handleRefresh = async () => {
    if (!onRefresh || isRefreshing) return
    setIsRefreshing(true)
    try {
      await onRefresh()
    } finally {
      setTimeout(() => setIsRefreshing(false), 600)
    }
  }

  const handleEdit = () => {
    if (selectedRowsCount === 0) {
      toast({
        title: 'Atenção',
        description: 'Selecione um registro para editar.',
        variant: 'warning',
      })
      return
    }
    if (selectedRowsCount > 1) {
      toast({
        title: 'Atenção',
        description: 'Selecione apenas um registro para editar.',
        variant: 'warning',
      })
      return
    }
    onEdit?.()
  }

  const handleDelete = () => {
    if (selectedRowsCount === 0) {
      toast({
        title: 'Atenção',
        description: 'Selecione ao menos um registro para excluir.',
        variant: 'warning',
      })
      return
    }
    onDelete?.()
  }

  const defaultActions: PageAction[] = []

  if (showDefaultActions) {
    if (onAdd) {
      defaultActions.push({
        key: "add",
        label: "Incluir",
        icon: <Plus className="h-4 w-4" />,
        variant: "secondary",
        onClick: onAdd
      })
    }

    if (onEdit) {
      defaultActions.push({
        key: "edit",
        label: "Editar",
        icon: <Edit className="h-4 w-4" />,
        variant: "outline",
        onClick: handleEdit
      })
    }

    if (onDelete) {
      defaultActions.push({
        key: "delete",
        label: "Excluir",
        icon: <Trash2 className="h-4 w-4" />,
        variant: "outline",
        onClick: handleDelete
      })
    }
  }

  const allActions = [...defaultActions, ...actions]

  return (
    <div className={cn("flex flex-col h-full w-full", className)}>
      <div className="flex items-center justify-between mb-4 px-4 py-3 border rounded-lg bg-muted/30">
        <div className="flex items-center gap-3">
          {icon && (
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 text-primary border border-primary/20 shadow-sm hover:shadow hover:scale-[1.02] transition-all duration-200 cursor-default">
              {icon}
            </div>
          )}
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-bold text-foreground tracking-tight">
                {title}
              </h1>
              {onRefresh && (
                <button
                  onClick={handleRefresh}
                  disabled={isRefreshing}
                  className={cn(
                    "p-1.5 rounded-md transition-all hover:bg-accent text-muted-foreground hover:text-foreground",
                    isRefreshing && "text-primary"
                  )}
                  title="Atualizar"
                >
                  <RefreshCw className={cn("h-4 w-4 transition-transform", isRefreshing && "animate-spin")} />
                </button>
              )}
            </div>
            {subtitle && (
              <p className="text-sm text-muted-foreground mt-0.5">
                {subtitle}
              </p>
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

      <div className="overflow-auto">
        {children}
      </div>
    </div>
  )
}
