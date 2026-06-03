import styles from "./OrdersTable.module.css";

function OrdersTable() {
  const orders = [
    { id: "#101", customer: "Yousef Asaad", status: "Pending", total: "$25" },
    { id: "#102", customer: "Amr Baumy", status: "Completed", total: "$40" },
    { id: "#103", customer: "Sarah Abdelsameai", status: "Cancelled", total: "$15" },
    { id: "#104", customer: "Maiar Emam", status: "Pending", total: "$30" },
    { id: "#105", customer: "Yolyana Asaad", status: "Completed", total: "$50" }
  ];

  return (
    <div className={styles.tableContainer}>
      <h3>Recent Orders</h3>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Customer</th>
            <th>Status</th>
            <th>Total</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customer}</td>
              <td>{order.status}</td>
              <td>{order.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default OrdersTable;