"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faRotateRight } from "@fortawesome/free-solid-svg-icons";
import { interests } from "../../content";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import styles from "./index.module.scss";

const START_DELAY = 700;
const STEP_DELAY = 520;

const Pipeline = () => {
  const reducedMotion = useReducedMotion();
  const [step, setStep] = useState(-1);
  const [run, setRun] = useState(0);
  const [progress, setProgress] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const total = interests.length;
  const current = reducedMotion ? total : step;
  const done = current >= total;

  useEffect(() => {
    if (reducedMotion) return;
    const timeouts = Array.from({ length: total + 1 }, (_, next) =>
      setTimeout(() => setStep(next), START_DELAY + next * STEP_DELAY),
    );
    return () => timeouts.forEach(clearTimeout);
  }, [run, reducedMotion, total]);

  useLayoutEffect(() => {
    const measure = () => {
      const node = nodeRefs.current[Math.min(Math.max(current, 0), total - 1)];
      const track = trackRef.current;
      if (!node || !track || current < 0) {
        setProgress(0);
        return;
      }
      const nodeBox = node.getBoundingClientRect();
      setProgress(
        nodeBox.left + nodeBox.width / 2 - track.getBoundingClientRect().left,
      );
    };
    measure();
    const observer = new ResizeObserver(measure);
    if (trackRef.current) observer.observe(trackRef.current);
    return () => observer.disconnect();
  }, [current, total]);

  return (
    <div ref={trackRef} className={styles.Pipeline}>
      <div className={styles.Rail} aria-hidden="true" />
      <div
        className={styles.Progress}
        style={{ width: done ? "100%" : `${progress}px` }}
        aria-hidden="true"
      />
      <div className={styles.Container}>
        <ol className={styles.Stages} aria-label="What I'm into right now">
          {interests.map((interest, index) => {
            const state =
              index < current
                ? "passed"
                : index === current
                  ? "running"
                  : "pending";
            return (
              <li
                key={interest.stage}
                className={styles.Stage}
                data-state={state}
              >
                <span
                  ref={(node) => {
                    nodeRefs.current[index] = node;
                  }}
                  className={styles.Node}
                >
                  {state === "passed" && (
                    <FontAwesomeIcon icon={faCheck} className={styles.Check} />
                  )}
                  {state === "running" && <span className={styles.Spinner} />}
                  {state === "passed" && index === total - 1 && (
                    <span className={styles.LiveRing} aria-hidden="true" />
                  )}
                </span>
                <span className={styles.StageName}>{interest.stage}</span>
                <span className={styles.StageTool}>{interest.tool}</span>
              </li>
            );
          })}
        </ol>
      </div>
      <div className={`${styles.Container} ${styles.Status}`}>
        <span className={done ? styles.Done : undefined} role="status">
          {done
            ? `✓ ~/.config loaded · ${total} things I'm into`
            : `loading ${Math.max(current + 1, 1)}/${total}…`}
        </span>
        <button
          type="button"
          onClick={() => {
            setStep(-1);
            setRun((count) => count + 1);
          }}
          className={styles.Rerun}
        >
          <FontAwesomeIcon icon={faRotateRight} /> re-run
        </button>
      </div>
    </div>
  );
};

export default Pipeline;
