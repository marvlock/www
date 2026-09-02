"use client"

import { motion } from "framer-motion"
import { animationVariants } from "@/lib/animations"
import { DepthImage3D } from "@/components/ui/depth-image-3d"

export function HeroSection() {
  return (
    <section data-hero className="relative flex min-h-[78svh] flex-col sm:min-h-[90svh] md:min-h-[100svh]">
      <motion.div
        initial="initial"
        animate="animate"
        variants={animationVariants.staggerContainer}
        className="relative mx-auto flex min-h-[78svh] w-full max-w-[100rem] flex-1 flex-col px-4 sm:min-h-[90svh] sm:px-6 md:min-h-[100svh] md:px-10 lg:px-16 xl:px-24 2xl:px-32"
      >
        <div className="relative flex flex-1 flex-col pb-10 pt-6 sm:pb-20 sm:pt-10 md:pb-32 md:pt-14">
          <div className="pointer-events-none relative order-2 mt-5 flex h-[min(48svh,26rem)] items-end justify-center md:absolute md:inset-0 md:order-none md:mt-0 md:h-auto md:items-center">
            <motion.div
              variants={animationVariants.textReveal}
              className="pointer-events-auto h-full w-full max-w-[min(92vw,360px)] md:h-[min(68vh,620px)] md:max-w-[480px]"
            >
              <DepthImage3D />
            </motion.div>
          </div>

          <div className="relative z-10 order-1 flex flex-none flex-col gap-6 sm:gap-8 md:order-none md:flex-1 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
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
                Software & Digital Studio
              </motion.p>
            </div>

            <div className="flex w-full max-w-md shrink-0 self-center flex-col text-center lg:ml-auto lg:max-w-sm lg:text-right">
              <motion.p
                variants={animationVariants.textReveal}
                className="text-base leading-relaxed text-white/78 md:text-lg"
              >
                We help founders and orgs turn sharp ideas into dependable software, thoughtful web and
                app experiences, and clear writing that gives their work a voice, and a direction.{" "}
                <span className="whitespace-nowrap"></span>
              </motion.p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
