'use client'

import { useLanguage } from '@/app/providers'
import { translations } from '@/lib/translations'
import {
  Code2,
  Database,
  Cloud,
  Wrench,
  Zap,
  Cog,
} from 'lucide-react'

const skillsData = {
  frontend: [
    { name: 'React', icon: Cog },
    { name: 'Next.js', icon: Code2 },
    { name: 'TypeScript', icon: Code2 },
    { name: 'Tailwind CSS', icon: Zap },
  ],
  backend: [
    { name: 'Node.js', icon: Code2 },
    { name: 'Python', icon: Code2 },
    { name: 'GraphQL', icon: Database },
    { name: 'REST APIs', icon: Zap },
  ],
  databases: [
    { name: 'PostgreSQL', icon: Database },
    { name: 'MongoDB', icon: Database },
    { name: 'Redis', icon: Database },
    { name: 'Supabase', icon: Database },
  ],
  tools: [
    { name: 'Git', icon: Wrench },
    { name: 'Docker', icon: Cloud },
    { name: 'AWS', icon: Cloud },
    { name: 'Vercel', icon: Cloud },
  ],
}

export function Skills() {
  const { language } = useLanguage()
  const t = translations[language]

  const categories = [
    { key: 'frontend', label: t.skills.categories.frontend, skills: skillsData.frontend },
    { key: 'backend', label: t.skills.categories.backend, skills: skillsData.backend },
    { key: 'databases', label: t.skills.categories.databases, skills: skillsData.databases },
    { key: 'tools', label: t.skills.categories.tools, skills: skillsData.tools },
  ]

  return (
    <section id="skills" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-border">
      <h3 className="text-3xl font-bold text-foreground mb-12">{t.skills.title}</h3>
      
      <div className="grid md:grid-cols-2 gap-12">
        {categories.map((category) => (
          <div key={category.key}>
            <h4 className="text-lg font-semibold text-foreground mb-6">{category.label}</h4>
            <div className="grid grid-cols-2 gap-4">
              {category.skills.map((skill) => {
                const Icon = skill.icon
                return (
                  <div
                    key={skill.name}
                    className="flex items-center gap-3 p-3 bg-card rounded-sm border border-border hover:border-foreground/30 transition-colors"
                  >
                    <Icon className="w-5 h-5 text-foreground/60" />
                    <span className="text-sm font-medium text-foreground">{skill.name}</span>
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
