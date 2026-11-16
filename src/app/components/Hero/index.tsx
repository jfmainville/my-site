import { profile } from "../../content";
import Arrow from "../Arrow";
import Prompt from "../Prompt";
import TerminalButton from "../TerminalButton";
import Pipeline from "./Pipeline";
import Typewriter from "./Typewriter";
import styles from "./index.module.scss";

const Hero = () => (
  <section id="top" className={styles.Hero}>
    <div className={styles.Container}>
      <Prompt size="base">
        whoami <span className={styles.Pointer}>→</span>
        <Typewriter words={profile.roles} />
      </Prompt>
      <h1 className={styles.Name}>
        {profile.firstName}
        <br />
        {profile.lastName}
        <span className={styles.Accent}>.</span>
      </h1>
      <div className={styles.Intro}>
        <p className={styles.Pitch}>{profile.pitch}</p>
        <TerminalButton size="lg" href="#projects">
          ls ~/projects
          <Arrow />
        </TerminalButton>
      </div>
    </div>
    <Pipeline />
  </section>
);

export default Hero;
