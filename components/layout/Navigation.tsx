"use client"

import { useState } from "react"
import Link from "next/link"
import { MenuOverlay } from "./MenuOverlay"

interface NavigationProps {
  isVisible: boolean
}

export function Navigation({ isVisible }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <nav className="fixed inset-x-0 top-0 z-[100] p-4 md:p-6">
        <div className="section-shell">
          <div className="glass-surface pointer-events-auto flex items-center justify-between rounded-2xl px-5 py-3 shadow-[0_18px_44px_rgba(50,42,32,0.12)] md:px-7 md:py-4">
          <Link 
            href="/" 
            className="flex items-center gap-2 group"
          >
            <span className="text-lg font-extrabold uppercase tracking-tight transition-colors group-hover:text-accent md:text-xl">
              Marvlock
              <span className="ml-0.5 text-accent">*</span>
            </span>
            <span className="hidden text-xs uppercase tracking-[0.22em] text-muted-foreground md:inline">Digital Product Studio</span>
          </Link>
          
            <div className="flex items-center gap-6">
            <button 
              onClick={() => setIsMenuOpen(true)}
                className="group inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] transition-all hover:border-accent hover:text-accent"
            >
                <span>Explore</span>
                <span className="block h-1.5 w-1.5 rounded-full bg-accent transition-transform group-hover:scale-125" />
            </button>
            </div>
          </div>
        </div>
      </nav>

      <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  )
}
