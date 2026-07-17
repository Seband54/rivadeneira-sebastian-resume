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
    { name: 'HTML', icon: Code2 },
    { name: 'CSS', icon: Code2 },
    { name: 'JavaScript', icon: Code2 },
    { name: 'React', icon: Cog },
    { name: 'Next.js', icon: Code2 },
    { name: 'Bootstrap', icon: Zap },
  ],
  backend: [
    { name: 'PHP', icon: Code2 },
    { name: 'Java', icon: Code2 },
    { name: 'Spring', icon: Code2 },
    { name: 'Maven', icon: Wrench },
    { name: 'MVC', icon: Code2 },
    { name: 'Electron', icon: Code2 },
    { name: 'Python', icon: Code2 },
  ],
  databases: [
    { name: 'MySQL', icon: Database },
    { name: 'Oracle', icon: Database },
    { name: 'Supabase', icon: Database },
  ],
  tools: [
    { name: 'Docker', icon: Cloud },
    { name: 'Docker Compose', icon: Cloud },
    { name: 'FastAPI', icon: Zap },
    { name: 'Streamlit', icon: Zap },
    { name: 'MLflow', icon: Zap },
    { name: 'Vercel', icon: Cloud },
    { name: 'Render', icon: Cloud },
    { name: 'GitHub', icon: Wrench },
    { name: 'CI/CD', icon: Cloud },
  ],
  dataAnalysis: [
    { name: 'pandas', icon: Code2 },
    { name: 'NumPy', icon: Code2 },
    { name: 'scikit-learn', icon: Code2 },
    { name: 'SciPy', icon: Code2 },
    { name: 'K-Means', icon: Zap },
    { name: 'K-Means++', icon: Zap },
    { name: 'DBSCAN', icon: Zap },
    { name: 'Agglomerative', icon: Zap },
  ],
  qualityAssurance: [
    { name: 'Selenium IDE', icon: Wrench },
    { name: 'UI.Vision RPA', icon: Wrench },
    { name: 'Apache JMeter', icon: Wrench },
    { name: 'OWASP ZAP', icon: Wrench },
    { name: 'Lighthouse', icon: Wrench },
    { name: 'Chrome DevTools', icon: Wrench },
  ],
  cybersecurity: [
    { name: 'ISO/IEC 27001', icon: Cloud },
    { name: 'RBAC', icon: Cloud },
    { name: 'MFA', icon: Cloud },
    { name: 'Zero Trust', icon: Cloud },
  ],
  projectManagement: [
    { name: 'Scrum', icon: Wrench },
    { name: 'Kanban', icon: Wrench },
    { name: 'Jira', icon: Wrench },
    { name: 'Design Thinking', icon: Cog },
    { name: 'Lean Startup', icon: Cog },
  ],
  other: [
    { name: 'ProModel', icon: Zap },
    { name: 'Stat::Fit', icon: Zap },
    { name: 'Excel Macros', icon: Wrench },
    { name: 'Advanced Excel', icon: Wrench },
  ],
}

export function Skills() {
  const { language } = useLanguage()
  const t = translations[language]

  const categories = [
    { key: 'frontend', label: language === 'en' ? 'Frontend' : 'Frontend', skills: skillsData.frontend },
    { key: 'backend', label: language === 'en' ? 'Backend & Applications' : 'Backend & Aplicaciones', skills: skillsData.backend },
    { key: 'databases', label: language === 'en' ? 'Databases' : 'Bases de Datos', skills: skillsData.databases },
    { key: 'tools', label: language === 'en' ? 'Cloud & DevOps' : 'Cloud & DevOps', skills: skillsData.tools },
    { key: 'dataAnalysis', label: language === 'en' ? 'Data Analysis & Clustering' : 'Análisis de Datos & Clustering', skills: skillsData.dataAnalysis },
    { key: 'qualityAssurance', label: language === 'en' ? 'Quality Assurance' : 'Aseguramiento de Calidad', skills: skillsData.qualityAssurance },
    { key: 'cybersecurity', label: language === 'en' ? 'Cybersecurity' : 'Ciberseguridad', skills: skillsData.cybersecurity },
    { key: 'projectManagement', label: language === 'en' ? 'Project Management & Agile' : 'Gestión de Proyectos & Ágil', skills: skillsData.projectManagement },
    { key: 'other', label: language === 'en' ? 'Other Tools' : 'Otras Herramientas', skills: skillsData.other },
  ]

  return (
    <section id="skills" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-border">
      <h3 className="text-3xl font-bold text-foreground mb-12">{t.skills.title}</h3>
      
      <div className="space-y-12">
        {categories.map((category) => (
          <div key={category.key}>
            <h4 className="text-lg font-semibold text-foreground mb-4">{category.label}</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
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
