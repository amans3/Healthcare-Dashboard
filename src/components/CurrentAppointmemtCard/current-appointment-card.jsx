
import styles from "./currentappointmentcard.module.css";

export function CurrentAppointmentCard({ currentAppointmentData }) {
    console.log(currentAppointmentData)
  return (
    <>
      <div className={styles["current-appointment-card"]}>
        <div className={styles["current-appointment-card-header"]}>
          <div className={styles["current-appointment-card-header-title"]}>
            {currentAppointmentData.appointment}
          </div>
          <div className={styles["current-appointment-card-header-img-wrapper"]}>
           <img src={currentAppointmentData.icon} alt={currentAppointmentData.appointment} className={styles["current-appointment-card-header-img"]}  />
          </div>
        </div>
        <div className={styles["current-appointment-card-body"]}>
            {currentAppointmentData.time}
        </div>
        <div className={styles["current-appointment-card-footer"]}>
            {currentAppointmentData.doctorName}
        </div>
      </div>
    </>
  );
}
