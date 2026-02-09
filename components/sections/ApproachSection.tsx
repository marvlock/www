"use client"

import { motion } from "framer-motion"
import { animationVariants, viewportOptions } from "@/lib/animations"
import { Palette, Code, TrendingUp } from "lucide-react"

export function ApproachSection() {
  return (
    <section id="approach" className="pt-16 sm:pt-24 pb-12 sm:pb-16 px-4 sm:px-6 relative z-10 bg-white dark:bg-transparent transition-colors">
      <div className="container mx-auto max-w-7xl w-full">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={viewportOptions}
          variants={animationVariants.staggerContainer}
          className="space-y-12 sm:space-y-16"
        >
          <motion.div variants={animationVariants.slideUp} className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-medium leading-tight mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              <span className="text-[#0E1117] dark:text-white">Everything you need.</span>
              <br />
              <span className="text-[#64748B] dark:text-gray-400">Nothing you don't.</span>
            </h2>
            <p className="text-lg sm:text-xl text-[#64748B] dark:text-gray-400">
              We stripped away the agency bloat. No account managers, no jargon. Just direct access to cracked engineers and world-class designers.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            <motion.div
              variants={animationVariants.slideUp}
              className="bg-white dark:bg-gray-900/50 dark:backdrop-blur-sm rounded-2xl border border-[#E2E8F0] dark:border-gray-800/50 p-6 sm:p-8 space-y-6 relative cursor-pointer flex flex-col"
              whileHover={{ y: -12, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <div className="bg-white dark:bg-gray-800/60 dark:backdrop-blur-sm rounded-lg border border-[#E2E8F0] dark:border-gray-700/50 p-4 shadow-sm h-48">
                <div className="flex items-center gap-1 mb-3">
                  <div className="w-2 h-2 rounded-full bg-red-500"></div>
                  <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                </div>
                <div className="space-y-2">
                  <div className="h-8 bg-indigo-600 rounded flex items-center justify-end pr-2">
                    <span className="text-xs text-white font-medium">Primary.500</span>
                  </div>
                  <div className="h-8 bg-indigo-500 rounded flex items-center justify-end pr-2">
                    <span className="text-xs text-white font-medium">Primary.400</span>
                  </div>
                  <div className="h-8 bg-indigo-400 rounded flex items-center justify-end pr-2">
                    <span className="text-xs text-indigo-900 font-medium">Primary.300</span>
                  </div>
                </div>
                <div className="absolute bottom-3 right-3 flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#64748B] absolute -top-2 -left-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                  </svg>
                  <div className="bg-[#0E1117] text-white text-xs font-medium px-2 py-1 rounded">
                    You
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="w-12 h-12 rounded-xl bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center">
                  <Palette className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                </div>
              </div>
              <div className="text-center flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-medium text-[#0E1117] dark:text-white mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
                    World-Class Design
                  </h3>
                  <p className="text-base text-[#64748B] dark:text-gray-400 leading-relaxed">
                    Aesthetic isn't just decoration. We create emotionally resonant visual systems that build trust instantly.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={animationVariants.slideUp}
              className="bg-white dark:bg-gray-900/50 dark:backdrop-blur-sm rounded-2xl border border-[#E2E8F0] dark:border-gray-800/50 p-6 sm:p-8 space-y-6 relative cursor-pointer flex flex-col"
              whileHover={{ y: -12, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <div className="bg-[#1E1E1E] dark:bg-gray-800/60 dark:backdrop-blur-sm rounded-lg border border-[#2D2D2D] dark:border-gray-700/50 p-4 shadow-sm h-48">
                <div className="flex items-center gap-1 mb-3">
                  <div className="w-2 h-2 rounded-full bg-red-500"></div>
                  <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                </div>
                <div className="space-y-1 text-xs font-mono">
                  <div className="text-white">const <span className="text-white">Payment</span> = () =&gt; {'{'}</div>
                  <div className="text-white pl-4">return (</div>
                  <div className="text-white pl-8">&lt;<span className="text-cyan-400">StripeProvider</span>&gt;</div>
                  <div className="text-gray-400 pl-12">...secure_txn</div>
                  <div className="text-white pl-8">&lt;/<span className="text-cyan-400">StripeProvider</span>&gt;</div>
                  <div className="text-white pl-4">)</div>
                  <div className="text-white">{'}'}</div>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="w-12 h-12 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                  <Code className="w-6 h-6 text-[#0E1117] dark:text-white" />
                </div>
              </div>
              <div className="text-center flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-medium text-[#0E1117] dark:text-white mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
                    Modern Engineering
                  </h3>
                  <p className="text-base text-[#64748B] dark:text-gray-400 leading-relaxed">
                    Built on Modern Tech Stacks. Clean, accessible, and type-safe code that scales with your business.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={animationVariants.slideUp}
              className="bg-white dark:bg-gray-900/50 dark:backdrop-blur-sm rounded-2xl border border-[#E2E8F0] dark:border-gray-800/50 p-6 sm:p-8 space-y-6 relative cursor-pointer flex flex-col"
              whileHover={{ y: -12, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <div className="bg-white dark:bg-gray-800/60 dark:backdrop-blur-sm rounded-lg border border-[#E2E8F0] dark:border-gray-700/50 p-4 shadow-sm h-48">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <div className="text-xs text-[#64748B] dark:text-gray-400 mb-1">MRR</div>
                    <div className="text-lg font-semibold text-[#0E1117] dark:text-white">$12,450</div>
                  </div>
                  <div className="bg-green-500 text-white text-xs font-medium px-2 py-1 rounded flex items-center gap-1">
                    <span>↑</span>
                    <span>12%</span>
                  </div>
                </div>
                <div className="flex items-end gap-1 h-12">
                  <div className="flex-1 bg-[#E2E8F0] dark:bg-gray-700/50 rounded-t" style={{ height: '30%' }}></div>
                  <div className="flex-1 bg-[#E2E8F0] dark:bg-gray-700/50 rounded-t" style={{ height: '40%' }}></div>
                  <div className="flex-1 bg-[#E2E8F0] dark:bg-gray-700/50 rounded-t" style={{ height: '50%' }}></div>
                  <div className="flex-1 bg-[#0E1117] dark:bg-gray-600 rounded-t" style={{ height: '100%' }}></div>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="w-12 h-12 rounded-xl bg-green-100 dark:bg-green-900/50 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
              </div>
              <div className="text-center flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-medium text-[#0E1117] dark:text-white mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
                    Growth & Data
                  </h3>
                  <p className="text-base text-[#64748B] dark:text-gray-400 leading-relaxed">
                    We implement advanced tracking and SEO foundations to ensure your product actually converts.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
