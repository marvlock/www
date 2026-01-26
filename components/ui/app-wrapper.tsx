"use client"

import { SmoothScrollProvider } from './smooth-scroll-provider'

interface AppWrapperProps {
  children: React.ReactNode
}

export function AppWrapper({ children }: AppWrapperProps) {
  return (
    <SmoothScrollProvider>
      {children}
    </SmoothScrollProvider>
  )
} 