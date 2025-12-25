import * as React from "react"

export type Theme = "default"

interface ThemeContextType {
  theme: Theme
  setTheme: (theme: Theme) => void
  isDark: boolean
  toggleDark: () => void
}

const ThemeContext = React.createContext<ThemeContextType | null>(null)

export const useTheme = () => {
  const context = React.useContext(ThemeContext)
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider")
  }
  return context
}

interface ThemeProviderProps {
  children: React.ReactNode
  defaultTheme?: Theme
  defaultDark?: boolean
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  defaultTheme = "default",
  defaultDark = false
}) => {
  const [theme, setThemeState] = React.useState<Theme>(() => {
    const stored = localStorage.getItem("drts-theme")
    return (stored as Theme) || defaultTheme
  })

  const [isDark, setIsDark] = React.useState<boolean>(() => {
    const stored = localStorage.getItem("drts-dark-mode")
    return stored ? stored === "true" : defaultDark
  })

  React.useEffect(() => {
    const root = document.documentElement
    root.setAttribute("data-theme", theme)
    localStorage.setItem("drts-theme", theme)

    if (isDark) {
      root.classList.add("dark")
    } else {
      root.classList.remove("dark")
    }
    localStorage.setItem("drts-dark-mode", String(isDark))
  }, [theme, isDark])

  const setTheme = React.useCallback((newTheme: Theme) => {
    setThemeState(newTheme)
  }, [])

  const toggleDark = React.useCallback(() => {
    setIsDark(prev => !prev)
  }, [])

  return (
    <ThemeContext.Provider value={{ theme, setTheme, isDark, toggleDark }}>
      {children}
    </ThemeContext.Provider>
  )
}
