"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "How fast will I see results?",
      answer: "We typically deliver the initial MVP within 2 weeks. You'll see daily progress updates and have access to our staging environment from day one."
    },
    {
      question: "Why shouldn't I just hire freelancers or build it myself?",
      answer: "Freelancers can be unreliable and managing them takes time. Building it yourself distracts from business growth. We provide a managed, senior team that delivers guaranteed results."
    },
    {
      question: "What's included in the MVP package?",
      answer: "Everything you need to launch: Full-stack development, database setup, authentication, payment integration, basic analytics, and deployment to a production environment."
    },
    {
      question: "What happens after the MVP is done?",
      answer: "We offer a seamless transition to our Growth Retainer for ongoing development, or we can hand off the code to your in-house team with full documentation."
    },
    {
      question: "What if I want the full product, not just an MVP?",
      answer: "We can scale up! Our architecture is designed to grow. We'll simply extend the roadmap and continue building features based on your prioritized backlog."
    }
  ]

  return (
    <section id="faq" className="py-20 md:py-28">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16"
        >
          <p className="section-kicker">FAQ</p>
          <h2 className="section-title max-w-3xl">Questions teams usually ask before we start.</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="glass-surface rounded-3xl p-4 md:p-6"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-border/70 px-2 transition-all last:border-b-0"
              >
                <AccordionTrigger className="py-6 text-left text-lg font-bold tracking-tight hover:no-underline hover:text-accent md:text-2xl">
                  <span className="flex items-start gap-6">
                    <span className="min-w-[20px] text-accent">{index + 1}.</span>
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-6 pt-0 text-base leading-relaxed text-muted-foreground md:text-lg">
                  <div className="pl-11 pr-2">
                    {faq.answer}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
