"use client"

import { Navigation } from "@/components/layout/Navigation"
import { Footer } from "@/components/layout/Footer"
import { HeroSection } from "@/components/sections/HeroSection"
import { CapabilitiesSection } from "@/components/sections/CapabilitiesSection"
import { WorkSection } from "@/components/sections/WorkSection"
import { AboutSection } from "@/components/sections/AboutSection"
import { ContactSection } from "@/components/sections/ContactSection"
import { useNavbarVisibility } from "@/hooks/useNavbarVisibility"

export default function Component() {
  const isNavbarVisible = useNavbarVisibility()

  return (
    <div className="sparkling-gradient text-white relative overflow-x-hidden">
      <Navigation isVisible={isNavbarVisible} />
      <HeroSection />
      <CapabilitiesSection />
      <WorkSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  )
}
