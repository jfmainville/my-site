import Prompt from "../Prompt";
import styles from "./index.module.scss";

type Props = {
  title: string;
  command?: string;
};

const SectionHeading = ({ title, command }: Props) => (
  <div>
    {command && <Prompt>{command}</Prompt>}
    <h2 className={`${styles.Title} ${command ? styles.WithPrompt : ""}`}>
      {title}
    </h2>
  </div>
);

export default SectionHeading;
