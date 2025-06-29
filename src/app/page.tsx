'use client'

import Navigation from '@/components/layout/Navigation'
import HeroSection from '@/components/sections/HeroSection'
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
      <section id="about" className="section-padding">
        <div className="container-padding">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">
              {language === 'en' ? 'About Me' : 'Over Mij'}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {viewMode === 'freelance' 
                ? (language === 'en' 
                    ? 'Experienced software engineer offering professional web development services to businesses in North Holland.'
                    : 'Ervaren software engineer die professionele webontwikkelingsdiensten aanbiedt aan bedrijven in Noord-Holland.'
                  )
                : (language === 'en'
                    ? 'Passionate software engineer with 2+ years of experience in full-stack development, data analysis, and modern cloud technologies.'
                    : 'Gepassioneerde software engineer met 2+ jaar ervaring in full-stack ontwikkeling, data-analyse en moderne cloud technologieën.'
                  )
              }
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-padding bg-muted/30">
        <div className="container-padding">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">
              {language === 'en' ? 'Projects' : 'Projecten'}
            </h2>
            <p className="text-muted-foreground mb-12">
              {viewMode === 'freelance'
                ? (language === 'en' 
                    ? 'Recent client work and web development projects'
                    : 'Recent klantwerk en webontwikkelingsprojecten'
                  )
                : (language === 'en'
                    ? 'Technical projects showcasing software engineering skills'
                    : 'Technische projecten die software engineering vaardigheden tonen'
                  )
              }
            </p>
            
            {/* Placeholder for projects */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-card p-6 rounded-lg border border-border card-hover">
                  <div className="h-40 bg-muted rounded-lg mb-4"></div>
                  <h3 className="text-lg font-semibold mb-2">Project {i}</h3>
                  <p className="text-muted-foreground text-sm">
                    Project description will go here...
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

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
                Content for {viewMode} mode will be implemented here...
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
  )
}