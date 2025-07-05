'use client'

import Navigation from '@/components/layout/Navigation'
import HeroSection from '@/components/sections/HeroSection'
import AboutSection from '@/components/sections/AboutSection'
import ProjectsSection from '@/components/sections/ProjectsSection'
import ExperienceSection from '@/components/sections/ExperienceSection'
import ContactSection from '@/components/sections/ContactSection'
import { useViewMode } from '@/hooks/useViewMode'
import { useLanguage } from '@/hooks/useLanguage'

export default function HomePage() {
  const { viewMode } = useViewMode()
  const { language } = useLanguage()

  return (
    <main className={`min-h-screen ${viewMode}-mode mode-transition`}>
      <Navigation />
      
      {/* Hero Section */}
      <HeroSection language={language} viewMode={viewMode} />
      
      {/* About Section */}
      <AboutSection language={language} viewMode={viewMode} />
      
      {/* Projects Section */}
      <ProjectsSection language={language} viewMode={viewMode} />

      {/* Experience Section - Professional Mode Only */}
      {viewMode === 'professional' && (
        <ExperienceSection language={language} viewMode={viewMode} />
      )}

      {/* Contact Section */}
      <ContactSection language={language} viewMode={viewMode} />
    </main>
  )
}