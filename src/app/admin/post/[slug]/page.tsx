import styles from "./page.module.scss";
import Link from "next/link";
import Navbar from "../../../components/Navbar";
import Writer from "@/app/components/Writer";
import Button from "@/app/components/Button";
import { getUniquePost } from "@/app/lib/db";
import { getSession } from "@auth0/nextjs-auth0";
import { handleUserSession } from "../../../lib/db";
import { UserSession } from "../../../types";

export type PostData = {
  postStatus: String;
  postTitle: String;
  postContent: String;
  postCategory: String;
};

const PostUpdatePage = async ({ params }: { params: { slug: string } }) => {
  const post = await getUniquePost(params.slug);
  const userSession: UserSession = (await getSession()) as UserSession;
  const userData: any = await handleUserSession(userSession);

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
      <Writer postData={post} userData={userData.data} />
    </section>
  );
};

export default PostUpdatePage;
