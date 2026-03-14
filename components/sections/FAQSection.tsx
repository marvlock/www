"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { animationVariants, viewportOptions } from "@/lib/animations"

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
    <section id="faq" className="py-16 sm:py-24 px-4 sm:px-6 relative z-10 bg-white dark:bg-[#121212] border-b-8 border-black dark:border-white">
      <div className="container mx-auto max-w-4xl w-full">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={viewportOptions}
          variants={animationVariants.staggerContainer}
          className="space-y-12 sm:space-y-16"
        >
          <motion.div variants={animationVariants.slideUp} className="text-center md:text-left">
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-6 text-black dark:text-white">
              Questions <span className="text-[#E32726]">Answered.</span>
            </h2>
            <div className="bg-[#FFD700] p-4 border-4 border-black shadow-[4px_4px_0px_#000000] inline-block">
              <p className="text-lg sm:text-xl font-bold text-black uppercase tracking-wide">
                Clear explanations for exactly what you need to know.
              </p>
            </div>
          </motion.div>

          <motion.div variants={animationVariants.slideUp}>
            <Accordion type="single" collapsible className="w-full space-y-6">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-4 border-black dark:border-white bg-[#ecece6] dark:bg-zinc-900 shadow-[8px_8px_0px_#000000] dark:shadow-[8px_8px_0px_#ffffff] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[12px_12px_0px_#0055A4] transition-all rounded-none px-4 sm:px-6"
                >
                  <AccordionTrigger className="text-left text-xl sm:text-2xl font-black uppercase text-black dark:text-white py-6 hover:no-underline hover:text-[#E32726] transition-colors group">
                    <span className="flex items-start gap-4">
                      <span className="text-[#0055A4] font-black">{index + 1}.</span>
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-base sm:text-lg font-medium text-black dark:text-gray-300 leading-relaxed pb-6 pt-2 border-t-4 border-black dark:border-white">
                    <div className="pt-4 pl-10 sm:pl-12">
                      {faq.answer}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
