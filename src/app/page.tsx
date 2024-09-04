"use client";

import styles from "./page.module.scss";
import Header from "./components/Header";
import About from "./components/About";
import Experience from "./components/Experience";
import { FormEvent } from "react";
import Contact from "./components/Contact";

const Home = () => {
  const handleSendEmail = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const response = await fetch("/api/email", {
      method: "POST",
      body: formData,
    });
    if (response.ok) {
      (document.getElementById("SubmitForm") as HTMLFormElement)?.reset();
    }
  };

  return (
    <main className={styles.Main}>
      <Header />
      <About />
      <Experience />
      <Contact handleSendEmail={handleSendEmail} />
      <section className={styles.Copyright}>
        <div>Made with ❤️ by Jean-Frederic Mainville</div>
      </section>
    </main>
  );
};

export default Home;
