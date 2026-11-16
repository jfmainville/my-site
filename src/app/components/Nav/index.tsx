import { navigation, profile } from "../../content";
import styles from "./index.module.scss";

const Nav = () => (
  <header className={styles.Header}>
    <div className={styles.Inner}>
      <a href="#top" className={styles.Handle}>
        {profile.handle}
        <span className={styles.Cursor}>_</span>
      </a>
      <nav aria-label="Main navigation" className={styles.Links}>
        {navigation.map(({ id, label }) => (
          <a key={id} href={`#${id}`} className={styles.Link}>
            {label}
          </a>
        ))}
      </nav>
    </div>
  </header>
);

export default Nav;
