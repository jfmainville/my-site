"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import styles from "./index.module.scss";

const TYPE_DELAY = 72;
const DELETE_DELAY = 38;
const HOLD_DELAY = 2200;
const NEXT_WORD_DELAY = 320;

const Typewriter = ({ words }: { words: string[] }) => {
  const reducedMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (reducedMotion) return;
    const word = words[index % words.length];
    let delay = deleting ? DELETE_DELAY : TYPE_DELAY;
    if (!deleting && text === word) delay = HOLD_DELAY;
    if (deleting && text === "") delay = NEXT_WORD_DELAY;

    const timeout = setTimeout(() => {
      if (!deleting && text === word) {
        setDeleting(true);
      } else if (deleting && text === "") {
        setDeleting(false);
        setIndex((current) => current + 1);
      } else {
        setText(word.slice(0, text.length + (deleting ? -1 : 1)));
      }
    }, delay);
    return () => clearTimeout(timeout);
  }, [text, deleting, index, words, reducedMotion]);

  return (
    <span className={styles.Typed}>
      {reducedMotion ? words[0] : text}
      <span className={styles.Caret} aria-hidden="true" />
    </span>
  );
};

export default Typewriter;
