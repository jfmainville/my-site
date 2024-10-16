import styles from "./page.module.scss";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Writer from "@/app/components/Writer";

export type PostData = {
  postStatus: String;
  postTitle: String;
  postContent: String;
  postCategory: String;
};

const PostPage = () => {
  return (
    <section className={styles.Main}>
      <Navbar />
      <Link className={styles.Link} href={"/admin"}>
        Back
      </Link>
      <Writer />
    </section>
  );
};

export default PostPage;
