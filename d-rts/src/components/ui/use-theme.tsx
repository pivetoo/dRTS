import * as React from "react"

export type Theme = "default" | "ocean" | "forest" | "twilight" | "sunset" | "flamingo"

interface ThemeContextType {
  theme: Theme
  setTheme: (theme: Theme) => void
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
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  defaultTheme = "default"
}) => {
  const [theme, setThemeState] = React.useState<Theme>(() => {
    const stored = localStorage.getItem("drts-theme")
    return (stored as Theme) || defaultTheme
  })

  React.useEffect(() => {
    const root = document.documentElement
    root.setAttribute("data-theme", theme)
    localStorage.setItem("drts-theme", theme)
  }, [theme])

  const setTheme = React.useCallback((newTheme: Theme) => {
    setThemeState(newTheme)
  }, [])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
