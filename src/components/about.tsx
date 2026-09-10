import Image from "next/image";
import { projects, projectCategories } from "@/lib/portfolio";
import { SectionArrow } from "./section-arrow";
import styles from "./homepage-sections.module.css";

// Counted from the site's own data: the year given for the SadaWorks role,
// the project list and the category list. No estimates.
const SINCE = 2022;
const years = new Date().getFullYear() - SINCE;

const stats = [
  { value: `${years}+`, label: "Years of Experience" },
  { value: String(projects.length), label: "Projects Featured" },
  {
    value: String(projectCategories.length),
    label: "Disciplines: Web, Apps & Automation",
  },
];

function PinIcon() {
  return (
    <svg
      className={styles.aboutPin}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2.2a7 7 0 0 0-7 7c0 5 7 12.6 7 12.6S19 14.2 19 9.2a7 7 0 0 0-7-7zm0 9.6a2.6 2.6 0 1 1 0-5.2 2.6 2.6 0 0 1 0 5.2z" />
    </svg>
  );
}

export function About() {
  return (
    <section className={styles.about} id="about" aria-labelledby="about-title">
      <div className={`${styles.shell} ${styles.aboutInner}`}>
        <p className={styles.eyebrow}>03 / ABOUT</p>
        {/* Statement, portrait, figures — and that is the mobile order too. */}
        <div className={styles.aboutGrid} data-reveal="stagger">
          <div className={styles.aboutMain}>
            <h2 className={styles.aboutHeading} id="about-title">
              About
              <span className={styles.outline}>Me</span>
            </h2>
            <p className={styles.aboutCopy}>
              I&apos;m a full stack developer and automation builder who works
              across websites, web and mobile applications, and the AI-driven
              systems behind them. Most projects start as a business problem
              rather than a design file, and I take them from requirements
              through to deployment and the support that follows.
            </p>
            <a className={styles.aboutCta} href="#experience">
              More About Me
              <SectionArrow />
            </a>
          </div>

          <figure className={styles.aboutPortrait}>
            <Image
              className={styles.aboutPortraitImage}
              src="/assets/about-pic.webp"
              alt="Hammad Ahmad, full stack developer and automation expert"
              width={1100}
              height={1100}
              sizes="(max-width: 900px) 84vw, (max-width: 1100px) 34vw, 420px"
            />
          </figure>

          <dl className={styles.aboutStats}>
            {stats.map((stat) => (
              <div className={styles.aboutStat} key={stat.label}>
                <dt className={styles.aboutStatValue}>{stat.value}</dt>
                <dd className={styles.aboutStatLabel}>{stat.label}</dd>
              </div>
            ))}
            <div className={`${styles.aboutStat} ${styles.aboutStatPlace}`}>
              <dt>
                <PinIcon />
                <span className="sr-only">Location</span>
              </dt>
              <dd className={styles.aboutStatLabel}>
                Working Worldwide
                <span>Available for remote work</span>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
