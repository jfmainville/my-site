"use client";

import styles from "./index.module.scss";

type Props = {
  onButtonClickEvent?: () => void;
  buttonText: String;
};

const Button = ({ onButtonClickEvent, buttonText }: Props) => {
  const onButtonClick = () => {
    if (onButtonClickEvent) {
      return onButtonClickEvent();
    }
  };
  return (
    <div className={styles.Button}>
      <div onClick={() => onButtonClick()}>{buttonText}</div>
    </div>
  );
};

export default Button;
