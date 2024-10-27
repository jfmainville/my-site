import styles from "./index.module.scss";
import bg from "../../../../public/images/roadmap.jpg";
import Image from "next/image";
import Link from "next/link";

const Experience = () => {
  return (
    <section
      id={"experience"}
      className={styles.Experience}
      style={{
        backgroundImage: `url(${bg.src})`,
        width: "100%",
        height: "auto",
      }}
    >
      <h1 className={styles.TextHeading}>Experience</h1>
      <div className={styles.ExperienceSection}>
        <div className={styles.ExperienceSectionEntryLeft}>
          <Image
            src="/images/cgi_logo.jpg"
            width={50}
            height={50}
            alt=""
            style={{
              height: "auto",
              margin: "0 0 1rem 0",
            }}
          />
          <p className={styles.ExperienceSectionEntryPeriod}>2013-2017</p>
          <p className={styles.ExperienceSectionEntryRole}>
            System Administrator
          </p>
          <p>
            As a System Administrator within the Microsoft Center of Expertise
            (MCoE) business unit, I specialized in managing Windows Server,
            SharePoint, SQL Server, and Microsoft Azure environments to ensure
            optimal performance and security
          </p>
        </div>
        <div className={styles.ExperienceSectionEntryCircle}></div>
        <div className={styles.ExperienceSectionEntryLine}></div>
        <div style={{ left: "10rem" }} />
        <div>
          <div className={styles.ExperienceSectionEntryCircle}></div>
          <div className={styles.ExperienceSectionEntryLineRight}></div>
        </div>
        <div className={styles.ExperienceSectionEntryRight}>
          <Image
            src="/images/cgi_logo.jpg"
            width={50}
            height={50}
            alt=""
            style={{
              height: "auto",
              margin: "0 0 1rem 0",
            }}
          />
          <p className={styles.ExperienceSectionEntryPeriod}>2013-2017</p>
          <p className={styles.ExperienceSectionEntryRole}>Security Analyst</p>
          <p>
            As a Security Analyst within the GTO business unit, I specialized in
            email security and monitoring to mitigate security risks
          </p>
        </div>
        <div className={styles.ExperienceSectionEntryLeft}>
          <Image
            src="/images/scfj_logo.jpg"
            width={50}
            height={50}
            alt=""
            style={{
              height: "auto",
              margin: "0 0 1rem 0",
            }}
          />
          <p className={styles.ExperienceSectionEntryPeriod}>2018-2019</p>
          <p className={styles.ExperienceSectionEntryRole}>
            Full-Stack Developer
          </p>
          <p>
            As a Full-Stack Developer, I developed an internal web application
            to streamline the time-tracking process for freelancers at SCFJ
          </p>
        </div>
        <div className={styles.ExperienceSectionEntryCircle}></div>
        <div className={styles.ExperienceSectionEntryLine}></div>
        <div style={{ left: "10rem" }} />
        <div>
          <div className={styles.ExperienceSectionEntryCircle}></div>
          <div className={styles.ExperienceSectionEntryLineRight}></div>
        </div>
        <div className={styles.ExperienceSectionEntryRight}>
          <Image
            src="/images/intact_logo.jpg"
            width={50}
            height={50}
            alt=""
            style={{
              height: "auto",
              margin: "0 0 1rem 0",
            }}
          />
          <p className={styles.ExperienceSectionEntryPeriod}>2019-2021</p>
          <p className={styles.ExperienceSectionEntryRole}>DevOps Specialist</p>
          <p>
            As a DevOps Specialist in the identity and access management (IAM)
            team, I contributed to enhancing the efficiency and security of the
            IAM infrastructure
          </p>
        </div>
        <div className={styles.ExperienceSectionEntryLeft}>
          <Image
            src="/images/intact_logo.jpg"
            width={50}
            height={50}
            alt=""
            style={{
              height: "auto",
              margin: "0 0 1rem 0",
            }}
          />
          <p className={styles.ExperienceSectionEntryPeriod}>2021-2022</p>
          <p className={styles.ExperienceSectionEntryRole}>
            Technical Product Owner
          </p>
          <p>
            As a Technical Product Owner in the security operations team, I lead
            my team in implementing and maintaining solutions to enhance
            Intact&apos;s security posture
          </p>
        </div>
        <div className={styles.ExperienceSectionEntryCircle}></div>
        <div className={styles.ExperienceSectionEntryLine}></div>
        <div style={{ left: "10rem" }} />
        <div>
          <div className={styles.ExperienceSectionEntryCircle}></div>
        </div>
        <div className={styles.ExperienceSectionEntryRight}>
          <Image
            src="/images/pixmob_logo.jpg"
            width={50}
            height={50}
            alt=""
            style={{
              height: "auto",
              margin: "0 0 1rem 0",
            }}
          />
          <p className={styles.ExperienceSectionEntryPeriod}>2022-Present</p>
          <p className={styles.ExperienceSectionEntryRole}>
            DevSecOps Specialist
          </p>
          <p>
            As the lead DevSecOps Specialist within the Software team, I
            designed and implemented the cloud infrastructure hosted on the
            Google Cloud Platform (GCP) and established robust security
            guidelines and infrastructure
          </p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "3rem 0 3rem 0",
          textDecoration: "underline",
        }}
      >
        <Link className={styles.Link} href={"/resume"}>
          See my full resume
        </Link>
      </div>
    </section>
  );
};

export default Experience;
