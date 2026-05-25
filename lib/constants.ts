import { Github, Instagram, Linkedin } from "lucide-react"
import { XIcon } from "@/components/icons/XIcon"
import { DiscordIcon } from "@/components/icons/DiscordIcon"

export const SOCIAL_LINKS = [
  {
    name: "GitHub",
    href: "https://github.com/marvlock",
    icon: Github,
  },
  {
    name: "X",
    href: "https://x.com/ProjectMarvlock",
    icon: XIcon,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/project-marvlock/about/?viewAsMember=true",
    icon: Linkedin,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/marvlock.dev?igsh=endidTR3dmhsZWdr&utm_source=qr",
    icon: Instagram,
  },
  {
    name: "Discord",
    href: "https://discord.gg/xvj7V22ay2",
    icon: DiscordIcon,
  },
] as const

export const CONTACT_EMAIL = "marvlock.dev@gmail.com"
export const CONTACT_CAL_URL = "https://cal.com/pranavmurali"
