import * as React from "react"
import { cn } from "../../lib/utils"

export interface GlobalLoaderProps {
  isVisible: boolean
  className?: string
}

const GlobalLoader: React.FC<GlobalLoaderProps> = ({ isVisible, className }) => {
  if (!isVisible) return null

  return (
    <div
      className={cn(
        "fixed inset-0 bg-white/80 dark:bg-black/80 backdrop-blur-sm flex items-center justify-center z-[9999]",
        className
      )}
    >
      <div className="flex flex-col items-center gap-4">
        <div className="relative w-[200px] h-[200px] rounded-full border-[12px] border-border border-t-primary animate-spin" />
      </div>
    </div>
  )
}

GlobalLoader.displayName = "GlobalLoader"

export { GlobalLoader }
