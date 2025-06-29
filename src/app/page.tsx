'use client'

import Navigation from '@/components/layout/Navigation'
import HeroSection from '@/components/sections/HeroSection'
import AboutSection from '@/components/sections/AboutSection'
import ProjectsSection from '@/components/sections/ProjectsSection'
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

        {/* Experience/Services Section */}
        <section id={viewMode === 'professional' ? 'experience' : 'services'} className="section-padding">
          <div className="container-padding">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">
                {viewMode === 'professional'
                  ? (language === 'en' ? 'Experience' : 'Ervaring')
                  : (language === 'en' ? 'Services' : 'Diensten')
                }
              </h2>
              <p className="text-muted-foreground mb-12">
                {viewMode === 'professional'
                  ? (language === 'en' 
                      ? 'Professional experience and career progression'
                      : 'Professionele ervaring en carrièreontwikkeling'
                    )
                  : (language === 'en'
                      ? 'Web development services for businesses'
                      : 'Webontwikkelingsdiensten voor bedrijven'
                    )
                }
              </p>
              
              {/* Placeholder content */}
              <div className="max-w-4xl mx-auto">
                <p className="text-muted-foreground">
                  {viewMode === 'professional' 
                    ? (language === 'en' 
                        ? 'Detailed experience section coming soon...'
                        : 'Gedetailleerde ervaring sectie komt binnenkort...'
                      )
                    : (language === 'en'
                        ? 'Services section coming soon...'
                        : 'Diensten sectie komt binnenkort...'
                      )
                  }
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section-padding bg-muted/30">
          <div className="container-padding">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">
                {language === 'en' ? 'Get in Touch' : 'Neem Contact Op'}
              </h2>
              <p className="text-muted-foreground mb-8">
                {viewMode === 'freelance'
                  ? (language === 'en'
                      ? 'Ready to start your next web project?'
                      : 'Klaar om je volgende webproject te starten?'
                    )
                  : (language === 'en'
                      ? 'Let\'s discuss opportunities and collaboration'
                      : 'Laten we kansen en samenwerking bespreken'
                    )
                }
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:keizerluca@gmail.com"
                  className="btn-primary inline-flex items-center justify-center"
                >
                  {language === 'en' ? 'Send Email' : 'Stuur Email'}
                </a>
                <a 
                  href="tel:+31619948201"
                  className="btn-secondary inline-flex items-center justify-center"
                >
                  {language === 'en' ? 'Call Me' : 'Bel Me'}
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}