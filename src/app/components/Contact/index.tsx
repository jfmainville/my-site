import styles from "./index.module.scss";

const Contact = () => {
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
            <label htmlFor="phone">Phone</label>
            <input className={styles.Input} id="phone" type="text" />
            <label htmlFor="message">Message</label>
            <textarea
              className={styles.TextArea}
              id="message"
              required={true}
            />
            <input
              className={styles.SubmitButton}
              name="Submit"
              type="submit"
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
