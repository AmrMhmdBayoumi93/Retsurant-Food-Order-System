import StatCard from "../components/StatCard/StatCard";
import OrdersTable from "../components/OrdersTable/OrdersTable";
import RevenueChart from "../components/RevenueChart/RevenueChart";

import { FaDollarSign, FaShoppingCart, FaUsers, FaUtensils } from "react-icons/fa";
import styles from "./Dashboard.module.css";

function Dashboard() {
  return (
    <div>
      <div className={styles.grid}>
        <StatCard title="Revenue" value="$12,500" icon={<FaDollarSign />} />
        <StatCard title="Orders" value="320" icon={<FaShoppingCart />} />
        <StatCard title="Users" value="150" icon={<FaUsers />} />
        <StatCard title="Menu Items" value="45" icon={<FaUtensils />} />
      </div>

      <RevenueChart />

      <OrdersTable />
    </div>
  );
}

export default Dashboard;