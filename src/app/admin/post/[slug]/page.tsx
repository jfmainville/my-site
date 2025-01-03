import styles from "./page.module.scss";
import Link from "next/link";
import Navbar from "../../../components/Navbar";
import Writer from "@/app/components/Writer";
import { MY_SITE_URL } from "../../../utils/constants";
import Button from "@/app/components/Button";

export type PostData = {
  postStatus: String;
  postTitle: String;
  postContent: String;
  postCategory: String;
};

const PostUpdatePage = async ({ params }: { params: { slug: string } }) => {
  const data = await fetch(`${MY_SITE_URL}/api/post?slug=${params.slug}`, {
    cache: "no-store",
  });
  const postData = await data.json();

  return (
    <section className={styles.Main}>
      <Navbar />
      <Link className={styles.Link} href={"/admin/post"}>
        <Button
          buttonText="<- Back"
          buttonTextColor="black"
          buttonColor="transparent"
        />
      </Link>
      <Writer postData={postData.data} />
    </section>
  );
};

export default PostUpdatePage;
