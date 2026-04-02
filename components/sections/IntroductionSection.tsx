"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { animationVariants } from "@/lib/animations"

export function IntroductionSection() {
  const lines = [
    {
      id: "line-1",
      content: (
        <>
          <span className="mr-2 text-accent">*</span>
          Marvlock is a software and digital product studio
          <span className="mx-2 inline-block align-middle">
            <InlineAsset src="/assets/tomato.png" alt="Tomato" />
          </span>
          for founders and ambitious teams.
        </>
      ),
    },
    {
      id: "line-2",
      content: (
        <>
          We combine <em className="font-serif-italic">product strategy, UX design, and modern engineering</em>
          <span className="mx-2 inline-block align-middle">
            <InlineAsset src="/assets/lamp.png" alt="Lamp" />
          </span>
          into one clear software roadmap.
        </>
      ),
    },
    {
      id: "line-3",
      content: (
        <>
          Every project runs end-to-end, from discovery to launch
          <span className="mx-2 inline-block align-middle">
            <InlineAsset src="/assets/water.png" alt="Water texture" />
          </span>
          to ship websites, apps, and internal tools.
        </>
      ),
    },
    {
      id: "line-4",
      content: (
        <>
          We stay hands-on to turn complex ideas into software people use and products businesses can scale.
        </>
      ),
    },
  ]

  return (
    <section id="approach" className="py-12 md:py-16">
      <div className="section-shell">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={animationVariants.staggerContainer}
          className="mx-auto max-w-6xl"
        >
          <div className="space-y-3 md:space-y-4">
            {lines.map((line, index) => (
              <motion.p
                key={line.id}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.55, delay: 0.08 * index }}
                className="text-2xl font-extrabold leading-[1.16] tracking-tight text-foreground md:text-3xl lg:text-4xl"
              >
                {line.content}
              </motion.p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function InlineAsset({ src, alt }: { src: string; alt: string }) {
  return (
    <span className="relative inline-block w-11 overflow-hidden rounded-sm border border-border/70 bg-card align-middle md:w-12">
      <span className="block aspect-video" />
      <Image src={src} alt={alt} fill sizes="200px" className="object-cover" />
    </span>
  )
}
