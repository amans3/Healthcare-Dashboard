import { SettingsIcon } from "lucide-react";
import {
  SIDEBAR_NAVIGATION_LINKS,
  SIDEBAR_NAVIGATION_LINKS_2,
  SIDEBAR_NAVIGATION_LINKS_3,
} from "../../constants/sidebar";
import { SidebarItem } from "./sidebar-item";
import styles from "./sidebar.module.css";

export function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles["sidebar-general"]}>
        <h1 className={styles["sidebar-header"]}>General</h1>
        <div className={styles["sidebar-navigation"]}>
          {SIDEBAR_NAVIGATION_LINKS.map((sidebarItem) => (
            <SidebarItem key={sidebarItem.title} sidebarItem={sidebarItem} />
          ))}
        </div>
      </div>
      <div className={styles["sidebar-tools"]}>
        <h1 className={styles["sidebar-header"]}>Tools</h1>
        <div className={styles["sidebar-navigation"]}>
          {SIDEBAR_NAVIGATION_LINKS_2.map((sidebarItem) => (
            <SidebarItem key={sidebarItem.title} sidebarItem={sidebarItem} />
          ))}
        </div>
      </div>
      <div className={styles["sidebar-settings"]}>
        <div className={styles["sidebar-navigation"]}>
          {SIDEBAR_NAVIGATION_LINKS_3.map((sidebarItem) => (
            <SidebarItem key={sidebarItem.title} sidebarItem={sidebarItem} />
          ))}
        </div>
      </div>
    </div>
  );
}
