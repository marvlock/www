import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { AppWrapper } from '@/components/ui/app-wrapper'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://marvlock.dev'),
  title: 'Marvlock — Design and Build Digital Products',
  description: 'We design and build digital products that define the future. From startups to enterprises — we craft intuitive, high-performance websites, apps, and dashboards.',
  icons: {
    icon: '/marvlock-logo.png',
    shortcut: '/marvlock-logo.png',
    apple: '/marvlock-logo.png',
  },
  openGraph: {
    title: 'Marvlock — Design and Build Digital Products',
    description: 'We design and build digital products that define the future. From startups to enterprises — we craft intuitive, high-performance websites, apps, and dashboards.',
    images: [
      {
        url: '/marvlock-logo.png',
        width: 1200,
        height: 630,
        alt: 'Marvlock Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Marvlock — Design and Build Digital Products',
    description: 'We design and build digital products that define the future.',
    images: ['/marvlock-logo.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable}`}>
      <head>
        <style>{`
html {
  --font-body: var(--font-inter), sans-serif;
  --font-heading: var(--font-inter), sans-serif;
  font-family: var(--font-body);
}
        `}</style>
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <AppWrapper>
            {children}
          </AppWrapper>
        </ThemeProvider>
      </body>
    </html>
  )
}
