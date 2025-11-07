import * as React from "react"
import { Palette, Check } from "lucide-react"
import { useTheme, type Theme } from "./use-theme"
import { cn } from "../../lib/utils"

const themes: { value: Theme; label: string; color: string }[] = [
  { value: "default", label: "Graphite", color: "bg-slate-600" },
  { value: "ocean", label: "Ocean", color: "bg-cyan-600" },
  { value: "forest", label: "Forest", color: "bg-green-600" },
  { value: "twilight", label: "Twilight", color: "bg-purple-600" },
  { value: "sunset", label: "Sunset", color: "bg-orange-600" },
  { value: "flamingo", label: "Flamingo", color: "bg-pink-500" },
]

export function ThemeSelector() {
  const { theme, setTheme } = useTheme()
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-sm transition-all hover:bg-accent text-muted-foreground hover:text-foreground active:scale-95"
        title="Trocar tema"
      >
        <Palette className="h-5 w-5" />
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 top-full mt-2 w-48 bg-popover border border-border rounded-md shadow-lg z-50 p-2">
            <div className="text-xs font-semibold text-muted-foreground px-2 py-1 mb-1">
              Temas
            </div>
            {themes.map((themeOption) => (
              <button
                key={themeOption.value}
                onClick={() => {
                  setTheme(themeOption.value)
                  setIsOpen(false)
                }}
                className={cn(
                  "w-full flex items-center gap-3 px-2 py-2 rounded-sm transition-colors hover:bg-accent text-sm",
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
        </>
      )}
    </div>
  )
}
