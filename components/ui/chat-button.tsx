"use client"

import { motion } from "framer-motion"
import { MessageCircle } from "lucide-react"

export function ChatButton() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed bottom-10 right-10 z-[100]"
    >
      <motion.a
        href="https://cal.com/pranavmurali"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 px-6 py-4 bg-foreground text-background font-bold uppercase tracking-widest text-xs hover:bg-accent transition-colors shadow-xl"
      >
        <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
        <span>Book a Call</span>
      </motion.a>
    </motion.div>
  )
}
