import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectDetail } from "@/components/project-detail";
import { getProject, projects } from "@/lib/portfolio";
import { siteUrl } from "@/lib/site-url";

type PageProps = { params: Promise<{ slug: string }> };

// The generated card at src/app/opengraph-image.tsx.
const FALLBACK_OG_IMAGE = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "Hammad Ahmad — Full Stack Developer & Automation Expert",
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  // Derived from project data only; nothing is written on the project's behalf.
  const canonical = `/projects/${project.slug}`;
  const image = project.desktopImage ?? project.thumbnail;
  const description = `${project.shortDescription} Built by Hammad Ahmad.`;
  const images = image
    ? [
        {
          url: image.src,
          width: image.width,
          height: image.height,
          alt: image.alt,
        },
      ]
    : [FALLBACK_OG_IMAGE];

  return {
    title: project.title,
    description,
    ...(siteUrl ? { alternates: { canonical } } : {}),
    openGraph: {
      type: "article",
      siteName: "Hammad Ahmad",
      title: project.title,
      description,
      ...(siteUrl ? { url: canonical } : {}),
      images,
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description,
      images,
    },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  // Ties each project to the same Person entity the homepage declares.
  const links = [
    project.liveUrl,
    ...(project.links ?? []).map((link) => link.href),
  ].filter(Boolean);
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.summary ?? project.shortDescription,
    ...(siteUrl ? { url: `${siteUrl}/projects/${project.slug}` } : {}),
    ...(links.length > 0 ? { sameAs: links } : {}),
    creator: {
      "@type": "Person",
      ...(siteUrl ? { "@id": `${siteUrl}/#person` } : {}),
      name: "Hammad Ahmad",
    },
    ...(project.clientReview
      ? {
          review: {
            "@type": "Review",
            reviewBody: project.clientReview.quote,
            author: { "@type": "Person", name: project.clientReview.name },
          },
        }
      : {}),
  };

  return (
    <>
      <ProjectDetail project={project} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </>
  );
}
