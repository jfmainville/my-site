import styles from "./page.module.scss";
import Header from "./components/Header";
import About from "./components/About";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

const Home = () => {
  return (
    <main className={styles.Main}>
      <Header />
      <About />
      <Experience />
      <Contact />
      <section className={styles.Copyright}>
        <div>Made with ❤️ by Jean-Frederic Mainville</div>
      </section>
    </main>
  );
};

export default Home;
