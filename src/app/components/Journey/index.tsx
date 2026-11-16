import { journey, type JourneyEntry } from "../../content";
import Badge from "../Badge";
import SectionHeading from "../SectionHeading";
import styles from "./index.module.scss";

const MAIN_LANE = 14;
const BRANCH_LANE = 42;
const NODE_TOP = 30;
const GRAPH_WIDTH = 56;

const shortHash = (value: string) => {
  let hash = 2166136261;
  for (let index = 0; index < value.length; index += 1) {
    hash ^= value.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return (hash >>> 0).toString(16).padStart(8, "0").slice(0, 7);
};

const Curve = ({ from, to }: { from: number; to: number }) => (
  <svg
    className={styles.Curve}
    width={GRAPH_WIDTH}
    height={NODE_TOP}
    fill="none"
  >
    <path
      d={`M${from} 0 C ${from} ${NODE_TOP * 0.6}, ${to} ${NODE_TOP * 0.4}, ${to} ${NODE_TOP}`}
    />
  </svg>
);

type GraphProps = {
  entry: JourneyEntry;
  index: number;
  isLast: boolean;
  afterBranch: boolean;
};

const Graph = ({ entry, index, isLast, afterBranch }: GraphProps) => {
  const lane = entry.branch ? BRANCH_LANE : MAIN_LANE;
  return (
    <div className={styles.Graph} aria-hidden="true">
      <div
        className={styles.Line}
        style={{
          left: MAIN_LANE,
          top: index === 0 ? NODE_TOP : 0,
          bottom: isLast ? `calc(100% - ${NODE_TOP}px)` : 0,
        }}
      />
      {entry.branch && (
        <>
          <div
            className={styles.Line}
            style={{ left: BRANCH_LANE, top: NODE_TOP, bottom: 0 }}
          />
          <Curve from={MAIN_LANE} to={BRANCH_LANE} />
        </>
      )}
      {!entry.branch && afterBranch && (
        <Curve from={BRANCH_LANE} to={MAIN_LANE} />
      )}
      <span
        className={`${styles.Commit} ${index === 0 ? styles.Head : ""}`}
        style={{ left: lane, top: NODE_TOP }}
      >
        {index === 0 && <span className={styles.LiveRing} />}
      </span>
    </div>
  );
};

const Journey = () => (
  <section id="journey" className={styles.Journey}>
    <div className={styles.Container}>
      <SectionHeading command="git log --graph" title="How I got here." />
      <ol className={styles.Log}>
        {journey.map((entry, index) => {
          const hash = shortHash(entry.title + entry.years);
          return (
            <li key={hash} className={styles.Entry}>
              <Graph
                entry={entry}
                index={index}
                isLast={index === journey.length - 1}
                afterBranch={!!journey[index - 1]?.branch}
              />
              <div className={styles.Body}>
                <div className={styles.Meta}>
                  <span className={styles.Years}>{entry.years}</span>
                  <span>{hash}</span>
                </div>
                <div className={styles.Details}>
                  <div className={styles.TitleRow}>
                    <h3 className={styles.Title}>{entry.title}</h3>
                    {index === 0 && <Badge>HEAD → main</Badge>}
                    {entry.branch && (
                      <Badge variant="outline">{entry.branch}</Badge>
                    )}
                  </div>
                  <p className={styles.Team}>{entry.team}</p>
                  <p className={styles.Text}>{entry.text}</p>
                  <p className={styles.Tags}>{entry.tags.join("  ·  ")}</p>
                </div>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  </section>
);

export default Journey;
