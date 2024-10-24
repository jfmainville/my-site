import styles from "./page.module.scss";
import Link from "next/link";
import Navbar from "../components/Navbar";
import { Post } from "@prisma/client";
import { MY_SITE_URL } from "../utils/constants";
import Button from "../components/Button/index";

const AdminPage = async () => {
  let posts;
  let response = await fetch(`${MY_SITE_URL}/api/post`, { cache: "no-store" });

  if (response.ok) {
    posts = await response.json();
  }

  return (
    <section className={styles.Main}>
      <Navbar />
      <section>
        <h2>Blog Posts</h2>
      </section>
      <Link className={styles.Link} href={"/admin/post"}>
        <Button buttonText={"Create Post"} />
      </Link>
      {posts.data ? (
        posts.data?.map((post: Post) => (
          <div key={post.id} className={styles.BlogPost}>
            <Link className={styles.Link} href={`/admin/post/${post.slug}`}>
              {post.title}
            </Link>
            <div className={styles.BlogPostStatus}>{post.status}</div>
            <div className={styles.BlogPostCreatedDate}>
              {post.createdAt.toString()}
            </div>
            <div className={styles.BlogPostUpdatedDate}>
              {post.updatedAt.toString()}
            </div>
          </div>
        ))
      ) : (
        <div>No posts</div>
      )}
    </section>
  );
};

export default AdminPage;
