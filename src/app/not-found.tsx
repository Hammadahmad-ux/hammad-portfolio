import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SectionArrow } from "@/components/section-arrow";
import styles from "./not-found.module.css";

export const metadata: Metadata = {
  title: "Page not found",
  description: "The page you are looking for does not exist or may have moved.",
};

export default function NotFound() {
  return (
    <main className="canvas relative">
      <SiteHeader />
      <div id="main-content" tabIndex={-1} data-menu-content>
        <section className={styles.notFound}>
          <div className={styles.shell}>
            <p className={styles.eyebrow}>404 / Not found</p>
            <h1 className={styles.title}>
              Wrong
              <span>turn?</span>
            </h1>
            <p className={styles.lead}>
              The page you&apos;re looking for doesn&apos;t exist or may have
              moved.
            </p>
            <div className={styles.actions}>
              <Link className={styles.action} href="/">
                Back home
                <SectionArrow />
              </Link>
              <Link className={styles.action} href="/#projects">
                View projects
                <SectionArrow />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
