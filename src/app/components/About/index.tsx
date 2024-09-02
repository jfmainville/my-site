import styles from "./index.module.scss";
import Image from "next/image";

const About = () => {
  return (
    <section id={"about"} className={styles.About}>
      <h1 className={styles.TextHeading}>About</h1>
      <div className={styles.AboutSection}>
        <p className={styles.AboutSectionText}>
          I am an experienced professional with expertise in cloud security,
          DevOps, and system administration. My career spans roles as a Cloud
          Security Specialist, Technical Product Owner, DevOps Specialist,
          Security Analyst, and System Administrator across diverse
          environments. I excel in designing and implementing secure IT
          solutions, automating processes, and optimizing performance to
          strengthen operational resilience and meet business objectives.
        </p>
        <Image src="/images/profile.png" width={500} height={500} alt="" />
      </div>
    </section>
  );
};

export default About;
