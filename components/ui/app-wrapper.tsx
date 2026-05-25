"use client"

import { DitherBackground } from "./dither-background"
import { SmoothScrollProvider } from "./smooth-scroll-provider"

interface AppWrapperProps {
  children: React.ReactNode
}

export function AppWrapper({ children }: AppWrapperProps) {
  return (
    <SmoothScrollProvider>
      <DitherBackground />
      <div className="relative z-[1]">{children}</div>
    </SmoothScrollProvider>
  )
}
