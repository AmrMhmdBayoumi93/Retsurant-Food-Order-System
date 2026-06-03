import { NavLink } from "react-router-dom";
import styles from "./Sidebar.module.css";
import {
  FaShoppingBag,
  FaUtensils,
  FaUsers,
  FaChartBar,
} from "react-icons/fa";

function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <h2 className={styles.logo}>Cravely</h2>

      <div className={styles.brandInfo}>
        <h4>RESTAURANT ADMIN</h4>
        <p>Managing Cravely Global</p>
      </div>

      <nav className={styles.nav}>
        <NavLink
          to="/dashboard"
          end
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          <FaChartBar />
          Dashboard
        </NavLink>

        <NavLink
          to="/dashboard/orders"
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          <FaShoppingBag />
          Orders
        </NavLink>

        <NavLink
          to="/dashboard/menu"
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          <FaUtensils />
          Menu
        </NavLink>

        <NavLink
          to="/dashboard/users"
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          <FaUsers />
          Users
        </NavLink>
      </nav>
    </aside>
  );
}

export default Sidebar;