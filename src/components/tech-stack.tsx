import { techLanes } from "@/lib/tech-stack";
import styles from "./homepage-sections.module.css";

export function TechStack() {
  return (
    <section
      className={styles.techStack}
      id="tech-stack"
      aria-labelledby="tech-title"
      data-header-dark
    >
      <div className={styles.shell}>
        <p className={styles.eyebrow}>05 / TECH STACK</p>
        <h2 className={styles.techHeading} id="tech-title" data-reveal>
          Tools I build with.
        </h2>
      </div>
      {techLanes.map((lane, index) => (
        <div
          key={lane.id}
          className={`${styles.marquee}${index === 1 ? ` ${styles.marqueeReverse}` : ""}`}
          data-reveal
        >
          <div className={styles.marqueeTrack}>
            <ul className={styles.marqueeGroup} aria-label={lane.label}>
              {lane.items.map((item) => (
                <li className={styles.marqueeItem} key={item}>
                  {item}
                </li>
              ))}
            </ul>
            {/* Second pass only exists to close the loop seamlessly. */}
            <ul
              className={`${styles.marqueeGroup} ${styles.marqueeClone}`}
              aria-hidden="true"
            >
              {lane.items.map((item) => (
                <li className={styles.marqueeItem} key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </section>
  );
}
