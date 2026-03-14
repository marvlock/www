"use client"

import { motion } from "framer-motion"
import { animationVariants, viewportOptions } from "@/lib/animations"
import { Palette, Code, TrendingUp } from "lucide-react"

export function ApproachSection() {
  return (
    <section id="approach" className="pt-16 sm:pt-24 pb-12 sm:pb-16 px-4 sm:px-6 relative z-10 bg-[#ecece6] dark:bg-zinc-900 transition-colors border-b-8 border-black dark:border-white">
      <div className="container mx-auto max-w-7xl w-full">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={viewportOptions}
          variants={animationVariants.staggerContainer}
          className="space-y-12 sm:space-y-16"
        >
          <motion.div variants={animationVariants.slideUp} className="text-left">
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-6">
              <span className="text-black dark:text-white">Everything you need.</span>
              <br />
              <span className="text-[#E32726]">Nothing you don't.</span>
            </h2>
            <p className="text-xl sm:text-2xl font-black text-black dark:text-white border-4 border-black dark:border-white bg-[#FFD700] p-4 sm:p-6 inline-block shadow-[4px_4px_0px_#000000] dark:shadow-[4px_4px_0px_#ffffff] dark:text-black mt-2 max-w-4xl">
              We stripped away the agency bloat. No account managers, no jargon. Just direct access to cracked engineers and world-class designers.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 sm:gap-12 pt-8">
            <motion.div
              variants={animationVariants.slideUp}
              className="bg-white dark:bg-[#121212] border-4 border-black dark:border-white p-6 sm:p-8 space-y-6 relative flex flex-col shadow-[8px_8px_0px_#000000] dark:shadow-[8px_8px_0px_#ffffff] hover:translate-y-[4px] hover:translate-x-[4px] hover:shadow-[4px_4px_0px_#000000] dark:hover:shadow-[4px_4px_0px_#ffffff] transition-all"
            >
              <div className="bg-[#0055A4] border-4 border-black dark:border-white p-4 shadow-[4px_4px_0px_#000000] dark:shadow-[4px_4px_0px_#ffffff] h-48 relative overflow-hidden flex flex-col">
                <div className="flex items-center gap-2 mb-3 border-b-4 border-black dark:border-white pb-2">
                  <div className="w-3 h-3 bg-[#E32726] border-2 border-black dark:border-white"></div>
                  <div className="w-3 h-3 bg-[#FFD700] border-2 border-black dark:border-white"></div>
                  <div className="w-3 h-3 bg-[#00A4EF] border-2 border-black dark:border-white"></div>
                </div>
                <div className="space-y-2 flex-1 flex flex-col justify-center">
                  <div className="h-6 bg-white border-2 border-black w-full shadow-[2px_2px_0px_#000000]"></div>
                  <div className="h-6 bg-white border-2 border-black w-3/4 shadow-[2px_2px_0px_#000000]"></div>
                  <div className="h-6 bg-white border-2 border-black w-1/2 shadow-[2px_2px_0px_#000000]"></div>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 w-16 h-16 bg-[#E32726] border-4 border-black dark:border-white flex items-center justify-center shadow-[4px_4px_0px_#000000] dark:shadow-[4px_4px_0px_#ffffff]">
                <Palette className="w-8 h-8 text-white" strokeWidth={3} />
              </div>
              <div className="text-left flex-grow flex flex-col justify-between pt-4">
                <div>
                  <h3 className="text-2xl font-black uppercase text-black dark:text-white mb-3">
                    World-Class Design
                  </h3>
                  <p className="text-base font-medium text-black dark:text-gray-300">
                    Aesthetic isn't just decoration. We create emotionally resonant visual systems that build trust instantly.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={animationVariants.slideUp}
              className="bg-white dark:bg-[#121212] border-4 border-black dark:border-white p-6 sm:p-8 space-y-6 relative flex flex-col shadow-[8px_8px_0px_#000000] dark:shadow-[8px_8px_0px_#ffffff] hover:translate-y-[4px] hover:translate-x-[4px] hover:shadow-[4px_4px_0px_#000000] dark:hover:shadow-[4px_4px_0px_#ffffff] transition-all"
            >
              <div className="bg-[#121212] border-4 border-black dark:border-white p-4 shadow-[4px_4px_0px_#000000] dark:shadow-[4px_4px_0px_#ffffff] h-48 relative overflow-hidden flex flex-col">
                <div className="flex items-center gap-2 mb-3 border-b-4 border-white pb-2">
                  <div className="w-3 h-3 bg-[#E32726] border-2 border-white"></div>
                  <div className="w-3 h-3 bg-[#FFD700] border-2 border-white"></div>
                  <div className="w-3 h-3 bg-[#00A4EF] border-2 border-white"></div>
                </div>
                <div className="space-y-1 text-sm font-bold font-mono text-white mt-2">
                  <div><span className="text-[#FFD700]">const</span> Bauhaus = () =&gt; {'{'}</div>
                  <div className="pl-4"><span className="text-[#00A4EF]">return</span> (</div>
                  <div className="pl-8">&lt;<span className="text-[#E32726]">BoldUI</span>&gt;</div>
                  <div className="pl-12">...code</div>
                  <div className="pl-8">&lt;/<span className="text-[#E32726]">BoldUI</span>&gt;</div>
                  <div className="pl-4">)</div>
                  <div>{'}'}</div>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 w-16 h-16 bg-[#FFD700] border-4 border-black dark:border-white flex items-center justify-center shadow-[4px_4px_0px_#000000] dark:shadow-[4px_4px_0px_#ffffff]">
                <Code className="w-8 h-8 text-black" strokeWidth={3} />
              </div>
              <div className="text-left flex-grow flex flex-col justify-between pt-4">
                <div>
                  <h3 className="text-2xl font-black uppercase text-black dark:text-white mb-3">
                    Modern Engineering
                  </h3>
                  <p className="text-base font-medium text-black dark:text-gray-300">
                    Built on Modern Tech Stacks. Clean, accessible, and type-safe code that scales with your business.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={animationVariants.slideUp}
              className="bg-white dark:bg-[#121212] border-4 border-black dark:border-white p-6 sm:p-8 space-y-6 relative flex flex-col shadow-[8px_8px_0px_#000000] dark:shadow-[8px_8px_0px_#ffffff] hover:translate-y-[4px] hover:translate-x-[4px] hover:shadow-[4px_4px_0px_#000000] dark:hover:shadow-[4px_4px_0px_#ffffff] transition-all"
            >
              <div className="bg-[#white] dark:bg-[#ecece6] border-4 border-black p-4 shadow-[4px_4px_0px_#000000] h-48 relative overflow-hidden flex flex-col justify-between">
                <div className="flex items-center justify-between border-b-4 border-black pb-2">
                  <div className="font-black text-black">MRR</div>
                  <div className="bg-[#0055A4] text-white text-xs font-bold px-2 py-1 border-2 border-black">
                    $12,450
                  </div>
                </div>
                <div className="flex items-end gap-2 h-20 pt-4">
                  <div className="flex-1 bg-black border-2 border-black" style={{ height: '30%' }}></div>
                  <div className="flex-1 bg-black border-2 border-black" style={{ height: '50%' }}></div>
                  <div className="flex-1 bg-black border-2 border-black" style={{ height: '70%' }}></div>
                  <div className="flex-1 bg-[#E32726] border-2 border-black relative" style={{ height: '100%' }}>
                     <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-xs font-black text-black bg-[#FFD700] px-1 border-2 border-black">+12%</div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 w-16 h-16 bg-[#00A4EF] border-4 border-black dark:border-white flex items-center justify-center shadow-[4px_4px_0px_#000000] dark:shadow-[4px_4px_0px_#ffffff]">
                <TrendingUp className="w-8 h-8 text-black" strokeWidth={3} />
              </div>
              <div className="text-left flex-grow flex flex-col justify-between pt-4">
                <div>
                  <h3 className="text-2xl font-black uppercase text-black dark:text-white mb-3">
                    Growth & Data
                  </h3>
                  <p className="text-base font-medium text-black dark:text-gray-300">
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
