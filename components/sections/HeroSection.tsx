"use client"

import { motion } from "framer-motion"
import { animationVariants } from "@/lib/animations"
import { DepthImage3D } from "@/components/ui/depth-image-3d"

export function HeroSection() {
  return (
    <section data-hero className="relative flex min-h-screen flex-col">
      <motion.div
        initial="initial"
        animate="animate"
        variants={animationVariants.staggerContainer}
        className="relative mx-auto flex min-h-screen w-full max-w-[100rem] flex-1 flex-col px-4 md:px-10 lg:px-16 xl:px-24 2xl:px-32"
      >
        <div className="relative flex flex-1 flex-col pb-20 pt-10 md:pb-32 md:pt-14">
          {/* Centered shader face */}
          <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center">
            <motion.div
              variants={animationVariants.textReveal}
              className="pointer-events-auto h-[min(58vh,520px)] w-full max-w-[min(92vw,420px)] md:h-[min(68vh,620px)] md:max-w-[480px]"
            >
              <DepthImage3D />
            </motion.div>
          </div>

          <div className="relative z-10 flex flex-1 flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
            <div className="flex w-full shrink-0 flex-col items-center text-center lg:w-fit lg:items-start lg:text-left">
              <motion.h1
                variants={animationVariants.textReveal}
                className="hero-brand-title font-pixelify text-[clamp(3.6rem,17vw,6rem)] leading-none text-white md:text-7xl lg:text-8xl"
              >
                marvlock
              </motion.h1>

              <motion.p
                variants={animationVariants.textReveal}
                className="hero-brand-kicker font-pixelify mt-3 text-center text-sm uppercase leading-none text-white/70 md:text-base lg:text-left"
              >
                Digital Creative Studio
              </motion.p>
            </div>

            <div className="flex w-full max-w-md shrink-0 self-center flex-col text-center lg:ml-auto lg:max-w-sm lg:text-right">
              <motion.p
                variants={animationVariants.textReveal}
                className="text-base leading-relaxed text-white/78 md:text-lg"
              >
                Marvlock helps founders and teams with web development, app development, logo,
                website, and product design, plus video editing, 3D modelling, and{" "}
                <span className="whitespace-nowrap">character generation.</span>
              </motion.p>
            </div>
          </div>
        </div>

      </motion.div>
    </section>
  )
}
