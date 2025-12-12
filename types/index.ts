import { LucideIcon } from "lucide-react"
import { ComponentType } from "react"

export interface SocialLink {
  name: string
  href: string
  icon: LucideIcon | ComponentType
}

export interface Project {
  name: string
  description: string
  stack: string[]
  githubUrl?: string
  liveUrl?: string
}

