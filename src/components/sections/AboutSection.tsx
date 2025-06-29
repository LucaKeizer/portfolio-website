'use client'

import { motion } from 'framer-motion'
import { Code2, Database, Cloud, Globe, Calendar, MapPin, Languages } from 'lucide-react'
import type { SectionProps } from '@/types'
import { personalInfo } from '@/data/personal'
import { skills } from '@/data/experience'
import { calculateYearsOfExperience } from '@/lib/utils'

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

export default function AboutSection({ language, viewMode }: SectionProps) {
  const isFreelance = viewMode === 'freelance'
  const yearsOfExperience = calculateYearsOfExperience(personalInfo.careerStart)
  const age = calculateYearsOfExperience(personalInfo.birthDate)

  const skillCategories = [
    {
      title: 'Frontend',
      icon: <Code2 className="h-5 w-5" />,
      skills: skills.frontend,
      color: 'bg-blue-500'
    },
    {
      title: 'Backend',
      icon: <Database className="h-5 w-5" />,
      skills: skills.backend,
      color: 'bg-green-500'
    },
    {
      title: 'Cloud & DevOps',
      icon: <Cloud className="h-5 w-5" />,
      skills: [...skills.cloud, ...skills.tools].slice(0, 6),
      color: 'bg-purple-500'
    }
  ]

  return (
    <section id="about" className="section-padding">
      <div className="container-padding">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {language === 'en' ? 'About Me' : 'Over Mij'}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {isFreelance 
                ? (language === 'en' 
                    ? 'Passionate about creating digital solutions that make a real difference for businesses'
                    : 'Gepassioneerd over het creëren van digitale oplossingen die echt verschil maken voor bedrijven'
                  )
                : (language === 'en'
                    ? 'Building innovative software solutions with modern technologies and best practices'
                    : 'Bouw innovatieve software oplossingen met moderne technologieën en best practices'
                  )
              }
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            {/* Bio & Personal Info */}
            <motion.div variants={itemVariants} className="space-y-8">
              
              {/* Main Bio */}
              <div className="bg-card p-6 rounded-xl border border-border">
                <h3 className="text-xl font-semibold mb-4">
                  {isFreelance 
                    ? (language === 'en' ? 'Your Web Development Partner' : 'Jouw Webontwikkelingspartner')
                    : (language === 'en' ? 'Professional Background' : 'Professionele Achtergrond')
                  }
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {personalInfo.bio[viewMode][language]}
                </p>
                
                {isFreelance && (
                  <p className="text-muted-foreground leading-relaxed">
                    {language === 'en' 
                      ? 'I work with small to medium businesses in North Holland, helping them establish a strong online presence and streamline their operations through custom web solutions.'
                      : 'Ik werk samen met kleine tot middelgrote bedrijven in Noord-Holland en help hen een sterke online aanwezigheid op te bouwen en hun bedrijfsvoering te stroomlijnen met aangepaste weboplossingen.'
                    }
                  </p>
                )}
              </div>

              {/* Personal Details */}
              <div className="bg-card p-6 rounded-xl border border-border">
                <h3 className="text-xl font-semibold mb-4">
                  {language === 'en' ? 'Quick Facts' : 'Korte Feiten'}
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-muted-foreground">
                    <MapPin className="h-4 w-4 flex-shrink-0" />
                    <span>{personalInfo.location[language]}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-muted-foreground">
                    <Calendar className="h-4 w-4 flex-shrink-0" />
                    <span>
                      {age} {language === 'en' ? 'years old' : 'jaar oud'} • {yearsOfExperience}+ {language === 'en' ? 'years experience' : 'jaar ervaring'}
                    </span>
                  </div>
                  <div className="flex items-center space-x-3 text-muted-foreground">
                    <Globe className="h-4 w-4 flex-shrink-0" />
                    <span>
                      {language === 'en' ? 'International experience (Japan)' : 'Internationale ervaring (Japan)'}
                    </span>
                  </div>
                  {isFreelance && (
                    <div className="flex items-center space-x-3 text-green-600">
                      <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                      <span className="font-medium">
                        {personalInfo.availability.freelance[language]}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Languages */}
              <div className="bg-card p-6 rounded-xl border border-border">
                <h3 className="text-xl font-semibold mb-4 flex items-center space-x-2">
                  <Languages className="h-5 w-5" />
                  <span>{language === 'en' ? 'Languages' : 'Talen'}</span>
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {personalInfo.languages.map((lang, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="font-medium">{lang.language}</span>
                      <span className="text-sm text-muted-foreground">{lang.level[language]}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Skills */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-xl font-semibold">
                {language === 'en' ? 'Technical Skills' : 'Technische Vaardigheden'}
              </h3>
              
              {skillCategories.map((category, categoryIndex) => (
                <div key={categoryIndex} className="bg-card p-6 rounded-xl border border-border">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`p-2 rounded-lg ${category.color} text-white`}>
                      {category.icon}
                    </div>
                    <h4 className="text-lg font-semibold">{category.title}</h4>
                  </div>
                  
                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-sm text-muted-foreground">
                            {skill.years ? `${skill.years}y` : ''}
                          </span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div 
                            className="bg-primary h-2 rounded-full transition-all duration-1000 ease-out"
                            style={{ 
                              width: skill.level === 'expert' ? '100%' 
                                   : skill.level === 'advanced' ? '85%'
                                   : skill.level === 'intermediate' ? '70%'
                                   : '50%'
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              {/* Additional Info for Freelance Mode */}
              {isFreelance && (
                <div className="bg-gradient-to-br from-brand-50 to-brand-100 dark:from-brand-900/20 dark:to-brand-800/20 p-6 rounded-xl border border-brand-200 dark:border-brand-800">
                  <h4 className="text-lg font-semibold mb-3 text-brand-900 dark:text-brand-100">
                    {language === 'en' ? 'Why Choose Me?' : 'Waarom Mij Kiezen?'}
                  </h4>
                  <ul className="space-y-2 text-brand-800 dark:text-brand-200">
                    <li className="flex items-start space-x-2">
                      <div className="h-2 w-2 bg-brand-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>
                        {language === 'en' 
                          ? 'Professional software engineering background' 
                          : 'Professionele software engineering achtergrond'
                        }
                      </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="h-2 w-2 bg-brand-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>
                        {language === 'en' 
                          ? 'Local to North Holland, reliable communication' 
                          : 'Lokaal in Noord-Holland, betrouwbare communicatie'
                        }
                      </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="h-2 w-2 bg-brand-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>
                        {language === 'en' 
                          ? 'Modern technologies and best practices' 
                          : 'Moderne technologieën en best practices'
                        }
                      </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="h-2 w-2 bg-brand-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>
                        {language === 'en' 
                          ? 'Ongoing support and maintenance available' 
                          : 'Doorlopende ondersteuning en onderhoud beschikbaar'
                        }
                      </span>
                    </li>
                  </ul>
                </div>
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}