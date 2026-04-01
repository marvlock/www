"use client"

import { motion } from "framer-motion"
import { CONTACT_EMAIL } from "@/lib/constants"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-surface relative overflow-hidden rounded-3xl px-6 py-16 text-center md:px-10"
        >
          <div className="pointer-events-none absolute inset-0 opacity-70">
            <div className="absolute left-8 top-8 h-20 w-20 rounded-full border border-accent/25" />
            <div className="absolute bottom-8 right-8 h-24 w-24 rounded-full border border-accent/20" />
          </div>

          <p className="section-kicker">Let us build with you</p>
          <h2 className="mx-auto max-w-4xl text-5xl font-extrabold leading-[0.9] tracking-tight md:text-7xl">
            Ready to turn the next idea into a shipped product?
          </h2>
          
          <div className="mt-8 flex flex-col items-center gap-7">
            <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-2xl">
              Join teams that care about product quality, speed, and long-term maintainability.
            </p>

            <a 
              href={`mailto:${CONTACT_EMAIL}?subject=New Project Inquiry`}
              className="inline-flex rounded-full bg-foreground px-8 py-4 text-sm font-bold uppercase tracking-[0.16em] text-background transition-colors hover:bg-accent"
            >
              Start the Conversation
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
