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
        <div className="flex flex-col items-center px-6 py-12 md:px-10 md:py-16 lg:py-20">
          <h2 className="font-pixelify text-3xl font-medium uppercase tracking-tight text-white md:text-4xl lg:text-5xl">
            Milestones
          </h2>

          <div className="mt-10 flex w-full max-w-lg flex-col items-center md:mt-14">
            {MILESTONES.map((item, index) => (
              <div key={item.label} className="flex w-full flex-col items-center">
                {index > 0 && (
                  <div className="my-10 h-px w-full max-w-md bg-white/20 md:my-12" aria-hidden />
                )}
                <p className="font-pixelify text-6xl font-medium leading-none text-white md:text-7xl lg:text-8xl">
                  {item.value}
                </p>
                <p className="mt-4 text-center text-sm text-white/70 md:text-base">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
