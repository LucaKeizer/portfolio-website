'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

type Theme = 'light' | 'dark' | 'system'

interface ThemeContextType {
  theme: Theme
  setTheme: (theme: Theme) => void
  isDark: boolean
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>('light')
  const [isDark, setIsDark] = useState(false)

  // Update the DOM class and localStorage
  const updateTheme = (newTheme: Theme) => {
    setThemeState(newTheme)
    localStorage.setItem('theme', newTheme)
    
    // Determine if we should use dark mode
    let shouldBeDark = false
    
    if (newTheme === 'dark') {
      shouldBeDark = true
    } else if (newTheme === 'light') {
      shouldBeDark = false
    } else {
      // System preference
      shouldBeDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    }
    
    setIsDark(shouldBeDark)
    
    // Update DOM
    if (shouldBeDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  const setTheme = (newTheme: Theme) => {
    updateTheme(newTheme)
  }

  useEffect(() => {
    // Get theme from localStorage or default to light
    const savedTheme = localStorage.getItem('theme') as Theme || 'light'
    
    // Apply theme without animation on initial load
    document.documentElement.classList.add('theme-transition-disabled')
    updateTheme(savedTheme)
    
    // Re-enable transitions after a brief delay
    setTimeout(() => {
      document.documentElement.classList.remove('theme-transition-disabled')
    }, 100)

    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = () => {
      if (theme === 'system') {
        updateTheme('system')
      }
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  return (
    <ThemeContext.Provider value={{ theme, setTheme, isDark }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}