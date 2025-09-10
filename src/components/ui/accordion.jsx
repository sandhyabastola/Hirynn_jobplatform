"use client"

import { useState } from "react"
import { cn } from "../../lib/utils"
import { ChevronDown } from "lucide-react"

const Accordion = ({ type, collapsible, className, children, ...props }) => {
  return (
    <div className={cn("", className)} {...props}>
      {children}
    </div>
  )
}

const AccordionItem = ({ value, className, children, ...props }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={cn("border-b", className)} {...props}>
      {children}
    </div>
  )
}

const AccordionTrigger = ({ className, children, ...props }) => {
  return (
    <button
      className={cn(
        "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
        className,
      )}
      {...props}
    >
      {children}
      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
    </button>
  )
}

const AccordionContent = ({ className, children, ...props }) => {
  return (
    <div
      className={cn(
        "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
        className,
      )}
      {...props}
    >
      <div className="pb-4 pt-0">{children}</div>
    </div>
  )
}

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger }
