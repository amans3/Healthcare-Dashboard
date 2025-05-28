import styles from "./header.module.css";
import { HeaderTitle } from "./header-title";
import { SearchBar } from "./search-bar";
import { NotificationIcon } from "./notification-icon";
import { UserProfile } from "./user-profile";
import { AddButton } from "./add-button";

export function Header() {
  return (
    <div className={styles.header}>
      <HeaderTitle />
      <div className={styles["header-middle-section"]}>
      <SearchBar />
      <NotificationIcon />
      </div>
      <div className={styles["header-end-section"]}>
      <UserProfile />
      <AddButton />
      </div>
    </div>
  );
}
