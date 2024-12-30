import styles from "./page.module.scss";
import Link from "next/link";
import Navbar from "../components/Navbar";

const AdminPage = () => {
  return (
    <section className={styles.Main}>
      <Navbar />
      <section className={styles.Section}>
        <Link className={styles.SectionLinkItem} href={"/admin/post"}>
          <div>Blog Posts</div>
        </Link>
      </section>
    </section>
  );
};

export default AdminPage;
