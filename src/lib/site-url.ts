/**
 * Single source of truth for the production origin.
 *
 * Server-only on purpose: `VERCEL_*` are not public env vars, so this module
 * must never be imported from a client component.
 *
 * Priority: NEXT_PUBLIC_SITE_URL -> VERCEL_PROJECT_PRODUCTION_URL -> VERCEL_URL.
 * Anything that resolves to localhost is rejected so a development origin can
 * never leak into a canonical, sitemap or Open Graph URL.
 */
function normalizeOrigin(value: string | undefined): string | undefined {
  const trimmed = value?.trim();
  if (!trimmed) return undefined;

  const withProtocol = /^https?:\/\//i.test(trimmed)
    ? trimmed
    : `https://${trimmed}`;

  try {
    const url = new URL(withProtocol);
    const localHosts = ["localhost", "127.0.0.1", "0.0.0.0", "::1"];
    if (localHosts.includes(url.hostname)) return undefined;
    return url.origin;
  } catch {
    return undefined;
  }
}

export const siteUrl: string | undefined =
  normalizeOrigin(process.env.NEXT_PUBLIC_SITE_URL) ??
  normalizeOrigin(process.env.VERCEL_PROJECT_PRODUCTION_URL) ??
  normalizeOrigin(process.env.VERCEL_URL);

/** Absolute URL for a path, or undefined while no production origin is known. */
export function absoluteUrl(path: string): string | undefined {
  if (!siteUrl) return undefined;
  return new URL(path, siteUrl).toString();
}
