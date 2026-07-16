'use client'

import { useLanguage } from '@/app/providers'
import { translations } from '@/lib/translations'

const experienceData = {
  en: [
    {
      title: 'Senior Full Stack Developer',
      company: 'Tech Startup',
      period: '2022 - Present',
      description: 'Leading development of web applications using Next.js and React. Mentoring junior developers and establishing best practices.',
    },
    {
      title: 'Full Stack Developer',
      company: 'Digital Agency',
      period: '2020 - 2022',
      description: 'Developed and maintained multiple client projects using Node.js and React. Implemented CI/CD pipelines and improved application performance.',
    },
    {
      title: 'Junior Developer',
      company: 'StartUp Company',
      period: '2018 - 2020',
      description: 'Built responsive web applications and worked with REST APIs. Collaborated with designers to create user-friendly interfaces.',
    },
  ],
  es: [
    {
      title: 'Desarrollador Full Stack Senior',
      company: 'Startup Tecnológico',
      period: '2022 - Presente',
      description: 'Liderando el desarrollo de aplicaciones web usando Next.js y React. Mentorando desarrolladores junior y estableciendo mejores prácticas.',
    },
    {
      title: 'Desarrollador Full Stack',
      company: 'Agencia Digital',
      period: '2020 - 2022',
      description: 'Desarrollé y mantuve múltiples proyectos de clientes usando Node.js y React. Implementé pipelines CI/CD y mejoré el rendimiento de aplicaciones.',
    },
    {
      title: 'Desarrollador Junior',
      company: 'Startup Company',
      period: '2018 - 2020',
      description: 'Construí aplicaciones web responsivas y trabajé con APIs REST. Colaboré con diseñadores para crear interfaces amigables.',
    },
  ],
}

export function Experience() {
  const { language } = useLanguage()
  const t = translations[language]
  const experiences = experienceData[language]

  return (
    <section id="experience" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-border">
      <h3 className="text-3xl font-bold text-foreground mb-12">{t.experience.title}</h3>
      
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="pb-8 border-b border-border last:border-b-0 last:pb-0">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
              <h4 className="text-lg font-semibold text-foreground">{exp.title}</h4>
              <span className="text-sm text-foreground/50">{exp.period}</span>
            </div>
            <p className="text-sm text-foreground/60 mb-3">{exp.company}</p>
            <p className="text-foreground/70">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
