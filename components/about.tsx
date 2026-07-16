'use client'

import { useLanguage } from '@/app/providers'
import { translations } from '@/lib/translations'

export function About() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section id="about" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-border">
      <h3 className="text-3xl font-bold text-foreground mb-8">{t.about.title}</h3>
      <p className="text-foreground/70 leading-relaxed max-w-2xl">
        {t.about.content}
      </p>
    </section>
  )
}
