import { TimelineEvent, Type } from "@/types/timelineEvents";
import styles from "./event.module.scss";

interface IEventProps {
  distance: number;
  width: number;
  event: TimelineEvent;
  activeEvents: TimelineEvent;
  handleActiveEvents: (event: TimelineEvent[]) => void;
}

const Event = ({
  distance,
  width,
  event,
  activeEvents,
  handleActiveEvents,
}: IEventProps) => {
  const { isLandmark, title } = event;
  console.log("activeEvents", activeEvents);
  const isActive = activeEvents.find((e) => (event.id = e.id));
  return (
    <>
      {isLandmark && (
        <div
          className={styles.landmark}
          style={{ marginLeft: `${distance}px` }}
        />
      )}
      <div className={styles.line}>
        <button
          className={styles.line_wrapper}
          onClick={() => handleActiveEvents([...activeEvents, event])}
          style={{
            marginLeft: `${distance}px`,
            width: `${width}px`,
          }}
        >
          <div
            className={`${styles.title_wrapper} ${
              isLandmark && styles.isLandmark
            }`}
          >
            <div className={styles.title}>
              {title} {isActive && "- ${isActive}"}
            </div>
            <div>
              {event.start.year}/{event.start.era} ({width}y)
            </div>
          </div>
          <div
            className={`${styles.element} ${isLandmark && styles.isLandmark}`}
            style={{
              borderColor: event.custom?.color ?? "",
              borderStyle: event.custom?.lineType ?? "",
            }}
          ></div>
        </button>
      </div>
    </>
  );
};

export default Event;
