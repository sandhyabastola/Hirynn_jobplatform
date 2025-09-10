import { cn } from "../../lib/utils"

const Separator = ({ className, orientation = "horizontal", decorative = true, ...props }) => (
  <div
    className={cn("shrink-0 bg-border", orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]", className)}
    {...props}
  />
)

export { Separator }
