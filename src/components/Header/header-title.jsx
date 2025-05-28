import styles from "./header.module.css"

export function HeaderTitle() {
    return (
        <div className={styles["header-title"]}>
            Health<span className={styles["header-title-sub"]}>care.</span>
        </div>
    )
}