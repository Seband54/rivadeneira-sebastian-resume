'use client'

import Image from 'next/image'
import { useLanguage } from '@/app/providers'
import { translations } from '@/lib/translations'

export function Hero() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            {t.hero.greeting}
          </h2>
          <p className="text-lg text-foreground/70 mb-2">
            {t.hero.subtitle}
          </p>
          <p className="text-base text-foreground/60 leading-relaxed mb-8">
            {t.hero.description}
          </p>
          <div className="flex gap-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-foreground text-background rounded-sm font-medium hover:opacity-90 transition-opacity"
            >
              {language === 'en' ? 'View My Work' : 'Ver Mi Trabajo'}
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-foreground text-foreground rounded-sm font-medium hover:bg-foreground/5 transition-colors"
            >
              {language === 'en' ? 'Get In Touch' : 'Ponte en Contacto'}
            </a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-sm overflow-hidden border border-border">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FotoCv-ZNR961BASQjbLEiuJUCLDcauJNK7kw.jpg"
              alt="Sebastian Rivadeneira"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
