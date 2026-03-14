"use client"

import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"
import { PROJECTS } from "@/lib/constants"
import { animationVariants, viewportOptions } from "@/lib/animations"
import { useEffect, useRef } from "react"

export function WorkSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return

    let scrollPosition = 0
    const scrollSpeed = 1
    let animationFrameId: number
    let isScrolling = true
    let isVisible = true

    const getSingleSetWidth = () => {
      const firstCard = container.querySelector('.project-card')
      if (!firstCard) return 0
      const cardWidth = (firstCard as HTMLElement).offsetWidth
      const gap = 32 // sm:gap-8 is 32px
      return PROJECTS.length * (cardWidth + gap)
    }

    const scroll = () => {
      if (!isScrolling || !isVisible) {
        animationFrameId = requestAnimationFrame(scroll)
        return
      }

      scrollPosition += scrollSpeed
      const singleSetWidth = getSingleSetWidth()
      
      if (scrollPosition >= singleSetWidth) {
        scrollPosition -= singleSetWidth
      }
      
      container.scrollLeft = scrollPosition
      animationFrameId = requestAnimationFrame(scroll)
    }

    // Use IntersectionObserver to pause when not visible
    const observer = new IntersectionObserver(
      (entries) => {
        isVisible = entries[0].isIntersecting
      },
      { threshold: 0.1 }
    )
    observer.observe(container)

    animationFrameId = requestAnimationFrame(scroll)

    const handleMouseEnter = () => {
      isScrolling = false
    }
    const handleMouseLeave = () => {
      isScrolling = true
    }

    container.addEventListener('mouseenter', handleMouseEnter)
    container.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      cancelAnimationFrame(animationFrameId)
      observer.disconnect()
      container.removeEventListener('mouseenter', handleMouseEnter)
      container.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  const ProjectCard = ({ project }: { project: any }) => (
    <motion.div
      variants={animationVariants.slideUp}
      className="bg-white dark:bg-[#121212] border-4 border-black dark:border-white p-0 w-[280px] sm:w-[360px] flex flex-col transition-all cursor-pointer group overflow-hidden flex-shrink-0 project-card shadow-[8px_8px_0px_#000000] dark:shadow-[8px_8px_0px_#ffffff] hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[16px_16px_0px_#E32726] dark:hover:shadow-[16px_16px_0px_#E32726]"
    >
      <div className="w-full h-48 bg-black dark:bg-white border-b-4 border-black dark:border-white relative overflow-hidden">
        {project.imageUrl ? (
          <img 
            src={project.imageUrl} 
            alt={project.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-[#FFD700]">
            <div className="text-4xl mb-2">🚀</div>
            <div className="text-sm font-black text-black uppercase">Project Preview</div>
          </div>
        )}
      </div>

      <div className="p-6 flex flex-col space-y-4 bg-white dark:bg-[#121212] flex-grow">
        <div className="px-3 py-1 bg-[#FFD700] border-2 border-black w-fit shadow-[2px_2px_0px_#000000]">
          <span className="text-xs font-black text-black uppercase tracking-wider">
            {project.stack[0] || "Project"}
          </span>
        </div>

        <h3 className="text-2xl sm:text-3xl font-black text-black dark:text-white uppercase">
          {project.name}
        </h3>

        <p className="text-sm font-medium text-black dark:text-gray-300 leading-relaxed line-clamp-2">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 pt-2">
          {project.stack.slice(0, 3).map((tech: string, techIndex: number) => (
            <span
              key={techIndex}
              className="px-2 py-1 bg-[#ecece6] dark:bg-zinc-800 border-2 border-black dark:border-white text-[10px] font-black uppercase text-black dark:text-white shadow-[2px_2px_0px_#000000] dark:shadow-[2px_2px_0px_#ffffff]"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="pt-4 mt-auto">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-2 text-sm font-black text-white bg-black dark:bg-white dark:text-black border-2 border-black dark:border-white py-2 px-4 shadow-[4px_4px_0px_#0055A4] hover:shadow-[2px_2px_0px_#000000] hover:translate-y-[2px] hover:translate-x-[2px] transition-all w-fit uppercase"
            >
              Live Preview
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )

  return (
    <section id="work" className="py-16 sm:py-24 px-4 sm:px-6 relative z-10 bg-[#ecece6] dark:bg-zinc-900 border-b-8 border-black dark:border-white overflow-hidden">
      <div className="container mx-auto max-w-7xl w-full">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={viewportOptions}
          variants={animationVariants.staggerContainer}
          className="space-y-12 sm:space-y-16"
        >
          <motion.div variants={animationVariants.slideUp} className="text-center md:text-left">
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-6 text-black dark:text-white">
              Selected <span className="text-[#0055A4] dark:text-[#FFD700]">Works.</span>
            </h2>
            <p className="text-lg sm:text-xl font-medium text-black dark:text-gray-300 max-w-2xl bg-[#E32726] text-white p-4 border-4 border-black dark:border-white shadow-[4px_4px_0px_#000000] dark:shadow-[4px_4px_0px_#ffffff]">
              A vibrant showcase of our work including bold UI/UX designs, rock-solid applications, and brutalist interfaces.
            </p>
          </motion.div>

          <div className="relative -mx-4 sm:mx-0">
            {/* Fading edges to match new background */}
            <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-20 bg-gradient-to-r from-[#ecece6] dark:from-zinc-900 to-transparent pointer-events-none z-20"></div>
            <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-20 bg-gradient-to-l from-[#ecece6] dark:from-zinc-900 to-transparent pointer-events-none z-20"></div>
            
            <div 
              ref={scrollContainerRef}
              className="overflow-x-hidden flex gap-8 pb-8 pt-4 cursor-grab active:cursor-grabbing relative px-4 sm:px-0"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {/* Render 3 sets of projects for seamless infinite scrolling */}
              <div className="flex gap-8 min-w-max">
                {PROJECTS.map((project, index) => (
                  <ProjectCard key={`set1-${index}`} project={project} />
                ))}
                {PROJECTS.map((project, index) => (
                  <ProjectCard key={`set2-${index}`} project={project} />
                ))}
                {PROJECTS.map((project, index) => (
                  <ProjectCard key={`set3-${index}`} project={project} />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
