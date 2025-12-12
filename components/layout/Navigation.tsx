"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { NAVIGATION_ITEMS } from "@/lib/constants"
import { springTransition } from "@/lib/animations"

interface NavigationProps {
  isVisible: boolean
}

export function Navigation({ isVisible }: NavigationProps) {
  return (
    <motion.nav
      initial={{ y: 0, opacity: 1 }}
      animate={{ 
        y: isVisible ? 0 : -100,
        opacity: isVisible ? 1 : 0
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50"
    >
      <div className="bg-[#151820]/95 backdrop-blur-md border border-white/10 rounded-full px-6 py-3 flex items-center gap-6 shadow-lg shadow-black/20">
        <motion.div 
          className="flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
          transition={springTransition}
        >
          <Image 
            src="/marvlock-logo.png" 
            alt="Project Marvlock Logo" 
            width={24} 
            height={24}
            className="w-6 h-6"
          />
          <span className="text-sm font-medium hidden sm:inline">Project Marvlock</span>
        </motion.div>
        <div className="hidden md:flex items-center gap-1">
          {NAVIGATION_ITEMS.map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="px-4 py-2 text-sm text-[#94A3B8] hover:text-white transition-colors cursor-pointer rounded-full hover:bg-white/5 relative group"
              whileHover={{ y: -2 }}
              transition={springTransition}
            >
              {item}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-white/30 group-hover:w-3/4 transition-all duration-300"></span>
            </motion.a>
          ))}
        </div>
      </div>
    </motion.nav>
  )
}

