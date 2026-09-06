# Hammad portfolio

A responsive portfolio built with Next.js 16, React 19, TypeScript, the App Router, and Tailwind CSS v4. The approved reference-based hero continues into a category-filtered project gallery, editorial services, and an About/contact section.

## Run locally

```sh
npm install
npm run dev
```

Open http://127.0.0.1:3000.

## Environment

The production origin drives canonical URLs, Open Graph, `sitemap.xml` and
`robots.txt`. Without it those absolute URLs are omitted rather than pointing at
a development host.

```sh
cp .env.example .env.local
```

```
NEXT_PUBLIC_SITE_URL=https://hammadahmad.dev
```

Set the same variable in the Vercel project environment before deploying.
`.env.local` is git-ignored; `.env.example` is committed.

## Checks and production

```sh
npm run format:check
npm run lint
npm run typecheck
npm run build
npm start
```

## Files

- `src/app/page.tsx`: server-rendered hero and content.
- `src/app/globals.css`: Tailwind v4 entry point and precise responsive composition.
- `src/components/site-header.tsx`: accessible full-screen mobile navigation.
- `src/components/selected-work.tsx`, `services.tsx`, `about-contact.tsx`: the added homepage sections.
- `src/components/project-gallery.tsx`: client-side category filters and pagination, three projects per page.
- `src/components/homepage-sections.module.css`: isolated styling for the added sections.
- `src/lib/portfolio.ts`: typed categories, nine replaceable project entries, and service content.
- `src/lib/site.ts`: shared contact destination. All three CTA buttons currently use `#contact`.
- `public/assets/profile-pic.jpeg`: public copy of the portrait, served through `next/image`.
- `assets/profile-pic.jpeg`: untouched original portrait.
- `public/assets/portrait-mask.svg`: presentation mask following the portrait silhouette. Grayscale and the bottom fade are CSS effects; the photo is unchanged.
- `fonts/`: locally hosted Anton font and its SIL Open Font License, loaded with `next/font/local`.

Navigation anchors target the actual homepage sections. The contact CTA remains an anchor placeholder; no email, contact form, or separate contact page is configured.

## Adding projects

Replace or append entries in `src/lib/portfolio.ts`, using a unique `id` and a category of `web`, `apps`, or `automation`. Each category shows up to three projects at once; Previous/Next controls appear automatically when more entries are added.

Add an optional `image` with `src`, `alt`, `width`, and `height` for a real screenshot stored under `public/assets/projects/`. Add `href` only when a real project URL is available. Without these fields, the gallery renders a neutral preview and non-navigating Details coming soon state. No years, client claims, or fabricated URLs are included. See `CLAUDE.md` for the full handover.

Framework setup follows the [Next.js App Router installation guide](https://nextjs.org/docs/app/getting-started/installation) and [Tailwind CSS Next.js integration](https://tailwindcss.com/docs/installation/framework-guides/nextjs).
