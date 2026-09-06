import Image from "next/image";
import styles from "./homepage-sections.module.css";

// Verified, user-supplied role. No additional entries, numbers or claims.
const highlights = [
  "Full-stack web and mobile application development",
  "AI voice agents and workflow automation",
  "Backend systems and integrations using Firebase, Supabase and n8n",
  "End-to-end delivery from requirements and architecture through deployment and support",
];

export function Experience() {
  return (
    <section
      className={styles.experience}
      id="experience"
      aria-labelledby="experience-title"
    >
      <div className={styles.shell}>
        <p className={styles.eyebrow}>04 / EXPERIENCE</p>
        <h2
          className={styles.experienceHeading}
          id="experience-title"
          data-reveal
        >
          Experience
        </h2>
        <ol className={styles.experienceList}>
          <li className={styles.experienceRow} data-reveal>
            <div className={styles.experienceAside}>
              <Image
                className={styles.experienceLogo}
                src="/assets/sadaworks-logo.png"
                alt=""
                width={716}
                height={727}
                sizes="(max-width: 767px) 72px, (max-width: 1100px) 108px, 140px"
              />
              <p className={styles.experienceDate}>Mar 2024 — Present</p>
            </div>
            <div className={styles.experienceMain}>
              <h3 className={styles.experienceRole}>
                Full-Stack Developer
                <span className={styles.outline}>
                  &amp; AI Automation Builder
                </span>
              </h3>
              <p className={styles.experienceCompany}>SadaWorks</p>
            </div>
            <div className={styles.experienceDetail}>
              <p className={styles.experienceSummary}>
                Building web applications, mobile products and AI-powered
                automation systems for businesses from requirements through
                deployment and support.
              </p>
              <ul className={styles.experienceHighlights}>
                {highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
          </li>
        </ol>
      </div>
    </section>
  );
}
