"use client"

import { FormEvent, useState } from "react"
import { motion } from "framer-motion"
import { toast } from "sonner"
import { CONTACT_CAL_URL } from "@/lib/constants"

export function ContactSection() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    description: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    const toastId = toast.loading("Sending message...")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || "We could not send your message.")
      }

      toast.success("Message sent", {
        id: toastId,
        description: "We will be in touch soon.",
      })
      setForm({ firstName: "", lastName: "", email: "", description: "" })
    } catch (error) {
      toast.error("Message not sent", {
        id: toastId,
        description:
          error instanceof Error ? error.message : "Please try again shortly.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const updateField = (field: keyof typeof form, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <section id="contact" className="w-full px-2 sm:px-3 md:px-4">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
        className="contact-panel mx-auto mb-5 w-full md:mb-6"
      >
        <div className="contact-panel-bg" aria-hidden />

        <div className="relative flex flex-col items-center px-4 py-10 sm:px-6 sm:py-14 md:px-10 md:py-16 lg:px-14 lg:py-20">
          <p className="font-pixelify text-xs uppercase tracking-[0.12em] text-[#4A9B6E]">
            03 / Start a build
          </p>
          <h2 className="font-pixelify mt-3 text-center text-3xl font-medium uppercase tracking-tight text-white md:text-4xl lg:text-5xl">
            Get in touch
          </h2>
          <p className="mt-6 max-w-2xl text-center text-sm leading-relaxed text-white/70 md:mt-8 md:text-base">
            Have a project in mind? Whether you need software engineering, web or app work,
            design, or ghostwriting, we&apos;re here to bring your vision to life.
          </p>
          <a
            href={CONTACT_CAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-pixelify mt-8 inline-flex bg-[#C97A3D] px-6 py-3 text-sm font-medium uppercase tracking-[0.08em] text-[#0A0D0C] transition-colors hover:bg-[#E09459] md:mt-10"
          >
            Book a call →
          </a>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="contact-form-glass mt-10 w-full max-w-2xl rounded-none p-5 sm:mt-12 sm:p-6 md:mt-14 md:p-10 lg:max-w-3xl lg:p-12"
          >
            <p className="font-pixelify mb-6 text-sm uppercase tracking-[0.1em] text-[#4A9B6E] md:text-base">
              &gt; Tell us about your project<span className="terminal-cursor" aria-hidden />
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <label className="block space-y-2">
                <span className="font-pixelify text-xs uppercase tracking-[0.06em] text-white/65">First name</span>
                <input
                  type="text"
                  name="firstName"
                  required
                  placeholder="Jane"
                  value={form.firstName}
                  onChange={(e) => updateField("firstName", e.target.value)}
                  className="contact-field"
                />
              </label>
              <label className="block space-y-2">
                <span className="font-pixelify text-xs uppercase tracking-[0.06em] text-white/65">Last name</span>
                <input
                  type="text"
                  name="lastName"
                  required
                  placeholder="Smith"
                  value={form.lastName}
                  onChange={(e) => updateField("lastName", e.target.value)}
                  className="contact-field"
                />
              </label>
              <label className="block space-y-2">
                <span className="font-pixelify text-xs uppercase tracking-[0.06em] text-white/65">Email</span>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="jane@framer.com"
                  value={form.email}
                  onChange={(e) => updateField("email", e.target.value)}
                  className="contact-field"
                />
              </label>
              <label className="block space-y-2">
                <span className="font-pixelify text-xs uppercase tracking-[0.06em] text-white/65">Description</span>
                <textarea
                  name="description"
                  required
                  placeholder="Tell us what you want to build."
                  value={form.description}
                  onChange={(e) => updateField("description", e.target.value)}
                  className="contact-field min-h-32 resize-y"
                />
              </label>

              <button
                type="submit"
                disabled={isSubmitting}
                className="font-pixelify mt-2 w-full bg-[#4A9B6E] py-4 text-sm font-medium uppercase tracking-[0.1em] text-[#0A0D0C] transition-colors hover:bg-[#68B888]"
              >
                {isSubmitting ? "Sending..." : "Submit"}
              </button>
            </form>

            <p className="mt-4 text-center text-xs text-white/50">
              Prefer to talk live?{" "}
              <a
                href={CONTACT_CAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 underline underline-offset-2 transition-colors hover:text-white"
              >
                Schedule on Cal
              </a>
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
