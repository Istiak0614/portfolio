# Md. Istiak Hossain Ifti — Portfolio

Personal portfolio of a MERN Stack Developer, built as a single Next.js application.

## Tech stack

- Next.js (App Router) + TypeScript
- Tailwind CSS v4
- Motion for React, Lucide React
- shadcn/ui-style components (class-variance-authority)
- Self-hosted fonts: Bricolage Grotesque and IBM Plex Sans (OFL)
- Deployed on Vercel

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build check
npm run lint
```

## Project structure

```text
src/
├── app/               # routes, layout, global styles
├── components/
│   ├── icons/         # brand icons (GitHub, LinkedIn, WhatsApp)
│   └── ui/            # reusable UI primitives
├── data/              # all site content — edit these to update the site
├── fonts/             # self-hosted font files + licenses
├── lib/               # helpers
└── types/             # shared TypeScript types
public/images/         # profile photo and project screenshots
```

## Updating content

All content lives in `src/data/`. To publish the résumé, add `public/resume.pdf`
and set `resume.available` to `true` in `src/data/profile.ts`.
