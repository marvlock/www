import type Lenis from "lenis"

export function scrollToSection(
  lenis: Lenis | null,
  selector: string,
  options?: { offset?: number; duration?: number },
) {
  const target = document.querySelector(selector)
  if (!target) return

  if (lenis) {
    lenis.scrollTo(selector, {
      offset: options?.offset ?? 0,
      duration: options?.duration ?? 1.2,
    })
    return
  }

  target.scrollIntoView({ behavior: "smooth", block: "start" })
}
