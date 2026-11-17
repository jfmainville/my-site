import { SITE_URL, about, contact, profile, projects } from "../content";
import { resume } from "../resume/resume";

export const dynamic = "force-static";

const name = `${profile.firstName} ${profile.lastName}`;

const body = [
  `# ${name}`,
  `> ${profile.pitch}`,
  about.paragraphs.join("\n\n"),
  `## Pages\n\n- [Home](${SITE_URL}). Projects, about, journey and contact.\n- [Resume](${SITE_URL}/resume). ${resume.title}, experience, skills and certifications.`,
  `## Projects\n\n${projects
    .map(
      ({ name, href, language, description }) =>
        `- [${name}](${href}). ${language}. ${description}`,
    )
    .join("\n")}`,
  `## Contact\n\n${contact.text}\n\n- [Email](mailto:${profile.email})\n${profile.links
    .map(({ label, href }) => `- [${label}](${href})`)
    .join("\n")}`,
].join("\n\n");

export const GET = () =>
  new Response(`${body}\n`, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
