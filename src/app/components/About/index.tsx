import { about } from "../../content";
import SectionHeading from "../SectionHeading";
import styles from "./index.module.scss";

const About = () => (
  <section id="about" className={styles.About}>
    <div>
      <SectionHeading title={about.heading} />
      <div className={styles.Paragraphs}>
        {about.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </div>
    <dl className={styles.Stack}>
      {about.stack.map(({ group, items }) => (
        <div key={group}>
          <dt className={styles.Group}>{group.toLowerCase()}</dt>
          <dd className={styles.Items}>{items.join(" · ")}</dd>
        </div>
      ))}
    </dl>
  </section>
);

export default About;
