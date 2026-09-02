"use client"

import { DitherBackground } from "./dither-background"
import { SmoothScrollProvider } from "./smooth-scroll-provider"
import { Toaster } from "sonner"

interface AppWrapperProps {
  children: React.ReactNode
}

export function AppWrapper({ children }: AppWrapperProps) {
  return (
    <SmoothScrollProvider>
      <DitherBackground />
      <div className="relative z-[1]">{children}</div>
      <Toaster
        position="bottom-right"
        theme="dark"
        toastOptions={{ className: "font-pixelify" }}
      />
    </SmoothScrollProvider>
  )
}
