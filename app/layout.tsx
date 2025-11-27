import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Wisal — WhatsApp AI Receptionist for Clinics',
    template: '%s | Wisal',
  },
  description: 'Always connected. Always caring. Wisal automates patient messaging, booking, and escalation on WhatsApp. HIPAA-aligned, Arabic + English, GCC-ready.',
  keywords: ['WhatsApp AI', 'clinic receptionist', 'patient messaging', 'appointment booking', 'Oman', 'GCC', 'healthcare automation'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://wisal.clinic',
    siteName: 'Wisal',
    title: 'Wisal — WhatsApp AI Receptionist for Clinics',
    description: 'Always connected. Always caring. Automate patient messaging, booking, and escalation on WhatsApp.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Wisal - WhatsApp AI Receptionist',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wisal — WhatsApp AI Receptionist for Clinics',
    description: 'Always connected. Always caring. Automate patient messaging, booking, and escalation on WhatsApp.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Structured Data - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Wisal',
              url: 'https://wisal.clinic',
              logo: 'https://wisal.clinic/logo.png',
              description: 'WhatsApp AI Receptionist for Clinics in Oman & GCC',
              sameAs: [
                'https://linkedin.com/company/wisal',
              ],
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'Customer Service',
                email: 'hello@wisal.clinic',
                availableLanguage: ['en', 'ar'],
              },
            }),
          }}
        />
        {/* Structured Data - WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              url: 'https://wisal.clinic',
              name: 'Wisal',
              potentialAction: {
                '@type': 'SearchAction',
                target: {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://wisal.clinic/search?q={search_term_string}',
                },
                query_input: 'required name=search_term_string',
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
