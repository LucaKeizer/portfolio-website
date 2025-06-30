import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '@/hooks/useLanguage'
import { ViewModeProvider } from '@/hooks/useViewMode'
import { ThemeProvider } from '@/hooks/useTheme'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-mono',
})

export const metadata: Metadata = {
  title: 'Luca Keizer - Software Engineer & Web Developer',
  description: 'Gepassioneerde Software Engineer met 2+ jaar ervaring in full-stack ontwikkeling, data-analyse en moderne cloud technologieën. Freelance web development services beschikbaar.',
  keywords: [
    'Software Engineer',
    'Web Developer', 
    'Python',
    'TypeScript',
    'React',
    'Next.js',
    'Azure',
    'Machine Learning',
    'Volendam',
    'Netherlands',
    'Freelance',
    'Full-stack'
  ],
  authors: [{ name: 'Luca Keizer' }],
  creator: 'Luca Keizer',
  openGraph: {
    type: 'website',
    locale: 'nl_NL',
    alternateLocale: 'en_US',
    url: 'https://lucakeizer.nl',
    siteName: 'Luca Keizer Portfolio',
    title: 'Luca Keizer - Software Engineer & Web Developer',
    description: 'Gepassioneerde Software Engineer gespecialiseerd in Python, TypeScript en moderne cloud technologieën.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Luca Keizer - Software Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Luca Keizer - Software Engineer & Web Developer',
    description: 'Software Engineer gespecialiseerd in Python, TypeScript en cloud technologieën.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  metadataBase: new URL('https://lucakeizer.nl'),
  alternates: {
    canonical: '/',
    languages: {
      'nl': '/nl',
      'en': '/en',
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <ThemeProvider>
          <LanguageProvider>
            <ViewModeProvider>
              <div className="min-h-screen bg-background">
                {children}
              </div>
            </ViewModeProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}