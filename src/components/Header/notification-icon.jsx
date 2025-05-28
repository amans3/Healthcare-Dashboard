import styles from "./header.module.css"
import { BellIcon } from "lucide-react"
export function NotificationIcon() {
    return (
        <div className={styles["header-notification-icon"]}>
            <BellIcon className={styles["header-notification-bell-icon"]} />    
        </div>
    )
}