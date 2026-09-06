import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "./site-header";
import { ContactCta } from "./contact-cta";
import { SectionArrow } from "./section-arrow";
import { ToolIcon } from "./tool-icon";
import {
  getCategory,
  getOtherProjects,
  getProjectLinks,
  type Project,
} from "@/lib/portfolio";
import styles from "./project-detail.module.css";

const externalProps = { target: "_blank", rel: "noopener noreferrer" };

type InfoItem = { label: string; value: React.ReactNode };

/** 1 -> "01". Shared by the info panel, the section eyebrows and the features. */
const pad = (index: number) => String(index + 1).padStart(2, "0");

function PlainList({ items }: { items: string[] }) {
  return (
    <ul className={styles.plainList}>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

/**
 * Case-study snapshot for the showcase column. Every row is driven by a real
 * field, so a project with less confirmed metadata simply renders fewer rows
 * rather than showing an empty label.
 */
function ProjectInfoPanel({ project }: { project: Project }) {
  const category = getCategory(project.category);

  const items: InfoItem[] = [{ label: "Project", value: project.title }];
  if (category) items.push({ label: "Type", value: category.label });
  if (project.platform?.length) {
    items.push({ label: "Platform", value: project.platform.join(" / ") });
  }
  if (project.role) items.push({ label: "Role", value: project.role });
  if (project.services?.length) {
    items.push({
      label: "Services",
      value: <PlainList items={project.services} />,
    });
  }
  if (project.techStack?.length) {
    items.push({
      label: "Tools",
      value: (
        <ul className={styles.toolList}>
          {project.techStack.map((tool) => (
            <li key={tool}>
              <ToolIcon tool={tool} className={styles.toolIcon} />
              {tool}
            </li>
          ))}
        </ul>
      ),
    });
  }
  if (project.capabilities?.length) {
    items.push({
      label: "Key capabilities",
      value: <PlainList items={project.capabilities} />,
    });
  }
  if (project.year) items.push({ label: "Year", value: project.year });
  if (project.client) items.push({ label: "Client", value: project.client });
  if (project.status) items.push({ label: "Status", value: project.status });

  return (
    <div className={styles.panel}>
      <p className={styles.panelTitle}>Project snapshot</p>
      {project.summary ? (
        <p className={styles.panelSummary}>{project.summary}</p>
      ) : null}
      {/* Stretches to the image height, so its closing rule lands level. */}
      <dl className={styles.info}>
        {items.map((item, index) => (
          <div className={styles.infoRow} key={item.label}>
            <dt>
              <span className={styles.infoIndex} aria-hidden="true">
                {pad(index)}
              </span>
              {item.label}
            </dt>
            <dd>{item.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

function Showcase({ project }: { project: Project }) {
  const cover = project.desktopImage ?? project.thumbnail;
  const mobile = project.desktopImage ? project.mobileImage : undefined;
  if (!cover) return null;

  return (
    <div className={styles.showcaseMedia}>
      <Image
        className={`${styles.showcaseImage}${cover.fit === "contain" ? "" : ` ${styles.showcaseImageFill}`}`}
        src={cover.src}
        alt={cover.alt}
        width={cover.width}
        height={cover.height}
        sizes="(max-width: 900px) 88vw, 58vw"
        priority
      />
      {mobile ? (
        <span className={styles.showcasePhone}>
          <Image
            className={styles.showcasePhoneImage}
            src={mobile.src}
            alt={mobile.alt}
            width={mobile.width}
            height={mobile.height}
            sizes="(max-width: 900px) 90px, 150px"
          />
        </span>
      ) : null}
    </div>
  );
}

/** Numbered eyebrow plus the oversized solid/outlined section heading. */
function SectionHeading({
  index,
  label,
  lead,
  accent,
}: {
  index: string;
  label: string;
  lead: string;
  accent: string;
}) {
  return (
    <div className={styles.sectionHead}>
      <p className={styles.sectionNumber}>
        <span>{index}</span>
        {label}
      </p>
      <h2 className={styles.sectionHeading}>
        {lead}
        <span className={styles.outline}>{accent}</span>
      </h2>
    </div>
  );
}

function MoreProjects({ slug }: { slug: string }) {
  const others = getOtherProjects(slug);
  if (others.length === 0) return null;

  const lane = (clone: boolean) => (
    <ul
      className={styles.marqueeGroup}
      {...(clone ? { "aria-hidden": true } : { "aria-label": "More projects" })}
    >
      {others.map((project) => {
        const image = project.desktopImage ?? project.thumbnail;
        const category = getCategory(project.category);
        return (
          <li className={styles.marqueeItem} key={project.slug}>
            <Link
              className={styles.marqueeCard}
              href={`/projects/${project.slug}`}
              tabIndex={clone ? -1 : undefined}
            >
              <span className={styles.marqueeMedia}>
                {image ? (
                  <Image
                    className={styles.marqueeImage}
                    src={image.src}
                    alt=""
                    width={image.width}
                    height={image.height}
                    sizes="(max-width: 767px) 220px, 320px"
                  />
                ) : null}
              </span>
              <span className={styles.marqueeMeta}>
                <span className={styles.marqueeTitle}>{project.title}</span>
                {category ? (
                  <span className={styles.marqueeCategory}>
                    {category.shortLabel}
                  </span>
                ) : null}
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );

  return (
    <section className={styles.more} aria-labelledby="more-projects">
      <div className={styles.shell}>
        <p className={styles.eyebrow}>More projects</p>
        <h2 className={styles.moreHeading} id="more-projects">
          Explore more work.
        </h2>
      </div>
      <div className={styles.marquee}>
        <div className={styles.marqueeTrack}>
          {lane(false)}
          {lane(true)}
        </div>
      </div>
    </section>
  );
}

export function ProjectDetail({ project }: { project: Project }) {
  const category = getCategory(project.category);
  const links = getProjectLinks(project);
  const hasStory = Boolean(project.challenge || project.solution);

  // Numbering follows the sections that actually render, so there are no gaps.
  const order: string[] = [];
  if (project.overview) order.push("overview");
  if (project.challenge) order.push("challenge");
  if (project.solution) order.push("solution");
  if (project.features?.length) order.push("features");
  const number = (key: string) => pad(order.indexOf(key));

  return (
    <main className="canvas relative bg-white">
      <SiteHeader />
      <div id="main-content" tabIndex={-1} data-menu-content>
        <article className={styles.detail}>
          <header className={styles.hero}>
            <div className={styles.shell}>
              {category ? (
                <p className={styles.eyebrow}>{category.label}</p>
              ) : null}
              <h1 className={styles.title}>{project.title}</h1>
              <p className={styles.lead}>{project.shortDescription}</p>
            </div>
          </header>

          <section className={styles.showcase}>
            <div className={styles.shell}>
              <div className={styles.showcaseGrid}>
                <Showcase project={project} />
                <ProjectInfoPanel project={project} />
              </div>
            </div>
          </section>

          {links.length > 0 ? (
            <section className={styles.cta}>
              <div className={styles.shell}>
                {links.map((link) => (
                  <a
                    className={styles.ctaLink}
                    key={link.href}
                    href={link.href}
                    aria-label={link.accessibleName}
                    {...externalProps}
                  >
                    <span className={styles.ctaLabel}>{link.label}</span>
                    <span className={styles.ctaHost}>
                      {new URL(link.href).host.replace(/^www\./, "")}
                    </span>
                    <SectionArrow />
                  </a>
                ))}
              </div>
            </section>
          ) : null}

          {project.overview ? (
            <section className={styles.section}>
              <div className={styles.shell}>
                <div className={styles.splitGrid}>
                  <SectionHeading
                    index={number("overview")}
                    label="Overview"
                    lead="Project"
                    accent="Overview"
                  />
                  <div className={styles.splitBody}>
                    <p className={styles.bodyLead}>{project.overview}</p>
                  </div>
                </div>
              </div>
            </section>
          ) : null}

          {hasStory ? (
            <section className={styles.section}>
              <div className={styles.shell}>
                <div className={styles.storyGrid}>
                  {project.challenge ? (
                    <div className={styles.story}>
                      <SectionHeading
                        index={number("challenge")}
                        label="Challenge"
                        lead="The"
                        accent="Challenge"
                      />
                      <p className={styles.body}>{project.challenge}</p>
                    </div>
                  ) : null}
                  {project.solution ? (
                    <div className={styles.story}>
                      <SectionHeading
                        index={number("solution")}
                        label="Solution"
                        lead="The"
                        accent="Solution"
                      />
                      <p className={styles.body}>{project.solution}</p>
                    </div>
                  ) : null}
                </div>
              </div>
            </section>
          ) : null}

          {project.features?.length ? (
            <section className={styles.section}>
              <div className={styles.shell}>
                <SectionHeading
                  index={number("features")}
                  label="Key features"
                  lead="Key"
                  accent="Features"
                />
                {/* Titles only: the data carries no descriptions to show. */}
                <ol className={styles.features}>
                  {project.features.map((feature, index) => (
                    <li key={feature}>
                      <span className={styles.featureIndex} aria-hidden="true">
                        {pad(index)}
                      </span>
                      <span className={styles.featureText}>{feature}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </section>
          ) : null}

          <MoreProjects slug={project.slug} />
        </article>
        <ContactCta />
      </div>
    </main>
  );
}
