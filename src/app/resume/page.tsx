import styles from "./page.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

const ResumePage = () => {
  return (
    <section className={styles.Main}>
      <div className={styles.Sidebar}>
        <div className={styles.Contact}>
          <h2>Contact</h2>
          <div className={styles.ContactEntry}>
            <FontAwesomeIcon icon={faGlobe} width="20" height="20" />
            <p className={styles.ContactEntryText}>
              <Link href="https://jfmainville.me">My Site</Link>
            </p>
          </div>
          <div className={styles.ContactEntry}>
            <FontAwesomeIcon icon={faEnvelope} width="20" height="20" />
            <p className={styles.ContactEntryText}>
              <Link href="mailto:jfmainville@outlook.com">Email</Link>
            </p>
          </div>
          <div className={styles.ContactEntry}>
            <FontAwesomeIcon icon={faLinkedin} width="20" height="20" />
            <p className={styles.ContactEntryText}>
              <Link href="https://www.linkedin.com/in/jean-frederic-mainville-8566b485/">
                LinkedIn
              </Link>
            </p>
          </div>
          <div className={styles.ContactEntry}>
            <FontAwesomeIcon icon={faGithub} width="20" height="20" />
            <p className={styles.ContactEntryText}>
              <Link href="https://github.com/jfmainville">GitHub</Link>
            </p>
          </div>
        </div>
        <div className={styles.Skills}>
          <h2>Skills</h2>
          <ul className={styles.SkillsList}>
            <li>Information Security</li>
            <li>Cloud Infrastructure</li>
            <li>DevOps</li>
            <li>Software Development Security</li>
            <li>Software Development</li>
          </ul>
        </div>
        <div className={styles.Education}>
          <h2>Education</h2>
          <ul className={styles.EducationList}>
            <li>Polytechnique Montreal / Bachelor of Science (B Sc.)</li>
            <li>Polytechnique Montreal / Certificate in Cyberinvestigation</li>
            <li>Polytechnique Montreal / Certificate in Cybersecurity</li>
            <li>HEC Montreal / Certificate in E-Commerce</li>
            <li>UQAM / Certificate in General Accounting</li>
          </ul>
        </div>
        <div className={styles.Certifications}>
          <h2>Certifications</h2>
          <ul className={styles.CertificationsList}>
            <li>Certified Information Systems Security Professional (CISSP)</li>
            <li>GCP Professional Cloud Architect Certification</li>
            <li>AWS Certified Solutions Architect – Associate</li>
          </ul>
        </div>
      </div>
      <div className={styles.Page}>
        <div id="Navigation" className={styles.Navigation}>
          <Link href={"/"}>Back to the home page</Link>
        </div>
        <div className={styles.Resume}>
          <div className={styles.Header}>
            <h1>Jean-Frederic Mainville</h1>
            <h2>Cloud Security Specialist</h2>
          </div>
          <div className={styles.Profile}>
            <h2>Profile</h2>
            <p>
              I am an experienced professional with expertise in cloud security,
              DevOps, and system administration. My career spans roles as a
              Cloud Security Specialist, Technical Product Owner, DevOps
              Specialist, Security Analyst, and System Administrator across
              diverse environments. I excel in designing and implementing secure
              IT solutions, automating processes, and optimizing performance to
              strengthen operational resilience and meet business objectives.
            </p>
          </div>
          <div className={styles.WorkExperience}>
            <h2>Work Experience</h2>
            <div className={styles.WorkExperienceEntry}>
              <h3 className={styles.WorkExperienceEntryRole}>
                Cloud Security Specialist
              </h3>
              <p style={{ marginBottom: "1rem" }}>
                PixMob / Montreal, Quebec, Canada / July 2022 - Now
              </p>
              <p>
                As the lead Cloud Security Specialist within the Software team,
                I designed and implemented the cloud infrastructure hosted on
                the Google Cloud Platform (GCP) and established robust security
                guidelines and infrastructure:
              </p>
              <ul className={styles.WorkExperienceEntryList}>
                <li>
                  Created and executed a strategic security roadmap to improve
                  the security posture and address existing gaps, ensuring
                  alignment with business objectives and regulatory requirements
                </li>
                <li>
                  Designed and deployed GitLab CI pipelines to automate the
                  deployment of services within our cloud infrastructure,
                  improving the software development life cycle
                </li>
                <li>
                  Implemented security best practices and fortified our cloud
                  infrastructure, as well as other solutions in our portfolio,
                  to mitigate potential risks and vulnerabilities
                </li>
                <li>
                  Deployed and integrated advanced security application testing
                  mechanisms, including secret detection and Static Application
                  Security Testing (SAST), to proactively identify and address
                  security vulnerabilities
                </li>
                <li>
                  Conducted regular security assessments, vulnerability scans,
                  and penetration testing to identify and remediate security
                  weaknesses, ensuring continuous compliance with industry
                  standards and best practices
                </li>
                <li>
                  Established monitoring and incident response protocols to
                  detect, respond to, and recover from security incidents,
                  minimizing potential impacts
                </li>
              </ul>
              <p style={{ marginTop: "1rem", marginBottom: "1rem" }}>
                Environments
              </p>
              <p>
                Google Cloud Platform (GCP), Google Kubernetes Engine (GKE),
                Datadog, Security Command Center, Cloud Run, Cloud SQL, MongoDB
                Atlas, PostgreSQL, Terraform, Ansible, GitLab, GitLab CI, Amazon
                Web Services (AWS), Javascript, Typescript, Next.js, React,
                Express.js, Python, Docker, Jira
              </p>
            </div>
            <div className={styles.WorkExperienceEntry}>
              <h3 className={styles.WorkExperienceEntryRole}>
                Technical Product Owner
              </h3>
              <p style={{ marginBottom: "1rem" }}>
                Intact / Sainte-Hyacinthe, Quebec, Canada / August 2021 - June
                2022
              </p>
              <p>
                As a Technical Product Owner in the security operations team, I
                lead my team in implementing and maintaining solutions to
                enhance Intact&apos;s security posture:{" "}
              </p>
              <ul className={styles.WorkExperienceEntryList}>
                <li>
                  Created and executed a strategic security roadmap to improve
                  the security posture and address existing gaps, ensuring
                  alignment with business objectives and regulatory requirements
                </li>
                <li>
                  Worked with internal and external auditors to design and
                  implement necessary security controls, ensuring compliance
                  with industry standards and best practices
                </li>
                <li>
                  Collaborated with the architecture team to design and optimize
                  the existing SIEM infrastructure, enhancing detection and
                  response capabilities
                </li>
                <li>
                  Partnered closely with the security incident response team
                  (SIRT) to ensure our SIEM solution met operational needs and
                  improve threat detection and response efficiency
                </li>
                <li>
                  Planned and prioritized sprint activities, setting clear goals
                  to maximize value delivery and improve overall project
                  outcomes - Regularly communicated with stakeholders, providing
                  updates on SIEM solution progress, gathering feedback, and
                  making data-driven decisions to enhance system performance
                </li>
                <li>
                  Implemented a continuous improvement process for the SIEM
                  solution, incorporating feedback and new technologies to stay
                  ahead of emerging threats like threat intelligence and threat
                  hunting
                </li>
              </ul>
              <p style={{ marginTop: "1rem", marginBottom: "1rem" }}>
                Environments
              </p>
              <p>
                Microsoft Azure, Microsoft Sentinel, Log Analytics Workspace
                (LAW), Elastic Stack, Microsoft 365 Defender, Ansible, Ubuntu,
                Logic Apps, Function Apps, Azure AD, GitHub Enterprise, Grafana,
                MITRE ATT&CK, Jira, Confluence
              </p>
            </div>
            <div className={styles.WorkExperienceEntry}>
              <h3 className={styles.WorkExperienceEntryRole}>
                DevOps Specialist
              </h3>
              <p style={{ marginBottom: "1rem" }}>
                Intact / Sainte-Hyacinthe, Quebec, Canada / April 2019 - August
                2021
              </p>
              <p>
                As a DevOps Specialist in the identity and access management
                (IAM) team, I contributed to enhancing the efficiency and
                security of the IAM infrastructure:{" "}
              </p>
              <ul className={styles.WorkExperienceEntryList}>
                <li>
                  Developed and refined Ansible playbooks for automating the
                  deployment and configuration of IBM Security Access Manager,
                  IBM Security Directory Suite, and Citrix ADC appliances,
                  ensuring secure and consistent environments
                </li>
                <li>
                  Implemented configurations, patches, and vulnerability
                  mitigation strategies across various platforms using Ansible,
                  reducing vulnerabilities and ensuring compliance with security
                  policies
                </li>
                <li>
                  Managed and configured Identity and Access Management (IAM)
                  platforms, streamlining access control and improving security
                  measures
                </li>
                <li>
                  Set up monitoring and alerting systems to detect and respond
                  to operational and security incidents promptly, minimizing
                  potential impact
                </li>
                <li>
                  Developed Python scripts for automating security tasks and
                  processes, enhancing operational efficiency
                </li>
              </ul>
              <p style={{ marginTop: "1rem", marginBottom: "1rem" }}>
                Environments
              </p>
              <p>
                Ansible, IBM Security Access Manager, IBM Security Directory
                Suite, Citrix ADC, RHEL, Python, Docker, Terraform, GitHub
                Enterprise, GitLab, Jira
              </p>
            </div>
            <div className={styles.WorkExperienceEntry}>
              <h3 className={styles.WorkExperienceEntryRole}>
                Full-Stack Developer
              </h3>
              <p style={{ marginBottom: "1rem" }}>
                SCFJ / Montreal, Quebec, Canada / January 2018 - April 2019
              </p>
              <p>
                As a Full-Stack Developer, I developed an internal web
                application to streamline the time-tracking process for
                freelancers at SCFJ:
              </p>
              <ul className={styles.WorkExperienceEntryList}>
                <li>
                  Designed the user experience and user interface of the web
                  application using Figma, ensuring a user-friendly and visually
                  appealing product
                </li>
                <li>
                  Built the web application from the ground up using React,
                  Redux, and Django REST framework, delivering a robust and
                  responsive solution
                </li>
                <li>
                  Developed a REST API with Django REST framework to facilitate
                  seamless communication between the front-end and back-end
                </li>
                <li>
                  Implemented unit tests, integration tests and end-to-end (E2E)
                  tests using Jest, Enzyme and Selenium to ensure code quality
                  and reliability
                </li>
                <li>
                  Monitored project progress and deliverables, ensuring timely
                  completion and organization
                </li>
                <li>
                  Applied IaC principles to deploy and configure the Google
                  Kubernetes Engine (GKE) platform using Terraform, enhancing
                  deployment efficiency
                </li>
                <li>
                  Deployed GitLab CI pipelines to automate the deployment
                  process, ensuring continuous integration and delivery
                </li>
                <li>
                  Incorporated basic security practices in the application
                  development lifecycle to ensure secure code and deployment
                </li>
              </ul>
              <p style={{ marginTop: "1rem", marginBottom: "1rem" }}>
                Environments
              </p>
              <p>
                JavaScript, HTML, SCSS, React, Node.js, Django REST framework,
                Python, Redis, Jest, Enzyme, Selenium, Docker, Google Cloud
                Platform (GCP), Google Kubernetes Engine (GKE), Terraform,
                Ubuntu Server, Figma, Trello
              </p>
            </div>
            <div className={styles.WorkExperienceEntry}>
              <h3 className={styles.WorkExperienceEntryRole}>
                Security Analyst
              </h3>
              <p style={{ marginBottom: "1rem" }}>
                CGI / Montreal, Quebec, Canada / June 2017 - December 2017
              </p>
              <p>
                As a Security Analyst within the GTO business unit, I
                specialized in email security and monitoring to mitigate
                security risks:
              </p>
              <ul className={styles.WorkExperienceEntryList}>
                <li>
                  Analyzed email logs to proactively identify, prevent, and
                  block potential threats such as SPAM, phishing attacks and
                  other attack vectors
                </li>
                <li>
                  Managed and administered the Proofpoint-on-Demand (POD)
                  platform to enhance email security and threat detection
                  capabilities
                </li>
                <li>
                  Supported and maintained the Symantec Email Protection (SEP)
                  platform, ensuring reliable email filtering and protection
                  against emerging threats
                </li>
                <li>
                  Administered the Sophos SafeGuard encryption platform for CGI
                  workstations, safeguarding sensitive data and ensuring
                  compliance with security policies
                </li>
                <li>
                  Collaborated within ITIL incident and change management
                  processes, ensuring efficient handling of security incidents
                  and changes while adhering to best practices
                </li>
                <li>
                  Implemented and maintained operational procedures to enhance
                  email security posture and response capabilities
                </li>
              </ul>
              <p style={{ marginTop: "1rem", marginBottom: "1rem" }}>
                Environments
              </p>
              <p>
                IT Service Management (ITSM), ServiceNOW, Proofpoint-on-Demand
                (POD), Symantec Email Protection (SEP), Sophos SafeGuard
              </p>
            </div>
            <div className={styles.WorkExperienceEntry}>
              <h3 className={styles.WorkExperienceEntryRole}>
                System Administrator
              </h3>
              <p style={{ marginBottom: "1rem" }}>
                CGI / Montreal, Quebec, Canada / November 2013 - October 2017
              </p>
              <p>
                As a System Administrator within the Microsoft Center of
                Expertise (MCoE) business unit, I specialized in managing
                Windows Server, SharePoint, SQL Server, and Microsoft Azure
                environments to ensure optimal performance and security:{" "}
              </p>
              <ul className={styles.WorkExperienceEntryList}>
                <li>
                  Developed and maintained PowerShell scripts to automate
                  deployment, configuration, and monitoring for SharePoint
                  environments, improving operational efficiency
                </li>
                <li>
                  Designed, deployed, and managed multiple Active Directory,
                  ADFS, Web Application Proxy (WAP), and Dynamics CRM
                  environments on Microsoft Azure, ensuring scalable and secure
                  infrastructures
                </li>
                <li>
                  Installed and configured highly available clustered
                  environments for SharePoint Server (2007, 2010, 2013) and
                  Project Server (2010, 2013), optimizing performance and
                  reliability
                </li>
                <li>
                  Conducted comprehensive workload tests to identify and address
                  performance bottlenecks, enhancing overall SharePoint
                  environment performance
                </li>
                <li>
                  Led and executed migrations of SharePoint environments to
                  newer versions, ensuring minimal downtime and seamless
                  transition - Implemented security best practices and
                  configurations across SharePoint, SQL Server, and Azure
                  environments to safeguard data and comply with organizational
                  policies
                </li>
                <li>
                  Collaborated with cross-functional teams to troubleshoot
                  complex technical issues and provide timely resolutions
                </li>
              </ul>
              <p style={{ marginTop: "1rem", marginBottom: "1rem" }}>
                Environments
              </p>
              <p>
                PowerShell, Windows Server (2008 R2, 2012 R2), Active Directory,
                DNS Server, Group Policies, Microsoft Azure, Dynamics CRM (2011,
                2013, 2015, 2016), ADFS, Web Application Proxy (WAP), SQL Server
                (2008 R2, 2012, 2014), SSRS, SharePoint Server (2010, 2013,
                2016), Project Server (2010, 2013, 2016)
              </p>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default ResumePage;
