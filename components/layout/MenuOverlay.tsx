"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[150] flex flex-col bg-[linear-gradient(180deg,rgba(254,251,244,0.98),rgba(252,246,236,0.96))] p-6 md:p-10"
        >
          <div className="flex justify-between items-start w-full">
            <div className="text-xl font-extrabold tracking-tight uppercase md:text-2xl">
              Marvlock<span className="text-accent">*</span>
            </div>
            <button 
              onClick={onClose}
              className="group flex items-center gap-2 rounded-full border border-border bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] transition-colors hover:border-accent hover:text-accent md:text-sm"
            >
              <span>Close</span>
              <div className="h-1.5 w-1.5 rounded-full bg-accent transition-transform group-hover:scale-125" />
            </button>
          </div>

          <div className="flex-1 flex flex-col justify-center">
            <div className="flex flex-col gap-4 md:gap-6">
              {MENU_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * i + 0.2, duration: 0.5 }}
                >
                  <a 
                    href={link.href} 
                    onClick={onClose}
                    className="group flex items-baseline gap-4 text-5xl font-extrabold tracking-tight uppercase transition-colors hover:text-accent md:text-8xl"
                  >
                    <span>{link.label}</span>
                    <span className="text-2xl text-accent opacity-0 transition-opacity group-hover:opacity-100 md:text-4xl">*</span>
                  </a>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-end gap-10">
            <div className="max-w-xs text-sm md:text-base">
              <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
                "We design and build digital products that define the future."
              </p>
            </div>
            <div className="flex flex-col items-end gap-2 text-sm font-bold uppercase tracking-[0.12em]">
              <a href="mailto:marvlock.dev@gmail.com" className="hover:text-accent">marvlock.dev@gmail.com</a>
              <span>© {new Date().getFullYear()} MARVLOCK</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
