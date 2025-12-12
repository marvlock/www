"use client"

import { motion } from "framer-motion"
import { Github } from "lucide-react"
import { PROJECTS } from "@/lib/constants"
import { animationVariants, viewportOptions } from "@/lib/animations"

export function WorkSection() {
  return (
    <section id="work" className="py-32 px-6 relative z-10">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={viewportOptions}
          variants={animationVariants.staggerContainer}
          className="space-y-16"
        >
          <motion.div variants={animationVariants.slideUp} className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Work
            </h2>
          </motion.div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-white/10 hidden md:block"></div>
            
            <div className="space-y-12">
              {PROJECTS.map((project, index) => (
                <motion.div
                  key={index}
                  variants={animationVariants.slideUp}
                  whileHover={{ x: 8 }}
                  className="relative md:pl-24 group"
                >
                  <div className="absolute left-6 top-6 w-4 h-4 rounded-full bg-white/20 border-2 border-white/30 group-hover:bg-white/40 transition-colors hidden md:block"></div>
                  
                  <div className="relative p-8 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/10 transition-all duration-300 cursor-pointer">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-white/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    
                    <div className="relative space-y-4">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <h3 className="text-2xl md:text-3xl font-semibold group-hover:text-white transition-colors">
                              {project.name}
                            </h3>
                            {project.githubUrl && (
                              <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="text-[#94A3B8] hover:text-white transition-colors"
                              >
                                <Github className="w-5 h-5" />
                              </a>
                            )}
                            {project.liveUrl && (
                              <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="text-[#94A3B8] hover:text-white transition-colors text-sm"
                              >
                                Live →
                              </a>
                            )}
                          </div>
                          <p className="text-[#94A3B8] leading-relaxed group-hover:text-white/80 transition-colors text-lg">
                            {project.description}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 pt-2">
                        {project.stack.map((tech, techIndex) => (
                          <motion.span
                            key={techIndex}
                            whileHover={{ scale: 1.05 }}
                            className="px-4 py-2 text-sm text-[#94A3B8] border border-white/10 rounded-lg bg-white/5 group-hover:border-white/20 group-hover:text-white/80 transition-all"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

