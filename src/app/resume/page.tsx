import type { Metadata } from "next";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Prompt from "../components/Prompt";
import { SITE_URL, profile } from "../content";
import PrintButton from "./PrintButton";
import { experience, resume } from "./resume";
import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: `Resume · ${profile.firstName} ${profile.lastName}`,
};

const contactLinks = [
  { label: SITE_URL.replace("https://", ""), href: SITE_URL },
  { label: profile.email, href: `mailto:${profile.email}` },
  ...profile.links,
];

const SideList = ({ title, items }: { title: string; items: string[] }) => (
  <div>
    <h2 className={styles.SideTitle}>{title}</h2>
    <ul className={styles.SideList}>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  </div>
);

const ResumePage = () => (
  <>
    <Nav />
    <main className={styles.Resume}>
      <header className={styles.Header}>
        <div>
          <Prompt>cat ~/resume.md</Prompt>
          <h1 className={styles.Name}>
            {profile.firstName} {profile.lastName}
            <span className={styles.Accent}>.</span>
          </h1>
          <p className={styles.Title}>{resume.title}</p>
        </div>
        <div className={styles.Print}>
          <PrintButton />
        </div>
      </header>
      <div className={styles.Layout}>
        <div>
          <section>
            <h2 className={styles.SectionTitle}>Profile</h2>
            <p className={styles.Profile}>{resume.profile}</p>
          </section>
          <section className={styles.Experience}>
            <h2 className={styles.SectionTitle}>Experience</h2>
            <ol>
              {experience.map((role) => (
                <li key={role.title + role.dates} className={styles.Entry}>
                  <h3 className={styles.RoleTitle}>{role.title}</h3>
                  <p className={styles.RoleMeta}>
                    {role.company} · {role.location} · {role.dates}
                  </p>
                  <p className={styles.RoleSummary}>{role.summary}</p>
                  <ul className={styles.Highlights}>
                    {role.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                  {role.environments && (
                    <p className={styles.Environments}>
                      {role.environments.join(" · ")}
                    </p>
                  )}
                </li>
              ))}
            </ol>
          </section>
        </div>
        <aside className={styles.Aside}>
          <div>
            <h2 className={styles.SideTitle}>Contact</h2>
            <ul className={styles.SideList}>
              {contactLinks.map(({ label, href }) => (
                <li key={href}>
                  <a href={href} className={styles.Link}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <SideList title="Skills" items={resume.skills} />
          <SideList title="Education" items={resume.education} />
          <SideList title="Certifications" items={resume.certifications} />
        </aside>
      </div>
    </main>
    <Footer />
  </>
);

export default ResumePage;
