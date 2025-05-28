
import styles from "./nextappointmentcard.module.css";

export function NextAppointmentCard({ nextAppointmentData }) {
    
  return (
    <>
      <div className={styles["next-appointment-card"]}>
        <div className={styles["next-appointment-card-header"]}>
          <div className={styles["next-appointment-card-header-title"]}>
            {nextAppointmentData.appointment}
          </div>
          <div className={styles["next-appointment-card-header-img-wrapper"]}>
           <img src={nextAppointmentData.icon} alt={nextAppointmentData.appointment} className={styles["next-appointment-card-header-img"]}  />
          </div>
        </div>
        <div className={styles["next-appointment-card-body"]}>
            {nextAppointmentData.time}
        </div>
        <div className={styles["next-appointment-card-footer"]}>
            {nextAppointmentData.doctorName}
        </div>
      </div>
    </>
  );
}
