"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { animationVariants } from "@/lib/animations"
import { useLenis } from "@/components/ui/smooth-scroll-provider"

export function HeroSection() {
  const lenis = useLenis()

  const handleScrollToContact = () => {
    if (lenis) {
      lenis.scrollTo('#contact', { offset: 0, duration: 1.5 })
    } else {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="flex items-center justify-center px-4 sm:px-6 pt-20 sm:pt-32 pb-24 sm:pb-32 relative z-10 overflow-hidden min-h-screen">

      <div className="container mx-auto max-w-5xl w-full relative z-10">
        <motion.div
          initial="initial"
          animate="animate"
          variants={animationVariants.staggerContainer}
          className="text-center space-y-6 sm:space-y-8"
        >

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
                onClick={handleScrollToContact}
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

