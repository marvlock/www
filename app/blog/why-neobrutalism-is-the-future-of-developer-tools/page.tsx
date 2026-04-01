"use client"

import { Navigation } from "@/components/layout/Navigation"
import { Footer } from "@/components/layout/Footer"
import { ChatButton } from "@/components/ui/chat-button"
import { motion } from "framer-motion"
import { animationVariants, viewportOptions } from "@/lib/animations"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

const POST_CONTENT = `
<p>Neobrutalism isn't just an aesthetic trend; it's a structural advantage. By deliberately avoiding soft shadows, subtle gradients, and complex border radiuses, we force ourselves to focus on layout, hierarchy, and content.</p>

<h3>The Problem with Polish</h3>

<p>When we focus too early on polish, we spend hours tweaking box-shadows to ensure they have the perfect \`rgba(0,0,0,0.05)\` blur. This creates a few significant issues for early-stage development:</p>

<ul>
  <li><b>Decision Fatigue:</b> Every new component requires decisions on border radiuses, shadow depths, and color variations.</li>
  <li><b>Inconsistency:</b> Without a robust design system in place from day one, subtle variations creep into the codebase.</li>
  <li><b>Performance:</b> Complex CSS properties, like blur filters and heavy box-shadows, can impact performance on lower-end devices.</li>
</ul>

<h3>Enter Neobrutalism</h3>

<p>Neobrutalism solves this by establishing a rigid, indisputable set of rules:</p>

<ol>
  <li><b>Solid Colors:</b> We use pure, highly contrasting colors.</li>
  <li><b>Hard Borders:</b> Everything has a thick, undeniable border. Usually \`border-black\` and \`border-4\`.</li>
  <li><b>Flat Shadows:</b> Shadows aren't blurred; they are solid blocks of color separated from the box, e.g., \`box-shadow: 8px 8px 0px #000\`.</li>
</ol>

<p>This constraint breeds creativity. Because developer don't have to fiddle with subtleties, they can build components in half the time. The focus shifts entirely to user flow, layout structure, and feature completion.</p>

<h3>Case Study: High-Contrast UIs</h3>

<p>When building data-dense developer tools, contrast is king. Neobrutalist interfaces inherently provide maximum contrast. An error state isn't a slightly red background; it's a solid red box with black text and a thick black border. You cannot miss it.</p>

<p>This level of clarity is vital for applications where users need to scan information quickly and take decisive action.</p>
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
                <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-muted-foreground hover:text-accent transition-colors group mb-12">
                   <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                   Back to Thoughts
                </Link>

                <div className="space-y-10">
                  <div className="flex flex-wrap items-center gap-6 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                    <span className="text-accent">Design<span className="ml-1">*</span></span>
                    <span>Aug 12, 2026</span>
                    <span>8 min read</span>
                  </div>

                  <h1 className="text-4xl md:text-8xl font-bold uppercase tracking-tighter leading-[0.9] text-foreground">
                    Why Neobrutalism is the <br />
                    <span className="font-serif-italic normal-case text-accent">Future of Developer Tools</span>
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
                          <div className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Design Studio</div>
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
