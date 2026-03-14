"use client"

import { motion } from "framer-motion"
import { MessageCircle } from "lucide-react"

export function ChatButton() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <motion.a
        href="https://cal.com/pranavmurali"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 px-4 py-3 sm:px-5 sm:py-4 bg-[#FFD700] border-4 border-black dark:border-white shadow-[6px_6px_0px_#000000] dark:shadow-[6px_6px_0px_#ffffff] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[4px_4px_0px_#000000] dark:hover:shadow-[4px_4px_0px_#ffffff] transition-all group cursor-pointer"
      >
        <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-black group-hover:scale-110 transition-transform" strokeWidth={2.5} />
        <span className="text-sm sm:text-base font-black uppercase text-black hidden sm:inline tracking-wider">Chat with us</span>
      </motion.a>
    </motion.div>
  )
}
