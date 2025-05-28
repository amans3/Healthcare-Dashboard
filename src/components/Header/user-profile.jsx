import { UserRound } from "lucide-react"
import styles from "./header.module.css"

export function UserProfile() {
    return (
        <div className={styles["header-user-profile"]}>
            <img src="avatar_3.png" alt="user_avatar" className={styles["header-user-profile-image"]} />
         {/* <UserRound className={styles["header-user-profile-icon"]} /> */}
        </div>
    )
}