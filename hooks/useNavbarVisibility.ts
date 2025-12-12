import { useState, useEffect } from "react"

const SCROLL_THRESHOLD = 100

export function useNavbarVisibility() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    let lastScrollY = 0

    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY < SCROLL_THRESHOLD) {
        setIsVisible(true)
      } else if (currentScrollY > lastScrollY && currentScrollY > SCROLL_THRESHOLD) {
        setIsVisible(false)
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true)
      }

      lastScrollY = currentScrollY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return isVisible
}

