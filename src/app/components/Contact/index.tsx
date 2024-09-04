import styles from "./index.module.scss";
import { FormEvent } from "react";

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
        </div>
        <div className={styles.ContactSectionForm}>
          <form id="SubmitForm" onSubmit={handleSendEmail}>
            <label htmlFor="firstName">First Name</label>
            <input
              className={styles.Input}
              id="firstName"
              name="firstName"
              required={true}
              type="text"
            />
            <label htmlFor="lastName">Last Name</label>
            <input
              className={styles.Input}
              id="lastName"
              name="lastName"
              required={true}
              type="text"
            />
            <label htmlFor="email">Email</label>
            <input
              className={styles.Input}
              id="email"
              name="email"
              required={true}
              type="email"
            />
            <label htmlFor="phone">Phone</label>
            <input
              className={styles.Input}
              id="phone"
              name="phone"
              type="text"
            />
            <label htmlFor="message">Message</label>
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
