import { GITHUB_URL, projects, type ProjectDetail } from "../../content";
import Arrow from "../Arrow";
import Badge from "../Badge";
import SectionHeading from "../SectionHeading";
import styles from "./index.module.scss";

const Detail = ({ detail }: { detail: ProjectDetail }) =>
  detail.kind === "palette" ? (
    <div className={styles.Palette} aria-label="Colorscheme palette">
      {detail.colors.map((color) => (
        <span key={color} style={{ background: color }} title={color} />
      ))}
    </div>
  ) : (
    <p className={styles.Code}>{detail.text}</p>
  );

const Projects = () => (
  <section id="projects" className={styles.Projects}>
    <div className={styles.Header}>
      <SectionHeading command="ls ~/projects" title="Things I'm building." />
      <a
        href={GITHUB_URL}
        target="_blank"
        rel="noreferrer"
        className={styles.GithubLink}
      >
        {GITHUB_URL.replace("https://", "")}
        <Arrow direction="up-right" />
      </a>
    </div>
    <ul className={styles.Grid}>
      {projects.map((project) => (
        <li key={project.href} className={styles.Item}>
          <a
            href={project.href}
            target="_blank"
            rel="noreferrer"
            className={styles.Card}
          >
            <div className={styles.CardHeader}>
              <div>
                <div className={styles.TitleRow}>
                  <h3 className={styles.Name}>{project.name}</h3>
                  {project.note && <Badge>{project.note}</Badge>}
                </div>
                <p className={styles.Type}>{project.type}</p>
              </div>
              <span className={styles.CardArrow}>
                <Arrow direction="up-right" size="md" />
              </span>
            </div>
            <p className={styles.Description}>{project.description}</p>
            <Detail detail={project.detail} />
          </a>
        </li>
      ))}
    </ul>
  </section>
);

export default Projects;
