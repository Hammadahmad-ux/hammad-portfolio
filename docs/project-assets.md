# Portfolio project content and covers

Updated 2026-09-06. Scope: project data, project detail actions and generated project imagery. Unrelated homepage sections are preserved.

## Source inspection

| Project                                   | Inspected source                                                                                                                      | Content / link decision                                                                                                                                                                                                                                                                                                                                                                             |
| ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Lockabea                                  | https://www.lockabea.com/                                                                                                             | Public storefront and rendered hero inspected: lockable personal-security smartwatch, product specifications and pre-order journey. Live action enabled. Cover interprets wearable security; it is not an exact product rendering.                                                                                                                                                                  |
| Onyx Barbers                              | https://onyx-barbers-two.vercel.app/                                                                                                  | Rendered live site inspected: black editorial layout, grayscale haircut imagery and booking navigation. Live action enabled. Do not copy apparent placeholder contact details from its footer.                                                                                                                                                                                                      |
| BOVI Access                               | Local `../BOVI web/src/lib/config/hero-media.ts` and existing project context                                                         | Rope access and external maintenance. Not live, per user. No external action.                                                                                                                                                                                                                                                                                                                       |
| Oasis House                               | Local `../oasis home/README.md`, `../Oasis-House-Website/README.md` and user brief                                                    | Children's residential care website. Not live, per user. No external action. Cover is a fictional reading corner, not an actual property or resident photograph.                                                                                                                                                                                                                                    |
| Tourch — Reliable Rides                   | https://apps.apple.com/us/app/tourch-reliable-rides/id6772714557 and https://play.google.com/store/apps/details?id=com.tourchgo.rides | Both public listings verified; Google Play product screenshots visually inspected. Light map-led ride booking and tracking interface, dark green identity. Two separately labelled store actions.                                                                                                                                                                                                   |
| SSP Statify                               | https://sspstatify.com/                                                                                                               | Public page content verified with the web reader: PUBG Mobile tournament operations, live scoring, rosters and broadcast overlays. Direct local-browser navigation timed out twice; live rendered styling could not be visually verified. Cover uses the verified product purpose and portfolio palette, not an asserted recreation of its interface. Live action uses the exact user-supplied URL. |
| Cricket Analytics SaaS Platform           | User-supplied project purpose                                                                                                         | Cricket analytics and insights. No verified external URL supplied.                                                                                                                                                                                                                                                                                                                                  |
| NutriPak                                  | https://github.com/Hammadahmad-ux/nutripak                                                                                            | Public README and rendered repository inspected. Pakistani food logging, micronutrient analysis, AI diet plans and consultations. Flutter/Firebase confirmed. GitHub is a case-study showcase, not a public source-code release. README screenshot slots do not supply actual app screenshots.                                                                                                      |
| WhatsApp AI Agent                         | User-supplied project purpose                                                                                                         | Conversational automation and lead capture. No verified external URL supplied.                                                                                                                                                                                                                                                                                                                      |
| Home Services AI Dispatcher               | User-supplied project purpose                                                                                                         | Voice-agent, dispatch and CRM workflow. No verified external URL supplied.                                                                                                                                                                                                                                                                                                                          |
| Real Estate Speed-to-Lead / CRM Dashboard | User-supplied project purpose                                                                                                         | Property lead management and response workflow. No verified external URL or response-time metrics supplied.                                                                                                                                                                                                                                                                                         |

No years, clients, outcomes, testimonials, or performance figures were added. Optional narrative sections remain absent when unsupported. Services elsewhere on the homepage were not changed.

## Stable routes and ordering

1. `/projects/lockabea`
2. `/projects/onyx-barbers`
3. `/projects/bovi-access`
4. `/projects/oasis-house`
5. `/projects/tourch-reliable-rides`
6. `/projects/ssp-statify`
7. `/projects/cricket-analytics`
8. `/projects/nutripak`
9. `/projects/whatsapp-ai-agent`
10. `/projects/home-services-ai-dispatcher`
11. `/projects/real-estate-speed-to-lead`

The typed array in `src/lib/portfolio.ts` controls category filtering, three-card pagination, static detail routes, existing metadata wiring, and next-project navigation. Categories contain 4 Web, 4 Apps and 3 Automation projects. The final next-project link loops to Lockabea.

## Images and future updates

Every project has `public/projects/{slug}/thumbnail.webp` (768 × 512) and `hero.webp` (1536 × 1024). Both are optimized versions of the same individually generated cover; no filler gallery images were added. Original generated PNGs remain in the Codex generated-images directory.

All eleven covers are conceptual editorial artwork created using the built-in `image_gen` tool, with a cohesive charcoal/off-white palette. They are not project screenshots, actual premises, fabricated software interfaces or evidence of results. Detail images have a visible concept-cover caption; alt text also identifies conceptual imagery. Actual screenshots can replace these later using the existing `ProjectImage` fields; update captions and alt text accordingly.

The exact prompt set is stored in `project-cover-prompts.json`. WebP conversion uses the existing Sharp dependency; no package was installed.

`liveUrl` and `githubUrl` retain the existing actions. Optional `links` supports labelled App Store / Google Play actions for Tourch. Empty links render no action. `shortDescription` is required alongside slug, title and category.

Remaining content input: approved real screenshots, verified launch URLs for the six unlinked projects, and any confirmed roles, years, services, implementation details or outcomes the owner wants to publish. NutriPak source code should not be implied to be public.

## Verification

- `npm run format:check`, `npm run lint`, `npm run typecheck`, and `npm run build` passed. A temporary QA manifest caused an initial formatting failure; it was removed and the final full format check passed.
- Build statically generated all eleven project routes. Existing missing-production-origin warning remains: configure `NEXT_PUBLIC_SITE_URL` when the final domain is known. SEO configuration was not changed.
- Local development and production-runtime checks returned HTTP 200 for all eleven detail pages and all 22 WebP files; unknown project routes returned 404. Next image optimization returned a valid image response.
- Exact project order, 4/4/3 category counts, next-project wraparound, external-link presence and image dimensions were asserted against the typed data.
- Browser checks confirmed Web page 2 contains Oasis House, Apps page 2 contains NutriPak, category changes reset pagination, and Automation contains the exact three requested entries.
- Every detail page was checked at 375px with no horizontal overflow or clipped text bounds. Desktop covers/details, mobile gallery, long titles and Tourch's separate store actions were visually reviewed. BOVI and Oasis rendered no external actions.
- SHA-256 comparison of existing source files confirmed only `src/lib/portfolio.ts`, `src/components/case-study.tsx`, and `src/components/case-study.module.css` changed. Unrelated sections and SEO files were preserved. No dependency was added and nothing was deployed.
