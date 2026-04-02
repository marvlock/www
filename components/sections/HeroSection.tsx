"use client"

import { motion } from "framer-motion"
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

  const handleScrollToWork = (e: React.MouseEvent) => {
    e.preventDefault()
    if (lenis) {
      lenis.scrollTo('#work', { offset: 0, duration: 1.2 })
    } else {
      document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pb-8 pt-20 md:pb-12 md:pt-24">
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute left-[8%] top-24 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(255,141,81,0.26),rgba(255,141,81,0))]" />
        <div className="absolute bottom-0 right-[12%] h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(49,73,116,0.18),rgba(49,73,116,0))]" />
      </div>
      <motion.div
        initial="initial"
        animate="animate"
        variants={animationVariants.staggerContainer}
        className="section-shell relative z-10"
      >
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <motion.h1 className="text-2xl font-extrabold leading-[0.82] tracking-[-0.04em] text-foreground md:text-3xl lg:text-4xl">
              {[
                "Digital products",
                "that feel",
                "inevitable.",
              ].map((line, i) => (
                <motion.span key={line} variants={animationVariants.textReveal} className="block">
                  {i === 1 ? <span className="font-serif-italic font-medium">{line}</span> : line}
                </motion.span>
              ))}
            </motion.h1>

            <motion.p variants={animationVariants.textReveal} className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              Marvlock helps founders and teams ship websites and apps that are fast, clear, and conversion-minded. Strategy, design, and engineering move in one rhythm.
            </motion.p>

            <motion.div variants={animationVariants.textReveal} className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center">
            <button 
              onClick={handleScrollToContact}
                className="rounded-full bg-foreground px-8 py-4 text-sm font-bold uppercase tracking-[0.16em] text-background transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent"
            >
              Start a Project
            </button>
            <button 
              onClick={handleScrollToWork}
                className="rounded-full border border-border bg-background/70 px-8 py-4 text-sm font-bold uppercase tracking-[0.16em] text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:text-accent"
            >
              View Our Work
            </button>
            </motion.div>
          </div>

          <motion.div
            variants={animationVariants.textReveal}
            className="h-100 w-full md:h-120 lg:-mt-12 lg:h-140"
          >
            <div className="h-full w-full">
              <DepthImage3D />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

