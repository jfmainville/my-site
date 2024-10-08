"use client";

import styles from "./page.module.scss";
import Header from "./components/Header";
import About from "./components/About";
import Experience from "./components/Experience";
import { FormEvent, useState } from "react";
import Contact from "./components/Contact";

const Home = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSendEmail = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    fetch("/api/email", {
      method: "POST",
      body: formData,
    });

    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };

  return (
    <main className={styles.Main}>
      <Header />
      <About />
      <Experience />
      <Contact
        handleSendEmail={handleSendEmail}
        firstName={firstName}
        setFirstName={setFirstName}
        lastName={lastName}
        setLastName={setLastName}
        email={email}
        setEmail={setEmail}
        phone={phone}
        setPhone={setPhone}
        message={message}
        setMessage={setMessage}
      />
      <section className={styles.Copyright}>
        <div>Made with ❤️ by Jean-Frederic Mainville</div>
      </section>
    </main>
  );
};

export default Home;
