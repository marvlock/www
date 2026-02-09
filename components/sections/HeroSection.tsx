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
      {/* Ambient glow effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-7xl w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div
            initial="initial"
            animate="animate"
            variants={animationVariants.staggerContainer}
            className="text-center md:text-left space-y-8"
          >
            <motion.h1
              variants={animationVariants.slideUp}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.1] tracking-tight text-[#0E1117] dark:text-white"
              style={{ fontFamily: 'var(--font-cinzel)' }}
            >
              <div className="flex flex-col items-center md:items-start gap-2">
                <span className="text-center md:text-left break-words bg-gradient-to-r from-[#0E1117] via-[#0E1117] to-[#0E1117] dark:from-white dark:via-gray-100 dark:to-gray-300 bg-clip-text">
                  We Build Digital Products
                </span>
                <span className="text-center md:text-left break-words bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
                  That Hit Different
                </span>
              </div>
            </motion.h1>
            
            <motion.p
              variants={animationVariants.slideUp}
              className="text-base sm:text-xl md:text-2xl text-[#64748B] dark:text-gray-400 leading-relaxed max-w-2xl mx-auto md:mx-0"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Web apps, mobile apps, the whole menu. Clean design, solid code, zero&nbsp;BS. Your idea deserves better than another generic MVP that looks like it's from&nbsp;2015.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.3, type: "spring", stiffness: 100 }}
            className="hidden md:flex justify-center items-center relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 dark:from-indigo-500/10 dark:to-purple-500/10 rounded-full blur-3xl"></div>
            <img 
              src="/viruvian.png" 
              alt="Vitruvian" 
              className="w-full max-w-4xl relative z-10"
              style={{ mixBlendMode: 'lighten', filter: 'contrast(1.3) brightness(1.15) drop-shadow(0 0 40px rgba(99, 102, 241, 0.3))' }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

