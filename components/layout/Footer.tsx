"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { SOCIAL_LINKS } from "@/lib/constants"

export function Footer() {
  return (
    <footer className="pt-16 sm:pt-24 pb-12 px-4 sm:px-6 border-t-8 border-black dark:border-white bg-[#ecece6] dark:bg-zinc-900 relative z-10">
      <div className="container mx-auto max-w-7xl w-full">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-12 sm:gap-16">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-black dark:bg-white border-2 border-black dark:border-white flex items-center justify-center shadow-[4px_4px_0px_#E32726] dark:shadow-[4px_4px_0px_#E32726]">
                <Image 
                  src="/marvlock-logo.png" 
                  alt="Marvlock Logo" 
                  width={32} 
                  height={32}
                  className="w-6 h-6 sm:w-8 sm:h-8 invert dark:invert-0"
                />
              </div>
              <div className="text-4xl sm:text-5xl font-black text-black dark:text-white uppercase tracking-tighter">
                Marvlock.
              </div>
            </div>
            <div className="text-xl sm:text-2xl font-black max-w-md text-black dark:text-white uppercase leading-tight bg-[#FFD700] text-black w-fit p-3 border-4 border-black shadow-[4px_4px_0px_#000000] mt-2">
              Building the future.
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4 sm:gap-6">
            {SOCIAL_LINKS.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-white dark:bg-[#121212] border-4 border-black dark:border-white text-black dark:text-white shadow-[4px_4px_0px_#000000] dark:shadow-[4px_4px_0px_#ffffff] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[8px_8px_0px_#0055A4] transition-all cursor-pointer group"
                whileHover={{ scale: 1.05 }}
              >
                {link.name === "X" ? (
                  <span className="scale-[1.2] group-hover:scale-[1.3] transition-transform">
                    <link.icon />
                  </span>
                ) : (
                  <link.icon className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" />
                )}
              </motion.a>
            ))}
          </div>
        </div>
        
        <div className="mt-16 sm:mt-24 border-t-4 border-black dark:border-white pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-base sm:text-lg font-black uppercase text-black dark:text-white">
            © {new Date().getFullYear()} Marvlock.
          </div>
          <div className="text-sm sm:text-base font-bold text-black dark:text-gray-400 uppercase tracking-widest">
            All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
