"use client"

import { motion } from "framer-motion"
import { animationVariants } from "@/lib/animations"

export function ServicesSection() {
  const services = [
    {
      title: "Brand Identity",
      description: "Positioning, voice, and visual language built to make your product instantly recognizable.",
      tags: ["Narrative", "Identity", "Guidelines"],
    },
    {
      title: "Website Design",
      description: "Conversion-focused websites with clear structure, strong messaging, and visual depth.",
      tags: ["UX", "UI", "Content"],
    },
    {
      title: "Product Design",
      description: "Feature architecture and flows that prioritize user confidence, retention, and clarity.",
      tags: ["Discovery", "Wireframes", "Prototype"],
    },
    {
      title: "Web Development",
      description: "Modern web apps engineered for speed, maintainability, and business reliability.",
      tags: ["Next.js", "TypeScript", "Performance"],
    },
    {
      title: "App Development",
      description: "Mobile and cross-platform experiences that feel native and support real growth.",
      tags: ["iOS", "Android", "Cross-platform"],
    },
    {
      title: "Pitch and Collateral",
      description: "Fundraising decks and product communication assets that sharpen your story.",
      tags: ["Decks", "Narrative", "Launch"],
    },
  ]

  return (
    <section id="services" className="py-12 md:py-16">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16"
        >
          <p className="section-kicker">Services</p>
          <h2 className="section-title max-w-3xl">One partner for strategy, design, and shipping.</h2>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="glass-surface group rounded-3xl p-6 transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="mb-5 inline-flex h-8 w-8 items-center justify-center rounded-full border border-border bg-white/75 text-xs font-bold text-muted-foreground">
                {index + 1}
              </div>
              <h3 className="text-2xl font-extrabold tracking-tight">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">{service.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border bg-white/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
