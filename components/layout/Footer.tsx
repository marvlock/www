"use client"

import { SOCIAL_LINKS } from "@/lib/constants"

export function Footer() {
  return (
    <footer className="border-t border-border/80 py-16 md:py-20">
      <div className="section-shell">
        <div className="grid gap-12 md:grid-cols-2 md:items-end">
          <div className="space-y-6">
            <div className="text-5xl font-extrabold uppercase tracking-tight md:text-7xl">
              Marvlock<span className="text-accent">*</span>
            </div>
            <p className="max-w-md text-lg leading-relaxed text-muted-foreground md:text-xl">
              We design and build digital products that help ambitious teams move with confidence.
            </p>
          </div>

          <div className="flex flex-col items-start gap-8 md:items-end">
            <div className="flex flex-col items-start gap-3 md:items-end">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Follow Us</span>
              <div className="flex flex-wrap gap-x-8 gap-y-4">
                {SOCIAL_LINKS.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold uppercase tracking-[0.14em] transition-colors hover:text-accent"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            <div className="flex flex-col items-start gap-2 text-sm font-bold uppercase tracking-[0.12em] md:items-end">
              <a href="mailto:marvlock.dev@gmail.com" className="transition-colors hover:text-accent">marvlock.dev@gmail.com</a>
              <div className="text-muted-foreground">
                © {new Date().getFullYear()} MARVLOCK. ALL RIGHTS RESERVED.
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
