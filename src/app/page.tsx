import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Journey from "./components/Journey";
import Nav from "./components/Nav";
import Projects from "./components/Projects";

const Home = () => (
  <>
    <Nav />
    <main>
      <Hero />
      <Projects />
      <About />
      <Journey />
      <Contact />
    </main>
    <Footer />
  </>
);

export default Home;
