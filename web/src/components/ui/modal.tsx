import { Fragment } from "react"
import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  children: ReactNode
  className?: string
}

export function Modal({ 
  isOpen, 
  onClose, 
  title, 
  children, 
  className 
}: ModalProps) {
  if (!isOpen) return null
  
  // Close modal when clicking outside content area
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }
  
  return (
    <Fragment>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center animate-fade-in"
        onClick={handleBackdropClick}
        aria-hidden="true"
      >
        {/* Modal content */}
        <div 
          className={cn(
            "bg-background dark:bg-card rounded-xl p-6 shadow-lg max-w-md mx-4 animate-scale-up",
            className
          )}
          role="dialog"
          aria-modal="true"
          aria-labelledby={title ? "modal-title" : undefined}
        >
          {/* Title (if provided) */}
          {title && (
            <h2 
              id="modal-title" 
              className="text-xl font-semibold mb-4"
            >
              {title}
            </h2>
          )}
          
          {/* Modal body content */}
          {children}
        </div>
      </div>
    </Fragment>
  )
}