import styles from "./index.module.scss";

type Props = {
  children: React.ReactNode;
  size?: "md" | "lg";
  href?: string;
  onClick?: () => void;
};

const TerminalButton = ({ children, size = "md", href, onClick }: Props) => {
  const className = `${styles.TerminalButton} ${styles[size]}`;
  return href ? (
    <a href={href} className={className}>
      {children}
    </a>
  ) : (
    <button type="button" onClick={onClick} className={className}>
      {children}
    </button>
  );
};

export default TerminalButton;
