# Youssef Osama Ali — Portfolio

A premium, dark, minimal personal portfolio for **Youssef Osama Ali** — Android Developer & AI-Assisted Builder. Built with Next.js (App Router), TypeScript, Tailwind CSS v4, and Framer Motion.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it locally.

Other useful commands:

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint
```

## Project structure

```
src/
├── app/                  # Next.js App Router entry (layout, page, global styles)
├── components/
│   ├── hero/             # Hero section
│   ├── layout/           # Navbar, Footer
│   ├── projects/         # Project card variants + abstract conceptual visuals
│   ├── sections/         # All page sections (Engineer, Builder, About, Contact, etc.)
│   └── ui/                # Shared primitives (Container, Reveal, Tag, SectionHeading, icons)
├── data/                  # Centralized, data-driven content (profile, projects, skills, workflow, nav)
├── types/                 # Shared TypeScript types
├── lib/                   # Small utilities (cn helper)
└── assets/fonts/          # Self-hosted variable fonts (Inter, Space Grotesk, JetBrains Mono)
```

All page content (profile info, Android projects, AI projects, skills, workflow steps, nav items) lives in `src/data/*.ts` — update those files to change content without touching component code.

## Notes

- Fonts are self-hosted via `next/font/local` (no runtime dependency on Google Fonts).
- Project details for professional/enterprise work are intentionally limited where the underlying systems are confidential or pre-release; visuals for those projects are labeled "Conceptual Architecture" and are not real product screenshots.
- Update the personal photo at `public/images/youssef-portrait.jpg` and contact links in `src/data/profile.ts`.
