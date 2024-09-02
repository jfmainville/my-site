import styles from "./index.module.scss";
import Image from "next/image";

const Header = () => {
  return (
    <div id={"home"} className={styles.Header}>
      <Image
        src="/images/bromont.png"
        width={0}
        height={0}
        sizes="100vw"
        alt=""
        style={{ width: "100%", height: "auto" }}
      />
      <h1 className={styles.TextHeading} style={{ position: "absolute" }}>
        Hey, I'm Jean-Frederic, welcome to my site! 🔥
      </h1>
    </div>
  );
};

export default Header;
