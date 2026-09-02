"use client"

import { motion } from "framer-motion"
import { useState } from "react"

const SERVICES = [
  {
    name: "Software Engineering",
    slug: "software-engineering",
    description: "Reliable product foundations, integrations, systems, and the engineering work that keeps them moving.",
  },
  {
    name: "Web Development",
    slug: "web-development",
    description: "Fast, expressive websites built to communicate clearly and perform under real-world use.",
  },
  {
    name: "App Development",
    slug: "app-development",
    description: "Useful, focused applications designed around the way your team and customers actually work.",
  },
  {
    name: "Web & App Design",
    slug: "web-and-app-design",
    description: "Interfaces, flows, and systems that make complex products feel direct and considered.",
  },
  {
    name: "Ghostwriting",
    slug: "ghostwriting",
    description: "Clear product, founder, and technical writing that gives your ideas a distinct voice.",
  },
] as const

export function ServicesShowcaseSection() {
  const [activeService, setActiveService] = useState(0)

  return (
    <section id="services" className="w-full px-2 sm:px-3 md:px-4">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
        className="services-panel mx-auto mb-5 w-full md:mb-6"
      >
        <div className="mx-auto max-w-5xl px-5 py-10 sm:py-14 md:px-10 md:py-24">
          <div className="mb-10 flex flex-col gap-3 md:mb-14 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="font-pixelify text-xs uppercase tracking-[0.12em] text-[#4A9B6E]">
                01 / Studio Modules
              </p>
              <h2 className="font-pixelify mt-3 text-3xl font-medium uppercase tracking-tight text-[#F5F3ED] md:text-4xl lg:text-5xl">
                What we build
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-[#F5F3ED]/60 md:text-right md:text-base">
              Open a module to see where we can help.
            </p>
          </div>

          <div className="service-tree border-b border-white/15" role="list">
            {SERVICES.map((service, index) => {
              const isActive = activeService === index
              return (
                <div key={service.slug} role="listitem" className="border-t border-white/10">
                  <button
                    type="button"
                    aria-expanded={isActive}
                    aria-controls={`service-${service.slug}`}
                    onClick={() => setActiveService(isActive ? -1 : index)}
                    className="service-tree-row group w-full px-3 py-4 text-left sm:px-5 sm:py-5"
                  >
                    <span className="font-pixelify text-sm text-[#4A9B6E]" aria-hidden>
                      {index === SERVICES.length - 1 ? "└──" : "├──"}
                    </span>
                    <span className="font-pixelify ml-2 min-w-0 flex-1 break-words text-[clamp(1rem,5.3vw,1.5rem)] uppercase tracking-[0.03em] text-[#F5F3ED]">
                      {service.slug}/
                    </span>
                    <span className="ml-auto font-pixelify text-lg text-[#F5F3ED]/45 transition-transform duration-200 group-aria-expanded:rotate-45">
                      +
                    </span>
                  </button>
                  <div
                    id={`service-${service.slug}`}
                    hidden={!isActive}
                    className="service-tree-detail mx-3 mb-4 ml-8 border-l border-[#4A9B6E]/60 pl-4 sm:mx-5 sm:mb-5 sm:ml-10 sm:pl-5"
                  >
                    <p className="max-w-2xl text-sm leading-relaxed text-[#F5F3ED]/70 md:text-base">
                      {service.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
