"use client";

import styles from "./index.module.scss";

type Props = {
  onButtonClickEvent?: () => void;
  buttonText: string;
  buttonColor?: string;
};

const Button = ({ onButtonClickEvent, buttonText, buttonColor }: Props) => {
  const onButtonClick = () => {
    if (onButtonClickEvent) {
      return onButtonClickEvent();
    }
  };
  return (
    <div
      style={{ backgroundColor: buttonColor || "" }}
      className={styles.Button}
    >
      <div onClick={() => onButtonClick()}>{buttonText}</div>
    </div>
  );
};

export default Button;
