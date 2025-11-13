"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Palette, Server, BarChart3, Github, Linkedin, Twitter, Mail } from "lucide-react"
import Image from "next/image"
import { useState, useEffect } from "react"

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.4 }
}

export default function Component() {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Show navbar at the top of the page
      if (currentScrollY < 100) {
        setIsVisible(true)
      } 
      // Hide when scrolling down, show when scrolling up
      else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false)
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <div className="min-h-screen sparkling-gradient text-white relative">
      {/* Navigation */}
      <motion.nav
        initial={{ y: 0, opacity: 1 }}
        animate={{ 
          y: isVisible ? 0 : -100,
          opacity: isVisible ? 1 : 0
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50"
      >
        <div className="bg-[#151820]/95 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3 flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Image 
              src="/marvlock-logo.png" 
              alt="Project Marvlock Logo" 
              width={24} 
              height={24}
              className="w-6 h-6"
            />
            <span className="text-sm font-medium hidden sm:inline">Project Marvlock</span>
          </div>
          <div className="hidden md:flex items-center gap-1">
            <a href="#work" className="px-4 py-2 text-sm text-[#94A3B8] hover:text-white transition-colors cursor-pointer rounded-full hover:bg-white/5">Work</a>
            <a href="#about" className="px-4 py-2 text-sm text-[#94A3B8] hover:text-white transition-colors cursor-pointer rounded-full hover:bg-white/5">About</a>
            <a href="#contact" className="px-4 py-2 text-sm text-[#94A3B8] hover:text-white transition-colors cursor-pointer rounded-full hover:bg-white/5">Contact</a>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-32 relative z-10">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial="initial"
            animate="animate"
            variants={{ initial: {}, animate: { transition: { staggerChildren: 0.1 } } }}
            className="space-y-12 text-center"
          >
            <motion.h1
              variants={fadeIn}
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
            >
              We design and build<br />
              digital products<br />
              that define the future.
            </motion.h1>
            
            <motion.p
              variants={fadeIn}
              className="text-lg md:text-xl text-[#94A3B8] max-w-2xl mx-auto leading-relaxed"
            >
              From startups to enterprises — we craft intuitive, high-performance websites, apps, and dashboards.
            </motion.p>

            <motion.div
              variants={fadeIn}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
            >
              <Button
                className="bg-white text-[#0E1117] hover:bg-white/90 px-6 py-3 rounded-md transition-colors cursor-pointer"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Start a Project
              </Button>
              <Button
                variant="outline"
                className="border-white/10 text-white hover:bg-white/5 px-6 py-3 rounded-md cursor-pointer"
                onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
              >
                See Our Work
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* What We Do Section */}
      <section id="capabilities" className="py-32 px-6 relative z-10">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={{ initial: {}, animate: { transition: { staggerChildren: 0.1 } } }}
            className="space-y-20"
          >
            <motion.div variants={fadeIn} className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-3">What We Do</h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Palette,
                  title: "Design",
                  description: "Interfaces that speak clarity."
                },
                {
                  icon: Code,
                  title: "Frontend",
                  description: "Fluid experiences, pixel precision."
                },
                {
                  icon: Server,
                  title: "Backend",
                  description: "Secure, scalable, optimized."
                },
                {
                  icon: BarChart3,
                  title: "Dashboards",
                  description: "Data made actionable."
                }
              ].map((capability, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="space-y-4"
                >
                  <capability.icon className="w-6 h-6 text-[#94A3B8]" />
                  <h3 className="text-lg font-semibold">{capability.title}</h3>
                  <p className="text-sm text-[#94A3B8] leading-relaxed">{capability.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Work / Projects Section */}
      <section id="work" className="py-32 px-6 relative z-10">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={{ initial: {}, animate: { transition: { staggerChildren: 0.1 } } }}
            className="space-y-20"
          >
            <motion.div variants={fadeIn} className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-3">Work</h2>
            </motion.div>

            <div className="space-y-12">
              {[
                {
                  name: "SaaS Platform",
                  description: "Enterprise-grade dashboard with real-time analytics",
                  stack: ["Next.js", "FastAPI", "PostgreSQL", "Redis"]
                },
                {
                  name: "E-Commerce Suite",
                  description: "Modern shopping experience with seamless checkout",
                  stack: ["React", "Node.js", "MongoDB", "Stripe"]
                },
                {
                  name: "Data Analytics Hub",
                  description: "Visualize complex data with intuitive interfaces",
                  stack: ["Next.js", "Python", "D3.js", "ClickHouse"]
                },
                {
                  name: "Mobile App Platform",
                  description: "Cross-platform mobile experience with native performance",
                  stack: ["React Native", "GraphQL", "AWS", "DynamoDB"]
                }
              ].map((project, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="border-b border-white/5 pb-12 last:border-0"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="space-y-3">
                      <h3 className="text-xl font-semibold">{project.name}</h3>
                      <p className="text-[#94A3B8] leading-relaxed">{project.description}</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 text-xs text-[#94A3B8] border border-white/5 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* About / Philosophy Section */}
      <section id="about" className="py-32 px-6 relative z-10">
        <div className="container mx-auto max-w-3xl">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={{ initial: {}, animate: { transition: { staggerChildren: 0.1 } } }}
            className="text-center space-y-8"
          >
            <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold">
              Crafted with clarity.<br />Built with intent.
            </motion.h2>
            <motion.p
              variants={fadeIn}
              className="text-lg text-[#94A3B8] leading-relaxed"
            >
              We're developers and designers who think in systems, not pixels. Our work blends precision engineering with thoughtful design.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact / CTA Section */}
      <section id="contact" className="py-32 px-6 relative z-10">
        <div className="container mx-auto max-w-3xl">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={{ initial: {}, animate: { transition: { staggerChildren: 0.1 } } }}
            className="text-center space-y-8"
          >
            <motion.div variants={fadeIn} className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">
                Let's build something exceptional.
              </h2>
              <p className="text-lg text-[#94A3B8]">
                Tell us about your product, and we'll turn it into reality.
              </p>
            </motion.div>

            <motion.div
              variants={fadeIn}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button
                className="bg-white text-[#0E1117] hover:bg-white/90 px-6 py-3 rounded-md transition-colors cursor-pointer"
                onClick={() => window.location.href = 'mailto:marvlock.dev@gmail.com?subject=New Project Inquiry'}
              >
                Start a Project
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-white/5">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div>
              <div className="text-lg font-medium mb-2">
                Project Marvlock
              </div>
              <p className="text-sm text-[#94A3B8]">
                Built beautifully. Engineered intelligently.
              </p>
            </div>
            <div className="flex flex-wrap gap-6">
              <a href="https://github.com/marvlock" target="_blank" rel="noopener noreferrer" className="text-sm text-[#94A3B8] hover:text-white transition-colors cursor-pointer">
                GitHub
              </a>
              <a href="https://www.linkedin.com/company/project-marvlock/about/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="text-sm text-[#94A3B8] hover:text-white transition-colors cursor-pointer">
                LinkedIn
              </a>
              <a href="https://x.com/ProjectMarvlock" target="_blank" rel="noopener noreferrer" className="text-sm text-[#94A3B8] hover:text-white transition-colors cursor-pointer">
                X
              </a>
              <a href="mailto:marvlock.dev@gmail.com" className="text-sm text-[#94A3B8] hover:text-white transition-colors cursor-pointer">
                Contact
              </a>
            </div>
          </div>
          <div className="pt-8 mt-8 border-t border-white/5 text-center text-sm text-[#94A3B8]">
            © 2025 Project Marvlock. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
