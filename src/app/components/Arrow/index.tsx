import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import styles from "./index.module.scss";

type Props = {
  direction?: "right" | "up-right";
  size?: "sm" | "md" | "lg";
};

const Arrow = ({ direction = "right", size = "sm" }: Props) => (
  <span
    className={`${styles.Arrow} ${styles[direction]} ${styles[size]}`}
    aria-hidden="true"
  >
    <FontAwesomeIcon
      icon={faArrowRight}
      transform={direction === "up-right" ? { rotate: -45 } : undefined}
    />
  </span>
);

export default Arrow;
