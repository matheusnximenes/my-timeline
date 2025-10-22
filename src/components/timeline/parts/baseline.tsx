import { Era } from "@/types/timelineEvents";
import styles from "./baseline.module.scss";
import { getIntermediaryYearsBC, getIntermediaryYearsEC } from "@/utils";

interface PBaseline {
  start: number;
  era: Era;
  zoom: number;
  intermediaryYear: number;
}

const Baseline = ({ start, era, zoom, intermediaryYear = 50 }: PBaseline) => {
  const currentYear = new Date().getFullYear();
  const years = getIntermediaryYearsEC(currentYear, intermediaryYear);
  const yearsBC =
    era === Era.BC ? getIntermediaryYearsBC(start, intermediaryYear) : [];
  return (
    <div className={styles.baseline}>
      {[...yearsBC, ...years].map((y, index) => (
        <div
          key={index}
          className={styles.year}
          style={{ marginRight: `${intermediaryYear - 1 * zoom}px` }}
        >
          <strong className={styles.year_text}>{y}</strong>
        </div>
      ))}
    </div>
  );
};

export default Baseline;
