"use client"

import { motion } from "framer-motion"
import { animationVariants } from "@/lib/animations"

export function IntroductionSection() {
  const highlights = [
    "Product strategy shaped by user behavior",
    "Visual systems that stay coherent at scale",
    "Engineering that keeps performance non-negotiable",
  ]

  return (
    <section id="approach" className="py-12 md:py-16">
      <div className="section-shell">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={animationVariants.staggerContainer}
          className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]"
        >
          <div>
            <motion.p variants={animationVariants.textReveal} className="section-kicker">
              Our Approach
            </motion.p>
            <motion.h2 variants={animationVariants.textReveal} className="section-title max-w-3xl">
              Built like a product team, not an outsourced queue.
            </motion.h2>
            <motion.p variants={animationVariants.textReveal} className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Marvlock combines product thinking, design craft, and pragmatic engineering in a single workflow.
              We prototype early, validate quickly, and ship in tight loops so the final result feels focused from day one.
            </motion.p>
          </div>

          <motion.div variants={animationVariants.textReveal} className="glass-surface rounded-3xl p-6 md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">How we work</p>
            <div className="mt-5 space-y-4">
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl border border-border/70 bg-white/65 px-4 py-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-accent" />
                  <p className="text-sm leading-relaxed text-foreground/90 md:text-base">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
