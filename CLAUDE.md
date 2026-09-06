@AGENTS.md

# Hammad portfolio — project handover

Updated 2026-09-05. Read this before continuing work. The user asked to save the context here so Claude can continue without rebuilding or redesigning the finished hero.

## Working agreement

- The user communicates in Roman Urdu. Keep progress updates and final replies concise and practical.
- Inspect relevant files and reuse the existing implementation before editing. Prefer small, focused, reversible changes and no unnecessary dependencies.
- Implement requested changes in the actual project and visually check the running app. Do not stop at a plan or code snippet.
- Ask only for information that cannot reasonably be inferred. Routine local changes and verification are authorized; deployment, destructive changes, and messages to third parties are not.
- Do not add portfolio sections, fake projects, client logos, claims, contact details, or integrations without a new request.
- Read the applicable installed skills and the relevant installed Next.js documentation under `node_modules/next/dist/docs/`. Report only checks actually executed.

## Stack and run commands

The user explicitly requires **Next.js 16, React 19, TypeScript, App Router, and Tailwind CSS v4**. This started as an empty folder containing only the portrait. Preserve the current Next.js structure.

- Installed: Next.js 16.3.4, React/React DOM 19.2.8, Tailwind CSS 4.3.3, TypeScript 5.9.3. `package-lock.json` is authoritative.
- Do not introduce Vite, a standalone HTML app, Bootstrap, Material UI, shadcn/ui, Framer Motion, or unnecessary UI libraries.
- Workspace: `C:\Users\HP\projects\Portfolio new` (Windows, PowerShell).
- `npm run dev` serves `http://127.0.0.1:3000`. A dev server may already be running; check before starting another.
- `npm run format:check`, `npm run lint`, `npm run typecheck`, `npm run build` are the available checks.
- `npm start` runs the production build. There is no automated unit/E2E test suite installed.
- No deployment or Git commit has been performed.

## Current scope and design

The homepage now includes the approved hero/header, Selected Work, Services, About, and a large contact CTA. The approved hero must remain unchanged during future section work. The original user supplied a Bazil portfolio desktop reference (1331 × 717) and mobile reference (262 × 571). The screenshots live in the conversation, not as files in this repository. The long original brief was pasted at `C:\Users\HP\.codex\attachments\32a43e29-acbb-4143-922b-8bfd2a258add\pasted-text.txt`; current user corrections take priority over that original brief.

The composition is an editorial poster: white canvas, condensed oversized black first headline, hollow outlined second headline, central grayscale portrait overlapping the letters, small supporting copy, and two low-center CTA buttons. Desktop is deliberately layered; mobile independently stacks intro, headlines, supporting copy, buttons, and portrait. Keep this visual language; do not turn it into a generic portfolio template.

Current content:

- Logo: `Hammad.` with the pink dot and small gold mark.
- Intro: `Hi, my name is Hammad and I am a freelance`.
- Solid headline: `FULL STACK DEV`.
- Outlined headline: `& AUTOMATION EXPERT`.
- Supporting text: `Available for remote work worldwide.` **Do not restore “based in Pakistan.”** Metadata has also been updated to match worldwide remote availability.
- Hero buttons: `I need a developer` and `I need automation help`.
- Navigation: `Projects`, `Services`, `About`, `Contact`, and `Let's Talk`.

Latest user-approved refinements that supersede the original reference:

1. The canvas fills the viewport edges. No outer gray gap, body padding, or rounded page corners.
2. Mobile navigation opens as a white full-screen overlay, not a small dropdown. The panel reveals over 750 ms; individual links fade and move in over 650 ms with staggered delays from 160 to 560 ms. Closing animates too. Keep reduced-motion support.
3. Menu links, logo, close button, and Escape close the overlay. Opening locks background scrolling and makes the hero and the added homepage sections inert. Keyboard focus stays within the header while open; closed mobile navigation is inert. Desktop breakpoint changes close/reset the menu.
4. Both ear contours were carefully corrected against a magnified original photo: remove the leftover background strip beside the ear and preserve the thin visible ear edge on the opposite side. Preserve the corrected mask rather than reverting to the earlier polygon.
5. Both hero buttons have a subtle **8 px corner radius**. The page itself remains square at its edges.
6. Desktop navigation, including `Let's Talk`, is **14 px and weight 700**. This desktop-only styling must not replace the existing large Anton mobile menu styling.
7. `Let's Talk` also has **8 px rounded corners**, including inside the mobile menu. Plain navigation links use a 320 ms animated underline: reveal from the left on hover/keyboard focus and retract toward the right when leaving. The underline is an absolutely positioned pseudo-element so it does not shift the layout. Preserve reduced-motion handling and the mobile underline offset.

## File map and implementation details

- `src/app/page.tsx`: server-rendered homepage composing the approved hero and the three added sections. Former placeholder IDs were moved from hero elements to their actual sections; hero presentation is unchanged.
- `src/app/layout.tsx`: metadata, viewport theme, and locally hosted Anton via `next/font/local`.
- `src/app/globals.css`: Tailwind v4 import and precisely tuned composition. Mobile is below 768 px; tablet adjustments cover 768–1100 px. Desktop uses `--poster-height`, `--poster-offset`, `--portrait-size`, and `--portrait-drop` so taller screens preserve the overlap. Supporting text wraps within a limited width on desktop and has a separately tuned mobile font size.
- `src/components/site-header.tsx`: client component; handles menu state, focus, inertness, scroll lock, Escape, and breakpoint resets.
- `src/lib/site.ts`: shared `contactHref = "#contact"`. **All three CTAs must continue to use this value until the user supplies a final destination.** No separate contact page or contact form is requested.
- `assets/profile-pic.jpeg`: untouched original 1254 × 1254 portrait.
- `public/assets/profile-pic.jpeg`: identical public copy, rendered using `next/image` with dimensions, responsive `sizes`, and preload.
- `public/assets/portrait-mask.svg`: editable vector silhouette used by CSS to remove the original orange background without changing the photo. Both ears/jawline have been refined. CSS applies grayscale and a separate fade at the bottom.
- The portrait mask is also used by `.headline-echo`, the decorative white outline of the first headline crossing the portrait. Its size/position must stay synchronized with `.portrait`. The echo is hidden from assistive technology and hidden on mobile.
- `fonts/anton.ttf` and `fonts/OFL.txt`: locally hosted font and license; no runtime Google Fonts request.
- `next.config.ts`: hides Next.js development indicators to keep the preview clean.
- `README.md`: concise setup and file guide.

The `#projects`, `#services`, `#about`, and `#contact` IDs now target their actual homepage sections, with exactly one of each ID. Contact functionality is intentionally limited to the anchor destination. No email address, WhatsApp link, contact submission, or separate contact page is configured.

## Added sections and project system

The extension brief is in `C:\Users\HP\.codex\attachments\d3e53288-29e5-4ed6-ab36-2b37c84c5ac6\pasted-text.txt`. The user's later category-first correction overrides that brief's proposed named clients and years.

- `src/components/selected-work.tsx`: numbered editorial heading and gallery.
- `src/components/project-gallery.tsx`: the second client component, with native category buttons, `aria-pressed`, a live result count, and three projects per page.
- `src/lib/portfolio.ts`: typed `Project`, `ProjectCategory`, `projectCategories`, `projects`, and service data. Categories are `web` (Web Design & Development), `apps` (Apps), and `automation` (AI & Automation). No All tab is needed.
- Nine temporary entries: Project One/Two/Three, App Project One/Two/Three, Automation One/Two/Three. Do not replace these with assumed BOVI Access, Igloo AC, or Lockabea details without user input. Do not invent URLs, years, client claims, stats, or logos.
- To expand: append entries with unique `id`, `title`, `category`, and `description`. Previous/Next controls appear automatically when a category exceeds three entries. Category changes reset to its first page. Categories with no entries show an empty state.
- Real screenshots are optional: add `image: { src, alt, width, height }`, preferably using local files under `public/assets/projects/`. The gallery uses `next/image`. Without an image it shows a neutral CSS layout preview appropriate to the category.
- Real links are optional: add `href` only when supplied. Without it, Details coming soon is a non-navigating span, not a fake link. No year field exists yet.
- `src/components/services.tsx`: four numbered editorial rows with descriptions and subtle CSS hover, linked to shared `contactHref`.
- `src/components/about-contact.tsx`: concise introduction and a large black contact block. The final CTA deliberately uses shared `#contact` until the user supplies contact details.
- `src/components/section-arrow.tsx`: shared decorative inline SVG; no icon dependency.
- `src/components/homepage-sections.module.css`: isolated section styling. White/off-white, thin borders, Anton display headings, outlined text and monochrome previews. Desktop gallery has three columns, 768-900 px has two, and below 768 px cards stack. Mobile category controls use a full-width Web button with Apps/AI below. Touch controls are at least 44 px high. Motion is CSS-only with reduced-motion support.
- The added wrapper has `id="homepage-sections"`; mobile navigation makes it inert while open and restores its previous state on close. Its white background clips the overflowing hero portrait visually at the original hero boundary.
- Hero/header CSS and portrait mask were preserved. Do not redesign them when adding real project content.

## Verification expectations

Visually compare desktop and mobile after visible changes. Earlier iterations covered 1440, 1366, 1280, 1024, 768, 430, 390, and 375 px widths plus the reference dimensions. Check that longer supporting text does not get hidden behind the portrait, buttons remain readable, desktop links fit, the full-screen mobile menu still works, and there is no horizontal scrollbar. Short screens may scroll vertically to preserve the composition.

Use the installed Browser skill and its supported browser runtime for local visual checks. Remove temporary inspection pages when finished. Never alter the original portrait to fix CSS masking. The original and public JPEG SHA-256 are both `29723EB25FBF820B2768921ED0041A3105AD4BFEB6927FA69A9E286831516E18`.

## Latest validation and delivery state

The homepage extension and category-first gallery are implemented. No deployment or Git commit was performed; this workspace is not currently a Git repository.

- Formatting, lint, TypeScript checks, and production build passed for the added implementation; `/` remains statically prerendered.
- Responsive overflow checks covered 1440, 1366, 1280, 1024, 768, 430, 390, and 375 px. No horizontal overflow or escaped section text/control bounds were found.
- Desktop and mobile visual review covered the project previews, filters, service rows, About statement, contact CTA, and hero transition.
- All three filters show their correct three entries; absent URLs render zero project links. Pagination and category reset were verified using a temporary fourth Web entry, which was removed afterward.
- Mobile Contact closes the full-screen menu, navigates to the actual contact block, and restores scrolling and background interactivity.
- Approved hero typography, image geometry, and CTA placement were compared before/after. `globals.css` and `portrait-mask.svg` remained unchanged. The longer page naturally adds a vertical scrollbar.
- No unit/E2E test framework was added. Project links, dates, and final contact details remain user-supplied future content.
- Dev preview: `http://127.0.0.1:3000`; recheck availability before starting another server.
