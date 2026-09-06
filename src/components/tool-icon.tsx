import type { ReactNode } from "react";

/**
 * Small monochrome marks for the tools that appear in project data.
 * Local SVG only — no icon dependency. An unmapped tool renders as text with
 * no mark rather than borrowing a misleading one.
 */
const DATABASE = (
  <>
    <ellipse cx="12" cy="6.5" rx="7" ry="3" />
    <path d="M5 6.5v11c0 1.7 3.1 3 7 3s7-1.3 7-3v-11" />
    <path d="M5 12c0 1.7 3.1 3 7 3s7-1.3 7-3" />
  </>
);

const CODE = <path d="M9.5 8 4.5 12l5 4M14.5 8l5 4-5 4" />;

const REACT_MARK = (
  <>
    <circle cx="12" cy="12" r="1.8" fill="currentColor" stroke="none" />
    <ellipse cx="12" cy="12" rx="9.2" ry="3.5" />
    <ellipse cx="12" cy="12" rx="9.2" ry="3.5" transform="rotate(60 12 12)" />
    <ellipse cx="12" cy="12" rx="9.2" ry="3.5" transform="rotate(120 12 12)" />
  </>
);

const HEXAGON = <path d="M12 3.3 19.8 7.7v8.6L12 20.7 4.2 16.3V7.7z" />;

const MARKS: Record<string, ReactNode> = {
  "next.js": (
    <>
      <circle cx="12" cy="12" r="8.8" />
      <path d="M9.4 15.8V8.2l6.1 7.4" />
      <path d="M14.8 8.2v4.1" />
    </>
  ),
  react: REACT_MARK,
  "react native": REACT_MARK,
  typescript: (
    <>
      <rect x="3.4" y="3.4" width="17.2" height="17.2" rx="3" />
      <path d="M7 10.4h4.6M9.3 10.4v6.2" />
      <path d="M17.4 10.9a2.1 2.1 0 0 0-3 .5c-.5 1 .6 1.7 1.5 2.1.9.4 2 1 1.5 2.1a2.1 2.1 0 0 1-3 .5" />
    </>
  ),
  javascript: (
    <>
      <rect x="3.4" y="3.4" width="17.2" height="17.2" rx="3" />
      <path d="M10 9.6v5.2a1.8 1.8 0 0 1-3.1 1.2" />
      <path d="M17.6 10.4a2 2 0 0 0-3 .5c-.5 1 .6 1.7 1.5 2.1.9.4 2 1 1.5 2a2 2 0 0 1-3 .5" />
    </>
  ),
  "node.js": HEXAGON,
  nodejs: HEXAGON,
  nestjs: (
    <>
      {HEXAGON}
      <path d="M9 10.2c1.4 2.9 4.3 4.3 5.8 4.3" />
    </>
  ),
  flutter: (
    <>
      <path d="M13.8 3.2 6.2 12l3.6 3.6L20.4 3.2z" />
      <path d="M13.8 12.7 9.8 16.7l4 4.1h6.6l-4.1-4.1z" />
    </>
  ),
  firebase: (
    <>
      <path d="M4.8 17.6 8.3 4.4l2.7 4.9" />
      <path d="M4.8 17.6 12.4 3.2l6.8 14.4" />
      <path d="m4.8 17.6 7.3 3.2 7.1-3.2" />
    </>
  ),
  supabase: <path d="M13 3.2v7.6h6L11 20.8v-7.6H5z" />,
  postgresql: DATABASE,
  postgres: DATABASE,
  mysql: DATABASE,
  mongodb: DATABASE,
  redis: DATABASE,
  sqlite: DATABASE,
  python: CODE,
  django: CODE,
  php: CODE,
  laravel: CODE,
  docker: (
    <>
      <path d="M3.6 12.4h16.8v2.4a4.4 4.4 0 0 1-4.4 4.4H8a4.4 4.4 0 0 1-4.4-4.4z" />
      <path d="M7 9.4h2.6v2.6H7zM11 9.4h2.6v2.6H11zM11 5.6h2.6v2.6H11z" />
    </>
  ),
  n8n: (
    <>
      <circle cx="4.8" cy="12" r="2" />
      <circle cx="12" cy="12" r="2" />
      <circle cx="19.2" cy="12" r="2" />
      <path d="M6.8 12h3.2M14 12h3.2" />
    </>
  ),
  stripe: (
    <>
      <rect x="3.4" y="3.4" width="17.2" height="17.2" rx="3" />
      <path d="M9 14.6c1.1.8 4 1.2 4.4-.4.4-1.5-4.3-1.3-3.9-3.4.3-1.5 3.2-1.2 4.2-.5" />
    </>
  ),
  tailwind: (
    <path d="M4.5 12c1-3 2.6-4.5 5-4.5 3.5 0 3.8 3 5.6 3.4 1.2.3 2.2-.1 3.1-1.3-1 3-2.6 4.5-5 4.5-3.5 0-3.8-3-5.6-3.4-1.2-.3-2.2.1-3.1 1.3z" />
  ),
  "tailwind css": (
    <path d="M4.5 12c1-3 2.6-4.5 5-4.5 3.5 0 3.8 3 5.6 3.4 1.2.3 2.2-.1 3.1-1.3-1 3-2.6 4.5-5 4.5-3.5 0-3.8-3-5.6-3.4-1.2-.3-2.2.1-3.1 1.3z" />
  ),
  dart: <path d="M11.4 2.6 3.2 10.8l9 9h6.6V13l-7.4 7.4" />,
  vercel: <path d="M12 4.6 21 19H3z" />,
  wix: CODE,
  "wix studio": CODE,
  twilio: (
    <>
      <circle cx="12" cy="12" r="8.8" />
      <circle cx="9.6" cy="9.6" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="14.4" cy="9.6" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="9.6" cy="14.4" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="14.4" cy="14.4" r="1.5" fill="currentColor" stroke="none" />
    </>
  ),
  calendly: (
    <>
      <rect x="3.4" y="5" width="17.2" height="15.6" rx="2.6" />
      <path d="M3.4 9.6h17.2M8 3.4v3.2M16 3.4v3.2" />
    </>
  ),
  zapier: <path d="M12 3.4v17.2M3.4 12h17.2M6 6l12 12M18 6 6 18" />,
  airtable: (
    <>
      <path d="M12 3.4 3.4 7.1 12 10.8l8.6-3.7z" />
      <path d="M3.4 10.6v5.5l7.4 3.2v-5.6z" />
      <path d="M20.6 10.6v5.5l-7.4 3.2v-5.6z" />
    </>
  ),
  "google sheets": (
    <>
      <path d="M6 3.4h7.4L18 8v12.6H6z" />
      <path d="M9 12.4h6M9 15.6h6M12 12.4v3.2" />
    </>
  ),
  "gemini api": (
    <path d="M12 3.4c.4 4.6 3.6 8 8.2 8.6-4.6.6-7.8 4-8.2 8.6-.4-4.6-3.6-8-8.2-8.6 4.6-.6 7.8-4 8.2-8.6z" />
  ),
};

export function ToolIcon({
  tool,
  className,
}: {
  tool: string;
  className?: string;
}) {
  const mark = MARKS[tool.trim().toLowerCase()];
  // No mark for this tool: the label stands on its own.
  if (!mark) return null;

  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      width="16"
      height="16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {mark}
    </svg>
  );
}
