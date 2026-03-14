"use client"

import { Navigation } from "@/components/layout/Navigation"
import { Footer } from "@/components/layout/Footer"
import { ChatButton } from "@/components/ui/chat-button"
import { motion } from "framer-motion"
import { animationVariants, viewportOptions } from "@/lib/animations"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

const POST_CONTENT = `
<p>The latest App Router patterns we use to scale products to millions of active users without breaking a sweat. Next.js has fundamentally shifted how we think about full-stack React applications.</p>

<h3>Server Components vs Client Components</h3>

<p>The core of our scalable architecture relies on pushing as much work to the server as possible. By defaulting to Server Components, we ship less JavaScript to the client, resulting in significantly faster Time to Interactive (TTI).</p>

<ul>
  <li><b>Data Fetching:</b> Perform data fetching directly inside Server Components, removing the need for complex state management libraries or \`useEffect\` hooks on the client.</li>
  <li><b>Caching:</b> Leverage Next.js built-in caching mechanisms. We extensively use \`revalidate\` and \`tags\` to keep data fresh without sacrificing edge delivery speed.</li>
  <li><b>Streaming:</b> Use \`Suspense\` boundaries to stream UI components as they become ready, improving perceived performance.</li>
</ul>

<h3>Strategic use of Interception Routes</h3>

<p>One pattern we heavily deploy is Interception Routes. This allows us to maintain application context while loading entirely new routes, perfect for modal views like photo galleries or deep-linked task details.</p>

<ol>
  <li><b>Context Preservation:</b> Users don't lose their place in the feed when inspecting an item.</li>
  <li><b>Shareability:</b> The intercepted route still has a unique URL, allowing for perfect shareability and SEO.</li>
</ol>

<p>Combining these patterns gives us an architecture that is not just scalable from a traffic perspective, but also highly maintainable for our engineering teams.</p>
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
                <Link href="/blog" className="inline-flex items-center gap-2 text-xl font-black uppercase text-black dark:text-white hover:text-[#0055A4] transition-colors group mb-12">
                   <ArrowLeft className="w-6 h-6 group-hover:-translate-x-2 transition-transform" strokeWidth={3} />
                   Back to Thoughts
                </Link>

                <div className="border-4 border-black dark:border-white bg-white dark:bg-[#121212] p-8 sm:p-12 md:p-16 shadow-[16px_16px_0px_#000000] dark:shadow-[16px_16px_0px_#ffffff] relative">
                  <div className="absolute top-0 left-0 w-full h-4 bg-[#0055A4]"></div>
                  
                  <div className="flex flex-wrap items-center gap-4 text-sm sm:text-base font-black uppercase tracking-widest text-[#64748B] dark:text-gray-400 mb-8 mt-4">
                    <span className="bg-[#ecece6] dark:bg-zinc-800 text-black dark:text-white px-3 py-1 border-2 border-black dark:border-white">
                      Engineering
                    </span>
                    <span>Sep 04, 2026</span>
                  </div>

                  <h1 className="text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-12 text-black dark:text-white">
                    Building Scalable Next.js Architectures
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
                          <div className="font-bold text-[#64748B] dark:text-gray-400">Engineering</div>
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
