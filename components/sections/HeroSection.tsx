"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { animationVariants } from "@/lib/animations"

export function HeroSection() {
  return (
    <section className="flex items-center justify-center px-4 sm:px-6 pt-24 sm:pt-40 pb-16 sm:pb-24 relative z-10 overflow-hidden min-h-[85vh]">

      <div className="container mx-auto max-w-5xl w-full relative z-10">
        <motion.div
          initial="initial"
          animate="animate"
          variants={animationVariants.staggerContainer}
          className="text-center space-y-6 sm:space-y-8"
        >
          <motion.div
            variants={animationVariants.slideUp}
            className="flex items-center justify-center gap-2"
          >
            <div className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-100 dark:bg-gray-800 rounded-full">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-blink"></div>
              <span className="text-xs sm:text-sm font-medium text-[#0E1117] dark:text-white whitespace-nowrap">Available for New Projects</span>
            </div>
          </motion.div>

          <motion.h1
            variants={animationVariants.slideUp}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.2] tracking-tight text-[#0E1117] dark:text-white px-2"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            <div className="flex flex-col items-center">
              <span className="text-center break-words">We Build Web & Mobile Apps</span>
              <span className="text-center break-words">That Users Actually Want to Use</span>
            </div>
          </motion.h1>
          
          <motion.p
            variants={animationVariants.slideUp}
            className="text-sm sm:text-lg md:text-xl text-[#64748B] dark:text-gray-400 leading-relaxed max-w-3xl mx-auto px-2"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            From sleek web applications to powerful mobile apps—we craft digital products that combine beautiful design with robust engineering to drive real business results.
          </motion.p>

          <motion.div
            variants={animationVariants.slideUp}
            className="flex justify-center pt-2"
          >
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
              <Button
                className="bg-[#0E1117] dark:bg-white dark:text-[#0E1117] text-white hover:bg-[#0E1117]/90 dark:hover:bg-white/90 px-6 sm:px-10 py-4 sm:py-6 rounded-lg transition-all cursor-pointer shadow-lg font-semibold text-sm sm:text-lg w-full sm:w-auto"
                style={{ fontFamily: 'var(--font-body)' }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Book a Free MVP Call
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

