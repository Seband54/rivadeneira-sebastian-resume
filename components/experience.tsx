'use client'

import { useLanguage } from '@/app/providers'
import { translations } from '@/lib/translations'

const experienceData = {
  en: [
    {
      title: 'Bilingual Agent and Tester',
      company: 'Conservice - Teleperformance Peru S.A.C.',
      period: 'Sep. 2025 - Apr. 2026',
      description: 'Sustained performance indicators. Managed public service activation and transfer processes for U.S. residential properties. Advanced English communication with clients and U.S. entities. Developed Excel macros to automate repetitive tasks. Participated in internal testing of new management system with functional testing and UX evaluation.',
      details: [
        'Sustained performance indicators with bonus recognition',
        'Public service activation and transfer process management for U.S. properties',
        'Advanced English communication with international clients',
        'Multi-tool management for provider coordination in remote work setup',
        'Excel macro development for workflow automation',
        'Internal system testing with functional validation and UX feedback'
      ]
    },
    {
      title: 'Software Developer',
      company: 'Peruvian Union University',
      period: 'Nov. 2024 - Dec. 2024',
      description: 'Developed an interactive memory card game utilizing vanilla HTML, CSS, and JavaScript with complete game mechanics and responsive design. Successfully packaged and deployed the application as a cross-platform desktop solution using Electron framework. Created comprehensive project documentation meeting all client specifications and requirements.',
      details: [
        'Implemented game logic with complete mechanics using vanilla JavaScript',
        'Built responsive user interface optimized for multiple screen sizes',
        'Designed and implemented score tracking and game statistics',
        'Packaged application as standalone desktop application using Electron',
        'Created detailed project documentation per client requirements'
      ]
    },
    {
      title: 'Systems Practitioner',
      company: 'Chilca Huancayo Academy',
      period: 'Dec. 2023 - Mar. 2024',
      description: 'Developed a comprehensive desktop application for academic institution management system handling student data, courses, and administrative operations. Implemented WhatsApp business chatbot integration for institutional query support and customer service automation. Provided strategic consulting in cybersecurity best practices and database administration.',
      details: [
        'Developed desktop application for complete academic management system',
        'Designed and implemented WhatsApp business chatbot for query automation',
        'Consulted on ISO/IEC 27001 cybersecurity framework implementation',
        'Provided database design and administration recommendations',
        'Assisted in system architecture and technology stack selection'
      ]
    },
    {
      title: 'Receptionist & Technical Support',
      company: 'Real Huancayo Hotel',
      period: 'Dec. 2022 - Jan. 2023',
      description: 'Managed front-desk operations including issuance of electronic invoices and receipts in compliance with government regulations. Implemented VPN network infrastructure for secure guest and staff connectivity. Provided technical support to staff and guests while maintaining databases and overseeing document digitalization processes.',
      details: [
        'Issued electronic invoices and receipts with regulatory compliance',
        'Implemented VPN network for secure remote access',
        'Provided general technical support to staff and guests',
        'Managed database systems and information organization',
        'Oversaw document digitalization and archiving processes'
      ]
    },
    {
      title: 'Administrative Assistant',
      company: 'La Placita Huancayo Supermarket',
      period: 'Mar. 2022',
      description: 'Managed business databases and maintained accurate information systems. Handled electronic document issuance and maintained compliance with regulatory requirements for commercial transactions.',
      details: [
        'Managed and maintained business databases',
        'Issued electronic documentation for transactions',
        'Ensured regulatory compliance for electronic records'
      ]
    },
  ],
  es: [
    {
      title: 'Agente Bilingüe y Tester',
      company: 'Conservice - Teleperformance Perú S.A.C.',
      period: 'Set. 2025 - Abr. 2026',
      description: 'Cumplimiento sostenido de indicadores de desempeño. Gestión de procesos de activación y transferencia de servicios públicos para propiedades residenciales en Estados Unidos. Comunicación en inglés avanzado con clientes y entidades estadounidenses. Desarrollo de macros en Excel para automatización. Participación en testing del nuevo sistema de gestión.',
      details: [
        'Cumplimiento sostenido de indicadores con bono de rendimiento',
        'Gestión de procesos de activación y transferencia de servicios',
        'Comunicación en inglés avanzado con clientes internacionales',
        'Manejo de múltiples herramientas para coordinación con proveedores',
        'Desarrollo de macros en Excel para automatización de tareas',
        'Testing funcional y evaluación de UX del nuevo sistema'
      ]
    },
    {
      title: 'Desarrollador de Software',
      company: 'Universidad Peruana Union',
      period: 'Nov. 2024 - Dic. 2024',
      description: 'Desarrollo de un juego de memoria interactivo utilizando HTML, CSS y JavaScript vanilla con mecánicas completas y diseño responsivo. Empaquetado y despliegue exitoso como aplicación de escritorio multiplataforma utilizando el framework Electron. Creación de documentación integral del proyecto cumpliendo con todas las especificaciones del cliente.',
      details: [
        'Implementación de lógica del juego con mecánicas completas en JavaScript',
        'Construcción de interfaz de usuario responsiva optimizada para múltiples tamaños',
        'Diseño e implementación de seguimiento de puntuación y estadísticas',
        'Empaquetado de aplicación como solución de escritorio independiente con Electron',
        'Creación de documentación detallada del proyecto según requerimientos'
      ]
    },
    {
      title: 'Practicante de Sistemas',
      company: 'Academia Chilca Huancayo',
      period: 'Dic. 2023 - Mar. 2024',
      description: 'Desarrollo de un aplicativo de escritorio integral para sistema de gestión académica de la institución manejando datos estudiantiles, cursos y operaciones administrativas. Implementación de integración con chatbot empresarial en WhatsApp para automatización de consultas institucionales. Provisión de asesoría estratégica en ciberseguridad y administración de bases de datos.',
      details: [
        'Desarrollo de aplicativo de escritorio para gestión académica completa',
        'Diseño e implementación de chatbot empresarial en WhatsApp',
        'Asesoría en implementación de marco ciberseguridad ISO/IEC 27001',
        'Recomendaciones de diseño de base de datos y administración',
        'Asistencia en selección de arquitectura de sistemas y tecnologías'
      ]
    },
    {
      title: 'Recepcionista y Soporte Técnico',
      company: 'Hotel Real Huancayo',
      period: 'Dic. 2022 - Ene. 2023',
      description: 'Gestión de operaciones de recepción incluyendo emisión de boletas y facturas electrónicas en cumplimiento normativo. Implementación de infraestructura de red VPN para conectividad segura de huéspedes y personal. Provisión de soporte técnico general a personal y huéspedes mientras se mantenían sistemas de bases de datos.',
      details: [
        'Emisión de boletas y facturas electrónicas con cumplimiento normativo',
        'Implementación de infraestructura de red VPN para acceso seguro',
        'Provisión de soporte técnico general a personal y huéspedes',
        'Gestión de sistemas de bases de datos e información organizacional',
        'Supervisión de procesos de digitalización y archivo de documentos'
      ]
    },
    {
      title: 'Asistente Administrativo',
      company: 'Supermercado La Placita Huancayo',
      period: 'Mar. 2022',
      description: 'Gestión de bases de datos empresariales y mantenimiento de sistemas de información precisos. Manejo de emisión de documentos electrónicos y garantía del cumplimiento normativo en registros electrónicos para transacciones comerciales.',
      details: [
        'Gestión y mantenimiento de bases de datos empresariales',
        'Emisión de documentación electrónica para transacciones',
        'Garantía de cumplimiento normativo en registros electrónicos'
      ]
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
            <p className="text-foreground/70 mb-4">{exp.description}</p>
            {exp.details && (
              <ul className="space-y-2">
                {exp.details.map((detail, idx) => (
                  <li key={idx} className="text-sm text-foreground/60 flex gap-3">
                    <span className="text-accent mt-0.5">•</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
