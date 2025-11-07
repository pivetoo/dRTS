import * as React from "react"
import { cn } from "../../lib/utils"
import { Sidebar } from "../ui/sidebar"
import { Navbar } from "../ui/navbar"
import type { SidebarItemData, SidebarGroup } from "../ui/sidebar"
import type { BreadcrumbItem } from "../ui/breadcrumb"

export type { BreadcrumbItem, SidebarItemData, SidebarGroup }

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
  onNotificationClick?: () => void
  hasNotifications?: boolean
  breadcrumbs?: BreadcrumbItem[]
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
  onNotificationClick,
  hasNotifications = false,
  breadcrumbs = [],
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
      />

      <Navbar
        isCollapsed={isCollapsed}
        breadcrumbs={breadcrumbs}
        user={{
          name: user.name,
          role: user.role,
          avatar: user.avatar,
        }}
        onNotificationClick={onNotificationClick}
        hasNotifications={hasNotifications}
      />

      <main
        className={cn(
          "transition-all duration-300 pt-[60px] min-h-screen",
          isCollapsed ? "ml-[80px]" : "ml-[260px]"
        )}
      >
        <div className="w-full h-full p-6">
          {children}
        </div>
      </main>
    </div>
  )
}
