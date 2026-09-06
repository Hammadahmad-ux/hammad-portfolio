import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { ScrollReveal } from "@/components/scroll-reveal";
import { siteUrl } from "@/lib/site-url";
import "./globals.css";

const anton = localFont({
  src: "../../fonts/anton.ttf",
  variable: "--font-anton",
  display: "swap",
  weight: "400",
});

const title = "Hammad — Full Stack Developer & Automation Expert";
const description =
  "Hammad is a Full Stack Developer and Automation Expert building modern websites, web applications, mobile products and AI-powered automation systems.";

export const metadata: Metadata = {
  // Absolute URLs are only emitted once a production origin is configured.
  ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
  title: { default: title, template: "%s | Hammad" },
  description,
  applicationName: "Hammad",
  authors: [{ name: "Hammad Ahmad" }],
  creator: "Hammad Ahmad",
  publisher: "Hammad Ahmad",
  keywords: [
    "Full Stack Developer",
    "Automation Expert",
    "AI automation",
    "Web development",
    "Next.js developer",
    "React developer",
    "n8n automation",
    "Freelance developer",
  ],
  category: "technology",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: { icon: "/assets/favicon.svg" },
  ...(siteUrl ? { alternates: { canonical: "/" } } : {}),
  openGraph: {
    type: "website",
    siteName: "Hammad",
    title,
    description,
    locale: "en_US",
    ...(siteUrl ? { url: siteUrl } : {}),
  },
  twitter: { card: "summary_large_image", title, description },
};

export const viewport: Viewport = { themeColor: "#ffffff" };

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={anton.variable}>
      <body>
        {/* Without scripting the reveal never runs, so show everything. */}
        <noscript>
          <style
            dangerouslySetInnerHTML={{
              __html:
                "[data-reveal]{opacity:1!important;transform:none!important}",
            }}
          />
        </noscript>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        {children}
        <ScrollReveal />
      </body>
    </html>
  );
}
