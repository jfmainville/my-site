/**
 * @jest-environment node
 */
import { GET } from "./llms.txt/route";
import robots from "./robots";
import sitemap from "./sitemap";
import { SITE_URL, profile, projects } from "./content";

describe("crawler files", () => {
  it("allows all crawlers and points to the sitemap", () => {
    expect(robots()).toMatchObject({
      rules: { userAgent: "*", allow: "/" },
      sitemap: `${SITE_URL}/sitemap.xml`,
    });
  });

  it("lists every page in the sitemap", () => {
    expect(sitemap().map(({ url }) => url)).toEqual([
      SITE_URL,
      `${SITE_URL}/resume`,
    ]);
  });

  it("serves llms.txt as plain text built from the site content", async () => {
    const response = GET();
    const text = await response.text();

    expect(response.headers.get("Content-Type")).toContain("text/plain");
    expect(text).toMatch(`# ${profile.firstName} ${profile.lastName}`);
    expect(text).toContain(`${SITE_URL}/resume`);
    projects.forEach(({ href }) => expect(text).toContain(href));
  });
});
