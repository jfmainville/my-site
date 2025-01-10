import styles from "./page.module.scss";
import Link from "next/link";
import Navbar from "../../../components/Navbar";
import Writer from "@/app/components/Writer";
import Button from "@/app/components/Button";
import { getUniquePost } from "@/app/lib/db";

export type PostData = {
  postStatus: String;
  postTitle: String;
  postContent: String;
  postCategory: String;
};

const PostUpdatePage = async ({ params }: { params: { slug: string } }) => {
  const post = await getUniquePost(params.slug);

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
      <Writer postData={post} />
    </section>
  );
};

export default PostUpdatePage;
