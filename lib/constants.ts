import { Github, Linkedin, Mail, Instagram } from "lucide-react"
import { XIcon } from "@/components/icons/XIcon"
import { DiscordIcon } from "@/components/icons/DiscordIcon"

export const NAVIGATION_ITEMS = ["Services", "Work", "Testimonials", "Pricing", "FAQ", "Contact"] as const

export const SOCIAL_LINKS = [
  { 
    name: "GitHub", 
    href: "https://github.com/marvlock", 
    icon: Github 
  },
  { 
    name: "X", 
    href: "https://x.com/ProjectMarvlock", 
    icon: XIcon
  },
  { 
    name: "LinkedIn", 
    href: "https://www.linkedin.com/company/project-marvlock/about/?viewAsMember=true", 
    icon: Linkedin 
  },
  { 
    name: "Instagram", 
    href: "https://www.instagram.com/marvlock.dev?igsh=endidTR3dmhsZWdr&utm_source=qr", 
    icon: Instagram 
  },
  { 
    name: "Discord", 
    href: "https://discord.gg/xvj7V22ay2", 
    icon: DiscordIcon 
  },
  { 
    name: "Contact", 
    href: "mailto:marvlock.dev@gmail.com", 
    icon: Mail 
  }
] as const

export const PROJECTS = [
  {
    name: "Synapse",
    description: "A unified memory platform with web app, API, MCP server, and Chrome extension.",
    stack: ["Full Stack", "TypeScript", "Python", "MCP"],
    githubUrl: "https://github.com/marvlock/synapse",
    liveUrl: "https://synapse-frontend-gamma.vercel.app/",
    imageUrl: "/synapse.png"
  },
  {
    name: "Replied",
    description: "Anonymous sanctuary for professional curation with a modern full-stack architecture.",
    stack: ["Full Stack", "Next.js", "TypeScript", "Go"],
    githubUrl: "https://github.com/marvellousz/replied",
    liveUrl: "https://replied.marvlock.dev",
    imageUrl: "/replied.png"
  },
  {
    name: "GhostForm",
    description: "Privacy-first form builder with server-side validation, rate limiting, and zero tracking.",
    stack: ["Full Stack", "Nuxt", "MongoDB", "TypeScript"],
    githubUrl: "https://github.com/marvlock/ghostform",
    liveUrl: "https://ghostform.marvlock.dev",
    imageUrl: "/ghostform.png"
  },
  {
    name: "Things",
    description: "A collection of beautifully designed, blocky components that embrace a bold, raw aesthetic. Copy, paste, customize.",
    stack: ["UI/UX", "Next.js", "React", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/marvellousz/things",
    liveUrl: "https://things.marvlock.dev",
    imageUrl: "/things.png"
  },
  {
    name: "NullBin",
    description: "A privacy-first, client-side encrypted pastebin alternative with a clean, modern UX. No accounts, no tracking, just secure sharing.",
    stack: ["Full-Stack", "Next.js 15", "React", "TypeScript", "Tailwind CSS", "MongoDB", "Web Crypto API", "Shiki"],
    githubUrl: "https://github.com/marvellousz/nullbin",
    liveUrl: "https://nullbin.marvlock.dev",
    imageUrl: "/nullbin.png"
  },
  {
    name: "Schedulo",
    description: "A modern web application that streamlines meeting scheduling and email communication in one unified workflow",
    stack: ["Full-Stack", "Next.js", "React 19", "TypeScript", "Tailwind CSS", "NextAuth.js", "Google APIs"],
    githubUrl: "https://github.com/marvellousz/schedulo",
    liveUrl: "https://schedulo.marvlock.dev",
    imageUrl: "/schedulo.png"
  }
] as const
export const CONTACT_EMAIL = "marvlock.dev@gmail.com"

