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

type Props = {
  handleSendEmail: (event: FormEvent<HTMLFormElement>) => void;
  firstName: string;
  setFirstName: (value: string) => void;
  lastName: string;
  setLastName: (value: string) => void;
  email: string;
  setEmail: (value: string) => void;
  phone: string;
  setPhone: (value: string) => void;
  message: string;
  setMessage: (value: string) => void;
};

const Contact = ({
  handleSendEmail,
  firstName,
  setFirstName,
  lastName,
  setLastName,
  email,
  setEmail,
  phone,
  setPhone,
  message,
  setMessage,
}: Props) => {
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
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
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
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
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
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <label htmlFor="phone" className={styles.InputLabel}>
              Phone
            </label>
            <input
              className={styles.Input}
              id="phone"
              name="phone"
              type="text"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
            />
            <label htmlFor="message" className={styles.InputLabel}>
              Message
            </label>
            <textarea
              className={styles.TextArea}
              id="message"
              name="message"
              required={true}
              value={message}
              onChange={(event) => setMessage(event.target.value)}
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
