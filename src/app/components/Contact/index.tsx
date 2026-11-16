"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faCopy } from "@fortawesome/free-solid-svg-icons";
import { contact, profile } from "../../content";
import Arrow from "../Arrow";
import TerminalButton from "../TerminalButton";
import styles from "./index.module.scss";

const COPIED_DURATION = 1800;

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), COPIED_DURATION);
  };

  return (
    <section id="contact" className={styles.Contact}>
      <h2 className={styles.Heading}>{contact.heading}</h2>
      <p className={styles.Text}>{contact.text}</p>
      <div className={styles.EmailRow}>
        <a href={`mailto:${profile.email}`} className={styles.Email}>
          {profile.email}
          <Arrow direction="up-right" size="lg" />
        </a>
        <TerminalButton onClick={copyEmail}>
          <FontAwesomeIcon
            icon={copied ? faCheck : faCopy}
            className={copied ? styles.Copied : undefined}
          />
          {copied ? "copied" : "copy email"}
        </TerminalButton>
      </div>
      <dl className={styles.Details}>
        <div>
          <dt className={styles.Label}>location</dt>
          <dd className={styles.Value}>{profile.location}</dd>
        </div>
        <div>
          <dt className={styles.Label}>elsewhere</dt>
          <dd className={`${styles.Value} ${styles.Links}`}>
            {profile.links.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noreferrer"
                className={styles.Link}
              >
                {label}
              </a>
            ))}
          </dd>
        </div>
      </dl>
    </section>
  );
};

export default Contact;
