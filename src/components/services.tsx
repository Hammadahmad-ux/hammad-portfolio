import { services } from "@/lib/portfolio";
import { SectionArrow } from "./section-arrow";
import styles from "./homepage-sections.module.css";

export function Services() {
  return (
    <section
      className={styles.services}
      id="services"
      aria-labelledby="services-title"
    >
      <div className={styles.shell}>
        <p className={styles.eyebrow}>02 / WHAT I DO</p>
        <h2 className={styles.servicesHeading} id="services-title" data-reveal>
          I build digital
          <br />
          <span className={styles.outline}>experiences that work.</span>
        </h2>
        <div className={styles.serviceList}>
          {services.map((service) => (
            // The whole row links to Selected Work; the gallery reads the
            // category off the link and switches its filter to match.
            <a
              className={styles.serviceRow}
              data-reveal
              href="#projects"
              data-project-category={service.category}
              key={service.number}
            >
              <span className={styles.serviceNumber}>{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <SectionArrow />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
