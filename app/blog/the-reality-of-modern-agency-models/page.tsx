"use client"

import { Navigation } from "@/components/layout/Navigation"
import { Footer } from "@/components/layout/Footer"
import { ChatButton } from "@/components/ui/chat-button"
import { motion } from "framer-motion"
import { animationVariants, viewportOptions } from "@/lib/animations"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

const POST_CONTENT = `
<p>Why paying for account managers and fancy ping-pong tables doesn't translate to better product outcomes. The traditional agency model is fundamentally broken for modern software delivery.</p>

<h3>The Middleman Tax</h3>

<p>In a standard agency, you're not just paying for developers and designers. You're paying for layers of management that often obscure communication rather than facilitate it.</p>

<ul>
  <li><b>Account Managers:</b> They mean well, but often act as a game of telephone between clients and the actual builders.</li>
  <li><b>Scope Creep Phobia:</b> Because margins are tight, traditional agencies fight over every ticket rather than focusing on the product's ultimate success.</li>
  <li><b>The 'B-Team' Swap:</b> The senior talent pitches the project, but junior developers are the ones writing the code.</li>
</ul>

<h3>A Better Way: Direct Collaboration</h3>

<p>We believe the best products are built when founders talk directly to engineers. That's why we've stripped away the fluff.</p>

<ol>
  <li><b>Direct Access:</b> You communicate directly with the people building your application via Slack or Discord.</li>
  <li><b>Iterative Delivery:</b> We don't do massive 6-month unveils. We ship features weekly and iterate based on real feedback.</li>
  <li><b>Aligned Incentives:</b> We win when your product succeeds, not when we negotiate a larger change order.</li>
</ol>

<p>By moving to a leaner, more direct model, we can deliver significantly higher quality work at a fraction of the cost, precisely because we eliminated the bloat.</p>
`

export default function BlogPost() {
  return (
    <div className="bg-[#ecece6] dark:bg-zinc-900 text-[#0E1117] dark:text-white relative min-h-screen flex flex-col transition-colors">
      <div className="fixed inset-0 z-0 bg-[#f4f4f0] dark:bg-[#121212]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000010_1px,transparent_1px),linear-gradient(to_bottom,#00000010_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:2rem_2rem]"></div>
      </div>
      
      <div className="relative z-10 flex flex-col flex-1">
        <Navigation isVisible={true} />
        
        <main className="flex-1 pt-32 pb-24 px-4 sm:px-6">
          <div className="container mx-auto max-w-4xl w-full">
            <motion.div
              initial="initial"
              animate="animate"
              variants={animationVariants.staggerContainer}
              className="space-y-12 sm:space-y-16"
            >
              
              <motion.div variants={animationVariants.slideUp}>
                <Link href="/blog" className="inline-flex items-center gap-2 text-xl font-black uppercase text-black dark:text-white hover:text-[#FFD700] transition-colors group mb-12">
                   <ArrowLeft className="w-6 h-6 group-hover:-translate-x-2 transition-transform" strokeWidth={3} />
                   Back to Thoughts
                </Link>

                <div className="border-4 border-black dark:border-white bg-white dark:bg-[#121212] p-8 sm:p-12 md:p-16 shadow-[16px_16px_0px_#000000] dark:shadow-[16px_16px_0px_#ffffff] relative">
                  <div className="absolute top-0 left-0 w-full h-4 bg-[#FFD700]"></div>
                  
                  <div className="flex flex-wrap items-center gap-4 text-sm sm:text-base font-black uppercase tracking-widest text-[#64748B] dark:text-gray-400 mb-8 mt-4">
                    <span className="bg-[#ecece6] dark:bg-zinc-800 text-black dark:text-white px-3 py-1 border-2 border-black dark:border-white">
                      Business
                    </span>
                    <span>Oct 21, 2026</span>
                  </div>

                  <h1 className="text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-12 text-black dark:text-white">
                    The Reality of Modern Agency Models
                  </h1>

                  <div 
                    className="
                      text-lg sm:text-xl text-black dark:text-gray-300 font-medium leading-relaxed
                      [&>h3]:text-2xl [&>h3]:sm:text-3xl [&>h3]:font-black [&>h3]:uppercase [&>h3]:tracking-tighter [&>h3]:mt-12 [&>h3]:mb-6 [&>h3]:text-black [&>h3]:dark:text-white
                      [&>p]:mb-6
                      [&>ul]:list-none [&>ul]:space-y-4 [&>ul]:mb-8 [&>ul]:pl-0
                      [&>ul>li]:relative [&>ul>li]:pl-6
                      [&>ul>li::before]:content-[''] [&>ul>li::before]:absolute [&>ul>li::before]:left-0 [&>ul>li::before]:top-[0.6em] [&>ul>li::before]:w-3 [&>ul>li::before]:h-3 [&>ul>li::before]:bg-black [&>ul>li::before]:dark:bg-white [&>ul>li::before]:border-2 [&>ul>li::before]:border-black [&>ul>li::before]:dark:border-white
                      [&>ul>li>b]:font-black [&>ul>li>b]:uppercase [&>ul>li>b]:tracking-wide [&>ul>li>b]:mr-2
                      [&>ol]:list-decimal [&>ol]:space-y-4 [&>ol]:mb-8 [&>ol]:pl-6 [&>ol]:font-bold
                      [&>ol>li]:pl-2
                      [&>ol>li>b]:font-black [&>ol>li>b]:uppercase [&>ol>li>b]:tracking-wide [&>ol>li>b]:mr-2
                    "
                    dangerouslySetInnerHTML={{ __html: POST_CONTENT }}
                  />

                  <div className="mt-16 pt-8 border-t-4 border-black dark:border-white flex flex-col sm:flex-row items-center justify-between gap-6">
                     <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-[#0055A4] border-4 border-black shadow-[4px_4px_0px_#000000] flex items-center justify-center font-black text-white text-2xl uppercase">
                          M
                        </div>
                        <div>
                          <div className="font-black text-xl text-black dark:text-white uppercase tracking-tighter">Team Marvlock</div>
                          <div className="font-bold text-[#64748B] dark:text-gray-400">Business Strategy</div>
                        </div>
                     </div>
                  </div>
                </div>
              </motion.div>

            </motion.div>
          </div>
        </main>

        <Footer />
        <ChatButton />
      </div>
    </div>
  )
}
