import type { MetadataRoute } from "next";
import { projects } from "@/lib/portfolio";
import { absoluteUrl, siteUrl } from "@/lib/site-url";

// Homepage plus one detail route per project, straight from the project data.
export default function sitemap(): MetadataRoute.Sitemap {
  // Without a production origin there is no honest absolute URL to publish.
  if (!siteUrl) return [];

  const lastModified = new Date();

  return [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 1,
    },
    ...projects.flatMap((project) => {
      const url = absoluteUrl(`/projects/${project.slug}`);
      return url
        ? [
            {
              url,
              lastModified,
              changeFrequency: "monthly" as const,
              priority: 0.8,
            },
          ]
        : [];
    }),
  ];
}
