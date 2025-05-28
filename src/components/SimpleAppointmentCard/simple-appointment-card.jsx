
import styles from "./appointmentcard.module.css";

export function AppointmentCard({ appointmentData }) {
    console.log(appointmentData)
  return (
    <>
      <div className={styles["appointment-card"]}>
        <div className={styles["appointment-card-header"]}>
          <div className={styles["appointment-card-header-title"]}>
            {appointmentData.appointment}
          </div>
          <div className={styles["appointment-card-header-img-wrapper"]}>
           <img src={appointmentData.icon} alt={appointmentData.appointment} className={styles["appointment-card-header-img"]}  />
          </div>
        </div>
        <div className={styles["appointment-card-body"]}>
            {appointmentData.time}
        </div>
      </div>
    </>
  );
}
