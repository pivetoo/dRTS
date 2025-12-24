import { Palette } from "lucide-react"

export function ThemeSelector() {
  return (
    <div className="relative">
      <button
        className="p-2 rounded-sm transition-all hover:bg-accent text-muted-foreground hover:text-foreground active:scale-95"
        title="Temas"
      >
        <Palette className="h-5 w-5" />
      </button>
    </div>
  )
}
