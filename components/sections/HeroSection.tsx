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
    <section className="flex items-center justify-center px-4 sm:px-6 pt-20 sm:pt-32 pb-24 sm:pb-32 relative z-10 min-h-screen border-b-8 border-black dark:border-white">

      <div className="container mx-auto max-w-7xl w-full relative z-10 min-h-[70vh] md:min-h-0">
        <div className="grid md:grid-cols-2 gap-0 md:gap-0 items-stretch border-4 border-black dark:border-white bg-white dark:bg-[#121212] overflow-hidden">
          
          {/* Left Column - Text */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={animationVariants.staggerContainer}
            className="text-center md:text-left p-8 md:p-16 relative z-20 flex flex-col justify-center border-b-4 md:border-b-0 md:border-r-4 border-black dark:border-white bg-[#ecece6] dark:bg-zinc-900"
          >
            <motion.h1
              variants={animationVariants.slideUp}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-none tracking-tighter text-black dark:text-white uppercase"
            >
              <div className="flex flex-col gap-2">
                <span className="bg-clip-text">Shaping</span>
                <span className="bg-clip-text">Digital</span>
                <span className="text-[#E32726]">Products.</span>
              </div>
            </motion.h1>
            
            <motion.p
              variants={animationVariants.slideUp}
              className="text-lg sm:text-xl font-medium text-black dark:text-white mt-8 tracking-tight max-w-md"
            >
              Strategy, design, and delivery. We turn ideas into bold digital structures.
            </motion.p>
            
            <motion.div variants={animationVariants.slideUp} className="mt-10">
              <Button 
                onClick={handleScrollToContact}
                className="rounded-none bg-[#0055A4] hover:bg-[#004080] text-white font-bold text-lg px-8 py-6 border-4 border-black dark:border-white shadow-[8px_8px_0px_#000000] dark:shadow-[8px_8px_0px_#ffffff] hover:translate-y-[4px] hover:translate-x-[4px] hover:shadow-[4px_4px_0px_#000000] dark:hover:shadow-[4px_4px_0px_#ffffff] transition-all"
              >
                START A PROJECT
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Column - Geometric Imagery */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center items-center w-full min-h-[400px] md:min-h-0 bg-[#FFD700] dark:bg-[#857300]"
          >
            <div className="relative w-full h-full p-8 flex items-center justify-center">
              {/* Bauhaus Graphic Comp */}
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", delay: 0.5 }}
                  className="absolute top-0 right-0 w-32 h-32 md:w-40 md:h-40 rounded-full bg-[#E32726] border-4 border-black dark:border-white shadow-[-8px_8px_0px_#000000] dark:shadow-[-8px_8px_0px_#ffffff]" 
                />
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", delay: 0.7 }}
                  className="absolute bottom-0 left-0 w-40 h-40 md:w-48 md:h-48 bg-[#0055A4] border-4 border-black dark:border-white shadow-[8px_8px_0px_#000000] dark:shadow-[8px_8px_0px_#ffffff]" 
                />
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", delay: 0.9 }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 md:w-32 md:h-32 bg-white dark:bg-black border-4 border-black dark:border-white shadow-[8px_8px_0px_#E32726] dark:shadow-[8px_8px_0px_#E32726] rotate-45" 
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

