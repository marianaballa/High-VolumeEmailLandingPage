import React from 'react'
import type { Metadata } from 'next'
import { Montserrat, Source_Sans_3 } from 'next/font/google'
import { asset, siteUrl } from '@/lib/site'
import { SiteFooter } from './components/SiteFooter'
import { SiteHeader } from './components/SiteHeader'
import './styles.css'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
})

const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-source-sans',
})

const title = 'High-Volume Email Marketing & Bulk Email Sending on a Dedicated VPS'
const description =
  'Bulk email sending for email marketing and newsletters at 200K to millions of emails per month. Dedicated VPS, clean private IPs, SPF/DKIM/DMARC, and expert setup in 48 hours.'
const socialImage = `${siteUrl}/phplist-dashboard.png`

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    'email marketing',
    'bulk email sending',
    'bulk email',
    'mass email sending',
    'newsletter sending',
    'email newsletter',
    'high-volume email',
    'dedicated IP email',
    'email marketing VPS',
    'phpList hosting',
  ],
  alternates: { canonical: `${siteUrl}/` },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: { icon: asset('/phplist-logo.svg') },
  openGraph: {
    type: 'website',
    url: `${siteUrl}/`,
    title,
    description,
    locale: 'en_US',
    images: [
      {
        url: socialImage,
        alt: 'phpList email marketing dashboard for high-volume bulk email sending',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [socialImage],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${sourceSans.variable} min-h-screen bg-white antialiased`}
      >
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  )
}
