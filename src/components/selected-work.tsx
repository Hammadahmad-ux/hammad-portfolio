import { ProjectGallery } from "./project-gallery";
import styles from "./homepage-sections.module.css";

export function SelectedWork() {
  return (
    <section
      className={`${styles.shell} ${styles.selectedWork}`}
      id="projects"
      aria-labelledby="work-title"
    >
      <div className={styles.sectionHeading} data-reveal>
        <p className={styles.eyebrow}>01 / SELECTED WORK</p>
        <h2 className={styles.displayHeading} id="work-title">
          Selected <span className={styles.outline}>Projects</span>
        </h2>
        <p className={styles.sectionIntro}>
          Websites, applications and automation systems. Explore the work by
          discipline.
        </p>
      </div>
      <ProjectGallery />
    </section>
  );
}
