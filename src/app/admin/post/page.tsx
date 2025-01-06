import styles from "./page.module.scss";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import { Post } from "@prisma/client";
import { NEXT_PUBLIC_MY_SITE_URL } from "../../utils/constants";
import Button from "@/app/components/Button";
import Image from "next/image";

export type PostData = {
  postStatus: String;
  postTitle: String;
  postContent: String;
  postCategory: String;
};

const PostPage = async () => {
  let posts;
  let response = await fetch(`${NEXT_PUBLIC_MY_SITE_URL}/api/post`, {
    cache: "no-store",
  });

  if (response.ok) {
    posts = await response.json();
  }

  return (
    <section className={styles.Main}>
      <Navbar />
      <Link className={styles.Link} href={"/admin"}>
        <Button
          buttonText="<- Back"
          buttonTextColor="black"
          buttonColor="transparent"
        />
      </Link>
      <div className={styles.CreateButton}>
        <Link className={styles.Link} href={"/admin/post/create"}>
          <Button buttonText={"Create Post"} />
        </Link>
      </div>
      <div className={styles.BlogPost}>
        {posts && posts.data ? (
          posts.data?.map((post: Post) => (
            <div key={post.id} className={styles.BlogPostItem}>
              <Image
                src={post.thumbnail || "/images/placeholder.jpg"}
                width={150}
                height={150}
                alt=""
              />
              <Link className={styles.Link} href={`/admin/post/${post.slug}`}>
                <h2>{post.title}</h2>
              </Link>
              <div className={styles.BlogPostStatus}>{post.status}</div>
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
