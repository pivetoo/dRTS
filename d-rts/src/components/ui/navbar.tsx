import * as React from "react"
import { Bell, ChevronDown } from "lucide-react"
import { cn } from "../../lib/utils"
import { Breadcrumb } from "./breadcrumb"
import type { BreadcrumbItem } from "./breadcrumb"

export interface NavbarProps extends React.HTMLAttributes<HTMLElement> {
  isCollapsed?: boolean
  breadcrumbs?: BreadcrumbItem[]
  user?: {
    name: string
    role: string
    avatar?: React.ReactNode
  }
  onNotificationClick?: () => void
  hasNotifications?: boolean
  userMenuTrigger?: React.ReactNode
  actions?: React.ReactNode
}

export type { BreadcrumbItem }

const Navbar = React.forwardRef<HTMLElement, NavbarProps>(
  (
    {
      className,
      isCollapsed = false,
      breadcrumbs = [],
      user,
      onNotificationClick,
      hasNotifications = false,
      userMenuTrigger,
      actions,
      ...props
    },
    ref
  ) => {
    return (
      <nav
        ref={ref}
        className={cn(
          "fixed top-0 right-0 h-[60px] bg-card flex items-center justify-between px-6 transition-all duration-300 z-[100] shadow-sm",
          className
        )}
        style={{
          left: isCollapsed ? "80px" : "260px",
        }}
        {...props}
      >
        <div className="flex items-center gap-4">
          {breadcrumbs && breadcrumbs.length > 0 && (
            <Breadcrumb items={breadcrumbs} />
          )}
        </div>

        <div className="flex items-center gap-4">
          {actions}

          {onNotificationClick && (
            <button
              onClick={onNotificationClick}
              className="relative p-2 rounded-sm transition-all hover:bg-accent text-muted-foreground hover:text-foreground active:scale-95"
            >
              <Bell className="h-5 w-5" />
              {hasNotifications && (
                <span className="absolute top-1 right-1 w-2 h-2 bg-destructive rounded-full" />
              )}
            </button>
          )}

          {userMenuTrigger}

          {user && !userMenuTrigger && (
            <button className="flex items-center gap-3 bg-transparent border-0 py-1 px-2.5 pr-2.5 rounded-md transition-all hover:bg-accent active:scale-[0.98]">
              <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground text-xs font-semibold overflow-hidden border-2 border-background">
                {user.avatar || user.name.charAt(0).toUpperCase()}
              </div>
              <div className="hidden md:flex flex-col items-start">
                <span className="text-sm font-semibold text-foreground leading-tight">
                  {user.name}
                </span>
                <span className="text-xs text-muted-foreground leading-tight font-medium">
                  {user.role}
                </span>
              </div>
              <ChevronDown className="h-4 w-4 text-muted-foreground" />
            </button>
          )}
        </div>
      </nav>
    )
  }
)
Navbar.displayName = "Navbar"

export { Navbar }
