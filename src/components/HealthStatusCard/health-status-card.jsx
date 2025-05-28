import { useCallback, useEffect } from "react";
import styles from "./healthcard.module.css";

export function HealthStatusCard({ healthStatusCard }) {
  console.log(healthStatusCard);

  return (
    <div className={styles["health-status-card"]}>
      <div className={styles["health-status-card-header"]}>
        <img
          src={healthStatusCard.img}
          alt={healthStatusCard.title}
          className={styles["health-status-card-header-png"]}
        />
        <div className={styles["health-status-card-header-title"]}>
          {healthStatusCard.title}
        </div>
      </div>
      <div className={styles["health-status-card-date"]}>
        {healthStatusCard.date}
      </div>
      <div
        style={{
          backgroundColor: `${healthStatusCard.color}`,
          borderRadius: "0.5rem",
        }}
        className={styles["health-status-card-progress-bar"]}
      ></div>
    </div>
  );
}
