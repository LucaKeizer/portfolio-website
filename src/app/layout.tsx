import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '@/hooks/useLanguage'
import { ViewModeProvider } from '@/hooks/useViewMode'
import { ThemeProvider } from '@/hooks/useTheme'
import { Analytics } from '@vercel/analytics/react'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
  preload: false,
})

export const metadata: Metadata = {
  title: 'Luca Keizer - Software Engineer & Web Developer',
  description: 'Software Engineer met 2+ jaar ervaring in full-stack ontwikkeling en moderne cloud technologieën. Freelance web development services beschikbaar.',
  keywords: [
    'Software Engineer',
    'Web Developer', 
    'Python',
    'TypeScript',
    'React',
    'Next.js',
    'Azure',
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
    description: 'Software Engineer gespecialiseerd in Python, TypeScript en moderne cloud technologieën.',
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL('https://lucakeizer.nl'),
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
        <Analytics />
      </body>
    </html>
  )
}