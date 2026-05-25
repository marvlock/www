"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { PROJECTS, PROJECTS_DESCRIPTION } from "@/lib/clients"

export function ClientsSection() {
  return (
    <section id="projects" className="w-full px-2 sm:px-3 md:px-4">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
        className="clients-panel mx-auto mb-5 w-full md:mb-6"
      >
        <div className="flex flex-col items-center px-4 py-12 md:px-10 md:py-16 lg:py-20">
          <h2 className="font-pixelify text-center text-3xl font-medium uppercase tracking-tight text-white md:text-4xl lg:text-5xl">
            Projects
          </h2>
          <p className="mt-6 max-w-2xl text-center text-sm leading-relaxed text-white/70 md:mt-8 md:text-base">
            {PROJECTS_DESCRIPTION}
          </p>

          <div className="mt-10 grid w-full max-w-7xl gap-5 md:mt-14 md:grid-cols-2 md:gap-6">
            {PROJECTS.map((project, index) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="overflow-hidden rounded-[1.5rem] border border-white/12 bg-[linear-gradient(160deg,rgba(24,22,28,0.88),rgba(8,8,10,0.78))] text-white shadow-[0_24px_70px_rgba(0,0,0,0.3)] backdrop-blur-xl md:rounded-[2rem]"
              >
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${project.name} live site`}
                  className="block p-2.5 pb-0 md:p-4 md:pb-0"
                >
                  <div className="relative aspect-[16/10] overflow-hidden rounded-[1.2rem] border border-white/10 bg-black/30 sm:aspect-[16/9] md:rounded-[1.75rem]">
                    <Image
                      src={project.imageUrl}
                      alt={project.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-top"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/28 via-transparent to-transparent" />
                  </div>
                </a>

                <div className="space-y-4 p-4 sm:p-5 md:space-y-5 md:p-8">
                  <div className="flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap sm:items-start sm:justify-between sm:gap-4">
                    <div className="space-y-2">
                      <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl">{project.name}</h3>
                      <p className="max-w-xl text-sm leading-relaxed text-white/68 sm:text-base md:text-lg">
                        {project.description}
                      </p>
                    </div>

                    <span className="rounded-full border border-white/10 bg-white/[0.05] px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/70 sm:px-4 sm:py-2 sm:text-[11px]">
                      {project.category}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[11px] font-medium text-white/68 sm:text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="pt-1">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-pixelify inline-flex w-full items-center justify-center rounded-full border border-white/14 bg-white/[0.08] px-5 py-3 text-sm uppercase tracking-[0.14em] text-white transition-all hover:-translate-y-0.5 hover:border-white/30 hover:bg-white hover:text-black sm:w-auto"
                    >
                      Live Preview
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
