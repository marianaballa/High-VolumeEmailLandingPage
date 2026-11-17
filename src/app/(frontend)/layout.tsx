import React from 'react'
import type { Metadata } from 'next'
import { Montserrat, Source_Sans_3 } from 'next/font/google'
import Script from 'next/script'
import { BodyCustomCode, renderHeadCustomCode } from '@/lib/make-custom-code'
import { makeSiteSettings, sanitizeHtmlAttribute } from '@/lib/make-site-settings'
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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
const defaultTitle = 'High-Volume Email Marketing & Bulk Email Sending on a Dedicated VPS'
const title = makeSiteSettings.title ?? defaultTitle
const description =
  makeSiteSettings.description ??
  'Bulk email sending for email marketing and newsletters at 200K to millions of emails per month. Dedicated VPS, clean private IPs, SPF/DKIM/DMARC, and expert setup in 48 hours.'
const favicon = makeSiteSettings.icons?.icon
const socialImage = makeSiteSettings.openGraph?.image ?? '/phplist-dashboard.png'
const googleAnalyticsId = sanitizeHtmlAttribute(makeSiteSettings.analytics?.googleAnalyticsId)

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
  alternates: { canonical: '/' },
  robots:
    makeSiteSettings.robots?.index === false
      ? { follow: false, index: false }
      : {
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
  icons: favicon ? { icon: favicon } : undefined,
  openGraph: {
    type: 'website',
    url: '/',
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
  const language = sanitizeHtmlAttribute(makeSiteSettings.language) || 'en'
  const addBypassLinks = makeSiteSettings.accessibility?.addBypassLinks === true
  const customScripts = makeSiteSettings.customScripts

  return (
    <html lang={language}>
      <head>
        {renderHeadCustomCode(customScripts?.headStart, 'head-start')}
        {renderHeadCustomCode(customScripts?.headEnd, 'head-end')}
      </head>
      <body
        className={`${montserrat.variable} ${sourceSans.variable} min-h-screen bg-white antialiased`}
      >
        <BodyCustomCode html={customScripts?.bodyStart} />
        {addBypassLinks && (
          <a className="figma-bypass-link" href="#root">
            Skip to content
          </a>
        )}
        <div id="root" tabIndex={-1}>
          <SiteHeader />
          {children}
          <SiteFooter />
        </div>
        {googleAnalyticsId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
              strategy="afterInteractive"
            />
            <Script id="figma-google-analytics" strategy="afterInteractive">
              {`
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', ${JSON.stringify(googleAnalyticsId)});
`}
            </Script>
          </>
        )}
        <BodyCustomCode html={customScripts?.bodyEnd} />
      </body>
    </html>
  )
}
