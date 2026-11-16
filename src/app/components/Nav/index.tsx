import Link from "next/link";
import { navigation, profile } from "../../content";
import styles from "./index.module.scss";

const Nav = () => (
  <header className={styles.Header}>
    <div className={styles.Inner}>
      <Link href="/#top" className={styles.Handle}>
        {profile.handle}
        <span className={styles.Cursor}>_</span>
      </Link>
      <nav aria-label="Main navigation" className={styles.Links}>
        {navigation.map(({ href, label }) => (
          <Link key={href} href={href} className={styles.Link}>
            {label}
          </Link>
        ))}
      </nav>
    </div>
  </header>
);

export default Nav;
