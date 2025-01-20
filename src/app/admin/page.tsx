import styles from "./page.module.scss";
import Link from "next/link";
import Navbar from "../components/Navbar";
import { getSession } from "@auth0/nextjs-auth0";
import { handleUserSession } from "../lib/db";

const AdminPage = async () => {
  const userSession = await getSession();
  await handleUserSession(userSession);

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
