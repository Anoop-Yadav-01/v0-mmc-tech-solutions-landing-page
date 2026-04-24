import type { Metadata } from 'next'
import { Manrope, Space_Grotesk } from 'next/font/google'
import Script from 'next/script'
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
  title:
    'MMC TECH SOLUTIONS | Website Development, App Development, SEO, Meta Ads & Digital Marketing Company in India',
  description:
    'MMC Tech Solutions is a technology company in India offering website development, app development, SEO services, Meta Ads, digital marketing, and performance marketing for modern businesses.',
  generator: 'v0.app',
  openGraph: {
    title:
      'MMC TECH SOLUTIONS | Website Development, App Development, SEO & Performance Marketing',
    description:
      'Professional website development, app development, SEO services, Facebook Ads, Instagram Ads, digital marketing, and performance marketing solutions for businesses in India.',
    type: 'website',
  },
  keywords:
    'tech company in India, software company in India, IT solutions company, website development company, app development company, custom software development company, digital solutions company, website development services, business website development, responsive website development, app development services, mobile app development company, custom app development, SEO services company, search engine optimization services, local SEO services, SEO expert in India, Meta Ads expert, Facebook Ads agency, Instagram Ads services, digital marketing services, performance marketing agency, website development company in New Delhi, SEO services in New Delhi',
  icons: {
    icon: [
      {
        url: '/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        url: '/favicon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
    ],
    shortcut: '/favicon-32x32.png',
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
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17705051181"
          strategy="afterInteractive"
        />
        <Script id="google-ads-gtag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17705051181');
          `}
        </Script>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
