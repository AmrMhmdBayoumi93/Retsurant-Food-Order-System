import { useState } from "react";
import styles from "./Users.module.css";

function Users() {
  const [open, setOpen] = useState(false);

  const users = [
    { id: 1, name: "Yousef Asaad", email: "yousef@gmail.com", role: "Admin", status: "Active" },
    { id: 2, name: "Amr Baumy", email: "amr@gmail.com", role: "User", status: "Active" },
    { id: 3, name: "Sarah Abdelsameai", email: "sarah@gmail.com", role: "User", status: "Blocked" },
    { id: 4, name: "Maiar Emam", email: "maiar@gmail.com", role: "Admin", status: "Active" },
    { id: 5, name: "Yolyana Asaad", email: "yolyana@gmail.com", role: "User", status: "Active" }
  ];

  return (
    <div className={styles.page}>
      {/* HEADER */}
      <div className={styles.header}>
        <h2>Users Management</h2>

        <button onClick={() => setOpen(true)} className={styles.addBtn}>
          + Add User
        </button>
      </div>

      {/* TABLE */}
      <table className={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                <span
                  className={`${styles.status} ${
                    user.status === "Active"
                      ? styles.active
                      : styles.blocked
                  }`}
                >
                  {user.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* MODAL */}
      {open && (
        <div className={styles.overlay} onClick={() => setOpen(false)}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <h3>Add New User</h3>

            <input placeholder="Full Name" />
            <input placeholder="Email" />
            <input placeholder="Password" type="password" />

            <select>
              <option value="User">User</option>
              <option value="Admin">Admin</option>
            </select>

            <div className={styles.actions}>
              <button onClick={() => setOpen(false)}>Cancel</button>
              <button className={styles.save}>Create</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Users;