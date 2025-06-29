'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import type { Language } from '@/types'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string, fallback?: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('nl')

  useEffect(() => {
    // Check localStorage for saved preference
    const saved = localStorage.getItem('preferred-language') as Language
    if (saved && (saved === 'en' || saved === 'nl')) {
      setLanguageState(saved)
    } else {
      // Detect browser language
      const browserLang = navigator.language.toLowerCase()
      if (browserLang.startsWith('nl')) {
        setLanguageState('nl')
      } else {
        setLanguageState('en')
      }
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem('preferred-language', lang)
    
    // Update document lang attribute
    document.documentElement.lang = lang
  }

  // Simple translation function - will be enhanced with actual translations
  const t = (key: string, fallback?: string): string => {
    // For now, return the key as fallback
    // This will be connected to actual translation data later
    return fallback || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}