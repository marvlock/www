"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { animationVariants } from "@/lib/animations"
import { useLenis } from "@/components/ui/smooth-scroll-provider"
import { DepthImage3D } from "@/components/ui/depth-image-3d"

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
              <div className="flex flex-col items-center md:items-start gap-3">
                <span className="text-center md:text-left break-words bg-gradient-to-r from-[#0E1117] via-[#1B1F2A] to-[#0E1117] dark:from-white dark:via-gray-100 dark:to-gray-300 bg-clip-text">
                  Shaping the Next Generation of
                </span>
                <span className="text-center md:text-left break-words text-transparent bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-pink-500 dark:from-indigo-300 dark:via-fuchsia-300 dark:to-pink-300 bg-clip-text" style={{ fontFamily: 'var(--font-script)' }}>
                  Digital Products.
                </span>
              </div>
            </motion.h1>
            
            <motion.p
              variants={animationVariants.slideUp}
              className="text-base sm:text-xl md:text-2xl text-[#51607A] dark:text-gray-300 leading-relaxed max-w-2xl mx-auto md:mx-0"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Strategy, design, and delivery. We turn ideas into digital form.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.3, type: "spring", stiffness: 100 }}
            className="hidden md:flex justify-center items-center relative h-[600px]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 dark:from-indigo-500/10 dark:to-purple-500/10 rounded-full blur-3xl"></div>
            <div className="relative z-10 w-full h-full">
              <DepthImage3D />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

