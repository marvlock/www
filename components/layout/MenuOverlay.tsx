"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import Image from "next/image";
import { X, ArrowRight } from "lucide-react";

interface MenuOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const MENU_LINKS = [
  { href: "https://cal.com/pranavmurali", label: "Book a Call" },
  { href: "https://www.pranavmurali.dev/", label: "Founder's Stuff" },
  { href: "/blog", label: "Our Thoughts" },
  { href: "https://github.com/marvlock", label: "Open Source" },
];

export function MenuOverlay({ isOpen, onClose }: MenuOverlayProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ clipPath: "circle(0% at 100% 0%)" }}
          animate={{ clipPath: "circle(150% at 100% 0%)" }}
          exit={{ clipPath: "circle(0% at 100% 0%)" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[60] bg-[#121212] text-white border-[8px] md:border-[12px] border-[#E32726] flex flex-col"
        >
          {/* Menu Header */}
          <div className="flex justify-between items-center px-6 md:px-8 py-4 md:py-6 border-b-[8px] md:border-b-[12px] border-[#E32726] bg-[#0055A4]">
            <a href="#hero" onClick={onClose} className="flex items-center gap-2 group">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-white border-4 border-black flex items-center justify-center rotate-[-3deg] group-hover:rotate-0 transition-transform shadow-[4px_4px_0px_#000000]">
                <Image 
                  src="/marvlock-logo.png" 
                  alt="Marvlock Logo" 
                  width={24} 
                  height={24}
                  className="w-6 h-6 md:w-8 md:h-8"
                />
              </div>
              <span className="font-black text-2xl md:text-3xl uppercase tracking-tighter text-white drop-shadow-[2px_2px_0px_#000000]">MARVLOCK</span>
            </a>
            <button 
              onClick={onClose}
              className="p-2 md:p-3 bg-[#FFD700] text-black border-4 border-black shadow-[4px_4px_0px_#000000] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[2px_2px_0px_#000000] transition-all"
              aria-label="Close Menu"
            >
              <X className="w-6 h-6 md:w-8 md:h-8" strokeWidth={3} />
            </button>
          </div>

          {/* Menu Content - Centered Single Column */}
          <div className="flex-1 flex flex-col items-center justify-center py-6 px-6 md:px-12 relative overflow-hidden bg-[#121212]">
            {/* Background Text Decor */}
            <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] select-none pointer-events-none">
               <span className="font-black text-[25vw] uppercase leading-none text-white whitespace-nowrap">MARVLOCK</span>
            </div>

            <div className="flex flex-col items-center justify-center gap-6 sm:gap-8 relative z-10 w-full flex-1">
              {MENU_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: 0.1 * i + 0.3, duration: 0.5, type: "spring" }}
                  className="w-full text-center"
                >
                  <a 
                    href={link.href} 
                    onClick={onClose}
                    className="text-[12vw] sm:text-[clamp(3rem,6vw,7rem)] font-black leading-none hover:text-[#0055A4] transition-all relative inline-block group text-white uppercase tracking-tighter hover:scale-105"
                  >
                    <span className="group-hover:-skew-x-12 transition-transform duration-300 inline-block relative z-10">
                       {link.label}
                    </span>
                    <ArrowRight className="w-8 h-8 md:w-16 md:h-16 opacity-0 absolute top-1/2 -translate-y-1/2 -right-12 md:-right-24 -translate-x-4 md:-translate-x-8 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#E32726] drop-shadow-[4px_4px_0px_#000000]" strokeWidth={5} />
                  </a>
                </motion.div>
              ))}
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
