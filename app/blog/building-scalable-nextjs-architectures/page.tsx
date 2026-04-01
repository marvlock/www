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
    <div className="bg-background text-foreground relative min-h-screen flex flex-col transition-colors">
      <div className="relative z-10 flex flex-col flex-1">
        <Navigation isVisible={true} />
        
        <main className="flex-1 pt-32 md:pt-48 pb-24 px-6 md:px-10">
          <div className="container mx-auto max-w-4xl w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-12 sm:space-y-16"
            >
              <div>
                <Link href="/" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-muted-foreground hover:text-accent transition-colors group mb-12">
                   <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                   Back to Home
                </Link>

                <div className="space-y-10">
                  <div className="flex flex-wrap items-center gap-6 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                    <span className="text-accent">Engineering<span className="ml-1">*</span></span>
                    <span>Sep 04, 2026</span>
                    <span>10 min read</span>
                  </div>

                  <h1 className="text-4xl md:text-8xl font-bold uppercase tracking-tighter leading-[0.9] text-foreground">
                    Building Scalable <br />
                    <span className="font-serif-italic normal-case text-accent">Next.js Architectures</span>
                  </h1>

                  <div className="w-full h-px bg-border" />

                  <div 
                    className="
                      text-xl md:text-2xl text-foreground font-serif-italic leading-relaxed
                      [&>h3]:text-2xl [&>h3]:md:text-4xl [&>h3]:font-bold [&>h3]:uppercase [&>h3]:tracking-tighter [&>h3]:mt-16 [&>h3]:mb-8 [&>h3]:text-foreground [&>h3]:font-sans [&>h3]:not-italic
                      [&>p]:mb-10
                      [&>ul]:list-none [&>ul]:space-y-6 [&>ul]:mb-10 [&>ul]:pl-0
                      [&>ul>li]:relative [&>ul>li]:pl-10
                      [&>ul>li::before]:content-['*'] [&>ul>li::before]:absolute [&>ul>li::before]:left-0 [&>ul>li::before]:top-0 [&>ul>li::before]:text-accent [&>ul>li::before]:text-2xl
                      [&>ul>li>b]:font-bold [&>ul>li>b]:uppercase [&>ul>li>b]:tracking-widest [&>ul>li>b]:text-sm [&>ul>li>b]:mr-2 [&>ul>li>b]:font-sans [&>ul>li>b]:not-italic
                      [&>ol]:list-decimal [&>ol]:space-y-6 [&>ol]:mb-10 [&>ol]:pl-10
                      [&>ol>li]:pl-4
                    "
                    dangerouslySetInnerHTML={{ __html: POST_CONTENT }}
                  />

                  <div className="mt-20 pt-10 border-t border-border flex flex-col md:flex-row items-center justify-between gap-10">
                     <div className="flex items-center gap-6">
                        <div className="w-16 h-16 bg-muted border border-border flex items-center justify-center font-bold text-accent text-2xl uppercase">
                          M
                        </div>
                        <div>
                          <div className="font-bold text-xl uppercase tracking-tighter">Team Marvlock</div>
                          <div className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Engineering Studio</div>
                        </div>
                     </div>
                     <div className="flex gap-4">
                        <button className="text-xs font-bold uppercase tracking-widest px-6 py-3 border border-border hover:bg-foreground hover:text-background transition-colors">
                          Share
                        </button>
                        <button className="text-xs font-bold uppercase tracking-widest px-6 py-3 bg-accent text-white hover:bg-foreground transition-colors">
                          Subscribe
                        </button>
                     </div>
                  </div>
                </div>
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
