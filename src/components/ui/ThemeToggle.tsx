'use client'

import { Sun, Moon, Monitor } from 'lucide-react'
import { useTheme } from '@/hooks/useTheme'
import { Button } from '@/components/ui/button'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

interface ThemeToggleProps {
  showText?: boolean
  size?: 'sm' | 'default'
}

export default function ThemeToggle({ showText = false, size = 'default' }: ThemeToggleProps) {
  const { theme, setTheme, isDark } = useTheme()
  const [isOpen, setIsOpen] = useState(false)

  const themes = [
    { value: 'light', icon: Sun, label: 'Light' },
    { value: 'dark', icon: Moon, label: 'Dark' },
    { value: 'system', icon: Monitor, label: 'System' }
  ] as const

  const currentTheme = themes.find(t => t.value === theme) || themes[2]
  const CurrentIcon = currentTheme.icon

  // Simple toggle between light and dark (mobile-friendly)
  const handleSimpleToggle = () => {
    if (theme === 'dark') {
      setTheme('light')
    } else {
      setTheme('dark')
    }
  }

  // Desktop: Show dropdown with all options
  if (showText) {
    return (
      <div className="relative">
        <Button
          variant="outline"
          size={size}
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center space-x-2"
        >
          <CurrentIcon className="h-4 w-4" />
          {showText && <span className="text-sm">{currentTheme.label}</span>}
        </Button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full mt-2 right-0 bg-card border border-border rounded-lg shadow-lg z-50 min-w-[120px]"
            >
              {themes.map((themeOption) => {
                const Icon = themeOption.icon
                return (
                  <button
                    key={themeOption.value}
                    onClick={() => {
                      setTheme(themeOption.value)
                      setIsOpen(false)
                    }}
                    className={`w-full flex items-center space-x-2 px-3 py-2 text-sm transition-colors hover:bg-muted first:rounded-t-lg last:rounded-b-lg ${
                      theme === themeOption.value ? 'bg-muted' : ''
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{themeOption.label}</span>
                  </button>
                )
              })}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Close dropdown when clicking outside */}
        {isOpen && (
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
        )}
      </div>
    )
  }

  // Mobile: Simple toggle button
  return (
    <Button
      variant="outline"
      size={size}
      onClick={handleSimpleToggle}
      className="flex items-center space-x-1"
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      <motion.div
        key={theme}
        initial={{ rotate: -180, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <CurrentIcon className="h-4 w-4" />
      </motion.div>
      {showText && (
        <span className="text-sm">
          {currentTheme.label}
        </span>
      )}
    </Button>
  )
}