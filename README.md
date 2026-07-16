# Sebastian Rivadeneira Resume Portfolio

A modern, bilingual (English/Spanish) portfolio website showcasing Sebastian Rivadeneira's full-stack development experience, skills, and projects.

## Features

- **Bilingual Interface**: Seamlessly switch between English and Spanish with a simple toggle in the header
- **Responsive Design**: Mobile-first design that looks great on all devices
- **Minimalist Aesthetic**: Clean, professional design with generous whitespace and subtle animations
- **Smooth Scrolling Navigation**: Easy navigation to different sections (About, Skills, Experience, Projects, Contact)
- **Profile Image**: Professional profile photo integrated at the top
- **Skills Grid**: Categorized tech skills (Frontend, Backend, Databases, Tools & DevOps)
- **Experience Timeline**: Detailed work history with descriptions
- **Project Showcase**: Portfolio projects with technology tags and links
- **Contact Section**: Multiple contact methods and CV download options
- **Dark Mode Ready**: Optimized for both light and dark themes

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 with custom design tokens
- **UI Components**: Shadcn/ui with Lucide React icons
- **State Management**: React Context for language switching
- **Font**: Inter (Google Fonts)

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page with component composition
│   ├── globals.css         # Global styles and design tokens
│   └── providers.tsx       # Language context provider
├── components/
│   ├── header.tsx          # Navigation header with language toggle
│   ├── hero.tsx            # Hero section with profile info
│   ├── about.tsx           # About section
│   ├── skills.tsx          # Skills and technologies grid
│   ├── experience.tsx      # Work experience timeline
│   ├── projects.tsx        # Portfolio projects showcase
│   ├── contact.tsx         # Contact information and CV download
│   └── footer.tsx          # Footer with social links
├── lib/
│   └── translations.ts     # Bilingual content strings
└── public/
    └── profile.jpg         # Profile photograph
```

## Design Tokens

The portfolio uses a professional, minimalist color palette:

- **Background**: Pure White (`oklch(1 0 0)`)
- **Foreground**: Deep Navy (`oklch(0.11 0 0)`)
- **Card**: Light Gray (`oklch(0.98 0 0)`)
- **Border**: Very Light Gray (`oklch(0.93 0 0)`)
- **Muted**: Medium Gray (`oklch(0.65 0 0)`)
- **Accent**: Deep Navy (`oklch(0.11 0 0)`)

## Getting Started

### Installation

```bash
# Install dependencies
pnpm install

# Run the development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio in your browser.

### Building for Production

```bash
# Build the project
pnpm build

# Start the production server
pnpm start
```

## Customization

### Update Personal Information

Edit the translation strings in `lib/translations.ts` to update:
- Name and title
- Bio and description
- Skills and technologies
- Work experience
- Projects
- Contact information

### Change Profile Image

Replace the profile image URL in `components/hero.tsx` with your own image URL.

### Modify Colors

Update the design tokens in `app/globals.css`:
- Change the oklch color values to match your preferred palette
- Update the `--radius` value for different border radius

### Add New Sections

1. Create a new component in `components/`
2. Add translations to `lib/translations.ts`
3. Import and add the component to `app/page.tsx`

## Deployment

The portfolio is optimized for deployment on Vercel:

```bash
# Deploy to Vercel (requires Vercel CLI)
vercel deploy
```

Alternatively, you can deploy to any Node.js hosting service that supports Next.js applications.

## Features to Consider

- Add more projects with live demos
- Integrate a contact form with email notifications
- Add blog or articles section
- Implement dark mode toggle (currently follows system preference)
- Add PDF CV files for download
- Add more social media links
- Implement SEO optimizations

## License

This portfolio is personal to Sebastian Rivadeneira. Feel free to use this as a template for your own portfolio.

## Support

For questions or suggestions, contact through the portfolio's contact section.
