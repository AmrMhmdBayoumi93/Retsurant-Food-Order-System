import { useState } from "react";
import styles from "./Orders.module.css";

function Orders() {
  const [open, setOpen] = useState(false);

  const orders = [
    { id: "#101", customer: "Yousef Asaad", status: "Pending", total: "$25" },
    { id: "#102", customer: "Amr Baumy", status: "Completed", total: "$40" },
    { id: "#103", customer: "Sarah Abdelsameai", status: "Cancelled", total: "$15" },
    { id: "#104", customer: "Maiar Emam", status: "Pending", total: "$30" },
    { id: "#105", customer: "Yolyana Asaad", status: "Completed", total: "$50" }
  ];

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h2>Orders Management</h2>

        <button onClick={() => setOpen(true)} className={styles.createBtn}>
          + Create Order
        </button>
      </div>

      {/* Table */}
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

      {/* Modal */}
      {open && (
        <div className={styles.modalOverlay} onClick={() => setOpen(false)}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <h3>Create Order</h3>

            <input placeholder="Customer Name" />
            <input placeholder="Total Price" type="number" />

            <select>
              <option>Pending</option>
              <option>Completed</option>
              <option>Cancelled</option>
            </select>

            <div className={styles.actions}>
              <button onClick={() => setOpen(false)}>Cancel</button>
              <button className={styles.save}>Save</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Orders;