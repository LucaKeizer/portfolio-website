'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Globe, Briefcase, Code2, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/hooks/useLanguage'
import { useViewMode } from '@/hooks/useViewMode'
import type { Language, ViewMode } from '@/types'

interface WelcomeModalProps {
  onComplete: () => void
}

export default function WelcomeModal({ onComplete }: WelcomeModalProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [step, setStep] = useState<'language' | 'mode'>('language')
  const [selectedLanguage, setSelectedLanguage] = useState<Language>('en')
  const [selectedMode, setSelectedMode] = useState<ViewMode>('freelance')
  
  const { setLanguage } = useLanguage()
  const { setViewMode } = useViewMode()

  useEffect(() => {
    // Check if user has visited before
    const hasVisited = localStorage.getItem('luca-portfolio-visited')
    if (!hasVisited) {
      setIsOpen(true)
      
      // Try to detect language from browser
      const browserLang = navigator.language.toLowerCase()
      if (browserLang.startsWith('nl')) {
        setSelectedLanguage('nl')
      }
    }
  }, [])

  const handleLanguageSelect = (lang: Language) => {
    setSelectedLanguage(lang)
    setStep('mode')
  }

  const handleComplete = () => {
    // Apply selections
    setLanguage(selectedLanguage)
    setViewMode(selectedMode)
    
    // Mark as visited
    localStorage.setItem('luca-portfolio-visited', 'true')
    localStorage.setItem('preferred-language', selectedLanguage)
    localStorage.setItem('preferred-view-mode', selectedMode)
    
    setIsOpen(false)
    onComplete()
  }

  const handleSkip = () => {
    // Use defaults but still mark as visited
    localStorage.setItem('luca-portfolio-visited', 'true')
    setIsOpen(false)
    onComplete()
  }

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="bg-background rounded-2xl p-8 max-w-md w-full shadow-2xl border border-border relative"
        >
          
          {/* Skip Button */}
          <button
            onClick={handleSkip}
            className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Welcome Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-brand-500 to-brand-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold mb-2">
              {step === 'language' ? 'Welcome! / Welkom!' : 
               selectedLanguage === 'en' ? 'Choose Your Experience' : 'Kies Je Ervaring'
              }
            </h2>
            <p className="text-muted-foreground">
              {step === 'language' 
                ? 'Please select your preferred language / Selecteer je voorkeurstaal'
                : selectedLanguage === 'en' 
                  ? 'What brings you here today?'
                  : 'Wat brengt je hier vandaag?'
              }
            </p>
          </div>

          {/* Language Selection */}
          {step === 'language' && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-3"
            >
              <button
                onClick={() => handleLanguageSelect('en')}
                className={`w-full p-4 rounded-xl border-2 transition-all duration-200 text-left hover:border-brand-500 hover:bg-brand-50 dark:hover:bg-brand-950 ${
                  selectedLanguage === 'en' ? 'border-brand-500 bg-brand-50 dark:bg-brand-950' : 'border-border'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🇬🇧</span>
                  <div>
                    <div className="font-semibold">English</div>
                    <div className="text-sm text-muted-foreground">Continue in English</div>
                  </div>
                </div>
              </button>

              <button
                onClick={() => handleLanguageSelect('nl')}
                className={`w-full p-4 rounded-xl border-2 transition-all duration-200 text-left hover:border-brand-500 hover:bg-brand-50 dark:hover:bg-brand-950 ${
                  selectedLanguage === 'nl' ? 'border-brand-500 bg-brand-50 dark:bg-brand-950' : 'border-border'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🇳🇱</span>
                  <div>
                    <div className="font-semibold">Nederlands</div>
                    <div className="text-sm text-muted-foreground">Doorgaan in het Nederlands</div>
                  </div>
                </div>
              </button>
            </motion.div>
          )}

          {/* Mode Selection */}
          {step === 'mode' && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-4"
            >
              <button
                onClick={() => setSelectedMode('freelance')}
                className={`w-full p-4 rounded-xl border-2 transition-all duration-200 text-left hover:border-brand-500 hover:bg-brand-50 dark:hover:bg-brand-950 ${
                  selectedMode === 'freelance' ? 'border-brand-500 bg-brand-50 dark:bg-brand-950' : 'border-border'
                }`}
              >
                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-green-100 dark:bg-green-900 rounded-lg">
                    <Briefcase className="h-5 w-5 text-green-600 dark:text-green-400" />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold">
                      {selectedLanguage === 'en' ? 'Hire Me for Your Project' : 'Huur Mij In Voor Je Project'}
                    </div>
                    <div className="text-sm text-muted-foreground mt-1">
                      {selectedLanguage === 'en' 
                        ? 'Looking for web development services, see my client work and business impact'
                        : 'Op zoek naar webontwikkelingsdiensten, bekijk mijn klantwerk en bedrijfsimpact'
                      }
                    </div>
                  </div>
                </div>
              </button>

              <button
                onClick={() => setSelectedMode('professional')}
                className={`w-full p-4 rounded-xl border-2 transition-all duration-200 text-left hover:border-brand-500 hover:bg-brand-50 dark:hover:bg-brand-950 ${
                  selectedMode === 'professional' ? 'border-brand-500 bg-brand-50 dark:bg-brand-950' : 'border-border'
                }`}
              >
                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                    <Code2 className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold">
                      {selectedLanguage === 'en' ? 'Recruit Me for Your Team' : 'Recruiter Mij Voor Je Team'}
                    </div>
                    <div className="text-sm text-muted-foreground mt-1">
                      {selectedLanguage === 'en' 
                        ? 'Hiring manager or recruiter? See my technical skills, experience and projects'
                        : 'Hiring manager of recruiter? Bekijk mijn technische vaardigheden, ervaring en projecten'
                      }
                    </div>
                  </div>
                </div>
              </button>

              {/* Action Buttons */}
              <div className="flex space-x-3 pt-4">
                <Button 
                  variant="outline" 
                  onClick={() => setStep('language')}
                  className="flex-1"
                >
                  {selectedLanguage === 'en' ? 'Back' : 'Terug'}
                </Button>
                <Button 
                  variant="gradient" 
                  onClick={handleComplete}
                  className="flex-1"
                >
                  {selectedLanguage === 'en' ? 'Continue' : 'Doorgaan'}
                </Button>
              </div>
            </motion.div>
          )}

          {/* Footer */}
          <div className="text-center mt-6 pt-4 border-t border-border">
            <p className="text-xs text-muted-foreground">
              {selectedLanguage === 'en' 
                ? 'You can change these settings anytime using the controls at the top'
                : 'Je kunt deze instellingen altijd wijzigen met de knoppen bovenaan'
              }
            </p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}