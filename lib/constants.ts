import { Github, Linkedin, Mail } from "lucide-react"
import { XIcon } from "@/components/icons/XIcon"

export const NAVIGATION_ITEMS = ["Work", "About", "Contact"] as const

export const SOCIAL_LINKS = [
  { 
    name: "GitHub", 
    href: "https://github.com/marvlock", 
    icon: Github 
  },
  { 
    name: "LinkedIn", 
    href: "https://www.linkedin.com/company/project-marvlock/about/?viewAsMember=true", 
    icon: Linkedin 
  },
  { 
    name: "X", 
    href: "https://x.com/ProjectMarvlock", 
    icon: XIcon
  },
  { 
    name: "Contact", 
    href: "mailto:marvlock.dev@gmail.com", 
    icon: Mail 
  }
] as const

export const PROJECTS = [
  {
    name: "Schedulo",
    description: "A modern web application that streamlines meeting scheduling and email communication in one unified workflow",
    stack: ["Next.js", "React 19", "TypeScript", "Tailwind CSS", "NextAuth.js", "Google APIs"],
    githubUrl: "https://github.com/marvellousz/schedulo",
    liveUrl: "https://schedulo.marvlock.dev"
  }
] as const

export const CONTACT_EMAIL = "marvlock.dev@gmail.com"

