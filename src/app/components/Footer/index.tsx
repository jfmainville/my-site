import { profile } from "../../content";
import Prompt from "../Prompt";
import styles from "./index.module.scss";

const Footer = () => (
  <footer className={styles.Footer}>
    <Prompt>exit 0</Prompt>
    <span>
      © {new Date().getFullYear()} {profile.firstName} {profile.lastName}
    </span>
  </footer>
);

export default Footer;
