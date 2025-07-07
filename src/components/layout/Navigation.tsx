'use client'

import { useState, useEffect } from 'react'
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
  Mail,
  Folder
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import ThemeToggle from '@/components/ui/ThemeToggle'
import { useLanguage } from '@/hooks/useLanguage'
import { useViewMode } from '@/hooks/useViewMode'
import { cn } from '@/lib/utils'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { language, setLanguage } = useLanguage()
  const { viewMode, setViewMode, isFreelanceMode, isProfessionalMode } = useViewMode()

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Resume download handler
  const handleResumeDownload = () => {
    const resumeFile = language === 'en' ? '/resume/Luca-Keizer-Resume-EN.pdf' : '/resume/Luca-Keizer-CV-NL.pdf'
    const fileName = language === 'en' ? 'Luca-Keizer-Resume-EN.pdf' : 'Luca-Keizer-CV-NL.pdf'

    const link = document.createElement('a')
    link.href = resumeFile
    link.download = fileName
    link.target = '_blank'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

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
      href: '/projects',
      label: { en: 'All Work', nl: 'Al Mijn Werk' },
      icon: Folder,
      external: true
    },
    {
      href: '#experience', 
      label: { en: 'Experience', nl: 'Ervaring' },
      icon: Briefcase,
      showInMode: 'professional' as const
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
    <motion.nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled 
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm" 
          : "bg-background/80 backdrop-blur-sm border-b border-border/50"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container-padding">
        <div className="flex items-center justify-between h-14 md:h-16">
          
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Link href="/" className="flex items-center space-x-2 font-bold text-lg md:text-xl group">
              <motion.div
                className="relative"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Code2 className="h-6 w-6 md:h-8 md:w-8 text-primary" />
              </motion.div>
              <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                Luca Keizer
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {filteredNavItems.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.4 }}
              >
                {item.external ? (
                  <Link
                    href={item.href}
                    className="relative px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 rounded-lg hover:bg-muted/50 group"
                  >
                    {item.label[language]}
                  </Link>
                ) : (
                  <a
                    href={item.href}
                    className="relative px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 rounded-lg hover:bg-muted/50 group"
                  >
                    {item.label[language]}
                  </a>
                )}
              </motion.div>
            ))}
          </div>

          {/* Desktop Controls */}
          <div className="hidden lg:flex items-center space-x-3">
            
            {/* View Mode Toggle */}
            <motion.div 
              className="flex items-center bg-muted/80 rounded-lg p-1 border border-border/50"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
            >
              <motion.button
                onClick={() => setViewMode('freelance')}
                className={cn(
                  "px-3 py-1.5 text-xs font-medium rounded-md transition-all duration-200",
                  isFreelanceMode 
                    ? "bg-background text-foreground shadow-sm" 
                    : "text-muted-foreground hover:text-foreground"
                )}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {language === 'en' ? 'Freelance' : 'Freelancer'}
              </motion.button>
              <motion.button
                onClick={() => setViewMode('professional')}
                className={cn(
                  "px-3 py-1.5 text-xs font-medium rounded-md transition-all duration-200",
                  isProfessionalMode 
                    ? "bg-background text-foreground shadow-sm" 
                    : "text-muted-foreground hover:text-foreground"
                )}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {language === 'en' ? 'Professional' : 'Professioneel'}
              </motion.button>
            </motion.div>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Language Toggle */}
            <motion.button
              onClick={() => setLanguage(language === 'en' ? 'nl' : 'en')}
              className="flex items-center space-x-1 px-3 py-2 text-muted-foreground hover:text-foreground transition-all duration-200 rounded-lg hover:bg-muted/50 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Globe className="h-3.5 w-3.5 group-hover:rotate-12 transition-transform duration-200" />
              <span className="text-xs font-medium uppercase">{language}</span>
            </motion.button>

            {/* Resume Download - Professional Mode Only */}
            {isProfessionalMode && (
              <Button 
                variant="outline" 
                size="sm" 
                onClick={handleResumeDownload} 
                className="text-xs"
              >
                <Download className="h-3.5 w-3.5 mr-1.5" />
                {language === 'en' ? 'Resume' : 'CV'}
              </Button>
            )}

            {/* Contact CTA */}
            <Button 
              variant="gradient" 
              size="sm" 
              className="text-xs" 
              asChild
            >
              <a href="#contact">
                {language === 'en' ? 'Contact' : 'Contact'}
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-muted/50"
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="h-5 w-5" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="h-5 w-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -20 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="lg:hidden border-t border-border bg-background/95 backdrop-blur-sm"
            >
              <div className="py-4 space-y-4">
                
                {/* Mode Toggle Mobile */}
                <div className="flex items-center justify-center pb-3 mx-4">
                  <div className="flex items-center bg-muted/80 rounded-lg p-0.5 border border-border/50">
                    <button
                      onClick={() => setViewMode('freelance')}
                      className={cn(
                        "px-3 py-1.5 text-sm font-medium rounded-md transition-all",
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
                        "px-3 py-1.5 text-sm font-medium rounded-md transition-all",
                        isProfessionalMode 
                          ? "bg-background text-foreground shadow-sm" 
                          : "text-muted-foreground"
                      )}
                    >
                      {language === 'en' ? 'Professional' : 'Professioneel'}
                    </button>
                  </div>
                </div>

                {/* Quick Controls */}
                <div className="flex items-center justify-between px-4">
                  <ThemeToggle />
                  
                  <button
                    onClick={() => setLanguage(language === 'en' ? 'nl' : 'en')}
                    className="flex items-center space-x-2 py-2 px-3 text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-muted/50"
                  >
                    <Globe className="h-4 w-4" />
                    <span className="text-sm font-medium">
                      {language === 'en' ? 'NL' : 'EN'}
                    </span>
                  </button>
                </div>

                {/* Navigation Links */}
                <div className="grid grid-cols-2 gap-2 px-4">
                  {filteredNavItems.map((item, index) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * index, duration: 0.3 }}
                    >
                      {item.external ? (
                        <Link
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors py-3 px-3 rounded-lg hover:bg-muted/50 text-sm group"
                        >
                          <item.icon className="h-4 w-4 group-hover:scale-110 transition-transform duration-200" />
                          <span className="font-medium">{item.label[language]}</span>
                        </Link>
                      ) : (
                        <a
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors py-3 px-3 rounded-lg hover:bg-muted/50 text-sm group"
                        >
                          <item.icon className="h-4 w-4 group-hover:scale-110 transition-transform duration-200" />
                          <span className="font-medium">{item.label[language]}</span>
                        </a>
                      )}
                    </motion.div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="pt-3 border-t border-border/50 space-y-3 px-4">
                  
                  {/* Resume Download - Professional Mode */}
                  {isProfessionalMode && (
                    <Button 
                      variant="outline" 
                      className="w-full py-3" 
                      onClick={handleResumeDownload}
                    >
                      <Download className="h-4 w-4 mr-2" />
                      {language === 'en' ? 'Download Resume' : 'Download CV'}
                    </Button>
                  )}

                  {/* Contact CTA */}
                  <Button 
                    variant="gradient" 
                    className="w-full py-3" 
                    asChild
                  >
                    <a href="#contact" onClick={() => setIsOpen(false)}>
                      <Mail className="h-4 w-4 mr-2" />
                      <span>
                        {language === 'en' ? 'Get in Touch' : 'Neem Contact Op'}
                      </span>
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}