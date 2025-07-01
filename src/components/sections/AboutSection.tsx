'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { 
  MapPin, 
  Calendar, 
  Building, 
  Clock, 
  Languages,
  Briefcase,
  GraduationCap,
  CheckCircle,
  Star,
  Code2,
  Database,
  Cloud,
  Globe,
  Shield,
  Zap,
  Award
} from 'lucide-react'
import type { SectionProps } from '@/types'
import { personalInfo } from '@/data/personal'
import { freelanceAbout, professionalAbout } from '@/data/about'
import { calculateYearsOfExperience } from '@/lib/utils'
import type { LocalizedContent } from '@/types'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
}

// Smooth transition variants for mode switching
const modeContentVariants = {
  hidden: { 
    opacity: 0, 
    y: 20,
    transition: { duration: 0.3 }
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
}

const iconMap: Record<string, React.ReactNode> = {
  MapPin: <MapPin className="h-4 w-4" />,
  Calendar: <Calendar className="h-4 w-4" />,
  Building: <Building className="h-4 w-4" />,
  Clock: <Clock className="h-4 w-4" />,
  Languages: <Languages className="h-4 w-4" />,
  Briefcase: <Briefcase className="h-4 w-4" />,
  GraduationCap: <GraduationCap className="h-4 w-4" />
}

function FreelanceAboutSection({ language }: { language: 'en' | 'nl' }) {
  return (
    <motion.div
      variants={modeContentVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start"
    >
      
      {/* Bio & Business Info */}
      <div className="space-y-4 md:space-y-6">
        
        {/* Main Bio */}
        <div className="bg-card p-4 md:p-6 rounded-xl border border-border">
          <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">
            {freelanceAbout.title[language]}
          </h3>
          {/* Mobile: Shorter bio */}
          <div className="block md:hidden">
            <p className="text-muted-foreground leading-relaxed text-sm">
              {language === 'en'
                ? 'I help North Holland businesses build professional custom-coded websites. With professional software engineering experience, I bring enterprise-level quality to small business solutions.'
                : 'Ik help Noord-Holland bedrijven professionele custom-gecodeerde websites bouwen. Met professionele software engineering ervaring breng ik enterprise-level kwaliteit naar kleine bedrijfsoplossingen.'
              }
            </p>
          </div>
          {/* Desktop: Full bio */}
          <div className="hidden md:block">
            <p className="text-muted-foreground leading-relaxed mb-4">
              {freelanceAbout.bio[language]}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {freelanceAbout.secondParagraph[language]}
            </p>
          </div>
        </div>

        {/* Development Quality - More compact on mobile */}
        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 p-4 md:p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800">
          <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-blue-800 dark:text-blue-200">
            {language === 'en' ? 'Professional Development Quality' : 'Professionele Ontwikkelingskwaliteit'}
          </h3>
          <div className="space-y-3 md:space-y-4">
            <div className="flex items-start space-x-2 md:space-x-3">
              <Code2 className="h-4 w-4 md:h-5 md:w-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <div>
                <div className="font-medium text-blue-800 dark:text-blue-200 text-sm md:text-base">
                  {language === 'en' ? 'Hand-Coded from Scratch' : 'Handgecodeerd vanaf Nul'}
                </div>
                <div className="text-xs md:text-sm text-blue-700 dark:text-blue-300">
                  {language === 'en' 
                    ? 'Every line of code written for your business needs'
                    : 'Elke regel code geschreven voor jouw bedrijfsbehoeften'
                  }
                </div>
              </div>
            </div>
            <div className="flex items-start space-x-2 md:space-x-3">
              <Zap className="h-4 w-4 md:h-5 md:w-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <div>
                <div className="font-medium text-blue-800 dark:text-blue-200 text-sm md:text-base">
                  {language === 'en' ? 'Lightning Fast Performance' : 'Bliksem Snelle Prestaties'}
                </div>
                <div className="text-xs md:text-sm text-blue-700 dark:text-blue-300">
                  {language === 'en' 
                    ? 'Clean, optimized code means faster loading times'
                    : 'Schone, geoptimaliseerde code betekent snellere laadtijden'
                  }
                </div>
              </div>
            </div>
            <div className="flex items-start space-x-2 md:space-x-3">
              <Shield className="h-4 w-4 md:h-5 md:w-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <div>
                <div className="font-medium text-blue-800 dark:text-blue-200 text-sm md:text-base">
                  {language === 'en' ? 'Maximum Security' : 'Maximale Veiligheid'}
                </div>
                <div className="text-xs md:text-sm text-blue-700 dark:text-blue-300">
                  {language === 'en' 
                    ? 'No WordPress vulnerabilities - custom code is much more secure'
                    : 'Geen WordPress kwetsbaarheden - custom code is veel veiliger'
                  }
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Business Facts - More compact on mobile */}
        <div className="bg-card p-4 md:p-6 rounded-xl border border-border">
          <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">
            {language === 'en' ? 'Quick Facts' : 'Korte Feiten'}
          </h3>
          <div className="space-y-2 md:space-y-3">
            {freelanceAbout.businessFacts.map((fact, index) => (
              <div key={index} className="flex items-center space-x-2 md:space-x-3 text-muted-foreground">
                {iconMap[fact.icon]}
                <span className="font-medium text-xs md:text-sm">{fact.label[language]}:</span>
                <span className="text-xs md:text-sm">{fact.value[language]}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Availability */}
        <div className="bg-green-50 dark:bg-green-900/20 p-4 md:p-6 rounded-xl border border-green-200 dark:border-green-800">
          <div className="flex items-center space-x-2 md:space-x-3 text-green-600 dark:text-green-400">
            <div className="h-2 w-2 bg-green-500 rounded-full"></div>
            <span className="font-medium text-sm md:text-base">
              {personalInfo.availability.freelance[language]}
            </span>
          </div>
          <p className="text-green-700 dark:text-green-300 text-xs md:text-sm mt-1 md:mt-2">
            {language === 'en' 
              ? 'Ready to start new custom projects in North Holland'
              : 'Klaar om nieuwe custom projecten te starten in Noord-Holland'
            }
          </p>
        </div>
      </div>

      {/* Business Skills - Condensed on mobile */}
      <div className="space-y-4 md:space-y-6">
        {freelanceAbout.businessSkills.map((category, categoryIndex) => (
          <div key={categoryIndex} className="bg-card p-4 md:p-6 rounded-xl border border-border">
            <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4 flex items-center space-x-2">
              <div className="p-1.5 md:p-2 bg-primary/10 rounded-lg">
                <Code2 className="h-4 w-4 md:h-5 md:w-5 text-primary" />
              </div>
              <span>{category.category[language]}</span>
            </h3>
            
            <div className="space-y-2 md:space-y-3">
              {category.skills.slice(0, categoryIndex === 0 ? 3 : 4).map((skill, skillIndex) => (
                <div key={skillIndex} className="space-y-1 md:space-y-2">
                  <div className="flex items-start space-x-2 md:space-x-3">
                    <CheckCircle className="h-3 w-3 md:h-4 md:w-4 text-green-500 mt-0.5 md:mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-sm md:text-base">{skill.name[language]}</div>
                      <div className="text-xs md:text-sm text-muted-foreground">{skill.description[language]}</div>
                    </div>
                  </div>
                </div>
              ))}
              {/* Show remaining skills count on mobile */}
              {categoryIndex === 0 && category.skills.length > 3 && (
                <div className="text-xs text-muted-foreground md:hidden">
                  +{category.skills.length - 3} {language === 'en' ? 'more services' : 'meer diensten'}
                </div>
              )}
            </div>
          </div>
        ))}

        {/* Why Choose Me - Condensed on mobile */}
        <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-4 md:p-6 rounded-xl border border-primary/20">
          <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4 text-primary">
            {language === 'en' ? 'Why Choose Me?' : 'Waarom Mij Kiezen?'}
          </h3>
          <div className="space-y-2 md:space-y-4">
            {freelanceAbout.whyChooseMe.slice(0, 3).map((reason, index) => (
              <div key={index} className="flex items-start space-x-2 md:space-x-3">
                <Star className="h-3 w-3 md:h-4 md:w-4 text-primary mt-0.5 md:mt-1 flex-shrink-0" />
                <div>
                  <div className="font-medium text-primary text-sm md:text-base">{reason.title[language]}</div>
                  <div className="text-xs md:text-sm text-muted-foreground">{reason.description[language]}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function ProfessionalAboutSection({ language }: { language: 'en' | 'nl' }) {
  const getSkillColor = (level: string) => {
    switch (level) {
      case 'expert': return 'bg-green-500'
      case 'advanced': return 'bg-blue-500'
      case 'intermediate': return 'bg-yellow-500'
      default: return 'bg-gray-500'
    }
  }

  const getSkillWidth = (level: string) => {
    switch (level) {
      case 'expert': return '100%'
      case 'advanced': return '85%'
      case 'intermediate': return '70%'
      default: return '50%'
    }
  }

  // Helper function to get localized text
  const getText = (content: LocalizedContent): string => {
    return content[language]
  }

  // Helper function to get localized skill description
  const getSkillDescription = (description: LocalizedContent | string): string => {
    if (typeof description === 'string') return description
    return description[language]
  }

  return (
    <motion.div
      variants={modeContentVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start"
    >
      
      {/* Bio & Professional Info */}
      <div className="space-y-4 md:space-y-6">
        
        {/* Main Bio */}
        <div className="bg-card p-4 md:p-6 rounded-xl border border-border">
          <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">
            {professionalAbout.title[language]}
          </h3>
          {/* Mobile: Shorter bio */}
          <div className="block md:hidden">
            <p className="text-muted-foreground leading-relaxed text-sm">
              {language === 'en'
                ? 'Software engineer with 2+ years of professional experience in full-stack development, data analysis, and cloud technologies. I specialize in building scalable solutions using Python, TypeScript, and Azure.'
                : 'Software engineer met 2+ jaar professionele ervaring in full-stack ontwikkeling, data-analyse en cloud technologieën. Ik specialiseer me in het bouwen van schaalbare oplossingen met Python, TypeScript en Azure.'
              }
            </p>
          </div>
          {/* Desktop: Full bio */}
          <div className="hidden md:block">
            <p className="text-muted-foreground leading-relaxed mb-4">
              {professionalAbout.bio[language]}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {professionalAbout.secondParagraph[language]}
            </p>
          </div>
        </div>

        {/* Professional Facts */}
        <div className="bg-card p-4 md:p-6 rounded-xl border border-border">
          <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">
            {language === 'en' ? 'Professional Details' : 'Professionele Details'}
          </h3>
          <div className="space-y-2 md:space-y-3">
            {professionalAbout.professionalFacts.map((fact, index) => (
              <div key={index} className="flex items-center space-x-2 md:space-x-3 text-muted-foreground">
                {iconMap[fact.icon]}
                <span className="font-medium text-xs md:text-sm">{fact.label[language]}:</span>
                <span className="text-xs md:text-sm">{fact.value[language]}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Career Highlights - Condensed on mobile */}
        <div className="bg-card p-4 md:p-6 rounded-xl border border-border">
          <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">
            {language === 'en' ? 'Career Highlights' : 'Carrière Hoogtepunten'}
          </h3>
          <div className="space-y-2 md:space-y-4">
            {professionalAbout.careerHighlights.slice(0, 3).map((highlight, index) => (
              <div key={index} className="flex items-start space-x-2 md:space-x-3">
                <div className="p-1 bg-primary/20 rounded-full mt-1">
                  <div className="h-1.5 w-1.5 md:h-2 md:w-2 bg-primary rounded-full"></div>
                </div>
                <div>
                  <div className="font-medium text-sm md:text-base">{highlight.title[language]}</div>
                  <div className="text-xs md:text-sm text-muted-foreground">{highlight.description[language]}</div>
                </div>
              </div>
            ))}
            {/* Show remaining count on mobile */}
            <div className="text-xs text-muted-foreground md:hidden">
              +{professionalAbout.careerHighlights.length - 3} {language === 'en' ? 'more achievements' : 'meer prestaties'}
            </div>
          </div>
        </div>
      </div>

      {/* Technical Skills - Condensed on mobile */}
      <div className="space-y-4 md:space-y-6">
        <h3 className="text-lg md:text-xl font-semibold">
          {language === 'en' ? 'Technical Expertise' : 'Technische Expertise'}
        </h3>
        
        {professionalAbout.technicalSkills.map((category, categoryIndex) => (
          <div key={categoryIndex} className="bg-card p-4 md:p-6 rounded-xl border border-border">
            <div className="flex items-center space-x-2 md:space-x-3 mb-3 md:mb-4">
              <div className={`p-1.5 md:p-2 rounded-lg ${
                categoryIndex === 0 ? 'bg-green-100 text-green-600' :
                categoryIndex === 1 ? 'bg-blue-100 text-blue-600' :
                'bg-purple-100 text-purple-600'
              }`}>
                {categoryIndex === 0 ? <Database className="h-4 w-4 md:h-5 md:w-5" /> :
                 categoryIndex === 1 ? <Globe className="h-4 w-4 md:h-5 md:w-5" /> :
                 <Cloud className="h-4 w-4 md:h-5 md:w-5" />}
              </div>
              <h4 className="text-base md:text-lg font-semibold">{getText(category.category)}</h4>
            </div>
            
            <div className="space-y-3 md:space-y-4">
              {category.skills.slice(0, 3).map((skill, skillIndex) => (
                <div key={skillIndex} className="space-y-1 md:space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-sm md:text-base">{skill.name}</span>
                    <div className="flex items-center space-x-1 md:space-x-2">
                      <span className="text-xs text-muted-foreground capitalize">
                        {language === 'en' ? skill.level : 
                         skill.level === 'expert' ? 'expert' :
                         skill.level === 'advanced' ? 'gevorderd' :
                         skill.level === 'intermediate' ? 'tussenliggende' : skill.level
                        }
                      </span>
                      <span className="text-xs text-muted-foreground">{skill.years}{language === 'en' ? 'y' : 'j'}</span>
                    </div>
                  </div>
                  <div className="w-full bg-muted rounded-full h-1.5 md:h-2">
                    <div 
                      className={`h-1.5 md:h-2 rounded-full transition-all duration-1000 ease-out ${getSkillColor(skill.level)}`}
                      style={{ width: getSkillWidth(skill.level) }}
                    />
                  </div>
                  <p className="text-xs text-muted-foreground hidden md:block">{getSkillDescription(skill.description)}</p>
                </div>
              ))}
              {/* Show remaining skills count on mobile */}
              {category.skills.length > 3 && (
                <div className="text-xs text-muted-foreground md:hidden">
                  +{category.skills.length - 3} {language === 'en' ? 'more skills' : 'meer vaardigheden'}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default function AboutSection({ language, viewMode }: SectionProps) {
  const isFreelance = viewMode === 'freelance'
  
  // Don't show loading state for mode switching
  if (!viewMode || !language) {
    return null
  }

  return (
    <section id="about" className="section-padding py-12 md:py-16 lg:py-20">
      <div className="container-padding">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          
          {/* Section Header - More compact on mobile */}
          <motion.div variants={itemVariants} className="text-center mb-8 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">
              {language === 'en' ? 'About Me' : 'Over Mij'}
            </h2>
            <motion.p 
              key={`header-${viewMode}`}
              variants={modeContentVariants}
              initial="hidden"
              animate="visible"
              className="text-base md:text-xl text-muted-foreground max-w-3xl mx-auto"
            >
              {isFreelance 
                ? (language === 'en' 
                    ? 'Your trusted partner for custom-coded digital solutions'
                    : 'Jouw vertrouwde partner voor custom-gecodeerde digitale oplossingen'
                  )
                : (language === 'en'
                    ? 'Building innovative software solutions with modern technologies'
                    : 'Bouw innovatieve software oplossingen met moderne technologieën'
                  )
              }
            </motion.p>
          </motion.div>

          {/* Mode-specific content with smooth transitions */}
          <AnimatePresence mode="wait">
            {isFreelance ? (
              <FreelanceAboutSection key="freelance" language={language} />
            ) : (
              <ProfessionalAboutSection key="professional" language={language} />
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}