"use client"

import { motion } from "framer-motion"
import { CONTACT_EMAIL } from "@/lib/constants"
import { animationVariants, viewportOptions } from "@/lib/animations"

export function ContactSection() {
  return (
    <section id="contact" className="py-24 sm:py-36 px-4 sm:px-6 relative z-10 bg-[#FFD700] border-b-8 border-black">
      <div className="container mx-auto max-w-5xl w-full relative z-10">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={viewportOptions}
          variants={animationVariants.staggerContainer}
          className="text-center space-y-12 sm:space-y-16"
        >
          <motion.div variants={animationVariants.slideUp}>
            <h2 className="text-6xl sm:text-7xl md:text-9xl font-black uppercase tracking-tighter leading-none mb-8 text-black">
              Ready <br/>To Scale<span className="text-[#E32726]">?</span>
            </h2>
            <div className="bg-white p-4 sm:p-6 border-4 border-black inline-block shadow-[8px_8px_0px_#000000] mb-8 sm:mb-12">
              <p className="text-xl sm:text-2xl md:text-3xl font-black text-black uppercase tracking-wide">
                Join the high-performing teams building the future with Marvlock.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={animationVariants.slideUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8"
          >
            <motion.a
              href={`mailto:${CONTACT_EMAIL}?subject=New Project Inquiry`}
              className="inline-block px-10 py-5 sm:px-16 sm:py-8 bg-black text-white text-xl sm:text-3xl font-black uppercase tracking-wider border-4 border-black shadow-[12px_12px_0px_#E32726] hover:translate-y-[4px] hover:translate-x-[4px] hover:shadow-[8px_8px_0px_#0055A4] transition-all cursor-pointer"
            >
              Get Started Now
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
