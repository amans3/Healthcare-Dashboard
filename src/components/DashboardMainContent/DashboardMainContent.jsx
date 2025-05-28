import {
  HeartIcon,
  ArrowRightIcon,
  ChevronDownIcon,
  SearchCheckIcon,
  ArrowLeftIcon,
  BookDashedIcon,
  MinusIcon,
} from "lucide-react";
import styles from "./dashboard.module.css";
import { HEALTH_STATUS_CARD_DATA } from "../../constants/health-status";
import { HealthStatusCard } from "../HealthStatusCard/health-status-card";
import { ActivitySection } from "../ActivitySection/activity";
import { AppointmentCard } from "../SimpleAppointmentCard/simple-appointment-card";
import {
  APPOINTMENT_CARD_DATA_1,
  APPOINTMENT_CARD_DATA_2,
  CURRENT_APPOINTMENT_DATA,
  NEXT_APPOINTMENT_DATA,
} from "../../constants/appointment";
import { CurrentAppointmentCard } from "../CurrentAppointmemtCard/current-appointment-card";
import { NextAppointmentCard } from "../NextAppointmentCard/next-appointment-card";

export function DashboardMainContent() {
  return (
    <div className={styles["dashboard-main-content"]}>
      {/*  */}
      <div className={styles["dashboard-first-main-content"]}>
        {/* Dashboard Main Content Header Section */}
        <div className={styles["dashboard-first-main-content-header-section"]}>
          <div className={styles["dashboard-first-main-content-title"]}>
            Dashboard
          </div>
          <div className={styles["dashboard-first-main-content-sub-title"]}>
            This Week
            <span
              className={styles["dashboard-first-main-content-sub-title-span"]}
            >
              {" "}
              <ChevronDownIcon
                className={
                  styles["dashboard-first-main-content-sub-title-icon"]
                }
              />
            </span>
          </div>
        </div>
        {/* Human Body Image and Health Status Card */}
        <div className={styles["dashboard-first-main-content-body-section"]}>
          {/* HUMAN BODY */}
          <div
            className={
              styles["dashboard-first-main-content-body-image-section"]
            }
          >
            <img
              src="human-body-frontal.jpg"
              alt="human_body"
              className={styles["dashboard-first-main-content-body-image"]}
            />
            <span>
              <SearchCheckIcon
                className={
                  styles["dashboard-first-main-content-body-image-icon"]
                }
              />
            </span>
            <div className={styles["body-image-heart-status-card"]}>
              <HeartIcon
                className={styles["body-image-heart-status-card-icon"]}
              />
              <span className={styles["body-image-heart-status-card-title"]}>
                Healthy Heart
              </span>
            </div>
            <div className={styles["body-image-leg-status-card"]}>
              <img
                src="legs.png"
                className={styles["body-image-leg-status-card-img"]}
              />
              <span className={styles["body-image-leg-status-card-title"]}>
                Healthy Leg
              </span>
            </div>
          </div>
          {/* HEALTH STATUS CARD */}
          <div
            className={
              styles["dashboard-first-main-content-body-cards-section"]
            }
          >
            {HEALTH_STATUS_CARD_DATA.map((healthStatusCard) => (
              <HealthStatusCard
                key={healthStatusCard.title}
                healthStatusCard={healthStatusCard}
              />
            ))}
          </div>
          <div
            className={styles["dashboard-first-main-content-body-bottom-sub"]}
          >
            Details
            <span>
              <ArrowRightIcon
                className={
                  styles["dashboard-first-main-content-body-bottom-sub-icon"]
                }
              />
            </span>
          </div>
        </div>
        {/* Activity Feed  */}
        <div
          className={styles["dashboard-first-main-content-activity-section"]}
        >
          <ActivitySection />
        </div>
      </div>
      <div className={styles["dashboard-second-main-content"]}>
        {/* Calendar Grid */}
        <div
          className={styles["dashboard-second-main-content-calendar-section"]}
        >
          <div
            className={
              styles["dashboard-second-main-content-calendar-title-section"]
            }
          >
            <div
              className={styles["dashboard-second-main-content-calendar-title"]}
            >
              October 2021
            </div>
            <div
              className={
                styles[
                  "dashboard-second-main-content-calendar-title-section-icon-wrapper"
                ]
              }
            >
              <span>
                <ArrowLeftIcon
                  className={
                    styles[
                      "dashboard-second-main-content-calendar-section-title-icon"
                    ]
                  }
                />
              </span>
              <span>
                <ArrowRightIcon
                  className={
                    styles[
                      "dashboard-second-main-content-calendar-section-title-icon"
                    ]
                  }
                />
              </span>
            </div>
          </div>
          <div
            className={
              styles[
                "dashboard-second-main-content-calendar-section-calendar-grid"
              ]
            }
          >
            <div className={`${styles["dateOfWeek"]} `}></div>
            <div className={`${styles["dateOfWeek"]}`}></div>
            <div className={`${styles["dateOfWeek"]}`}></div>
            <div className={`${styles["dateOfWeek"]}`}></div>
            <div className={`${styles["dateOfWeek"]}`}></div>
            <div className={`${styles["dateOfWeek"]}`}></div>
            <div className={`${styles["dateOfWeek"]}`}></div>
            <div className={`${styles["dayOfWeek"]}`}>Mon</div>
            <div className={`${styles["dayOfWeek"]}`}>Tues</div>
            <div className={`${styles["dayOfWeek"]}`}>Wed</div>
            <div className={`${styles["dayOfWeek"]}`}>Thurs</div>
            <div className={`${styles["dayOfWeek"]}`}>Fri</div>
            <div className={`${styles["dayOfWeek"]}`}>Sat</div>
            <div className={` ${styles["dayOfWeek"]} ${styles["fade"]}`}>
              Sun
            </div>
            <div className={` ${styles["dateOfWeek"]}`}>25</div>
            <div className={` ${styles["dateOfWeek"]}`}>26</div>
            <div className={` ${styles["dateOfWeek"]}`}>27</div>
            <div className={` ${styles["dateOfWeek"]}`}>28</div>
            <div className={` ${styles["dateOfWeek"]}`}>29</div>
            <div className={` ${styles["dateOfWeek"]}`}>30</div>
            <div className={`  ${styles["dateOfWeek"]} ${styles["fade"]}`}>
              31
            </div>
            <div className={`${styles["dateOfWeek"]}`}></div>
            <div className={`${styles["dateOfWeek"]}`}></div>
            <div className={`${styles["dateOfWeek"]}`}></div>
            <div className={`${styles["dateOfWeek"]}`}></div>
            <div className={`${styles["dateOfWeek"]}`}></div>
            <div className={`${styles["dateOfWeek"]}`}></div>
            <div className={`${styles["dateOfWeek"]} ${styles["fade"]}`}></div>
            <div className={`${styles["timeOfWeek"]}`}>10:00</div>
            <div className={`${styles["timeOfWeek"]}`}>08:00</div>
            <div className={` ${styles["timeOfWeek"]}`}>12:00</div>
            <div className={` ${styles["timeOfWeek"]}`}>10:00</div>
            <div className={` ${styles["timeOfWeek"]}`}>
              <MinusIcon className={`${styles["minus-icon"]}`} />
            </div>
            <div
              className={` ${styles["timeOfWeek"]} ${styles["highlighted"]}`}
            >
              12:00
            </div>
            <div
              className={` ${styles["timeOfWeek"]} ${styles["highlighted"]}`}
            >
              09:00
            </div>
            <div className={`${styles["timeOfWeek"]}`}>11:00</div>
            <div className={`${styles["timeOfWeek"]} ${styles["highlighted"]}`}>
              09:00
            </div>
            <div className={`${styles["timeOfWeek"]}`}>
              <MinusIcon className={`${styles["minus-icon"]}`} />
            </div>
            <div className={`${styles["timeOfWeek"]} ${styles["highlighted"]}`}>
              11:00
            </div>
            <div className={` ${styles["timeOfWeek"]}`}>14:00</div>
            <div className={`${styles["timeOfWeek"]}`}>14:00</div>
            <div className={` ${styles["timeOfWeek"]} ${styles["fade"]}`}>
              10:00
            </div>
            <div className={`${styles["timeOfWeek"]}`}>12:00</div>
            <div className={`${styles["timeOfWeek"]}`}>10:00</div>
            <div className={`${styles["timeOfWeek"]}`}>13:00</div>
            <div className={`${styles["timeOfWeek"]}`}>
              <MinusIcon className={`${styles["minus-icon"]}`} />
            </div>
            <div className={`${styles["timeOfWeek"]}`}>16:00</div>
            <div className={`${styles["timeOfWeek"]}`}>15:00</div>
            <div className={`${styles["timeOfWeek"]} ${styles["fade"]}`}>
              11:00
            </div>
            <div className={`${styles["dateOfWeek"]}`}></div>
            <div className={`${styles["dateOfWeek"]}`}></div>
            <div className={` ${styles["dateOfWeek"]}`}></div>
            <div className={`${styles["dateOfWeek"]}`}></div>
            <div className={`${styles["dateOfWeek"]}`}></div>
            <div className={`${styles["dateOfWeek"]}`}></div>
            <div className={`${styles["dateOfWeek"]}`}></div>
            <div className={styles["bg-fade-layout"]}></div>
            <div className={styles["capsule-1"]}></div>
            <div className={styles["capsule-2"]}></div>
            <div className={styles["capsule-3"]}></div>
            <div className={styles["dot-1"]}></div>
            <div className={styles["dot-2"]}></div>
            <div className={styles["dot-3"]}></div>
          </div>
        </div>

        {/* Current Appointment Card */}
        <div
          className={
            styles["dashboard-second-main-content-current-appointment-section"]
          }
        >
          {CURRENT_APPOINTMENT_DATA.map((currentAppointmentData) => (
            <CurrentAppointmentCard
              currentAppointmentData={currentAppointmentData}
            />
          ))}
          {NEXT_APPOINTMENT_DATA.map((nextAppointmentData) => (
            <NextAppointmentCard nextAppointmentData={nextAppointmentData} />
          ))}
        </div>
        {/* Simple Appointment Card */}
        <div className={styles["dashboard-second-main-content-schedule-title"]}>
          The Upcoming Schedule
        </div>
        {/* On Thursday */}
        <div
          className={styles["dashboard-second-main-content-schedule-sub-title"]}
        >
          On Thursday
        </div>
        <div
          className={
            styles["dashboard-second-main-content-appointment-card-section"]
          }
        >
          {APPOINTMENT_CARD_DATA_1.map((appointmentData) => (
            <AppointmentCard
              key={appointmentData.appointment}
              appointmentData={appointmentData}
            />
          ))}
        </div>
        {/* ON Saturday */}
        <div
          className={styles["dashboard-second-main-content-schedule-sub-title"]}
        >
          On Saturday
        </div>
        <div
          className={
            styles["dashboard-second-main-content-appointment-card-section"]
          }
        >
          {APPOINTMENT_CARD_DATA_2.map((appointmentData) => (
            <AppointmentCard
              key={appointmentData.appointment}
              appointmentData={appointmentData}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
