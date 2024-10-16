import styles from "./page.module.scss";
import Link from "next/link";
import Navbar from "../components/Navbar";
import { MY_SITE_URL } from "../utils/constants";

const AdminPage = async () => {
  let data = await fetch(`${MY_SITE_URL}/api/post`);
  let posts = await data.json();

  return (
    <section className={styles.Main}>
      <Navbar />
      <section>Blog Posts</section>
      <Link className={styles.Link} href={"/admin/post"}>
        Create Post
      </Link>
      <ul>
        {posts.data.map((post: any) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </section>
  );
};

export default AdminPage;
