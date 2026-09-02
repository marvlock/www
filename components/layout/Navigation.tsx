"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { MenuOverlay } from "./MenuOverlay"
import { useLenis } from "@/components/ui/smooth-scroll-provider"
import { scrollToSection } from "@/lib/scroll-to-section"

interface NavigationProps {
  isVisible: boolean
  placement?: "top" | "hero-bottom"
}

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "#services" },
] as const

export function Navigation({ isVisible, placement = "top" }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const lenis = useLenis()
  const isHome = pathname === "/"
  const isHeroBottom = placement === "hero-bottom"

  if (!isVisible) return null

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

  const navShellClass = "hero-nav-pill pointer-events-auto w-full max-w-5xl"

  const linkClass =
    "font-pixelify text-xs font-medium uppercase tracking-[0.08em] text-white/80 transition-colors hover:text-[#4A9B6E] md:text-sm"

  const pill = (
    <div className={navShellClass}>
      <Link
        href="/"
        aria-label="Marvlock home"
        className="relative flex h-11 w-11 shrink-0 overflow-hidden border border-white/10 bg-black/20 md:h-12 md:w-12"
      >
        <Image
          src="/marvlock-logo.png"
          alt=""
          fill
          sizes="48px"
          className="object-contain p-1"
          priority
        />
      </Link>

      <div className="hidden flex-1 items-center justify-center gap-6 px-2 md:flex md:gap-10 lg:gap-14">
        {NAV_LINKS.map((link) =>
          link.href.startsWith("#") ? (
            <a
              key={link.label}
              href={resolveHref(link.href)}
              onClick={(e) => handleSectionClick(e, link.href)}
              className={linkClass}
            >
              <span className="text-[#4A9B6E]">/</span>{link.label.toLowerCase()}
            </a>
          ) : (
            <Link key={link.label} href={link.href} className={linkClass}>
              <span className="text-[#4A9B6E]">/</span>{link.label.toLowerCase()}
            </Link>
          ),
        )}
      </div>

      <button
        type="button"
        onClick={() => setIsMenuOpen(true)}
        className="font-pixelify mr-1 border border-white/20 px-4 py-2.5 text-xs font-medium uppercase tracking-[0.08em] text-white/90 transition-colors hover:border-[#4A9B6E] hover:text-[#4A9B6E] md:hidden"
      >
        Menu
      </button>

      {isHome ? (
        <a
          href="#contact"
          onClick={(e) => handleSectionClick(e, "#contact")}
          className="font-pixelify ml-auto shrink-0 bg-[#C97A3D] px-5 py-2.5 text-xs font-medium uppercase tracking-[0.08em] text-[#0A0D0C] transition-colors hover:bg-[#E09459] md:px-7 md:py-3 md:text-sm"
        >
          Contact +
        </a>
      ) : (
        <Link
          href="/#contact"
          className="font-pixelify ml-auto shrink-0 bg-[#C97A3D] px-5 py-2.5 text-xs font-medium uppercase tracking-[0.08em] text-[#0A0D0C] transition-colors hover:bg-[#E09459] md:px-7 md:py-3 md:text-sm"
        >
          Contact +
        </Link>
      )}
    </div>
  )

  return (
    <>
      <nav
        className={
          isHeroBottom
            ? "w-full max-w-5xl"
            : "fixed inset-x-0 top-0 z-[100] p-4 md:p-6"
        }
      >
        <div className={isHeroBottom ? "flex justify-center" : "section-shell flex justify-center"}>
          {pill}
        </div>
      </nav>

      <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  )
}
