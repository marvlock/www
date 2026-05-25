"use client"

import { Footer } from "@/components/layout/Footer"
import { HeroSection } from "@/components/sections/HeroSection"
import { ClientsSection } from "@/components/sections/ClientsSection"
import { ServicesShowcaseSection } from "@/components/sections/ServicesShowcaseSection"
import { MilestonesSection } from "@/components/sections/MilestonesSection"
import { ContactSection } from "@/components/sections/ContactSection"

export default function Component() {
  return (
    <div className="flex min-h-screen flex-col overflow-hidden text-foreground">
      <div className="relative z-10 shrink-0 font-sans">
        <HeroSection />
      </div>
      <div className="site-bottom relative z-10 shrink-0 font-sans">
        <ServicesShowcaseSection />
        <ClientsSection />
        <MilestonesSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  )
}
