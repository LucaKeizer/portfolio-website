'use client'

import { motion } from 'framer-motion'
import { 
  Code2, 
  Database, 
  Cloud, 
  Globe,
  MapPin,
  Calendar,
  Languages,
  Target,
  Monitor,
  Smartphone,
  Zap,
  Award,
  Plane,
  User
} from 'lucide-react'
import type { SectionProps } from '@/types'
import { calculateYearsOfExperience } from '@/lib/utils'

const startDate = new Date('2022-04-01')
const yearsOfExperience = calculateYearsOfExperience(startDate)

export default function AboutSection({ language, viewMode }: SectionProps) {
  const isFreelance = viewMode === 'freelance'

  // Simplified skills for interactive cards
  const freelanceSkills = [
    { name: 'React/Next.js', level: 90, icon: Globe, color: 'from-cyan-400 to-cyan-600', description: language === 'en' ? 'Modern websites' : 'Moderne websites' },
    { name: 'TypeScript', level: 85, icon: Code2, color: 'from-blue-400 to-blue-600', description: language === 'en' ? 'Professional code' : 'Professionele code' },
    { name: 'Responsive Design', level: 95, icon: Smartphone, color: 'from-green-400 to-green-600', description: language === 'en' ? 'Mobile-friendly' : 'Mobiel-vriendelijk' }
  ]

  const professionalSkills = [
    { name: 'Python', level: 95, icon: Code2, color: 'from-yellow-400 to-yellow-600', description: language === 'en' ? 'Primary language' : 'Hoofdtaal' },
    { name: 'TypeScript/React', level: 85, icon: Globe, color: 'from-blue-400 to-blue-600', description: language === 'en' ? 'Frontend development' : 'Frontend ontwikkeling' },
    { name: 'Azure/Docker', level: 80, icon: Cloud, color: 'from-purple-400 to-purple-600', description: language === 'en' ? 'Cloud infrastructure' : 'Cloud infrastructuur' }
  ]

  const skills = isFreelance ? freelanceSkills : professionalSkills

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      
      {/* Background - Similar to hero */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        <div className="absolute inset-0 opacity-20 dark:opacity-10">
          <div className="h-full w-full" style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }} />
        </div>
        
        {/* Floating elements */}
        <motion.div 
          className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-pink-500/20 rounded-full blur-xl"
          animate={{
            x: [0, -30, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container-padding relative z-10">
        
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          
          {/* Left Column - Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            
            {/* Section Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 shadow-lg"
            >
              <User className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                {language === 'en' ? 'About Me' : 'Over Mij'}
              </span>
            </motion.div>

            {/* Main Heading */}
            <div className="space-y-4">
              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold"
              >
                <span className="text-slate-900 dark:text-white">
                  {language === 'en' ? 'Who I' : 'Wie Ik'}
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  {language === 'en' ? 'Am' : 'Ben'}
                </span>
              </motion.h2>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex items-center space-x-3"
              >
                <span className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 font-medium">
                  {isFreelance ? (
                    language === 'en' 
                      ? 'Website Developer'
                      : 'Website Ontwikkelaar'
                  ) : (
                    'Software Engineer'
                  )}
                </span>
              </motion.div>
            </div>

            {/* Quick facts inline */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-6 text-sm text-slate-600 dark:text-slate-400"
            >
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-blue-600" />
                <span>Volendam</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4 text-green-600" />
                <span>{yearsOfExperience}+ {language === 'en' ? 'years' : 'jaar'}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Languages className="h-4 w-4 text-purple-600" />
                <span>NL, EN, DE, JP</span>
              </div>
            </motion.div>

            {/* Description */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl"
            >
              {isFreelance ? (
                language === 'en' ? (
                  <>
                    Building <span className="font-semibold text-slate-900 dark:text-white">modern websites</span> for 
                    Noord-Holland businesses. Every site is <span className="font-semibold text-slate-900 dark:text-white">custom-coded</span> with 
                    professional software engineering standards.
                  </>
                ) : (
                  <>
                    Bouw <span className="font-semibold text-slate-900 dark:text-white">moderne websites</span> voor 
                    Noord-Holland bedrijven. Elke site is <span className="font-semibold text-slate-900 dark:text-white">custom-gecodeerd</span> met 
                    professionele software engineering standaarden.
                  </>
                )
              ) : (
                language === 'en' ? (
                  <>
                    Currently <span className="font-semibold text-slate-900 dark:text-white">Data Solutions Engineer</span> at 
                    Sonic Equipment B.V. I build Python applications and love solving complex technical challenges. 
                    <span className="font-semibold text-slate-900 dark:text-white"> International experience</span> from studying in Japan.
                  </>
                ) : (
                  <>
                    Momenteel <span className="font-semibold text-slate-900 dark:text-white">Data Solutions Engineer</span> bij 
                    Sonic Equipment B.V. Ik bouw Python applicaties en hou van het oplossen van complexe technische uitdagingen. 
                    <span className="font-semibold text-slate-900 dark:text-white"> Internationale ervaring</span> door studie in Japan.
                  </>
                )
              )}
            </motion.p>
          </motion.div>

          {/* Right Column - Interactive Skills Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative">
              
              {/* Main Skills Card */}
              <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 p-8 max-w-sm">
                
                {/* Card Header */}
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    {isFreelance ? <Monitor className="h-8 w-8 text-white" /> : <Code2 className="h-8 w-8 text-white" />}
                  </div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-lg">
                    {isFreelance ? (
                      language === 'en' ? 'Core Technologies' : 'Kern Technologieën'
                    ) : (
                      language === 'en' ? 'Technical Skills' : 'Technische Vaardigheden'
                    )}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                    {isFreelance ? (
                      language === 'en' ? 'Modern web development' : 'Moderne webontwikkeling'
                    ) : (
                      language === 'en' ? 'Primary development stack' : 'Primaire ontwikkelingsstack'
                    )}
                  </p>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                      className="flex items-center space-x-3 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors"
                    >
                      <div className={`p-2 bg-gradient-to-br ${skill.color} rounded-lg`}>
                        <skill.icon className="h-5 w-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-slate-700 dark:text-slate-300 text-sm">{skill.name}</div>
                        <div className="text-xs text-slate-500 dark:text-slate-400">{skill.description}</div>
                        <div className="w-full bg-slate-200 dark:bg-slate-600 rounded-full h-1.5 mt-2">
                          <motion.div 
                            className={`h-1.5 rounded-full bg-gradient-to-r ${skill.color}`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ delay: 1 + index * 0.1, duration: 1 }}
                          />
                        </div>
                      </div>
                      <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                        {skill.level}%
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Special highlight */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.2 }}
                  className="mt-6 p-3 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg border border-blue-200 dark:border-blue-800"
                >
                  <div className="flex items-center space-x-2">
                    {isFreelance ? <Zap className="h-4 w-4 text-blue-600" /> : <Plane className="h-4 w-4 text-blue-600" />}
                    <span className="text-sm font-semibold text-blue-700 dark:text-blue-400">
                      {isFreelance ? (
                        language === 'en' ? 'Professional quality guaranteed' : 'Professionele kwaliteit gegarandeerd'
                      ) : (
                        language === 'en' ? 'International experience' : 'Internationale ervaring'
                      )}
                    </span>
                  </div>
                </motion.div>
              </div>

              {/* Floating element - similar to hero */}
              <motion.div
                initial={{ opacity: 0, y: 20, rotate: 5 }}
                whileInView={{ opacity: 1, y: 0, rotate: 5 }}
                viewport={{ once: true }}
                transition={{ delay: 1.4, duration: 0.6 }}
                className="absolute -bottom-4 -right-6 bg-slate-900 dark:bg-slate-800 rounded-lg shadow-xl border border-slate-700 p-3 text-xs font-mono"
              >
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
                <div className="text-green-400">
                  <span className="text-slate-500">$</span> {isFreelance ? 'npm run dev' : 'python main.py'}
                  <br />
                  <span className="text-blue-400">✓</span> {language === 'en' ? 'Ready' : 'Klaar'}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Mobile Skills - Simple and clean */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="lg:hidden mt-12"
        >
          <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-lg">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white text-center mb-6">
              {isFreelance ? (
                language === 'en' ? 'Core Technologies' : 'Kern Technologieën'
              ) : (
                language === 'en' ? 'Technical Skills' : 'Technische Vaardigheden'
              )}
            </h3>
            <div className="grid grid-cols-3 gap-4">
              {skills.map((skill, index) => (
                <div key={skill.name} className="text-center">
                  <div className={`inline-flex p-3 bg-gradient-to-br ${skill.color} rounded-xl mb-3`}>
                    <skill.icon className="h-5 w-5 text-white" />
                  </div>
                  <div className="text-sm font-medium text-slate-900 dark:text-white">{skill.name}</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">{skill.level}%</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}