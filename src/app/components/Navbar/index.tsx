"use client";

import React from "react";
import styles from "./index.module.scss";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className={styles.Main}>
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
  );
};

export default Navbar;
