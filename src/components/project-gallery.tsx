"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  projects,
  projectCategories,
  type Project,
  type ProjectCategory,
} from "@/lib/portfolio";
import { SectionArrow } from "./section-arrow";
import styles from "./homepage-sections.module.css";

function ProjectPreview({ project }: { project: Project }) {
  // A live site shows its real desktop capture, with the matching mobile view
  // paired for the hover reveal. Everything else keeps its existing preview.
  const cover = project.desktopImage ?? project.thumbnail;
  const mobile = project.desktopImage ? project.mobileImage : undefined;

  if (cover) {
    return (
      <div
        className={`${styles.projectPreview}${mobile ? ` ${styles.projectDuo}` : ""}`}
      >
        <Image
          src={cover.src}
          alt={cover.alt}
          width={cover.width}
          height={cover.height}
          sizes="(max-width: 767px) 88vw, (max-width: 900px) 44vw, (max-width: 1600px) 30vw, 480px"
          className={styles.projectImage}
          style={
            mobile
              ? undefined
              : {
                  objectFit: cover.fit,
                  objectPosition: cover.fit ? "center" : undefined,
                }
          }
        />
        {mobile ? (
          <span className={styles.projectPhone}>
            <Image
              src={mobile.src}
              alt={mobile.alt}
              width={mobile.width}
              height={mobile.height}
              sizes="(max-width: 900px) 120px, 160px"
              className={styles.projectPhoneImage}
            />
          </span>
        ) : null}
      </div>
    );
  }

  return (
    <div
      className={`${styles.projectPreview} ${project.category === "apps" ? styles.dashboard : project.category === "automation" ? styles.workflow : styles.storefront}`}
      role="img"
      aria-label={`${project.title} neutral layout placeholder; final project screenshot to be added`}
    >
      <div className={styles.previewWindow} aria-hidden="true">
        <div className={styles.previewBar}>
          <span>{project.title}</span>
          <span className={styles.windowDots}>
            <i />
            <i />
            <i />
          </span>
        </div>
        {project.category === "apps" ? (
          <div className={styles.dashboardLayout}>
            <div className={styles.previewSidebar}>
              <i />
              <i />
              <i />
              <i />
            </div>
            <div className={styles.dashboardBody}>
              <span className={styles.skeletonHeading} />
              <div className={styles.previewTiles}>
                <i />
                <i />
                <i />
              </div>
              <div className={styles.previewRows}>
                <i />
                <i />
                <i />
                <i />
              </div>
            </div>
          </div>
        ) : project.category === "automation" ? (
          <div className={styles.workflowLayout}>
            <div className={styles.workflowNodes}>
              <i />
              <span />
              <i />
              <span />
              <i />
            </div>
            <div className={styles.workflowBranch} />
            <div className={styles.workflowNodes}>
              <i />
              <span />
              <i />
            </div>
          </div>
        ) : (
          <div className={styles.storeLayout}>
            <div className={styles.storeHeading}>
              Website
              <br />
              preview.
            </div>
            <div className={styles.storeProducts}>
              <i />
              <i />
              <i />
            </div>
            <div className={styles.storeLines}>
              <i />
              <i />
              <i />
            </div>
          </div>
        )}
      </div>
      <span className={styles.placeholderCaption}>
        PROJECT PREVIEW / COMING SOON
      </span>
    </div>
  );
}

function ProjectItem({
  project,
  number,
}: {
  project: Project;
  number: number;
}) {
  const href = `/projects/${project.slug}`;

  return (
    <article className={styles.project}>
      <Link
        className={styles.projectCover}
        href={href}
        tabIndex={-1}
        aria-hidden="true"
      >
        <ProjectPreview project={project} />
      </Link>
      <div className={styles.projectInfo}>
        <div className={styles.projectMeta}>
          <span>
            {String(number).padStart(2, "0")} /{" "}
            {
              projectCategories.find((item) => item.id === project.category)
                ?.shortLabel
            }
          </span>
        </div>
        <h3 className={styles.projectTitle}>{project.title}</h3>
        {project.shortDescription ? (
          <p className={styles.projectDescription}>
            {project.shortDescription}
          </p>
        ) : null}
        <Link
          className={styles.projectAction}
          href={href}
          aria-label={`View the ${project.title} project`}
        >
          View project <SectionArrow />
        </Link>
      </div>
    </article>
  );
}

export function ProjectGallery() {
  const [category, setCategory] = useState<ProjectCategory>("web");
  // Every project in the chosen category renders in one continuous grid.
  const categoryProjects = projects.filter(
    (project) => project.category === category,
  );

  // A service row elsewhere on the page can open this gallery on its own
  // category. The link keeps working without JS; this only upgrades the jump.
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const link = (
        event.target as HTMLElement | null
      )?.closest<HTMLAnchorElement>("a[data-project-category]");
      const requested = link?.dataset.projectCategory;
      if (!requested) return;

      const match = projectCategories.find((item) => item.id === requested);
      if (!match) return;

      event.preventDefault();
      setCategory(match.id);

      const reduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      document.getElementById("projects")?.scrollIntoView({
        behavior: reduced ? "auto" : "smooth",
        block: "start",
      });
      window.history.replaceState(null, "", "#projects");
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return (
    <>
      <div
        className={styles.categoryFilters}
        data-reveal
        role="group"
        aria-label="Filter projects by category"
      >
        {projectCategories.map((item) => (
          <button
            type="button"
            key={item.id}
            className={styles.categoryButton}
            aria-pressed={category === item.id}
            aria-controls="project-results"
            onClick={() => setCategory(item.id)}
          >
            {item.label}
          </button>
        ))}
      </div>
      <p className="sr-only" role="status">
        {projectCategories.find((item) => item.id === category)?.label}: showing{" "}
        {categoryProjects.length} projects.
      </p>
      <div className={styles.projectGrid} id="project-results" data-reveal>
        {categoryProjects.map((project, index) => (
          <ProjectItem
            key={project.slug}
            project={project}
            number={index + 1}
          />
        ))}
      </div>
      {categoryProjects.length === 0 && (
        <p className={styles.sectionIntro}>
          Projects in this category will be added soon.
        </p>
      )}
    </>
  );
}
