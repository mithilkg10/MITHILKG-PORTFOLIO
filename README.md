# Mithil K Gowda — Cybersecurity Portfolio

Premium cybersecurity portfolio built with Next.js 15, React, TypeScript, TailwindCSS, Framer Motion, GSAP, and Three.js.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Before Deploying

1. **Profile photo** — Add your professional photo to `public/profile.jpg`
2. **Resume PDF** — Already at `public/resume.pdf` (sourced from your uploaded resume)
3. **Reference video** — Stored in `reference/` (not deployed; UI inspiration only)
4. **GitHub token** (optional) — Set `GITHUB_TOKEN` in `.env.local` for higher API rate limits

## Tech Stack

- Next.js 15 · React 19 · TypeScript
- TailwindCSS v4
- Framer Motion · GSAP ScrollTrigger
- Three.js / React Three Fiber
- Lucide Icons

## Project Structure

```
src/
├── app/              # Next.js app router
├── components/
│   ├── layout/       # Navigation, Footer
│   ├── sections/     # Page sections
│   ├── three/        # Three.js components
│   └── ui/           # Reusable UI components
└── lib/data/         # Resume content (single source of truth)
```

All portfolio content is sourced from `src/lib/data/resume.ts` — edit that file to update text.
