import { ACTIVITY_WEEK_SECTION } from "../../constants/activity";
import styles from "./activity.module.css";

export function ActivitySection() {
  return (
    <div className={styles["activity-section"]}>
      <div className={styles["activity-header-section"]}>
        <div className={styles["activity-header-section-title"]}>Activity</div>
        <div className={styles["activity-header-section-title-sub"]}>
          3 appointment on this week
        </div>
      </div>
      <div className={styles["activity-body-section"]}>
        <div className={styles["activity-body-section-bar-1"]}></div>
        <div className={styles["activity-body-section-bar-2"]}></div>
        <div className={styles["activity-body-section-bar-group-1"]}>
          <div className={styles["activity-body-section-bar-3"]}></div>
          <div className={styles["activity-body-section-bar-3"]}></div>
        </div>
        <div className={styles["activity-body-section-bar-4"]}></div>
        <div className={styles["activity-body-section-bar-group-2"]}>
          <div className={styles["activity-body-section-bar-5"]}></div>
          <div className={styles["activity-body-section-bar-6"]}></div>
        </div>
        <div className={styles["activity-body-section-bar-7"]}></div>
        <div className={styles["activity-body-section-bar-group-3"]}>
          <div className={styles["activity-body-section-bar-3"]}></div>
          <div className={styles["activity-body-section-bar-3"]}></div>
        </div>
        <div className={styles["activity-body-section-bar-8"]}></div>
        <div className={styles["activity-body-section-bar-9"]}></div>
        <div className={styles["activity-body-section-bar-10"]}></div>
        <div className={styles["activity-body-section-bar-group-4"]}>
          <div className={styles["activity-body-section-bar-11"]}></div>
          <div className={styles["activity-body-section-bar-12"]}></div>
        </div>
        <div className={styles["activity-body-section-bar-13"]}></div>
        <div className={styles["activity-body-section-bar-group-5"]}>
          <div className={styles["activity-body-section-bar-14"]}></div>
          <div className={styles["activity-body-section-bar-15"]}></div>
        </div>
        <div className={styles["activity-body-section-bar-2"]}></div>
        <div className={styles["activity-body-section-bar-group-4"]}>
          <div className={styles["activity-body-section-bar-11"]}></div>
          <div className={styles["activity-body-section-bar-12"]}></div>
        </div>
        <div className={styles["activity-body-section-bar-4"]}></div>
        <div className={styles["activity-body-section-bar-9"]}></div>
        <div className={styles["activity-body-section-bar-7"]}></div>
        <div className={styles["activity-body-section-bar-group-3"]}>
          <div className={styles["activity-body-section-bar-3"]}></div>
          <div className={styles["activity-body-section-bar-3"]}></div>
        </div>
        <div className={styles["activity-body-section-bar-4"]}></div>
        <div className={styles["activity-body-section-bar-group-2"]}>
          <div className={styles["activity-body-section-bar-5"]}></div>
          <div className={styles["activity-body-section-bar-6"]}></div>
        </div>
        <div className={styles["activity-body-section-bar-2"]}></div>
        <div className={styles["activity-body-section-bar-group-3"]}>
          <div className={styles["activity-body-section-bar-3"]}></div>
          <div className={styles["activity-body-section-bar-3"]}></div>
        </div>
        <div className={styles["activity-body-section-bar-16"]}></div>
        <div className={styles["activity-body-section-bar-9"]}></div>
        <div className={styles["activity-body-section-bar-17"]}></div>
        <div className={styles["activity-body-section-bar-group-4"]}>
          <div className={styles["activity-body-section-bar-11"]}></div>
          <div className={styles["activity-body-section-bar-12"]}></div>
        </div>
        <div className={styles["activity-body-section-bar-16"]}></div>
        <div className={styles["activity-body-section-bar-group-5"]}>
          <div className={styles["activity-body-section-bar-14"]}></div>
          <div className={styles["activity-body-section-bar-15"]}></div>
        </div>
        <div className={styles["activity-body-section-bar-2"]}></div>
        <div className={styles["activity-body-section-bar-group-1"]}>
          <div className={styles["activity-body-section-bar-3"]}></div>
          <div className={styles["activity-body-section-bar-3"]}></div>
        </div>
        <div className={styles["activity-body-section-bar-16"]}></div>
        <div className={styles["activity-body-section-bar-group-2"]}>
          <div className={styles["activity-body-section-bar-5"]}></div>
          <div className={styles["activity-body-section-bar-6"]}></div>
        </div>
        <div className={styles["activity-body-section-bar-16"]}></div>
      </div>
      <div className={styles["activity-footer-section"]}>
        {ACTIVITY_WEEK_SECTION.map((week) => (
          <div key={week} className={styles["activity-footer-section-week"]}>
            {week}
          </div>
        ))}
      </div>
    </div>
  );
}
