"use client"

import { motion } from "framer-motion"
import { animationVariants, viewportOptions } from "@/lib/animations"
import { Palette, Globe, Smartphone, Code2, Presentation, Tablet } from "lucide-react"
import { DotLottieReact } from "@lottiefiles/dotlottie-react"

export function ServicesSection() {
  const services = [
    {
      title: "Brand Identity",
      description: "Get a differentiated and unique brand identity to stand out your product from competitors.",
      illustration: "brand",
      icons: ["Ai", "infinity"]
    },
    {
      title: "Website Design",
      description: "Turn your website into a eye-dropping marketing machine to turn visitors into customers.",
      illustration: "website",
      icons: ["infinity", "lightning"]
    },
    {
      title: "Product Design",
      description: "Make your product so delightful to, it instantly becomes the thing to talk about in the industry.",
      illustration: "product",
      icons: ["infinity", "N", "square"]
    },
    {
      title: "Web Development",
      description: "Build fast, scalable, and modern web applications with cutting-edge technologies and best practices.",
      illustration: "webdev",
      icons: ["code", "rocket", "W"]
    },
    {
      title: "App Development",
      description: "Create native and cross-platform mobile applications that deliver exceptional user experiences.",
      illustration: "app",
      icons: ["cube", "rocket", "code"]
    },
    {
      title: "Pitch Deck & Collaterals",
      description: "Fulfill all marketing design requirements with a team that feels like your own.",
      illustration: "pitch",
      icons: ["grid", "trash"]
    }
  ]

  const renderIllustration = (type: string) => {
    switch (type) {
      case "brand":
        return (
          <div className="flex flex-col items-center space-y-4">
            <div className="bg-[#ecece6] dark:bg-black border-4 border-black dark:border-white p-4 shadow-[4px_4px_0px_#000000] dark:shadow-[4px_4px_0px_#ffffff] w-full overflow-hidden">
              <DotLottieReact
                src="https://lottie.host/ef32f5c6-fb72-4316-b6cb-2003b8f47e6a/rmnzQkYKkb.lottie"
                loop
                autoplay
                className="w-full h-full"
              />
            </div>
            <div className="flex gap-2">
              <div className="w-10 h-10 bg-[#FFD700] border-2 border-black dark:border-white flex items-center justify-center overflow-hidden shadow-[2px_2px_0px_#000000] dark:shadow-[2px_2px_0px_#ffffff]">
                <img 
                  src="https://vz1c70bqc3.ufs.sh/f/xvyiJUSZFkzWeZsMVsPp4qSfeuNw5YcsZMALGrJIjO97Cy8H" 
                  alt="AI" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="w-10 h-10 bg-[#00A4EF] border-2 border-black dark:border-white flex items-center justify-center overflow-hidden shadow-[2px_2px_0px_#000000] dark:shadow-[2px_2px_0px_#ffffff] p-1">
                <img 
                  src="https://vz1c70bqc3.ufs.sh/f/xvyiJUSZFkzWzmSfUYioaCjdrBhpmGy7Te6F9ZUlckQtuNSI" 
                  alt="Figma" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        )
      case "website":
        return (
          <div className="flex flex-col items-center space-y-4">
            <div className="bg-[#ecece6] dark:bg-black border-4 border-black dark:border-white p-4 shadow-[4px_4px_0px_#000000] dark:shadow-[4px_4px_0px_#ffffff] w-full overflow-hidden">
              <DotLottieReact
                src="https://lottie.host/4e2f59f1-24df-4dcc-9df2-9950fd6f9bd1/WJhi64AFOQ.lottie"
                loop
                autoplay
                className="w-full h-full"
              />
            </div>
            <div className="flex gap-2">
              <div className="w-10 h-10 bg-[#E32726] border-2 border-black dark:border-white flex items-center justify-center overflow-hidden shadow-[2px_2px_0px_#000000] dark:shadow-[2px_2px_0px_#ffffff] p-1">
                <img 
                  src="https://vz1c70bqc3.ufs.sh/f/xvyiJUSZFkzWzmSfUYioaCjdrBhpmGy7Te6F9ZUlckQtuNSI" 
                  alt="Figma" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="w-10 h-10 bg-[#FFD700] border-2 border-black dark:border-white flex items-center justify-center overflow-hidden shadow-[2px_2px_0px_#000000] dark:shadow-[2px_2px_0px_#ffffff] p-1">
                <img 
                  src="https://vz1c70bqc3.ufs.sh/f/xvyiJUSZFkzWv4VgfA7GBOtCH3IarZi1WRn6om4PwEyVhsgS" 
                  alt="Framer" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        )
      case "product":
        return (
          <div className="flex flex-col items-center space-y-4">
            <div className="bg-[#ecece6] dark:bg-black border-4 border-black dark:border-white p-4 shadow-[4px_4px_0px_#000000] dark:shadow-[4px_4px_0px_#ffffff] w-full overflow-hidden">
              <DotLottieReact
                src="https://lottie.host/fc75e8ec-9039-4676-9f73-5453cb200479/63I8e8JBYb.lottie"
                loop
                autoplay
                className="w-full h-full"
              />
            </div>
            <div className="flex gap-2">
              <div className="w-10 h-10 bg-[#0055A4] border-2 border-black dark:border-white flex items-center justify-center overflow-hidden shadow-[2px_2px_0px_#000000] dark:shadow-[2px_2px_0px_#ffffff] p-1">
                <img 
                  src="https://vz1c70bqc3.ufs.sh/f/xvyiJUSZFkzWzmSfUYioaCjdrBhpmGy7Te6F9ZUlckQtuNSI" 
                  alt="Figma" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="w-10 h-10 bg-white border-2 border-black dark:border-white flex items-center justify-center overflow-hidden shadow-[2px_2px_0px_#000000] dark:shadow-[2px_2px_0px_#ffffff] p-1">
                <img 
                  src="https://vz1c70bqc3.ufs.sh/f/xvyiJUSZFkzW3pFhhMe21QOI0roAJCzZXBmwha4RS9Ptxueq" 
                  alt="Notion" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="w-10 h-10 bg-[#FFD700] border-2 border-black dark:border-white flex items-center justify-center overflow-hidden shadow-[2px_2px_0px_#000000] dark:shadow-[2px_2px_0px_#ffffff] p-1">
                <img 
                  src="https://vz1c70bqc3.ufs.sh/f/xvyiJUSZFkzWo5s9T1NCsSpH2FPtymi6KkbXJgAdw7LM1YDr" 
                  alt="Linear" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        )
      case "webdev":
        return (
          <div className="flex flex-col items-center space-y-4">
            <div className="bg-[#ecece6] dark:bg-black border-4 border-black dark:border-white p-4 shadow-[4px_4px_0px_#000000] dark:shadow-[4px_4px_0px_#ffffff] w-full overflow-hidden">
              <DotLottieReact
                src="https://lottie.host/457fd8b1-2056-4651-a8b7-56ba08b5d9de/oz1W6AhJTF.lottie"
                loop
                autoplay
                className="w-full h-full"
              />
            </div>
            <div className="flex gap-2">
              <div className="w-10 h-10 bg-black border-2 border-black dark:border-white flex items-center justify-center overflow-hidden shadow-[2px_2px_0px_#E32726] p-1">
                <img 
                  src="https://vz1c70bqc3.ufs.sh/f/xvyiJUSZFkzWEAtfUPo9A46PCmS5D8fnQkOsi3RKX7VbzcrH" 
                  alt="Coding" 
                  className="w-full h-full object-contain opacity-90"
                />
              </div>
              <div className="w-10 h-10 bg-white border-2 border-black dark:border-white flex items-center justify-center overflow-hidden shadow-[2px_2px_0px_#000000] dark:shadow-[2px_2px_0px_#ffffff] p-1">
                <img 
                  src="https://vz1c70bqc3.ufs.sh/f/xvyiJUSZFkzWv4VgfA7GBOtCH3IarZi1WRn6om4PwEyVhsgS" 
                  alt="Framer" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="w-10 h-10 bg-[#E32726] border-2 border-black dark:border-white flex items-center justify-center overflow-hidden shadow-[2px_2px_0px_#000000] dark:shadow-[2px_2px_0px_#ffffff] p-1">
                <img 
                  src="https://vz1c70bqc3.ufs.sh/f/xvyiJUSZFkzW52x8xHE9xs5uJUKrLyqc2advWBVG3kenhflj" 
                  alt="Webflow" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        )
      case "app":
        return (
          <div className="flex flex-col items-center space-y-4">
            <div className="bg-[#ecece6] dark:bg-black border-4 border-black dark:border-white p-4 shadow-[4px_4px_0px_#000000] dark:shadow-[4px_4px_0px_#ffffff] w-full overflow-hidden">
              <DotLottieReact
                src="https://lottie.host/e257894e-ffd4-4b61-a21f-c9ba2b61ae74/xN6bZuLDMf.lottie"
                loop
                autoplay
                className="w-full h-full"
              />
            </div>
            <div className="flex gap-2">
              <div className="w-10 h-10 bg-[#FFD700] border-2 border-black dark:border-white flex items-center justify-center overflow-hidden shadow-[2px_2px_0px_#000000] dark:shadow-[2px_2px_0px_#ffffff] p-1">
                <svg className="w-6 h-6 text-black" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="7" y="2" width="10" height="20" rx="0" stroke="currentColor" strokeWidth="2.5" fill="none"/>
                  <rect x="10" y="5" width="4" height="2" fill="currentColor" />
                  <rect x="9" y="8" width="6" height="6" fill="currentColor" />
                  <rect x="11" y="18" width="2" height="2" fill="currentColor"/>
                </svg>
              </div>
              <div className="w-10 h-10 bg-[#0055A4] border-2 border-black dark:border-white flex items-center justify-center overflow-hidden shadow-[2px_2px_0px_#000000] dark:shadow-[2px_2px_0px_#ffffff] p-1">
                <img 
                  src="https://vz1c70bqc3.ufs.sh/f/xvyiJUSZFkzWv4VgfA7GBOtCH3IarZi1WRn6om4PwEyVhsgS" 
                  alt="Framer" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="w-10 h-10 bg-black border-2 border-black dark:border-white flex items-center justify-center overflow-hidden shadow-[2px_2px_0px_#000000] dark:shadow-[2px_2px_0px_#ffffff] p-1">
                <img 
                  src="https://vz1c70bqc3.ufs.sh/f/xvyiJUSZFkzWEAtfUPo9A46PCmS5D8fnQkOsi3RKX7VbzcrH" 
                  alt="Coding" 
                  className="w-full h-full object-contain opacity-90"
                />
              </div>
            </div>
          </div>
        )
      case "pitch":
        return (
          <div className="flex flex-col items-center space-y-4">
            <div className="bg-[#ecece6] dark:bg-black border-4 border-black dark:border-white p-4 shadow-[4px_4px_0px_#000000] dark:shadow-[4px_4px_0px_#ffffff] w-full overflow-hidden">
              <DotLottieReact
                src="https://lottie.host/194d1d90-fa30-4a7f-87a8-d42c3a35ea56/C9ncrgqcst.lottie"
                loop
                autoplay
                className="w-full h-full"
              />
            </div>
            <div className="flex gap-2">
              <div className="w-10 h-10 bg-white border-2 border-black dark:border-white flex items-center justify-center overflow-hidden shadow-[2px_2px_0px_#000000] dark:shadow-[2px_2px_0px_#ffffff] p-1">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="2" width="9" height="9" fill="#00A4EF" stroke="black" strokeWidth="1" />
                  <rect x="13" y="2" width="9" height="9" fill="#00A4EF" stroke="black" strokeWidth="1"/>
                  <rect x="2" y="13" width="9" height="9" fill="#00A4EF" stroke="black" strokeWidth="1"/>
                  <rect x="13" y="13" width="9" height="9" fill="#00A4EF" stroke="black" strokeWidth="1"/>
                </svg>
              </div>
              <div className="w-10 h-10 bg-[#E32726] border-2 border-black dark:border-white flex items-center justify-center overflow-hidden shadow-[2px_2px_0px_#000000] dark:shadow-[2px_2px_0px_#ffffff] p-1">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="4" width="20" height="16" fill="none" stroke="black" strokeWidth="2" />
                  <rect x="4" y="6" width="16" height="4" fill="#FFD700" stroke="black" strokeWidth="1.5" />
                  <rect x="4" y="12" width="8" height="2" fill="white" stroke="black" strokeWidth="1"/>
                  <rect x="4" y="16" width="12" height="2" fill="white" stroke="black" strokeWidth="1"/>
                </svg>
              </div>
            </div>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <section id="services" className="py-16 sm:py-24 px-4 sm:px-6 relative z-10 bg-white dark:bg-[#121212] border-b-8 border-black dark:border-white">
      <div className="container mx-auto max-w-7xl w-full">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={viewportOptions}
          variants={animationVariants.staggerContainer}
          className="space-y-12 sm:space-y-16"
        >
          <motion.div variants={animationVariants.slideUp} className="text-center md:text-left">
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-6 text-black dark:text-white inline-block">
              Your Vision.<br/>
              <span className="text-[#0055A4] dark:text-[#E32726]">Executed.</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={animationVariants.slideUp}
                className="p-6 sm:p-8 bg-white dark:bg-zinc-900 border-4 border-black dark:border-white shadow-[8px_8px_0px_#000000] dark:shadow-[8px_8px_0px_#ffffff] hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[16px_16px_0px_#0055A4] transition-all cursor-pointer flex flex-col group"
              >
                <div className="flex flex-col items-center space-y-6 mb-8">
                  {renderIllustration(service.illustration)}
                </div>
                <div className="text-left mt-auto">
                  <h3 className="text-2xl font-black uppercase text-black dark:text-white mb-3 group-hover:text-[#E32726] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-base font-medium text-black dark:text-gray-300">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
