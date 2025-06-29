'use client'

import Navigation from '@/components/layout/Navigation'
import HeroSection from '@/components/sections/HeroSection'
import AboutSection from '@/components/sections/AboutSection'
import ProjectsSection from '@/components/sections/ProjectsSection'
import ExperienceSection from '@/components/sections/ExperienceSection'
import ServicesSection from '@/components/sections/ServicesSection'
import ContactSection from '@/components/sections/ContactSection'
import WelcomeModal from '@/components/ui/WelcomeModal'
import { useViewMode } from '@/hooks/useViewMode'
import { useLanguage } from '@/hooks/useLanguage'
import { useWelcome } from '@/hooks/useWelcome'

export default function HomePage() {
  const { viewMode } = useViewMode()
  const { language } = useLanguage()
  const { showWelcome, isReady, handleWelcomeComplete } = useWelcome()

  // Don't render content until welcome modal is handled or user has visited before
  if (!isReady && !showWelcome) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent"></div>
      </div>
    )
  }

  return (
    <>
      {/* Welcome Modal for First-Time Visitors */}
      {showWelcome && (
        <WelcomeModal onComplete={handleWelcomeComplete} />
      )}

      {/* Main Content */}
      <main className={`min-h-screen ${viewMode}-mode mode-transition`}>
        <Navigation />
        
        {/* Hero Section */}
        <HeroSection language={language} viewMode={viewMode} />
        
        {/* About Section */}
        <AboutSection language={language} viewMode={viewMode} />
        
        {/* Projects Section */}
        <ProjectsSection language={language} viewMode={viewMode} />

        {/* Experience Section - Professional Mode Only */}
        <ExperienceSection language={language} viewMode={viewMode} />

        {/* Services Section - Freelance Mode Only */}
        <ServicesSection language={language} viewMode={viewMode} />

        {/* Contact Section */}
        <ContactSection language={language} viewMode={viewMode} />
      </main>
    </>
  )
}