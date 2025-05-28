import { SearchIcon } from "lucide-react"
import styles from "./header.module.css"

export function SearchBar() {
    return (
        <div className={styles["header-search-bar"]}>
            <input type="text" placeholder="Search" className={styles["header-search-bar-input"]} />
            <SearchIcon className={styles["header-search-bar-input-search-icon"]} />
        </div>
    )
}