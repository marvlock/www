"use client"

import { Navigation } from "@/components/layout/Navigation"
import { Footer } from "@/components/layout/Footer"
import { HeroSection } from "@/components/sections/HeroSection"
import { IntroductionSection } from "@/components/sections/IntroductionSection"
import { ServicesSection } from "@/components/sections/ServicesSection"
import { WorkSection } from "@/components/sections/WorkSection"
// import { TestimonialsSection } from "@/components/sections/TestimonialsSection"
import { FAQSection } from "@/components/sections/FAQSection"
import { ContactSection } from "@/components/sections/ContactSection"
import { ChatButton } from "@/components/ui/chat-button"

export default function Component() {
  return (
    <div className="bg-background text-foreground relative overflow-x-hidden min-h-screen">
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <div className="absolute -top-28 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,130,72,0.2)_0%,rgba(255,130,72,0)_65%)]" />
        <div className="absolute top-[30rem] -left-40 h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,rgba(27,47,86,0.12)_0%,rgba(27,47,86,0)_68%)]" />
        <div className="absolute bottom-[-12rem] right-[-10rem] h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(circle,rgba(193,120,64,0.14)_0%,rgba(193,120,64,0)_70%)]" />
      </div>
      <div className="relative z-10 font-sans">
        <Navigation isVisible={true} />
        <HeroSection />
        <IntroductionSection />
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
