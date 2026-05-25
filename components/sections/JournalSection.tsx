"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { JOURNAL_POSTS } from "@/lib/journal-posts"

const CARD_VARIANT_CLASS = {
  teal: "journal-card--teal",
  violet: "journal-card--violet",
  emerald: "journal-card--emerald",
} as const

export function JournalSection() {
  return (
    <section id="journal" className="w-full px-2 sm:px-3 md:px-4">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
        className="journal-panel mx-auto mb-5 w-full md:mb-6"
      >
        <div className="flex flex-col items-center px-6 py-12 md:px-10 md:py-16 lg:px-14 lg:py-20">
          <h2 className="font-pixelify text-center text-3xl font-medium uppercase tracking-tight text-white md:text-4xl lg:text-5xl">
            Journal
          </h2>
          <p className="mt-6 max-w-2xl text-center text-sm leading-relaxed text-white/70 md:mt-8 md:text-base">
            Our journal is where design meets thought leadership. From industry trends to creative
            breakthroughs, we share insights that inspire, challenge, and push the boundaries of
            design.
          </p>

          <div className="mt-12 flex w-full max-w-3xl flex-col gap-8 md:mt-16 md:gap-10 lg:max-w-4xl">
            {JOURNAL_POSTS.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className={`journal-card w-full ${CARD_VARIANT_CLASS[post.cardVariant]}`}
              >
                <div className="journal-card-media p-3 pb-0 sm:p-4 sm:pb-0">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-[1.75rem] sm:rounded-[2rem] md:rounded-[2.25rem]">
                    <Image
                      src={post.imageUrl}
                      alt={post.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 896px"
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="journal-card-footer flex flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:px-5 sm:py-5 md:px-6 md:py-6">
                  <div className="flex min-w-0 items-center gap-3 sm:gap-4">
                    <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full border border-white/15 bg-white/10 md:h-11 md:w-11">
                      <Image
                        src="/marvlock-logo.png"
                        alt=""
                        fill
                        sizes="44px"
                        className="object-cover"
                      />
                    </div>
                    <p className="truncate text-[10px] font-medium uppercase tracking-[0.14em] text-white/75 sm:text-[11px] md:text-xs">
                      {post.authorName}
                      <span className="px-2 text-white/35">•</span>
                      {post.categoryLabel}
                      <span className="px-2 text-white/35">•</span>
                      {post.issue}
                      <span className="px-2 text-white/35">•</span>
                      Journal
                    </p>
                  </div>

                  <span className="font-pixelify text-[10px] uppercase tracking-[0.14em] text-white/45 sm:text-xs">
                    Coming soon
                  </span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
