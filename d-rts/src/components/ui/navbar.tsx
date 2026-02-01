import * as React from "react"
import { Bell, ChevronDown, LogOut, Palette, Check, Moon, Sun } from "lucide-react"
import { cn, getInitials } from "../../lib/utils"
import { getApiBaseURL } from "../../services/http/client"
import { Breadcrumb } from "./breadcrumb"
import type { BreadcrumbItem } from "./breadcrumb"
import { useTheme, type Theme } from "./use-theme"
import logoEmpresa from "../../assets/logo-empresa.svg"

export interface NotificationItem {
  id: string
  title: string
  message: string
  timestamp: Date
  read: boolean
  type?: 'info' | 'success' | 'warning' | 'error'
}

export interface Module {
  id: string
  name: string
  icon?: React.ReactNode
}

export interface NavbarProps extends React.HTMLAttributes<HTMLElement> {
  isCollapsed?: boolean
  breadcrumbs?: BreadcrumbItem[]
  user?: {
    name: string
    role?: string
    avatarUrl?: string
  }
  companyName?: string
  notifications?: NotificationItem[]
  onNotificationRead?: (id: string) => void
  onMarkAllAsRead?: () => void
  onClearAllNotifications?: () => void
  onViewAllNotifications?: () => void
  userMenuTrigger?: React.ReactNode
  actions?: React.ReactNode
  modules?: Module[]
  currentModule?: string
  onModuleChange?: (moduleId: string) => void
  onLogout?: () => void
}

export type { BreadcrumbItem }

const themes: { value: Theme; label: string; color: string }[] = [
  { value: "default", label: "Padrão", color: "bg-primary" },
]


const Navbar = React.forwardRef<HTMLElement, NavbarProps>(
  (
    {
      className,
      isCollapsed = false,
      breadcrumbs = [],
      user,
      companyName,
      notifications = [],
      onNotificationRead,
      onMarkAllAsRead,
      onClearAllNotifications,
      onViewAllNotifications,
      userMenuTrigger,
      actions,
      modules,
      currentModule,
      onModuleChange,
      onLogout,
      ...props
    },
    ref
  ) => {
    const { theme, setTheme, isDark, toggleDark } = useTheme()
    const [isUserMenuOpen, setIsUserMenuOpen] = React.useState(false)
    const [isThemeMenuOpen, setIsThemeMenuOpen] = React.useState(false)
    const [isAboutModalOpen, setIsAboutModalOpen] = React.useState(false)
    const [isNotificationMenuOpen, setIsNotificationMenuOpen] = React.useState(false)
    const [isModuleSwitcherOpen, setIsModuleSwitcherOpen] = React.useState(false)

    const renderAvatar = () => {
      if (user?.avatarUrl) {
        const baseUrl = getApiBaseURL().replace('/api', '')
        const fullUrl = user.avatarUrl.startsWith('http')
          ? user.avatarUrl
          : `${baseUrl}${user.avatarUrl}`
        return (
          <img
            src={fullUrl}
            alt={user.name}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        )
      }
      return getInitials(user?.name || '')
    }

    const unreadCount = notifications.filter(n => !n.read).length
    const hasNotifications = unreadCount > 0

    const getNotificationIcon = (type?: 'info' | 'success' | 'warning' | 'error') => {
      switch (type) {
        case 'success':
          return (
            <div className="w-8 h-8 rounded-full bg-success/10 flex items-center justify-center flex-shrink-0">
              <svg className="h-4 w-4 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          )
        case 'warning':
          return (
            <div className="w-8 h-8 rounded-full bg-warning/10 flex items-center justify-center flex-shrink-0">
              <svg className="h-4 w-4 text-warning" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
          )
        case 'error':
          return (
            <div className="w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0">
              <svg className="h-4 w-4 text-destructive" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          )
        default:
          return (
            <div className="w-8 h-8 rounded-full bg-info/10 flex items-center justify-center flex-shrink-0">
              <svg className="h-4 w-4 text-info" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          )
      }
    }

    const formatTimestamp = (date: Date) => {
      const now = new Date()
      const diff = now.getTime() - date.getTime()
      const minutes = Math.floor(diff / 60000)
      const hours = Math.floor(diff / 3600000)
      const days = Math.floor(diff / 86400000)

      if (minutes < 1) return 'Agora'
      if (minutes < 60) return `${minutes}m atrás`
      if (hours < 24) return `${hours}h atrás`
      if (days < 7) return `${days}d atrás`
      return date.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' })
    }
    return (
      <nav
        ref={ref}
        className={cn(
          "fixed top-0 right-0 h-[52px] bg-card flex items-center justify-between px-5 transition-all duration-300 z-[100] shadow-sm",
          className
        )}
        style={{
          left: isCollapsed ? "64px" : "220px",
        }}
        {...props}
      >
        <div className="flex items-center gap-4">
          {modules && modules.length > 0 && onModuleChange && (
            <div className="relative">
              <button
                onClick={() => setIsModuleSwitcherOpen(!isModuleSwitcherOpen)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-md hover:bg-accent transition-colors"
              >
                {modules.find(m => m.id === currentModule)?.icon && (
                  <span className="text-lg">
                    {modules.find(m => m.id === currentModule)?.icon}
                  </span>
                )}
                <span className="font-semibold text-sm text-foreground">
                  {modules.find(m => m.id === currentModule)?.name || 'Selecione'}
                </span>
                <ChevronDown className="h-4 w-4 text-muted-foreground" />
              </button>

              {isModuleSwitcherOpen && (
                <>
                  <div
                    className="fixed inset-0 z-40"
                    onClick={() => setIsModuleSwitcherOpen(false)}
                  />
                  <div className="absolute left-0 top-full mt-2 w-64 bg-popover border border-border rounded-lg shadow-lg z-50 py-2">
                    <div className="px-3 py-2 text-xs font-semibold text-muted-foreground uppercase">
                      Módulos
                    </div>
                    {modules.map((module) => (
                      <button
                        key={module.id}
                        onClick={() => {
                          onModuleChange(module.id)
                          setIsModuleSwitcherOpen(false)
                        }}
                        className={cn(
                          "w-full flex items-center gap-3 px-3 py-2.5 text-sm transition-colors hover:bg-accent",
                          currentModule === module.id && "bg-primary/5 text-primary font-medium"
                        )}
                      >
                        {module.icon && <span className="text-lg">{module.icon}</span>}
                        <span className="flex-1 text-left">{module.name}</span>
                        {currentModule === module.id && (
                          <Check className="h-4 w-4 text-primary" />
                        )}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>
          )}

          {breadcrumbs && breadcrumbs.length > 0 && (
            <Breadcrumb items={breadcrumbs} />
          )}
        </div>

        <div className="flex items-center gap-4">
          {actions}

          {companyName && (
            <span className="text-sm font-medium text-muted-foreground hidden md:block">
              {companyName}
            </span>
          )}

          {notifications && notifications.length >= 0 && (
            <div className="relative">
              <button
                onClick={() => setIsNotificationMenuOpen(!isNotificationMenuOpen)}
                className="relative p-2 rounded-sm transition-all hover:bg-accent text-muted-foreground hover:text-foreground active:scale-95"
              >
                <Bell className="h-5 w-5" />
                {hasNotifications && (
                  <>
                    <span className="absolute top-1 right-1 w-2 h-2 bg-destructive rounded-full" />
                    {unreadCount > 0 && (
                      <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] bg-destructive text-destructive-foreground rounded-full text-[10px] font-bold flex items-center justify-center px-1">
                        {unreadCount > 9 ? '9+' : unreadCount}
                      </span>
                    )}
                  </>
                )}
              </button>

              {isNotificationMenuOpen && (
                <>
                  <div
                    className="fixed inset-0 z-40"
                    onClick={() => setIsNotificationMenuOpen(false)}
                  />
                  <div className="absolute right-0 top-full mt-2 w-96 bg-popover border border-border rounded-lg shadow-lg z-50 max-h-[32rem] flex flex-col">
                    <div className="flex items-center justify-between px-4 py-3 border-b border-border">
                      <div>
                        <h3 className="text-sm font-semibold text-foreground">Notificações</h3>
                        {unreadCount > 0 && (
                          <p className="text-xs text-muted-foreground mt-0.5">
                            {unreadCount} não {unreadCount === 1 ? 'lida' : 'lidas'}
                          </p>
                        )}
                      </div>
                      <div className="flex items-center gap-3">
                        {onMarkAllAsRead && unreadCount > 0 && (
                          <button
                            onClick={() => {
                              onMarkAllAsRead()
                            }}
                            className="text-xs text-primary hover:text-primary/80 font-medium transition-colors"
                          >
                            Marcar como lidas
                          </button>
                        )}
                        {onClearAllNotifications && notifications.length > 0 && (
                          <button
                            onClick={() => {
                              onClearAllNotifications()
                            }}
                            className="text-xs text-destructive hover:text-destructive/80 font-medium transition-colors"
                          >
                            Limpar todas
                          </button>
                        )}
                      </div>
                    </div>

                    <div className="overflow-y-auto flex-1 scrollbar-hide">
                      {notifications.length === 0 ? (
                        <div className="flex flex-col items-center justify-center py-12 px-4">
                          <div className="w-16 h-16 rounded-full bg-muted/50 flex items-center justify-center mb-3">
                            <Bell className="h-8 w-8 text-muted-foreground/50" />
                          </div>
                          <p className="text-sm font-medium text-foreground">Nenhuma notificação</p>
                          <p className="text-xs text-muted-foreground mt-1">
                            Você está em dia!
                          </p>
                        </div>
                      ) : (
                        notifications.map((notification) => (
                          <button
                            key={notification.id}
                            onClick={() => {
                              if (onNotificationRead && !notification.read) {
                                onNotificationRead(notification.id)
                              }
                            }}
                            className={cn(
                              "w-full flex items-start gap-3 px-4 py-3 transition-colors hover:bg-accent border-b border-border/50 last:border-0 text-left",
                              !notification.read && "bg-primary/5"
                            )}
                          >
                            {getNotificationIcon(notification.type)}
                            <div className="flex-1 min-w-0">
                              <div className="flex items-start justify-between gap-2 mb-1">
                                <h4 className={cn(
                                  "text-sm font-medium text-foreground line-clamp-1",
                                  !notification.read && "font-semibold"
                                )}>
                                  {notification.title}
                                </h4>
                                {!notification.read && (
                                  <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-1.5" />
                                )}
                              </div>
                              <p className="text-xs text-muted-foreground line-clamp-2 mb-1">
                                {notification.message}
                              </p>
                              <span className="text-xs text-muted-foreground/70">
                                {formatTimestamp(notification.timestamp)}
                              </span>
                            </div>
                          </button>
                        ))
                      )}
                    </div>

                    {onViewAllNotifications && notifications.length > 0 && (
                      <div className="border-t border-border p-2">
                        <button
                          onClick={() => {
                            onViewAllNotifications()
                            setIsNotificationMenuOpen(false)
                          }}
                          className="w-full text-center py-2 text-sm text-primary hover:text-primary/80 font-medium transition-colors hover:bg-accent rounded-md"
                        >
                          Ver todas as notificações
                        </button>
                      </div>
                    )}
                  </div>
                </>
              )}
            </div>
          )}

          {userMenuTrigger}

          {user && !userMenuTrigger && (
            <div className="relative">
              <button
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                className="flex items-center gap-3 bg-transparent border-0 py-1 px-2.5 pr-2.5 rounded-md transition-all hover:bg-accent active:scale-[0.98]"
              >
                <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground text-xs font-semibold overflow-hidden border-2 border-background">
                  {renderAvatar()}
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

              {isUserMenuOpen && (
                <>
                  <div
                    className="fixed inset-0 z-40"
                    onClick={() => {
                      setIsUserMenuOpen(false)
                      setIsThemeMenuOpen(false)
                    }}
                  />
                  <div className="absolute right-0 top-full mt-2 w-64 bg-popover border border-border rounded-md shadow-lg z-50 py-2">
                    <div className="px-4 py-3 border-b border-border">
                      <p className="text-sm font-semibold">{user.name}</p>
                      <p className="text-xs text-muted-foreground">{user.role}</p>
                    </div>

                    <div className="py-1">
                      <button
                        onClick={() => {
                          setIsAboutModalOpen(true)
                          setIsUserMenuOpen(false)
                        }}
                        className="w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors hover:bg-accent"
                      >
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Sobre
                      </button>

                    </div>

                    <div className="border-t border-border my-1" />

                    <div className="relative">
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          setIsThemeMenuOpen(!isThemeMenuOpen)
                        }}
                        className="w-full flex items-center justify-between gap-3 px-4 py-2.5 text-sm transition-colors hover:bg-accent"
                      >
                        <div className="flex items-center gap-3">
                          <Palette className="h-4 w-4" />
                          Tema
                        </div>
                        <span className="text-xs text-muted-foreground">
                          {themes.find(t => t.value === theme)?.label}
                        </span>
                      </button>

                      {isThemeMenuOpen && (
                        <div className="absolute right-full top-0 mr-1 w-52 bg-popover border border-border rounded-md shadow-lg py-1">
                          <div className="px-3 py-2 border-b border-border">
                            <button
                              onClick={(e) => {
                                e.stopPropagation()
                                toggleDark()
                              }}
                              className="w-full flex items-center justify-between gap-3 py-1.5 text-sm transition-colors hover:text-primary"
                            >
                              <div className="flex items-center gap-2">
                                {isDark ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
                                <span>Modo {isDark ? 'Escuro' : 'Claro'}</span>
                              </div>
                              <div className={cn(
                                "relative w-9 h-5 rounded-full transition-colors",
                                isDark ? "bg-primary" : "bg-muted"
                              )}>
                                <div className={cn(
                                  "absolute top-0.5 w-4 h-4 rounded-full bg-background transition-transform",
                                  isDark ? "left-[18px]" : "left-0.5"
                                )} />
                              </div>
                            </button>
                          </div>

                          <div className="py-1">
                            {themes.map((themeOption) => (
                              <button
                                key={themeOption.value}
                                onClick={(e) => {
                                  e.stopPropagation()
                                  setTheme(themeOption.value)
                                  setIsThemeMenuOpen(false)
                                  setIsUserMenuOpen(false)
                                }}
                                className={cn(
                                  "w-full flex items-center gap-3 px-3 py-2 text-sm transition-colors hover:bg-accent",
                                  theme === themeOption.value && "bg-accent"
                                )}
                              >
                                <div
                                  className={cn(
                                    "w-4 h-4 rounded-full",
                                    themeOption.color
                                  )}
                                />
                                <span className="flex-1 text-left">{themeOption.label}</span>
                                {theme === themeOption.value && (
                                  <Check className="h-4 w-4 text-primary" />
                                )}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="border-t border-border my-1" />

                    <div className="py-1">
                      <button
                        onClick={() => {
                          setIsUserMenuOpen(false)
                          onLogout?.()
                        }}
                        className="w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors hover:bg-accent text-destructive"
                      >
                        <LogOut className="h-4 w-4" />
                        Sair
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          )}
        </div>

        {isAboutModalOpen && (
          <>
            <div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[200] animate-in fade-in duration-200"
              onClick={() => setIsAboutModalOpen(false)}
            />
            <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl bg-card border border-border rounded-xl shadow-2xl z-[201] animate-in zoom-in-95 fade-in duration-200">
              <div className="relative bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border-b border-border p-6">
                <button
                  onClick={() => setIsAboutModalOpen(false)}
                  className="absolute top-4 right-4 z-10 text-muted-foreground hover:text-foreground transition-colors p-1 hover:bg-accent rounded-md"
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <div className="relative flex items-center justify-center">
                  <img src={logoEmpresa} alt="Movva Software" className="absolute left-0 h-[60px] w-auto" />
                  <div className="text-center">
                    <h2 className="text-2xl font-bold text-foreground">Movva Software</h2>
                    <p className="text-sm text-muted-foreground mt-0.5">Desenvolvimento de Software</p>
                  </div>
                </div>
              </div>

              <div className="p-6 space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-md bg-success/10 flex items-center justify-center">
                      <svg className="h-4 w-4 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">Quem Somos</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed pl-10">
                    Empresa especializada em desenvolvimento de software, oferecemos
                    soluções inovadoras com uma equipe altamente qualificada.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-md bg-info/10 flex items-center justify-center">
                      <svg className="h-4 w-4 text-info" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">Nossos Serviços</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed pl-10">
                    Desenvolvimento de sistemas web, aplicativos mobile, integrações
                    e soluções sob demanda para o seu negócio.
                  </p>
                </div>

                <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-medium text-foreground mb-1">
                        Conheça mais sobre a Movva Software
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Visite nosso site para conhecer todos os nossos serviços e soluções
                      </p>
                    </div>
                    <a
                      href="https://movva.com.br/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-shrink-0 inline-flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/90 transition-all font-medium text-sm shadow-sm hover:shadow-md"
                    >
                      Visitar Site
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-muted/20 border-t border-border p-4 rounded-b-xl">
                <div className="flex items-center justify-center text-xs text-muted-foreground">
                  <span>© {new Date().getFullYear()} Movva Software - Todos os direitos reservados</span>
                </div>
              </div>
            </div>
          </>
        )}

      </nav>
    )
  }
)
Navbar.displayName = "Navbar"

export { Navbar }
