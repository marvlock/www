"use client"

import { motion } from "framer-motion"

const MILESTONES = [
  {
    value: "2+",
    label: "Extensive Industry Experience",
  },
  {
    value: "6+",
    label: "Projects Completed",
  },
] as const

export function MilestonesSection() {
  return (
    <section id="milestones" className="w-full px-2 sm:px-3 md:px-4">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
        className="milestones-panel mx-auto mb-5 w-full md:mb-6"
      >
        <div className="mx-auto max-w-5xl px-5 py-10 sm:py-14 md:px-10 md:py-24">
          <div className="flex flex-col gap-3 border-b border-white/15 pb-8 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="font-pixelify text-xs uppercase tracking-[0.12em] text-[#4A9B6E]">
                02 / Runtime
              </p>
              <h2 className="font-pixelify mt-3 text-3xl font-medium uppercase tracking-tight text-white md:text-4xl lg:text-5xl">
                Built in public
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-white/60 md:text-right md:text-base">
              A small, independent studio with shipped work and growing momentum.
            </p>
          </div>

          <div className="mt-2 grid w-full border-b border-white/15 md:grid-cols-2">
            {MILESTONES.map((item, index) => (
              <div
                key={item.label}
                className={`flex min-h-52 flex-col justify-between px-5 py-6 sm:min-h-56 sm:px-8 md:min-h-64 md:py-8 ${
                  index > 0 ? "border-t border-white/15 md:border-l md:border-t-0" : ""
                }`}
              >
                <div>
                  <p className="font-pixelify text-6xl font-medium leading-none text-white md:text-7xl lg:text-8xl">
                    {item.value}
                  </p>
                  <p className="mt-4 max-w-xs text-sm text-white/65 md:text-base">
                    {item.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
