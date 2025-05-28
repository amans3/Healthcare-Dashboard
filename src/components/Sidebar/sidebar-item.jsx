import styles from "./sidebar.module.css";

export function SidebarItem({ sidebarItem }) {
  const isActive = sidebarItem.title === "Dashboard";
  return (
    <div className={styles["sidebar-navigation-item"]}>
      <div
        className={`${styles["sidebar-navigation-item-icon"]}`}
      >
        <sidebarItem.icon
          className={`${styles["sidebar-navigation-item-icon-svg"]} ${
            isActive && styles["sidebar-navigation-item-icon-svg-active"]
          }`}
        />
      </div>
      <div
        className={`${styles["sidebar-navigation-item-title"]} ${
          isActive && styles["sidebar-navigation-item-title-active"]
        }`}
      >
        {sidebarItem.title}
      </div>
    </div>
  );
}
