"use client"

import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"
import { PROJECTS } from "@/lib/constants"

export function WorkSection() {
  return (
    <section id="work" className="py-20 md:py-28">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16"
        >
          <p className="section-kicker">Selected Work</p>
          <h2 className="section-title max-w-4xl">
            Real products shipped for speed, clarity, and growth.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {PROJECTS.map((project, index) => (
            <motion.article
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="glass-surface group overflow-hidden rounded-3xl"
            >
              <div className="relative aspect-video overflow-hidden border-b border-border/70 bg-muted">
                {project.imageUrl ? (
                  <img
                    src={project.imageUrl}
                    alt={project.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center">
                    <span className="text-5xl font-bold text-accent/60">*</span>
                  </div>
                )}
              </div>

              <div className="p-6 md:p-7">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-extrabold tracking-tight md:text-3xl">{project.name}</h3>
                    <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
                      {project.description}
                    </p>
                  </div>
                  <span className="shrink-0 whitespace-nowrap rounded-full border border-border bg-secondary/40 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.12em] leading-none text-muted-foreground">
                    {project.stack[0]}
                  </span>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.slice(1, 4).map((tech) => (
                    <span
                      key={`${project.name}-${tech}`}
                      className="rounded-full border border-border bg-white/60 px-3 py-1 text-[11px] font-semibold text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.liveUrl && project.liveUrl !== "#" && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-xs font-bold uppercase tracking-[0.14em] text-background transition-colors hover:bg-accent"
                  >
                    Live Preview
                    <ExternalLink className="h-4 w-4" />
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
