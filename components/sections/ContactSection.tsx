"use client"

import { FormEvent, useState } from "react"
import { motion } from "framer-motion"
import { CONTACT_CAL_URL, CONTACT_EMAIL } from "@/lib/constants"

const currentYearSuffix = String(new Date().getFullYear()).slice(-2)

export function ContactSection() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    description: "",
  })

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const subject = encodeURIComponent("New project inquiry from Marvlock website")
    const body = encodeURIComponent(
      `Name: ${form.firstName} ${form.lastName}\nEmail: ${form.email}\nDescription: ${form.description || "—"}`,
    )
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`
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

        <div className="relative flex flex-col items-center px-6 py-12 md:px-10 md:py-16 lg:px-14 lg:py-20">
          <h2 className="font-pixelify text-center text-3xl font-medium uppercase tracking-tight text-white md:text-4xl lg:text-5xl">
            Get in touch
          </h2>
          <p className="mt-6 max-w-2xl text-center text-sm leading-relaxed text-white/70 md:mt-8 md:text-base">
            Have a project in mind? Whether you&apos;re launching a brand, designing a product, or
            elevating your digital presence, we&apos;re here to bring your vision to life.
          </p>
          <a
            href={CONTACT_CAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-pixelify mt-8 inline-flex rounded-full border border-white/25 bg-white/10 px-6 py-3 text-sm font-medium uppercase tracking-[0.12em] text-white transition-colors hover:border-white/45 hover:bg-white/15 md:mt-10"
          >
            Book a call →
          </a>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="contact-form-glass mt-12 w-full max-w-2xl rounded-3xl p-6 md:mt-14 md:p-10 lg:max-w-3xl lg:p-12"
          >
            <p className="font-pixelify mb-6 text-center text-sm uppercase tracking-[0.14em] text-white/85 md:text-base">
              Contact us
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <label className="block space-y-2">
                <span className="text-xs text-white/65">First name</span>
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
                <span className="text-xs text-white/65">Last name</span>
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
                <span className="text-xs text-white/65">Email</span>
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
                <span className="text-xs text-white/65">Description</span>
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
                className="font-pixelify mt-2 w-full rounded-full bg-white py-4 text-sm font-medium uppercase tracking-[0.14em] text-foreground transition-opacity hover:opacity-90"
              >
                Submit
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
