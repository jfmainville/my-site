import type { MetadataRoute } from "next";
import { SITE_URL } from "./content";

export const dynamic = "force-static";

const robots = (): MetadataRoute.Robots => ({
  rules: { userAgent: "*", allow: "/" },
  sitemap: `${SITE_URL}/sitemap.xml`,
  host: SITE_URL,
});

export default robots;
