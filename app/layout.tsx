import type { Metadata } from 'next'
import { Manrope, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
})

export const metadata: Metadata = {
  title: 'MMC TECH SOLUTIONS | Web Development, App Development & SEO Services',
  description: 'Transform your business with world-class web development, mobile app development, and SEO services. Get a free consultation today.',
  generator: 'v0.app',
  openGraph: {
    title: 'MMC TECH SOLUTIONS | Digital Solutions for Modern Businesses',
    description: 'Expert web, app, and SEO services to boost your business growth and online presence.',
    type: 'website',
  },
  keywords: 'web development, app development, SEO services, digital marketing, web design',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${spaceGrotesk.variable} dark bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
