import styles from "./Topbar.module.css";
import { FaBell, FaUserCircle } from "react-icons/fa";

function Topbar() {
  return (
    <div className={styles.topbar}>
      <input type="text" placeholder="Search..." className={styles.search} />

      <div className={styles.right}>
        <FaBell className={styles.icon} />

        <div className={styles.user}>
          <FaUserCircle className={styles.userIcon} />
          <span>Admin</span>
        </div>
      </div>
    </div>
  );
}

export default Topbar;