import Image from "next/image";
import { SiteHeader } from "@/components/site-header";
import { contactHref, contactMethods } from "@/lib/site";
import { siteUrl } from "@/lib/site-url";
import { SelectedWork } from "@/components/selected-work";
import { Services } from "@/components/services";
import { About } from "@/components/about";
import { Experience } from "@/components/experience";
import { ClientFeedback } from "@/components/client-feedback";
import { TechStack } from "@/components/tech-stack";
import { ContactCta } from "@/components/contact-cta";
import sectionStyles from "@/components/homepage-sections.module.css";

// Restrained, factual JSON-LD built from the shared contact config.
const email = contactMethods.find((method) => method.id === "email")?.href;
const github = contactMethods.find((method) => method.id === "github")?.href;
const telephone = contactMethods
  .filter((method) => method.id === "whatsapp" || method.id === "uk")
  .map((method) => method.value.replace(/\s+/g, ""));

const personId = (siteUrl ?? "") + "/#person";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": personId,
      name: "Hammad Ahmad",
      alternateName: "Hammad",
      jobTitle: "Full Stack Developer & Automation Expert",
      ...(email ? { email } : {}),
      ...(telephone.length > 0 ? { telephone } : {}),
      ...(github ? { sameAs: [github] } : {}),
      ...(siteUrl ? { url: siteUrl } : {}),
    },
    {
      "@type": "WebSite",
      "@id": (siteUrl ?? "") + "/#website",
      name: "Hammad",
      inLanguage: "en",
      ...(siteUrl ? { url: siteUrl } : {}),
      publisher: { "@id": personId },
    },
  ],
};

export default function Home() {
  return (
    <main className="canvas relative overflow-clip bg-white" id="home">
      <SiteHeader />
      <div id="main-content" tabIndex={-1}>
        <section
          className="hero"
          id="hero"
          aria-labelledby="hero-title"
          data-menu-content
        >
          <p className="intro">
            <span className="intro-mark" aria-hidden="true" />
            Hi, my name is Hammad and I am a freelance
          </p>
          <h1 className="headline" id="hero-title">
            <span className="headline-line headline-solid">FULL STACK DEV</span>
            <span className="headline-line headline-outline">
              &amp; AUTOMATION EXPERT
            </span>
          </h1>
          <p className="location">Available for remote work worldwide.</p>
          <div className="portrait pointer-events-none">
            <Image
              src="/assets/profile-pic.jpeg"
              alt="Hammad, freelance full stack developer and automation expert"
              width={1254}
              height={1254}
              sizes="(max-width: 767px) 111vw, (max-width: 1100px) calc(490px + 11.77vw), (max-width: 1509px) 53vw, 800px"
              preload
            />
          </div>
          <div className="headline-echo" aria-hidden="true">
            <span className="headline-line">FULL STACK DEV</span>
          </div>
          <div className="hero-actions">
            <a className="button button-dark" href={contactHref}>
              I need a developer
            </a>
            <a className="button button-outline" href={contactHref}>
              I need automation help
            </a>
          </div>
        </section>
        <div
          className={sectionStyles.sections}
          id="homepage-sections"
          data-menu-content
        >
          <SelectedWork />
          <Services />
          <About />
          <Experience />
          <ClientFeedback />
          <TechStack />
          <ContactCta />
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </main>
  );
}
