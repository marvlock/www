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
    <div className="bg-background text-foreground relative min-h-screen flex flex-col transition-colors">
      <div className="relative z-10 flex flex-col flex-1">
        <Navigation isVisible={true} />
        
        <main className="flex-1 pt-32 md:pt-48 pb-24 px-6 md:px-10">
          <div className="container mx-auto max-w-7xl w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-20 md:space-y-32"
            >
              <div className="max-w-4xl">
                <h1 className="text-[14vw] md:text-[10vw] font-bold uppercase tracking-tighter leading-[0.85] mb-8">
                  Our <br />
                  <span className="font-serif-italic normal-case text-accent">Thoughts.</span>
                </h1>
                <p className="text-xl md:text-3xl font-serif-italic text-muted-foreground leading-relaxed">
                  Design, Engineering, and Business Insights from the Marvlock team.
                </p>
              </div>

              <div className="divide-y divide-border">
                {POSTS.map((post, index) => (
                  <motion.article
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group"
                  >
                    <a 
                      href={"/blog/" + post.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}
                      className="block py-12 md:py-20 group"
                    >
                      <div className="grid md:grid-cols-12 gap-8 items-start">
                        <div className="md:col-span-3 text-xs font-bold uppercase tracking-widest text-muted-foreground pt-3 flex items-center gap-3">
                          <span className="w-2 h-2 rounded-full bg-accent" />
                          {post.date}
                        </div>
                        
                        <div className="md:col-span-7 space-y-6">
                          <div className="text-sm font-bold uppercase tracking-widest text-accent flex items-center gap-2">
                             <span className="font-serif-italic lowercase text-lg">in</span> {post.category}
                          </div>
                          <h2 className="text-4xl md:text-7xl font-bold uppercase tracking-tighter leading-[0.9] group-hover:text-accent transition-colors">
                            {post.title}
                          </h2>
                          <p className="text-lg md:text-2xl font-serif-italic text-muted-foreground leading-relaxed max-w-2xl">
                            {post.excerpt}
                          </p>
                        </div>

                        <div className="md:col-span-2 md:flex justify-end pt-3">
                          <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center group-hover:bg-accent group-hover:border-accent group-hover:text-background transition-all duration-500">
                             <ArrowRight className="w-6 h-6" />
                          </div>
                        </div>
                      </div>
                    </a>
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
