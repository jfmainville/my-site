import Link from "next/link";
import styles from "./index.module.scss";
import Image from "next/image";
import { NEXT_PUBLIC_AWS_BUCKET_URL } from "@/app/utils/constants";

const Header = () => {
  return (
    <div id={"home"} className={styles.Header}>
      <Image
        src={`${NEXT_PUBLIC_AWS_BUCKET_URL}/public/images/bromont.png`}
        width={0}
        height={0}
        sizes="100vw"
        alt=""
        style={{ width: "100%", height: "100vh" }}
      />
      <div className={styles.Navbar}>
        <Link className={styles.Link} href={"/#contact"}>
          Contact
        </Link>
        <Link hidden={true} className={styles.Link} href={"/#blog"}>
          Blog
        </Link>
        <Link className={styles.Link} href={"/#experience"}>
          Experience
        </Link>
        <Link className={styles.Link} href={"/#about"}>
          About
        </Link>
      </div>
      <h1 className={styles.TextHeading} style={{ position: "absolute" }}>
        Hey, I&apos;m Jean-Frederic, welcome to my site! 🔥
      </h1>
    </div>
  );
};

export default Header;
