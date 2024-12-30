import styles from "./page.module.scss";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import { Post } from "@prisma/client";
import { MY_SITE_URL } from "../../utils/constants";
import Button from "@/app/components/Button";

export type PostData = {
  postStatus: String;
  postTitle: String;
  postContent: String;
  postCategory: String;
};

const PostPage = async () => {
  let posts;
  let response = await fetch(`${MY_SITE_URL}/api/post`, { cache: "no-store" });

  if (response.ok) {
    posts = await response.json();
  }

  return (
    <section className={styles.Main}>
      <Navbar />
      <Link className={styles.Link} href={"/admin"}>
        Back
      </Link>
      <div className={styles.CreateButton}>
        <Link className={styles.Link} href={"/admin/post/create"}>
          <Button buttonText={"Create Post"} />
        </Link>
      </div>
      <div className={styles.BlogPost}>
        <div>Name</div>
        <div>Status</div>
        <div>Create Date</div>
        <div>Update Date</div>
        {posts && posts.data ? (
          posts.data?.map((post: Post) => (
            <div key={post.id} className={styles.BlogPostItem}>
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
      </div>
    </section>
  );
};

export default PostPage;
