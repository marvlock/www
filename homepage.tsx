"use client"

import { Navigation } from "@/components/layout/Navigation"
import { Footer } from "@/components/layout/Footer"
import { HeroSection } from "@/components/sections/HeroSection"
import { ApproachSection } from "@/components/sections/ApproachSection"
import { ServicesSection } from "@/components/sections/ServicesSection"
import { WorkSection } from "@/components/sections/WorkSection"
import { TestimonialsSection } from "@/components/sections/TestimonialsSection"
import { FAQSection } from "@/components/sections/FAQSection"
import { ContactSection } from "@/components/sections/ContactSection"
import { ChatButton } from "@/components/ui/chat-button"
import LiquidEther from "@/components/ui/liquid-ether"
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
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 w-screen h-screen">
        {mounted && theme === 'dark' && (
          <div className="absolute inset-0 w-full h-full" style={{ width: '100vw', height: '100vh' }}>
            <LiquidEther
              colors={['#5227FF', '#FF9FFC', '#B19EEF']}
              mouseForce={20}
              cursorSize={100}
              isViscous
              viscous={30}
              iterationsViscous={32}
              iterationsPoisson={32}
              resolution={0.5}
              isBounce={false}
              autoDemo
              autoSpeed={0.5}
              autoIntensity={2.2}
              takeoverDuration={0.25}
              autoResumeDelay={3000}
              autoRampDuration={0.6}
            />
          </div>
        )}
      </div>
      <div className="relative z-10">
        <Navigation isVisible={true} />
      <HeroSection />
      <ApproachSection />
      <ServicesSection />
      <WorkSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
      <ChatButton />
      <Footer />
      </div>
    </div>
  )
}
