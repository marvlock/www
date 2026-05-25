"use client"

import { useRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, useScroll, useTransform } from "framer-motion"
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

export function Footer() {
  const footerRef = useRef<HTMLElement | null>(null)
  const pathname = usePathname()
  const lenis = useLenis()
  const isHome = pathname === "/"
  const emailDisplay = CONTACT_EMAIL.toUpperCase()
  const year = new Date().getFullYear()

  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "end end"],
  })

  const footerWordScale = useTransform(scrollYProgress, [0, 0.45, 1], [0.7, 0.86, 1])
  const footerWordY = useTransform(scrollYProgress, [0, 1], [48, 0])
  const footerTopOpacity = useTransform(scrollYProgress, [0, 0.25, 1], [0.68, 0.84, 1])

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
        <div className="mx-auto flex min-h-[58svh] max-w-[100rem] flex-col justify-between px-4 py-8 md:min-h-[64svh] md:px-6 md:py-10 lg:min-h-[68svh] lg:px-8 lg:py-12">
          <motion.div
            style={{ opacity: footerTopOpacity }}
            className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1fr] lg:gap-10"
          >
            <div className="space-y-5">
              <p className="font-pixelify text-base uppercase tracking-[0.12em] text-white/80 md:text-lg">
                Stay connected.
              </p>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="font-pixelify block break-all text-[clamp(1.45rem,8vw,2.6rem)] font-medium uppercase leading-tight tracking-tight text-white transition-opacity hover:opacity-80 md:break-normal md:text-5xl lg:text-6xl"
              >
                {emailDisplay}
              </a>
              <p className="max-w-lg text-base leading-relaxed text-white/65 md:text-lg">
                Design, motion, code, and 3D for brands that want to{" "}
                <span className="whitespace-nowrap">stand out.</span>
              </p>
              <p className="text-base text-white/50">Made with ❤️ by Marvlock</p>
            </div>

            <nav className="flex flex-col gap-3 md:gap-4">
              {FOOTER_NAV.map((item) =>
                item.href.startsWith("#") ? (
                  <a
                    key={item.label}
                    href={resolveHref(item.href)}
                    onClick={(e) => handleSectionClick(e, item.href)}
                    className="font-pixelify w-fit text-xl uppercase tracking-[0.06em] text-white transition-opacity hover:opacity-75 md:text-2xl"
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="font-pixelify w-fit text-xl uppercase tracking-[0.06em] text-white transition-opacity hover:opacity-75 md:text-2xl"
                  >
                    {item.label}
                  </Link>
                ),
              )}
            </nav>

            <div className="space-y-5 md:col-span-2 lg:col-span-1">
              <p className="font-pixelify text-xl uppercase tracking-[0.06em] text-white md:text-2xl">
                Social Media
              </p>
              <div className="flex flex-wrap gap-3">
                {FOOTER_SOCIAL.map((link) => {
                  const Icon = link.icon
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.name}
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-white/5 text-white transition-colors hover:border-white/50 hover:bg-white/10"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  )
                })}
              </div>
            </div>
          </motion.div>

          <div className="mt-8 md:mt-10">
            <motion.div
              style={{ scale: footerWordScale, y: footerWordY }}
              className="origin-bottom flex min-h-[5.5rem] items-end overflow-visible sm:min-h-[7rem] md:min-h-[11rem] lg:min-h-[14rem]"
            >
              <p className="-ml-[0.08em] block whitespace-nowrap select-none text-[clamp(3.9rem,22vw,9rem)] font-black uppercase leading-[0.9] tracking-[-0.11em] text-white/86 sm:-ml-[0.14em] sm:text-[clamp(5.2rem,22vw,12rem)] md:-ml-[0.24em] md:text-[clamp(6.4rem,23vw,21rem)]">
                marvlock
              </p>
            </motion.div>

            <div className="mt-2 flex flex-col gap-2 border-t border-white/10 pt-4 text-[10px] uppercase tracking-[0.16em] text-white/45 sm:flex-row sm:items-center sm:justify-between md:text-xs">
              <p>©{year} Marvlock Studio</p>
              <p>Web, apps, branding, motion, and 3D under one roof.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
