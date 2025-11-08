import * as React from "react"
import { ChevronLeft, ChevronRight, LogOut } from "lucide-react"
import { cn } from "../../lib/utils"

export interface SidebarGroup {
  label: string
  items: SidebarItemData[]
}

export interface SidebarItemData {
  key: string
  label: string
  icon?: React.ReactNode
  onClick?: () => void
  active?: boolean
}

export interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string
  subtitle?: string
  logo?: React.ReactNode
  items?: SidebarItemData[]
  groups?: SidebarGroup[]
  isCollapsed?: boolean
  onToggleCollapse?: () => void
  width?: number
  collapsedWidth?: number
  showCollapseButton?: boolean
  onLogout?: () => void
  onLogoClick?: () => void
}

const Sidebar = React.forwardRef<HTMLDivElement, SidebarProps>(
  (
    {
      className,
      title,
      subtitle,
      logo,
      items = [],
      groups = [],
      isCollapsed = false,
      onToggleCollapse,
      width = 220,
      collapsedWidth = 64,
      showCollapseButton = true,
      onLogout,
      onLogoClick,
      ...props
    },
    ref
  ) => {
    const [internalCollapsed, setInternalCollapsed] = React.useState(false)

    const collapsed = onToggleCollapse ? isCollapsed : internalCollapsed
    const handleToggle = onToggleCollapse || (() => setInternalCollapsed(!internalCollapsed))

    const renderItems = (itemList: SidebarItemData[]) =>
      itemList.map((item) => (
        <div
          key={item.key}
          onClick={item.onClick}
          className={cn(
            "relative flex items-center cursor-pointer transition-all my-0.5 font-medium text-muted-foreground",
            collapsed ? "justify-center px-2.5 py-2.5" : "justify-start px-4 py-2.5",
            item.active && "bg-primary/5 text-primary font-semibold",
            "hover:bg-accent hover:text-primary",
            item.active && "hover:bg-primary/10"
          )}
        >
          {item.active && (
            <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-primary" />
          )}
          {item.icon && (
            <div className={cn("flex items-center justify-center w-5 h-5", !collapsed && "mr-3")}>
              {item.icon}
            </div>
          )}
          {!collapsed && (
            <span className="text-sm whitespace-nowrap overflow-hidden text-ellipsis">
              {item.label}
            </span>
          )}
        </div>
      ))

    return (
      <aside
        ref={ref}
        className={cn("fixed left-0 top-0 h-screen bg-card flex flex-col z-40 transition-all duration-300 overflow-visible shadow-sm", className)}
        style={{
          width: collapsed ? `${collapsedWidth}px` : `${width}px`,
        }}
        {...props}
      >
        {(title || subtitle || logo) && (
          <div
            onClick={onLogoClick}
            className={cn(
              "flex items-center min-h-[60px] bg-card mb-1",
              collapsed ? "justify-center px-2 py-4.5" : "justify-start px-5 py-4.5",
              onLogoClick && "cursor-pointer hover:bg-accent transition-colors"
            )}
          >
            {logo}
            {!collapsed && (
              <div className="flex-1 overflow-hidden ml-3">
                {title && <div className="font-bold text-base text-foreground leading-tight tracking-tight">{title}</div>}
                {subtitle && <div className="text-xs text-secondary font-medium leading-tight mt-1">{subtitle}</div>}
              </div>
            )}
          </div>
        )}

        <div className="flex-1 overflow-y-auto overflow-x-hidden py-4 scrollbar-hide">
          {items.length > 0 && renderItems(items)}

          {groups.map((group) => (
            <div key={group.label} className="mb-6">
              {!collapsed && (
                <div className="px-4 py-1 text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">
                  {group.label}
                </div>
              )}
              {renderItems(group.items)}
            </div>
          ))}
        </div>

        {onLogout && (
          <div className={cn("mt-auto", collapsed ? "p-2" : "p-4")}>
            <div
              onClick={onLogout}
              className={cn(
                "flex items-center cursor-pointer rounded-md p-3 text-destructive text-sm font-medium transition-colors hover:bg-destructive/10",
                collapsed ? "justify-center" : "justify-start gap-3"
              )}
            >
              <LogOut className="h-4 w-4" />
              {!collapsed && <span>Sair</span>}
            </div>
          </div>
        )}

        {showCollapseButton && (
          <button
            onClick={handleToggle}
            className="absolute bottom-4 -right-3.5 bg-card border border-border rounded-sm p-1.5 cursor-pointer flex items-center justify-center transition-all w-7 h-7 shadow-sm hover:bg-accent hover:shadow-md active:scale-95"
          >
            <div className="w-4 h-4 text-muted-foreground flex items-center justify-center">
              {collapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
            </div>
          </button>
        )}
      </aside>
    )
  }
)
Sidebar.displayName = "Sidebar"

const SidebarHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex items-center border-b p-4", className)} {...props} />
  )
)
SidebarHeader.displayName = "SidebarHeader"

const SidebarContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex-1 overflow-y-auto p-4", className)} {...props} />
  )
)
SidebarContent.displayName = "SidebarContent"

const SidebarFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("border-t p-4", className)} {...props} />
  )
)
SidebarFooter.displayName = "SidebarFooter"

const SidebarNav = React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  ({ className, ...props }, ref) => (
    <nav ref={ref} className={cn("flex flex-col space-y-1", className)} {...props} />
  )
)
SidebarNav.displayName = "SidebarNav"

export interface SidebarNavItemProps extends React.HTMLAttributes<HTMLAnchorElement> {
  active?: boolean
  icon?: React.ReactNode
  href?: string
}

const SidebarNavItem = React.forwardRef<HTMLAnchorElement, SidebarNavItemProps>(
  ({ className, active, icon, children, ...props }, ref) => {
    return (
      <a
        ref={ref}
        className={cn(
          "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
          active && "bg-accent text-accent-foreground",
          className
        )}
        {...props}
      >
        {icon && <span className="flex-shrink-0">{icon}</span>}
        <span className="flex-1">{children}</span>
      </a>
    )
  }
)
SidebarNavItem.displayName = "SidebarNavItem"

export { Sidebar, SidebarHeader, SidebarContent, SidebarFooter, SidebarNav, SidebarNavItem }
