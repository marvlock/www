"use client"

import { useRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion"
import { CONTACT_EMAIL, SOCIAL_LINKS } from "@/lib/constants"
import { useLenis } from "@/components/ui/smooth-scroll-provider"
import { scrollToSection } from "@/lib/scroll-to-section"

const FOOTER_NAV = [
  { label: "Home", href: "/" },
  { label: "Services", href: "#services" },
  { label: "Contact us", href: "#contact" },
] as const

const FOOTER_SOCIAL = SOCIAL_LINKS.filter((link) =>
  ["X", "Instagram", "Discord", "LinkedIn", "GitHub"].includes(link.name),
)

const FOOTER_WORDMARK = "marvlock".split("")

export function Footer() {
  const footerRef = useRef<HTMLElement | null>(null)
  const pathname = usePathname()
  const lenis = useLenis()
  const isHome = pathname === "/"
  const emailDisplay = CONTACT_EMAIL.toUpperCase()
  const year = new Date().getFullYear()
  const reducedMotion = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "end end"],
  })

  const footerWordScale = useTransform(scrollYProgress, [0, 0.45, 1], [0.7, 0.86, 1])
  const footerTopOpacity = useTransform(scrollYProgress, [0, 0.25, 1], [0.68, 0.84, 1])
  const wordmarkVariants = {
    hidden: { opacity: 0, y: reducedMotion ? 0 : 26 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: reducedMotion ? 0.01 : 0.28,
        delay: reducedMotion ? 0 : index * 0.065,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    }),
  }

  const resolveHref = (href: string) => {
    if (href.startsWith("#") && !isHome) return `/${href}`
    return href
  }

  const handleSectionClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (!href.startsWith("#")) return
    e.preventDefault()
    scrollToSection(lenis, href)
  }

  return (
    <div className="w-full px-2 sm:px-3 md:px-4">
      <footer ref={footerRef} className="footer-panel w-full">
        <div className="mx-auto flex max-w-[100rem] flex-col justify-between px-4 py-6 sm:px-5 sm:py-8 md:px-6 md:py-10 lg:min-h-[68svh] lg:px-8 lg:py-12">
          <motion.div
            style={{ opacity: footerTopOpacity }}
            className="grid gap-8 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 lg:grid-cols-[1.4fr_0.8fr_1fr] lg:gap-10"
          >
            <div className="space-y-5 sm:col-span-2 lg:col-span-1">
              <p className="flex items-center gap-2 font-pixelify text-xs uppercase tracking-[0.08em] text-[#F5F3ED]/65 md:text-sm">
                <span className="status-dot" aria-hidden />
                Status: accepting new builds
              </p>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="font-pixelify block whitespace-nowrap text-[clamp(0.8rem,3.8vw,1.2rem)] font-medium uppercase leading-tight tracking-[-0.04em] text-[#F5F3ED] transition-colors hover:text-[#4A9B6E] sm:text-[clamp(1.1rem,4.3vw,2rem)] sm:tracking-tight lg:text-[clamp(1.45rem,2.7vw,3rem)] xl:text-5xl"
              >
                {emailDisplay}
              </a>
            </div>

            <nav aria-label="Footer navigation" className="font-pixelify flex flex-col gap-2 text-lg uppercase tracking-[0.04em] sm:gap-3 md:gap-4 md:text-xl">
              <p className="text-xs uppercase tracking-[0.1em] text-[#F5F3ED]/45">navigate/</p>
              {FOOTER_NAV.map((item) =>
                item.href.startsWith("#") ? (
                  <a
                    key={item.label}
                    href={resolveHref(item.href)}
                    onClick={(e) => handleSectionClick(e, item.href)}
                    className="group w-fit text-[#F5F3ED]/82 transition-colors hover:text-[#4A9B6E]"
                  >
                    <span className="text-[#4A9B6E]">/</span>{item.label.toLowerCase().replace(" ", "-")}
                  </a>
                ) : (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="group w-fit text-[#F5F3ED]/82 transition-colors hover:text-[#4A9B6E]"
                  >
                    <span className="text-[#4A9B6E]">/</span>{item.label.toLowerCase().replace(" ", "-")}
                  </Link>
                ),
              )}
            </nav>

            <div className="space-y-5 lg:col-span-1">
              <p className="font-pixelify text-xs uppercase tracking-[0.1em] text-[#F5F3ED]/45">
                external/
              </p>
              <div className="flex flex-wrap gap-2">
                {FOOTER_SOCIAL.map((link) => {
                  const Icon = link.icon
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.name}
                      className="flex h-12 w-12 items-center justify-center border border-white/20 text-[#F5F3ED]/85 transition-colors hover:border-[#4A9B6E] hover:bg-[#4A9B6E] hover:text-[#0A0D0C]"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  )
                })}
              </div>
            </div>
          </motion.div>

          <div className="mt-6 sm:mt-8 md:mt-10">
            <motion.div
              style={{ scale: footerWordScale }}
              className="origin-bottom flex min-h-[5.75rem] items-end justify-center overflow-visible pb-2 sm:min-h-[7rem] sm:pb-0 md:min-h-[11rem] lg:min-h-[14rem]"
            >
              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.7 }}
                className="font-pixelify block whitespace-nowrap select-none text-[clamp(2.65rem,14vw,7.5rem)] uppercase leading-[0.86] tracking-[-0.045em] text-[#F5F3ED] sm:text-[clamp(4.25rem,14vw,9rem)] md:text-[clamp(5.25rem,13vw,13rem)]"
                aria-label="Marvlock"
              >
                {FOOTER_WORDMARK.map((letter, index) => (
                  <motion.span key={`${letter}-${index}`} custom={index} variants={wordmarkVariants} className="inline-block">
                    {letter}
                  </motion.span>
                ))}
              </motion.p>
            </motion.div>

            <div className="mt-2 flex flex-col gap-2 border-t border-white/10 pt-4 text-xs text-[#F5F3ED]/50 sm:flex-row sm:items-center sm:justify-between md:text-sm">
              <p>©{year} Marvlock Studio</p>
              <p>Software, web, apps, design, and ghostwriting under same roof.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
