import * as React from "react"
import { Bell, ChevronDown, User, Languages, LogOut, Palette, Check } from "lucide-react"
import { cn } from "../../lib/utils"
import { Breadcrumb } from "./breadcrumb"
import type { BreadcrumbItem } from "./breadcrumb"
import { useTheme, type Theme } from "./use-theme"

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

const themes: { value: Theme; label: string; color: string }[] = [
  { value: "default", label: "Graphite", color: "bg-slate-600" },
  { value: "ocean", label: "Ocean", color: "bg-cyan-600" },
  { value: "forest", label: "Forest", color: "bg-green-600" },
  { value: "twilight", label: "Twilight", color: "bg-purple-600" },
  { value: "sunset", label: "Sunset", color: "bg-orange-600" },
  { value: "flamingo", label: "Flamingo", color: "bg-pink-500" },
]

type Language = "pt-BR" | "es" | "en-US"

const languages: { value: Language; label: string; flag: string }[] = [
  { value: "pt-BR", label: "Português (BR)", flag: "🇧🇷" },
  { value: "es", label: "Español", flag: "🇪🇸" },
  { value: "en-US", label: "English (US)", flag: "🇺🇸" },
]

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
    const { theme, setTheme } = useTheme()
    const [isUserMenuOpen, setIsUserMenuOpen] = React.useState(false)
    const [isThemeMenuOpen, setIsThemeMenuOpen] = React.useState(false)
    const [isLanguageMenuOpen, setIsLanguageMenuOpen] = React.useState(false)
    const [selectedLanguage, setSelectedLanguage] = React.useState<Language>("pt-BR")
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
            <div className="relative">
              <button
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                className="flex items-center gap-3 bg-transparent border-0 py-1 px-2.5 pr-2.5 rounded-md transition-all hover:bg-accent active:scale-[0.98]"
              >
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

              {isUserMenuOpen && (
                <>
                  <div
                    className="fixed inset-0 z-40"
                    onClick={() => {
                      setIsUserMenuOpen(false)
                      setIsThemeMenuOpen(false)
                      setIsLanguageMenuOpen(false)
                    }}
                  />
                  <div className="absolute right-0 top-full mt-2 w-64 bg-popover border border-border rounded-md shadow-lg z-50 py-2">
                    <div className="px-4 py-3 border-b border-border">
                      <p className="text-sm font-semibold">{user.name}</p>
                      <p className="text-xs text-muted-foreground">{user.role}</p>
                    </div>

                    <div className="py-1">
                      <button className="w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors hover:bg-accent">
                        <User className="h-4 w-4" />
                        Meu Perfil
                      </button>

                      <div className="relative">
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            setIsLanguageMenuOpen(!isLanguageMenuOpen)
                            setIsThemeMenuOpen(false)
                          }}
                          className="w-full flex items-center justify-between gap-3 px-4 py-2.5 text-sm transition-colors hover:bg-accent"
                        >
                          <div className="flex items-center gap-3">
                            <Languages className="h-4 w-4" />
                            Idioma
                          </div>
                          <span className="text-lg">
                            {languages.find(l => l.value === selectedLanguage)?.flag}
                          </span>
                        </button>

                        {isLanguageMenuOpen && (
                          <div className="absolute right-full top-0 mr-1 w-52 bg-popover border border-border rounded-md shadow-lg py-1">
                            {languages.map((lang) => (
                              <button
                                key={lang.value}
                                onClick={(e) => {
                                  e.stopPropagation()
                                  setSelectedLanguage(lang.value)
                                  setIsLanguageMenuOpen(false)
                                  setIsUserMenuOpen(false)
                                }}
                                className={cn(
                                  "w-full flex items-center gap-3 px-3 py-2 text-sm transition-colors hover:bg-accent",
                                  selectedLanguage === lang.value && "bg-accent"
                                )}
                              >
                                <span className="text-xl">{lang.flag}</span>
                                <span className="flex-1 text-left">{lang.label}</span>
                                {selectedLanguage === lang.value && (
                                  <Check className="h-4 w-4 text-primary" />
                                )}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="border-t border-border my-1" />

                    <div className="relative">
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          setIsThemeMenuOpen(!isThemeMenuOpen)
                          setIsLanguageMenuOpen(false)
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
                        <div className="absolute right-full top-0 mr-1 w-48 bg-popover border border-border rounded-md shadow-lg py-1">
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
                      )}
                    </div>

                    <div className="border-t border-border my-1" />

                    <div className="py-1">
                      <button className="w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors hover:bg-accent text-destructive">
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
      </nav>
    )
  }
)
Navbar.displayName = "Navbar"

export { Navbar }
