"use client"

import { Navigation } from "@/components/layout/Navigation"
import { Footer } from "@/components/layout/Footer"
import { ChatButton } from "@/components/ui/chat-button"
import { motion } from "framer-motion"
import { animationVariants, viewportOptions } from "@/lib/animations"
import { ArrowRight } from "lucide-react"

const POSTS = [
  {
    title: "Why Neobrutalism is the Future of Developer Tools",
    excerpt: "We explore why stripping away excessive polish and embracing raw, unstyled-yet-structured components actually increases developer speed.",
    date: "Aug 12, 2026",
    category: "Design",
    color: "#E32726", 
  },
  {
    title: "Building Scalable Next.js Architectures",
    excerpt: "The latest App Router patterns we use to scale products to millions of active users without breaking a sweat.",
    date: "Sep 04, 2026",
    category: "Engineering",
    color: "#0055A4",
  },
  {
    title: "The Reality of Modern Agency Models",
    excerpt: "Why paying for account managers and fancy ping-pong tables doesn't translate to better product outcomes.",
    date: "Oct 21, 2026",
    category: "Business",
    color: "#FFD700",
  }
]

export default function BlogPage() {
  return (
    <div className="bg-[#ecece6] dark:bg-zinc-900 text-[#0E1117] dark:text-white relative min-h-screen flex flex-col transition-colors">
      <div className="fixed inset-0 z-0 bg-[#f4f4f0] dark:bg-[#121212]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000010_1px,transparent_1px),linear-gradient(to_bottom,#00000010_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:2rem_2rem]"></div>
      </div>
      
      <div className="relative z-10 flex flex-col flex-1">
        <Navigation isVisible={true} />
        
        <main className="flex-1 pt-32 pb-24 px-4 sm:px-6">
          <div className="container mx-auto max-w-5xl w-full">
            <motion.div
              initial="initial"
              animate="animate"
              variants={animationVariants.staggerContainer}
              className="space-y-16 sm:space-y-24"
            >
              <motion.div variants={animationVariants.slideUp} className="text-left border-black dark:border-white border-b-8 pb-12 mb-12">
                <h1 className="text-6xl sm:text-7xl md:text-9xl font-black uppercase tracking-tighter leading-none mb-6 text-black dark:text-white">
                  Our <br />
                  <span className="text-[#0055A4]">Thoughts.</span>
                </h1>
                <div className="bg-[#FFD700] p-4 sm:p-6 border-4 border-black inline-block shadow-[8px_8px_0px_#000000]">
                  <p className="text-xl sm:text-2xl font-black text-black uppercase tracking-wide">
                    Design, Engineering, and Business Insights.
                  </p>
                </div>
              </motion.div>

              <div className="space-y-12">
                {POSTS.map((post, index) => (
                  <motion.article
                    key={index}
                    variants={animationVariants.slideUp}
                    className="group"
                  >
                    <motion.a 
                      href={"/blog/" + post.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}
                      className="block bg-white dark:bg-[#121212] border-4 border-black dark:border-white shadow-[8px_8px_0px_#000000] dark:shadow-[8px_8px_0px_#ffffff] transition-all p-6 sm:p-10 cursor-pointer relative overflow-hidden" 
                      whileHover={{ 
                        y: -8, 
                        x: -8, 
                        boxShadow: "16px 16px 0px " + post.color 
                      }}
                    >
                      <div className="absolute top-0 left-0 w-4 h-full" style={{ backgroundColor: post.color }}></div>
                      
                      <div className="pl-6 sm:pl-8 flex flex-col md:flex-row gap-6 md:gap-12 md:items-start justify-between relative z-10">
                        <div className="flex-1 space-y-4">
                          <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm font-black uppercase tracking-widest text-[#64748B] dark:text-gray-400">
                            <span className="bg-[#ecece6] dark:bg-zinc-800 text-black dark:text-white px-3 py-1 border-2 border-black dark:border-white">
                              {post.category}
                            </span>
                            <span>{post.date}</span>
                          </div>
                          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tighter text-black dark:text-white leading-tight group-hover:underline decoration-4 underline-offset-4" style={{ textDecorationColor: post.color }}>
                            {post.title}
                          </h2>
                          <p className="text-lg sm:text-xl font-medium text-black dark:text-gray-300 max-w-3xl">
                            {post.excerpt}
                          </p>
                        </div>
                        <div className="hidden md:flex items-center justify-center p-4">
                          <ArrowRight className="w-12 h-12 text-black dark:text-white group-hover:translate-x-4 transition-transform" strokeWidth={3} />
                        </div>
                      </div>
                    </motion.a>
                  </motion.article>
                ))}
              </div>
            </motion.div>
          </div>
        </main>

        <Footer />
        <ChatButton />
      </div>
    </div>
  )
}
