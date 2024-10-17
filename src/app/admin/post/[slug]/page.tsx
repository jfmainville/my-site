import styles from "./page.module.scss";
import Link from "next/link";
import Navbar from "../../../components/Navbar";
import Writer from "@/app/components/Writer";
import { MY_SITE_URL } from "../../../utils/constants";

export type PostData = {
  postStatus: String;
  postTitle: String;
  postContent: String;
  postCategory: String;
};

const PostUpdatePage = async ({ params }: { params: { slug: string } }) => {
  const data = await fetch(`${MY_SITE_URL}/api/post?slug=${params.slug}`);
  const postData = await data.json();

  return (
    <section className={styles.Main}>
      <Navbar />
      <Link className={styles.Link} href={"/admin"}>
        Back
      </Link>
      <Writer postData={postData.data} />
    </section>
  );
};

export default PostUpdatePage;
