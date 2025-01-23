import styles from "./page.module.scss";
import Link from "next/link";
import Navbar from "../../../components/Navbar";
import Writer from "@/app/components/Writer";
import Button from "@/app/components/Button";
import { handleUserSession } from "../../../lib/db";
import { ReturnStatement, UserSession } from "../../../types";
import { getSession } from "@auth0/nextjs-auth0";

export type PostData = {
  postStatus: String;
  postTitle: String;
  postContent: String;
  postCategory: String;
};

const PostPage = async () => {
  const userSession: UserSession | null = (await getSession()) as UserSession;
  const userData: ReturnStatement | null = (await handleUserSession(
    userSession,
  )) as ReturnStatement;

  return (
    <div className={styles.Main}>
      <Navbar />
      <Link className={styles.Link} href={"/admin/post"}>
        <Button
          buttonText="<- Back"
          buttonTextColor="black"
          buttonColor="transparent"
        />
      </Link>
      <Writer userData={userData.data} />
    </div>
  );
};

export default PostPage;
