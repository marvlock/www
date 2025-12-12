export const animationVariants = {
  staggerContainer: {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  },
  slideUp: {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  },
  scaleIn: {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
  }
} as const

export const springTransition = {
  type: "spring" as const,
  stiffness: 400,
  damping: 17
}

export const viewportOptions = {
  once: true,
  margin: "-100px"
} as const

