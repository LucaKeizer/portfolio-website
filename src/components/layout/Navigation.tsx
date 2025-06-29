'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Menu, 
  X, 
  Code2, 
  Briefcase, 
  User, 
  Globe,
  Download,
  Mail
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/hooks/useLanguage'
import { useViewMode } from '@/hooks/useViewMode'
import { cn } from '@/lib/utils'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const { language, setLanguage } = useLanguage()
  const { viewMode, setViewMode, isFreelanceMode, isProfessionalMode } = useViewMode()

  const navItems = [
    {
      href: '#about',
      label: { en: 'About', nl: 'Over' },
      icon: User
    },
    {
      href: '#projects',
      label: { en: 'Projects', nl: 'Projecten' },
      icon: Code2
    },
    {
      href: '#experience', 
      label: { en: 'Experience', nl: 'Ervaring' },
      icon: Briefcase,
      showInMode: 'professional' as const
    },
    {
      href: '#services',
      label: { en: 'Services', nl: 'Diensten' },
      icon: Briefcase,
      showInMode: 'freelance' as const
    },
    {
      href: '#contact',
      label: { en: 'Contact', nl: 'Contact' },
      icon: Mail
    }
  ]

  const filteredNavItems = navItems.filter(item => 
    !item.showInMode || item.showInMode === viewMode
  )

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container-padding">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 font-bold text-xl">
            <Code2 className="h-8 w-8 text-primary" />
            <span className="gradient-text">Luca Keizer</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {filteredNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-muted-foreground hover:text-foreground transition-colors font-medium"
              >
                {item.label[language]}
              </Link>
            ))}
          </div>

          {/* Controls */}
          <div className="hidden lg:flex items-center space-x-4">
            
            {/* View Mode Toggle */}
            <div className="flex items-center bg-muted rounded-lg p-1">
              <button
                onClick={() => setViewMode('freelance')}
                className={cn(
                  "px-3 py-1.5 text-sm font-medium rounded-md transition-all",
                  isFreelanceMode 
                    ? "bg-background text-foreground shadow-sm" 
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {language === 'en' ? 'Freelance' : 'Freelancer'}
              </button>
              <button
                onClick={() => setViewMode('professional')}
                className={cn(
                  "px-3 py-1.5 text-sm font-medium rounded-md transition-all",
                  isProfessionalMode 
                    ? "bg-background text-foreground shadow-sm" 
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {language === 'en' ? 'Professional' : 'Professioneel'}
              </button>
            </div>

            {/* Language Toggle */}
            <button
              onClick={() => setLanguage(language === 'en' ? 'nl' : 'en')}
              className="flex items-center space-x-1 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Globe className="h-4 w-4" />
              <span className="text-sm font-medium uppercase">{language}</span>
            </button>

            {/* Resume Download - Only in Professional Mode */}
            {isProfessionalMode && (
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                {language === 'en' ? 'Resume' : 'CV'}
              </Button>
            )}

            {/* Contact CTA */}
            <Button variant="gradient">
              {language === 'en' ? 'Get in Touch' : 'Contact'}
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-muted-foreground hover:text-foreground"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden border-t border-border"
            >
              <div className="py-4 space-y-4">
                
                {/* Mode Toggle Mobile */}
                <div className="flex items-center justify-center">
                  <div className="flex items-center bg-muted rounded-lg p-1">
                    <button
                      onClick={() => setViewMode('freelance')}
                      className={cn(
                        "px-4 py-2 text-sm font-medium rounded-md transition-all",
                        isFreelanceMode 
                          ? "bg-background text-foreground shadow-sm" 
                          : "text-muted-foreground"
                      )}
                    >
                      {language === 'en' ? 'Freelance' : 'Freelancer'}
                    </button>
                    <button
                      onClick={() => setViewMode('professional')}
                      className={cn(
                        "px-4 py-2 text-sm font-medium rounded-md transition-all",
                        isProfessionalMode 
                          ? "bg-background text-foreground shadow-sm" 
                          : "text-muted-foreground"
                      )}
                    >
                      {language === 'en' ? 'Professional' : 'Professioneel'}
                    </button>
                  </div>
                </div>

                {/* Navigation Links */}
                {filteredNavItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center space-x-3 text-muted-foreground hover:text-foreground transition-colors py-2"
                  >
                    <item.icon className="h-5 w-5" />
                    <span className="font-medium">{item.label[language]}</span>
                  </Link>
                ))}

                {/* Controls Mobile */}
                <div className="pt-4 border-t border-border space-y-3">
                  
                  {/* Language Toggle */}
                  <button
                    onClick={() => setLanguage(language === 'en' ? 'nl' : 'en')}
                    className="flex items-center justify-center space-x-2 w-full py-2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Globe className="h-4 w-4" />
                    <span className="text-sm font-medium">
                      {language === 'en' ? 'Switch to Dutch' : 'Switch to English'}
                    </span>
                  </button>

                  {/* Resume Download - Only in Professional Mode */}
                  {isProfessionalMode && (
                    <Button variant="outline" className="w-full">
                      <Download className="h-4 w-4 mr-2" />
                      {language === 'en' ? 'Download Resume' : 'Download CV'}
                    </Button>
                  )}

                  {/* Contact CTA */}
                  <Button variant="gradient" className="w-full">
                    <Mail className="h-4 w-4 mr-2" />
                    {language === 'en' ? 'Get in Touch' : 'Neem Contact Op'}
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}