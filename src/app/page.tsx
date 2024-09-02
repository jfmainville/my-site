import styles from "./page.module.scss";
import bg from "../../public/images/roadmap.jpg";
import Image from "next/image";

const Home = () => {
  return (
    <main className={styles.Main}>
      <div id={"home"} className={styles.Home}>
        <Image
          src="/images/bromont.png"
          width={0}
          height={0}
          sizes="100vw"
          alt=""
          style={{ width: "100%", height: "auto" }}
        />
        <h1 className={styles.TextHeading} style={{ position: "absolute" }}>
          Hey, I'm Jean-Frederic, welcome to my site! 🔥
        </h1>
      </div>
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
            <p className={styles.ExperienceSectionEntryRole}>
              Security Analyst
            </p>
            <p>
              As a Security Analyst within the GTO business unit, I specialized
              in email security and monitoring to mitigate security risks
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
            <p className={styles.ExperienceSectionEntryRole}>
              DevOps Specialist
            </p>
            <p>
              As a DevOps Specialist in the identity and access management (IAM)
              team, I contributed to enhancing the efficiency and security of
              the IAM infrastructure
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
              As a Technical Product Owner in the security operations team, I
              lead my team in implementing and maintaining solutions to enhance
              Intact's security posture
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
              Cloud Security Specialist
            </p>
            <p>
              As the lead Cloud Security Specialist within the Software team, I
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
          <h4>See my full resume</h4>
        </div>
      </section>
      <section id={"contact"} className={styles.Contact}>
        <h1 className={styles.TextHeading}>Contact</h1>
        <div className={styles.ContactSection}>
          <div className={styles.ContactSectionHeader}>
            <h2 className={styles.TextHeading}>
              Looking forward to hearing from you!
            </h2>{" "}
          </div>
          <div className={styles.ContactSectionForm}>
            <form action="">
              <label htmlFor="first_name">First Name</label>
              <input
                className={styles.Input}
                id="first_name"
                required={true}
                type="text"
              />
              <label htmlFor="last_name">Last Name</label>
              <input
                className={styles.Input}
                id="last_name"
                required={true}
                type="text"
              />
              <label htmlFor="email">Email</label>
              <input
                className={styles.Input}
                id="email"
                required={true}
                type="email"
              />
              <label htmlFor="last_name">Phone</label>
              <input className={styles.Input} id="phone" type="text" />
              <input
                className={styles.SubmitButton}
                name="Submit"
                type="submit"
              />
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
