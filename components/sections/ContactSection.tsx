"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { CONTACT_EMAIL } from "@/lib/constants"
import { animationVariants, viewportOptions } from "@/lib/animations"

export function ContactSection() {
  return (
    <section id="contact" className="py-32 px-6 relative z-10">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={viewportOptions}
          variants={animationVariants.staggerContainer}
          className="text-center space-y-12"
        >
          <motion.div variants={animationVariants.scaleIn} className="space-y-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Let's build something exceptional.
            </h2>
            <p className="text-lg md:text-xl text-[#94A3B8] max-w-2xl mx-auto">
              Tell us about your product, and we'll turn it into reality.
            </p>
          </motion.div>

          <motion.div
            variants={animationVariants.scaleIn}
            className="flex justify-center"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                className="bg-white text-[#0E1117] hover:bg-white/90 px-10 py-7 rounded-lg transition-all cursor-pointer shadow-lg shadow-white/10 font-medium text-lg group"
                onClick={() => window.location.href = `mailto:${CONTACT_EMAIL}?subject=New Project Inquiry`}
              >
                Start a Project
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

