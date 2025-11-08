import * as React from "react"
import { cn } from "../../lib/utils"
import { Sidebar } from "../ui/sidebar"
import { Navbar, type Module, type NotificationItem } from "../ui/navbar"
import type { SidebarItemData, SidebarGroup } from "../ui/sidebar"
import type { BreadcrumbItem } from "../ui/breadcrumb"

export type { BreadcrumbItem, SidebarItemData, SidebarGroup, Module }

export interface AppLayoutProps {
  title: string
  subtitle?: string
  logo?: React.ReactNode
  user: {
    name: string
    email: string
    role: string
    avatar?: React.ReactNode
  }
  menuItems?: SidebarItemData[]
  menuGroups?: SidebarGroup[]
  initialCollapsed?: boolean
  onLogout?: () => void
  notifications?: NotificationItem[]
  onNotificationRead?: (id: string) => void
  onMarkAllAsRead?: () => void
  onViewAllNotifications?: () => void
  breadcrumbs?: BreadcrumbItem[]
  modules?: Module[]
  currentModule?: string
  onModuleChange?: (moduleId: string) => void
  onLogoClick?: () => void
  children?: React.ReactNode
}

export const AppLayout: React.FC<AppLayoutProps> = ({
  title,
  subtitle,
  logo,
  user,
  menuItems = [],
  menuGroups = [],
  initialCollapsed = true,
  onLogout,
  notifications,
  onNotificationRead,
  onMarkAllAsRead,
  onViewAllNotifications,
  breadcrumbs = [],
  modules,
  currentModule,
  onModuleChange,
  onLogoClick,
  children,
}) => {
  const [isCollapsed, setIsCollapsed] = React.useState(initialCollapsed)

  return (
    <div className="relative min-h-screen bg-background">
      <Sidebar
        title={title}
        subtitle={subtitle}
        logo={logo}
        items={menuItems}
        groups={menuGroups}
        isCollapsed={isCollapsed}
        onToggleCollapse={() => setIsCollapsed(!isCollapsed)}
        onLogout={onLogout}
        onLogoClick={onLogoClick}
      />

      <Navbar
        isCollapsed={isCollapsed}
        breadcrumbs={breadcrumbs}
        user={{
          name: user.name,
          role: user.role,
          avatar: user.avatar,
        }}
        notifications={notifications}
        onNotificationRead={onNotificationRead}
        onMarkAllAsRead={onMarkAllAsRead}
        onViewAllNotifications={onViewAllNotifications}
        modules={modules}
        currentModule={currentModule}
        onModuleChange={onModuleChange}
      />

      <main
        className={cn(
          "transition-all duration-300 pt-[52px] min-h-screen",
          isCollapsed ? "ml-[64px]" : "ml-[220px]"
        )}
      >
        <div className="w-full h-full p-6">
          {children}
        </div>
      </main>
    </div>
  )
}
