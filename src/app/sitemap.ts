import type { MetadataRoute } from "next";
import { SITE_URL } from "./content";

export const dynamic = "force-static";

const sitemap = (): MetadataRoute.Sitemap => [
  { url: SITE_URL, changeFrequency: "monthly", priority: 1 },
  { url: `${SITE_URL}/resume`, changeFrequency: "monthly", priority: 0.8 },
];

export default sitemap;
