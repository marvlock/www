"use client"

import { motion } from "framer-motion"
import { animationVariants, viewportOptions } from "@/lib/animations"
import { Palette, Code, TrendingUp } from "lucide-react"

export function ApproachSection() {
  return (
    <section id="approach" className="py-20 md:py-32 px-6 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 gap-10 md:gap-20 mb-20 md:mb-32">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-7xl font-bold uppercase tracking-tighter leading-[0.9]"
          >
            Everything you need. <br />
            <span className="text-accent underline decoration-2 underline-offset-8">Nothing you don't.</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col justify-end"
          >
            <p className="text-xl md:text-2xl font-serif-italic text-muted-foreground leading-relaxed">
              We stripped away the agency bloat. No account managers, no jargon. 
              Just direct access to <span className="text-foreground font-bold">cracked engineers</span> and <span className="text-foreground font-bold">world-class designers</span>.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-12 md:gap-16">
          {[
            {
              title: "World-Class Design",
              desc: "Aesthetic isn't just decoration. We create emotionally resonant visual systems that build trust instantly.",
              icon: "01"
            },
            {
              title: "Modern Engineering",
              desc: "Built on Modern Tech Stacks. Clean, accessible, and type-safe code that scales with your business.",
              icon: "02"
            },
            {
              title: "Growth & Data",
              desc: "We implement advanced tracking and SEO foundations to ensure your product actually converts.",
              icon: "03"
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + (i * 0.1) }}
              className="group"
            >
              <div className="text-accent font-bold text-sm mb-6 flex items-center gap-4">
                <span className="w-8 h-px bg-accent" />
                {item.icon}
              </div>
              <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tighter mb-4 group-hover:text-accent transition-colors">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
