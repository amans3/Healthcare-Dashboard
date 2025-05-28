import { PlusIcon } from "lucide-react";
import styles from "./header.module.css";

export function AddButton() {
  return <div className={styles["header-add-button"]}>
     <PlusIcon className={styles["header-add-button-icon"]} />
    </div>;
}
