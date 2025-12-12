"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import { animationVariants } from "@/lib/animations"

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center px-6 pt-32 relative z-10">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="initial"
            animate="animate"
            variants={animationVariants.staggerContainer}
            className="space-y-8"
          >
            <motion.h1
              variants={animationVariants.slideUp}
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight"
            >
              Building modern products for forward-thinking brands.
            </motion.h1>
            
            <motion.p
              variants={animationVariants.slideUp}
              className="text-lg md:text-xl text-[#94A3B8] leading-relaxed max-w-xl"
            >
              A freelance studio crafting websites, apps, and systems engineered with precision.
            </motion.p>

            <motion.div
              variants={animationVariants.slideUp}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  className="bg-white text-[#0E1117] hover:bg-white/90 px-8 py-6 rounded-lg transition-all cursor-pointer shadow-lg shadow-white/10 font-medium text-base group w-full sm:w-auto"
                  onClick={() => document.getElementById('contact')?.scrollIntoView()}
                >
                  Start a Project
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/5 hover:border-white/30 px-8 py-6 rounded-lg cursor-pointer font-medium text-base backdrop-blur-sm transition-all w-full sm:w-auto"
                  onClick={() => document.getElementById('work')?.scrollIntoView()}
                >
                  See Our Work
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:flex items-center justify-center"
          >
            <motion.div
              initial={{ opacity: 0, rotate: -10 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <Image 
                src="/marvlock-logo.png" 
                alt="Project Marvlock Logo" 
                width={400} 
                height={400}
                className="w-full max-w-md h-auto"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

