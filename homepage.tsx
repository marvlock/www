"use client"

import { Navigation } from "@/components/layout/Navigation"
import { Footer } from "@/components/layout/Footer"
import { HeroSection } from "@/components/sections/HeroSection"
import { ApproachSection } from "@/components/sections/ApproachSection"
import { ServicesSection } from "@/components/sections/ServicesSection"
import { WorkSection } from "@/components/sections/WorkSection"
// import { TestimonialsSection } from "@/components/sections/TestimonialsSection"
import { FAQSection } from "@/components/sections/FAQSection"
import { ContactSection } from "@/components/sections/ContactSection"
import { ChatButton } from "@/components/ui/chat-button"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export default function Component() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="bg-white dark:bg-[#0E1117] text-[#0E1117] dark:text-white relative overflow-x-hidden transition-colors">
      <div className="fixed inset-0 z-0 bg-[#f4f4f0] dark:bg-[#121212]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000010_1px,transparent_1px),linear-gradient(to_bottom,#00000010_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:2rem_2rem]"></div>
      </div>
      <div className="relative z-10">
        <Navigation isVisible={true} />
      <HeroSection />
      <ApproachSection />
      <ServicesSection />
      <WorkSection />
      {/* <TestimonialsSection /> */}
      <FAQSection />
      <ContactSection />
      <ChatButton />
      <Footer />
      </div>
    </div>
  )
}
