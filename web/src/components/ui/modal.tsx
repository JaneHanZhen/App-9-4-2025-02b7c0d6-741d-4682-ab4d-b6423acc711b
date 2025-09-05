import { Fragment, useEffect, useRef } from "react"
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
  const modalRef = useRef<HTMLDivElement>(null)
  
  // Handle escape key press
  useEffect(() => {
    const handleEscapeKey = (e: KeyboardEvent) => {
      if (isOpen && e.key === 'Escape') {
        onClose()
      }
    }
    
    document.addEventListener('keydown', handleEscapeKey)
    
    // Focus trap and prevent scroll
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      modalRef.current?.focus()
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscapeKey)
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose])
  
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
        className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center"
        onClick={handleBackdropClick}
        aria-hidden="true"
      >
        {/* Modal content */}
        <div 
          ref={modalRef}
          className={cn(
            "bg-background dark:bg-card rounded-xl p-6 shadow-lg max-w-md mx-4 animate-scale-up",
            className
          )}
          role="dialog"
          aria-modal="true"
          aria-labelledby={title ? "modal-title" : undefined}
          tabIndex={-1}
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