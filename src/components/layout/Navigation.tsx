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
  Mail,
  Zap
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import ThemeToggle from '@/components/ui/ThemeToggle'
import { useLanguage } from '@/hooks/useLanguage'
import { useViewMode } from '@/hooks/useViewMode'
import { shouldShowDiscountBanner, getDiscountPercentage } from '@/data/services'
import { cn } from '@/lib/utils'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const { language, setLanguage } = useLanguage()
  const { viewMode, setViewMode, isFreelanceMode, isProfessionalMode } = useViewMode()
  const showDiscountBanner = shouldShowDiscountBanner()
  const discountPercentage = getDiscountPercentage()

  // Resume download handler
  const handleResumeDownload = () => {
    const resumeFile = language === 'en' ? '/resume/resume-en.pdf' : '/resume/resume-nl.pdf'
    const fileName = language === 'en' ? 'Luca_Keizer_Resume.pdf' : 'Luca_Keizer_CV.pdf'
    
    // Create a temporary anchor element to trigger download
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
        <div className="flex items-center justify-between h-14 md:h-16">
          
          {/* Logo - Smaller on mobile */}
          <Link href="/" className="flex items-center space-x-1.5 md:space-x-2 font-bold text-lg md:text-xl">
            <Code2 className="h-6 w-6 md:h-8 md:w-8 text-primary" />
            <span className="gradient-text">Luca Keizer</span>
          </Link>

          {/* Quality Badge - Only in Freelance Mode and only if discount is active, smaller on mobile */}
          {isFreelanceMode && showDiscountBanner && (
            <div className="hidden sm:flex items-center mx-2 md:mx-4">
              <div className="flex items-center space-x-1 text-xs bg-orange-50 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 px-2 py-1 rounded-full border border-orange-200 dark:border-orange-800">
                <Zap className="h-2.5 w-2.5 md:h-3 md:w-3" />
                <span className="font-medium">
                  {discountPercentage}% {language === 'en' ? 'OFF' : 'KORTING'}
                </span>
              </div>
            </div>
          )}

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {filteredNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-muted-foreground hover:text-foreground transition-all duration-200 font-medium link-hover text-sm xl:text-base"
              >
                {item.label[language]}
              </Link>
            ))}
          </div>

          {/* Controls */}
          <div className="hidden lg:flex items-center space-x-3 xl:space-x-4">
            
            {/* View Mode Toggle - Smaller on smaller screens */}
            <div className="flex items-center bg-muted rounded-lg p-1">
              <button
                onClick={() => setViewMode('freelance')}
                className={cn(
                  "px-2.5 xl:px-3 py-1.5 text-xs xl:text-sm font-medium rounded-md transition-all",
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
                  "px-2.5 xl:px-3 py-1.5 text-xs xl:text-sm font-medium rounded-md transition-all",
                  isProfessionalMode 
                    ? "bg-background text-foreground shadow-sm" 
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {language === 'en' ? 'Professional' : 'Professioneel'}
              </button>
            </div>

            {/* Theme Toggle */}
            <ThemeToggle showText />

            {/* Language Toggle */}
            <button
              onClick={() => setLanguage(language === 'en' ? 'nl' : 'en')}
              className="flex items-center space-x-1 text-muted-foreground hover:text-foreground transition-all duration-200 icon-hover"
            >
              <Globe className="h-3.5 w-3.5 xl:h-4 xl:w-4" />
              <span className="text-xs xl:text-sm font-medium uppercase">{language}</span>
            </button>

            {/* Resume Download - Only in Professional Mode */}
            {isProfessionalMode && (
              <Button variant="outline" size="sm" onClick={handleResumeDownload} className="text-xs xl:text-sm">
                <Download className="h-3.5 w-3.5 xl:h-4 xl:w-4 mr-1.5 xl:mr-2" />
                {language === 'en' ? 'Resume' : 'CV'}
              </Button>
            )}

            {/* Contact CTA - Smaller on smaller screens */}
            <Button variant="gradient" size="sm" className="xl:!h-10 xl:!px-4" asChild>
              <a href="#contact">
                {isFreelanceMode && showDiscountBanner && (
                  <span className="mr-1.5 text-xs">
                    {discountPercentage}%
                  </span>
                )}
                <span className="text-xs xl:text-sm">
                  {language === 'en' ? 'Contact' : 'Contact'}
                </span>
              </a>
            </Button>

            {/* Reset Welcome Button - For Testing (Remove in Production) */}
            {process.env.NODE_ENV === 'development' && (
              <button
                onClick={() => {
                  localStorage.removeItem('luca-portfolio-visited')
                  window.location.reload()
                }}
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                title="Reset welcome modal (dev only)"
              >
                Reset
              </button>
            )}
          </div>

          {/* Mobile menu button - Better touch target */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2.5 md:p-2 text-muted-foreground hover:text-foreground transition-colors touch-manipulation"
          >
            {isOpen ? <X className="h-5 w-5 md:h-6 md:w-6" /> : <Menu className="h-5 w-5 md:h-6 md:w-6" />}
          </button>
        </div>

        {/* Mobile Navigation - Improved spacing and touch targets */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden border-t border-border"
            >
              <div className="py-3 md:py-4 space-y-3 md:space-y-4">
                
                {/* Discount Badge Mobile - Only in Freelance Mode when active */}
                {isFreelanceMode && showDiscountBanner && (
                  <div className="flex justify-center pb-3 md:pb-4 border-b border-border">
                    <div className="flex items-center space-x-1 text-xs bg-orange-50 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 px-3 py-2 rounded-full border border-orange-200 dark:border-orange-800">
                      <Zap className="h-3 w-3" />
                      <span className="font-medium">
                        {discountPercentage}% {language === 'en' ? 'OFF Custom Sites' : 'KORTING Custom Sites'}
                      </span>
                    </div>
                  </div>
                )}

                {/* Mode Toggle Mobile - Better touch targets */}
                <div className="flex items-center justify-center">
                  <div className="flex items-center bg-muted rounded-lg p-1">
                    <button
                      onClick={() => setViewMode('freelance')}
                      className={cn(
                        "px-4 py-2.5 text-sm font-medium rounded-md transition-all touch-manipulation",
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
                        "px-4 py-2.5 text-sm font-medium rounded-md transition-all touch-manipulation",
                        isProfessionalMode 
                          ? "bg-background text-foreground shadow-sm" 
                          : "text-muted-foreground"
                      )}
                    >
                      {language === 'en' ? 'Professional' : 'Professioneel'}
                    </button>
                  </div>
                </div>

                {/* Navigation Links - Better touch targets */}
                {filteredNavItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center space-x-3 text-muted-foreground hover:text-foreground transition-colors py-2.5 touch-manipulation"
                  >
                    <item.icon className="h-5 w-5" />
                    <span className="font-medium text-base">{item.label[language]}</span>
                  </Link>
                ))}

                {/* Controls Mobile - Better spacing and touch targets */}
                <div className="pt-3 md:pt-4 border-t border-border space-y-3">
                  
                  {/* Theme Toggle */}
                  <div className="flex justify-center">
                    <ThemeToggle showText />
                  </div>

                  {/* Language Toggle - Better touch target */}
                  <button
                    onClick={() => setLanguage(language === 'en' ? 'nl' : 'en')}
                    className="flex items-center justify-center space-x-2 w-full py-2.5 text-muted-foreground hover:text-foreground transition-colors touch-manipulation"
                  >
                    <Globe className="h-4 w-4" />
                    <span className="text-sm font-medium">
                      {language === 'en' ? 'Switch to Dutch' : 'Switch to English'}
                    </span>
                  </button>

                  {/* Resume Download - Only in Professional Mode */}
                  {isProfessionalMode && (
                    <Button variant="outline" className="w-full py-2.5 touch-manipulation" onClick={handleResumeDownload}>
                      <Download className="h-4 w-4 mr-2" />
                      {language === 'en' ? 'Download Resume' : 'Download CV'}
                    </Button>
                  )}

                  {/* Contact CTA - Better touch target */}
                  <Button variant="gradient" className="w-full py-2.5 touch-manipulation" asChild>
                    <a href="#contact" onClick={() => setIsOpen(false)}>
                      <Mail className="h-4 w-4 mr-2" />
                      {isFreelanceMode && showDiscountBanner && (
                        <span className="mr-2 text-xs">
                          {discountPercentage}% {language === 'en' ? 'OFF' : 'KORTING'}
                        </span>
                      )}
                      {language === 'en' ? 'Get in Touch' : 'Neem Contact Op'}
                    </a>
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