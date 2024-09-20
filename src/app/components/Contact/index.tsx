import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./index.module.scss";
import { FormEvent } from "react";
import Link from "next/link";
import {
  faFacebook,
  faGithub,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";

type Props = {
  handleSendEmail: (event: FormEvent<HTMLFormElement>) => void;
};

const Contact = ({ handleSendEmail }: Props) => {
  return (
    <section id={"contact"} className={styles.Contact}>
      <h1 className={styles.TextHeading}>Contact</h1>
      <div className={styles.ContactSection}>
        <div className={styles.ContactSectionHeader}>
          <h2 className={styles.TextHeading}>
            Looking forward to hearing from you!
          </h2>{" "}
          <div className={styles.ContactSocialMedia}>
            <div className={styles.ContactSocialMediaEntry}>
              <Link href="https://github.com/jfmainville">
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </Link>
            </div>
            <div className={styles.ContactSocialMediaEntry}>
              <Link href="https://www.linkedin.com/in/jean-frederic-mainville-8566b485">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </Link>
            </div>
            <div className={styles.ContactSocialMediaEntry}>
              <Link href="https://www.facebook.com/jeanfrederic.mainville/">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </Link>
            </div>
            <div className={styles.ContactSocialMediaEntry}>
              <Link href="https://x.com/JeanMainvi">
                <FontAwesomeIcon icon={faXTwitter} size="2x" />
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.ContactSectionForm}>
          <form id="SubmitForm" onSubmit={handleSendEmail}>
            <label htmlFor="firstName" className={styles.InputLabel}>
              First Name
            </label>
            <input
              className={styles.Input}
              id="firstName"
              name="firstName"
              required={true}
              type="text"
            />
            <label htmlFor="lastName" className={styles.InputLabel}>
              Last Name
            </label>
            <input
              className={styles.Input}
              id="lastName"
              name="lastName"
              required={true}
              type="text"
            />
            <label htmlFor="email" className={styles.InputLabel}>
              Email
            </label>
            <input
              className={styles.Input}
              id="email"
              name="email"
              required={true}
              type="email"
            />
            <label htmlFor="phone" className={styles.InputLabel}>
              Phone
            </label>
            <input
              className={styles.Input}
              id="phone"
              name="phone"
              type="text"
            />
            <label htmlFor="message" className={styles.InputLabel}>
              Message
            </label>
            <textarea
              className={styles.TextArea}
              id="message"
              name="message"
              required={true}
            />
            <button className={styles.SubmitButton} type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
