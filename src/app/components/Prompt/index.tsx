import styles from "./index.module.scss";

type Props = {
  children: React.ReactNode;
  size?: "sm" | "base";
};

const Prompt = ({ children, size = "sm" }: Props) => (
  <p className={`${styles.Prompt} ${styles[size]}`}>
    <span className={styles.Symbol}>$</span> {children}
  </p>
);

export default Prompt;
