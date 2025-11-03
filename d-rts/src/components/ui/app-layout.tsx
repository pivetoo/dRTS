import * as React from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "../../lib/utils"
import { Sidebar } from "../ui/sidebar"
import { Navbar } from "../ui/navbar"
import type { SidebarItemData, SidebarGroup } from "../ui/sidebar"
import type { BreadcrumbItem } from "../ui/breadcrumb"
import {
  Dropdown,
  DropdownTrigger,
  DropdownContent,
  DropdownItem,
  DropdownSeparator,
} from "../ui/dropdown"

export type { BreadcrumbItem, SidebarItemData, SidebarGroup }

export interface DropdownItemData {
  label: string
  icon?: React.ReactNode
  onClick?: () => void
  separator?: boolean
}

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
  userMenuItems?: DropdownItemData[]
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
  userMenuItems = [],
  hasNotifications = false,
  breadcrumbs = [],
  children,
}) => {
  const [isCollapsed, setIsCollapsed] = React.useState(initialCollapsed)

  const userMenuTrigger = (
    <Dropdown>
      <DropdownTrigger asChild>
        <button className="flex items-center gap-2 bg-transparent border-0 py-1 px-2.5 pr-2.5 rounded-md transition-all hover:bg-accent active:scale-[0.98] outline-none">
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
      </DropdownTrigger>
      <DropdownContent align="end" className="w-56">
        {userMenuItems.map((item, index) => (
          <React.Fragment key={index}>
            {item.separator ? (
              <DropdownSeparator />
            ) : (
              <DropdownItem
                onClick={item.onClick}
                className="cursor-pointer flex items-center gap-2"
              >
                {item.icon && <span className="flex-shrink-0">{item.icon}</span>}
                <span>{item.label}</span>
              </DropdownItem>
            )}
          </React.Fragment>
        ))}
      </DropdownContent>
    </Dropdown>
  )

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
        userMenuTrigger={userMenuTrigger}
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
