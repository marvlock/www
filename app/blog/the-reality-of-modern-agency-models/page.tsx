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
                    <span className="text-accent">Business<span className="ml-1">*</span></span>
                    <span>Oct 21, 2026</span>
                    <span>6 min read</span>
                  </div>

                  <h1 className="text-4xl md:text-8xl font-bold uppercase tracking-tighter leading-[0.9] text-foreground">
                    The Reality of <br />
                    <span className="font-serif-italic normal-case text-accent">Modern Agency Models</span>
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
                          <div className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Business Strategy</div>
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
