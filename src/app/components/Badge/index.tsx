import styles from "./index.module.scss";

type Props = {
  children: React.ReactNode;
  variant?: "signal" | "outline";
};

const Badge = ({ children, variant = "signal" }: Props) => (
  <span className={`${styles.Badge} ${styles[variant]}`}>{children}</span>
);

export default Badge;
