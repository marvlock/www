"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { MenuOverlay } from "./MenuOverlay"

interface NavigationProps {
  isVisible: boolean
}

export function Navigation({ isVisible }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Wait until mounted if needed, but not strictly necessary here unless accessing browser stuff
  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-[#ecece6] dark:bg-zinc-900 border-b-4 border-black dark:border-white px-4 md:px-8 py-3 md:py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-[#FFD700] border-4 border-black dark:border-white flex items-center justify-center rotate-[-3deg] group-hover:rotate-0 transition-transform shadow-[4px_4px_0px_#000000] dark:shadow-[4px_4px_0px_#ffffff]">
              <Image 
                src="/marvlock-logo.png" 
                alt="Marvlock Logo" 
                width={20} 
                height={20}
                className="w-5 h-5"
              />
            </div>
            <span className="font-black text-2xl uppercase tracking-tighter text-black dark:text-white">Marvlock</span>
          </Link>
          
          <div className="flex items-center gap-4">
            <ThemeToggle />

            <button 
              onClick={() => setIsMenuOpen(true)}
              className="py-2 px-4 md:px-6 border-4 border-black dark:border-white bg-[#0055A4] text-white font-bold text-xs flex items-center gap-2 group shadow-[4px_4px_0px_#000000] dark:shadow-[4px_4px_0px_#ffffff] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[2px_2px_0px_#000000] dark:hover:shadow-[2px_2px_0px_#ffffff] transition-all"
            >
              <Menu className="w-5 h-5 transition-transform group-hover:rotate-90" strokeWidth={3} />
              <span className="mt-0.5 tracking-widest hidden sm:inline">MENU</span>
            </button>
          </div>
        </div>
      </nav>

      <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  )
}

