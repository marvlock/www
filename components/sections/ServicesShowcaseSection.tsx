"use client"

import Image from "next/image"
import { useCallback, useEffect, useState } from "react"
import {
  motion,
  AnimatePresence,
  useReducedMotion,
  type PanInfo,
} from "framer-motion"

const SERVICES_DESCRIPTION =
  "From web and app development to logo, website, and product design, we also handle video editing, 3D modelling, and character generation."

const SERVICES = [
  { num: "01", name: "Logo Design", imageUrl: "/things.png" },
  { num: "02", name: "Website Design", imageUrl: "/synapse.png" },
  { num: "03", name: "Product Design", imageUrl: "/ghostform.png" },
  { num: "04", name: "Web Development", imageUrl: "/replied.png" },
  { num: "05", name: "App Development", imageUrl: "/nullbin.png" },
  { num: "06", name: "Video Editing", imageUrl: "/schedulo.png" },
  { num: "07", name: "3D Modelling", imageUrl: "/things.png" },
  { num: "08", name: "Character Generation", imageUrl: "/ghostform.png" },
] as const

const COUNT = SERVICES.length
const AUTO_MS = 5500
const SWIPE_THRESHOLD = 48

const SPRING = {
  type: "spring" as const,
  stiffness: 320,
  damping: 32,
  mass: 0.85,
}

function circularOffset(index: number, active: number) {
  let diff = index - active
  if (diff > COUNT / 2) diff -= COUNT
  if (diff < -COUNT / 2) diff += COUNT
  return diff
}

function cardMotion(offset: number, reduced: boolean) {
  if (reduced) {
    return {
      x: 0,
      scale: offset === 0 ? 1 : 0.85,
      opacity: Math.abs(offset) <= 1 ? (offset === 0 ? 1 : 0.5) : 0,
      zIndex: offset === 0 ? 30 : 10,
      rotateZ: 0,
      filter: "blur(0px)",
    }
  }

  if (offset === 0) {
    return {
      x: 0,
      scale: 1,
      rotateZ: 0,
      rotateY: 0,
      zIndex: 30,
      opacity: 1,
      filter: "blur(0px) brightness(1)",
    }
  }

  if (offset === -1) {
    return {
      x: "-54%",
      scale: 0.8,
      rotateZ: -8,
      rotateY: 14,
      zIndex: 20,
      opacity: 0.72,
      filter: "blur(1.5px) brightness(0.78)",
    }
  }

  if (offset === 1) {
    return {
      x: "54%",
      scale: 0.8,
      rotateZ: 8,
      rotateY: -14,
      zIndex: 20,
      opacity: 0.72,
      filter: "blur(1.5px) brightness(0.78)",
    }
  }

  const far = offset < 0 ? -1 : 1
  return {
    x: `${far * 92}%`,
    scale: 0.62,
    rotateZ: far * -12,
    rotateY: far * 22,
    zIndex: 5,
    opacity: 0,
    filter: "blur(6px) brightness(0.55)",
  }
}

export function ServicesShowcaseSection() {
  const [active, setActive] = useState(2)
  const [paused, setPaused] = useState(false)
  const reducedMotion = useReducedMotion()

  const current = SERVICES[active]

  const goTo = useCallback((index: number) => {
    if (index === active) return
    setActive(index)
  }, [active])

  const goNext = useCallback(() => {
    setActive((prev) => (prev + 1) % COUNT)
  }, [])

  const goPrev = useCallback(() => {
    setActive((prev) => (prev - 1 + COUNT) % COUNT)
  }, [])

  useEffect(() => {
    if (paused || reducedMotion) return
    const timer = window.setInterval(goNext, AUTO_MS)
    return () => window.clearInterval(timer)
  }, [paused, reducedMotion, goNext])

  const onDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.x < -SWIPE_THRESHOLD) goNext()
    else if (info.offset.x > SWIPE_THRESHOLD) goPrev()
  }

  const pillVariants = {
    hidden: { opacity: 0, y: reducedMotion ? 0 : 14 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reducedMotion ? 0.01 : 0.45,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
    exit: {
      opacity: 0,
      y: reducedMotion ? 0 : -8,
      transition: { duration: reducedMotion ? 0.01 : 0.22 },
    },
  }

  return (
    <section id="services" className="w-full px-2 sm:px-3 md:px-4">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
        className="services-panel mx-auto mb-5 w-full md:mb-6"
      >
        <div className="flex flex-col items-center px-4 py-12 md:px-10 md:py-16 lg:py-20">
          <h2 className="font-pixelify text-center text-3xl font-medium uppercase tracking-tight text-white md:text-4xl lg:text-5xl">
            Services
          </h2>

          <div
            className="relative mt-10 w-full max-w-3xl md:mt-14"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocusCapture={() => setPaused(true)}
            onBlurCapture={() => setPaused(false)}
          >
            <div className="services-carousel-glow" aria-hidden />

            <motion.div
              className="services-carousel-stage relative mx-auto h-[250px] w-full max-w-xl touch-pan-y sm:h-[320px] md:h-[400px]"
              drag={reducedMotion ? false : "x"}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.14}
              onDragEnd={onDragEnd}
            >
                {SERVICES.map((item, index) => {
                  const offset = circularOffset(index, active)
                  const isCenter = offset === 0
                  const isAdjacent = Math.abs(offset) === 1
                  const motionProps = cardMotion(offset, !!reducedMotion)

                  return (
                    <motion.button
                      key={item.num}
                      type="button"
                      onClick={() => goTo(index)}
                      animate={motionProps}
                      transition={reducedMotion ? { duration: 0.2 } : SPRING}
                      className={`services-carousel-card absolute left-1/2 top-1/2 h-[78%] w-[54%] max-w-[180px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[1.35rem] sm:w-[46%] sm:max-w-[220px] sm:rounded-[1.75rem] md:w-[42%] md:rounded-4xl ${
                        isCenter
                          ? "services-carousel-card--center cursor-default"
                          : isAdjacent
                            ? "cursor-pointer"
                            : "pointer-events-none"
                      }`}
                      style={{
                        zIndex: motionProps.zIndex,
                        transformPerspective: 1100,
                      }}
                      aria-label={isCenter ? undefined : `View ${item.name}`}
                      aria-hidden={!isCenter && !isAdjacent}
                      tabIndex={isCenter || isAdjacent ? 0 : -1}
                      whileHover={
                        isAdjacent && !reducedMotion
                          ? { scale: motionProps.scale * 1.04, opacity: 0.9 }
                          : undefined
                      }
                      whileTap={isAdjacent ? { scale: motionProps.scale * 0.97 } : undefined}
                    >
                      <motion.div
                        className="relative h-full w-full"
                        animate={{
                          scale: isCenter ? 1.06 : 1,
                        }}
                        transition={SPRING}
                      >
                        <Image
                          src={item.imageUrl}
                          alt={item.name}
                          fill
                          sizes="(max-width: 768px) 45vw, 240px"
                          className="object-cover"
                          priority={isCenter}
                        />
                      </motion.div>
                      <div
                        className={`pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent transition-opacity duration-500 ${
                          isCenter ? "opacity-100" : "opacity-70"
                        }`}
                      />
                      <div className="services-carousel-card-ring" aria-hidden />
                    </motion.button>
                  )
                })}
            </motion.div>
          </div>

          <div className="mt-8 flex max-w-xl flex-col items-center px-2 md:mt-10">
            <AnimatePresence mode="wait">
              <motion.span
                key={current.num}
                variants={pillVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="rounded-full bg-white px-4 py-2.5 text-center text-sm font-semibold tracking-tight text-foreground shadow-[0_8px_32px_rgba(255,255,255,0.12)]"
              >
                <span className="tabular-nums text-muted-foreground">{current.num}</span>{" "}
                {current.name}
              </motion.span>
            </AnimatePresence>
            <p className="mt-6 text-center text-sm leading-relaxed text-white/70 md:text-base">
              {SERVICES_DESCRIPTION}
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
