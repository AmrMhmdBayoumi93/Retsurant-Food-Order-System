import { useState } from "react";
import styles from "./MenuManagement.module.css";

function MenuManagement() {
  const [open, setOpen] = useState(false);

  const [menuItems, setMenuItems] = useState([
    {
      id: 1,
      name: "Burger",
      category: "Fast Food",
      price: 120,
      available: true,
      imageUrl: "",
    },
    {
      id: 2,
      name: "Pizza",
      category: "Italian",
      price: 180,
      available: true,
      imageUrl: "",
    },
    {
      id: 3,
      name: "Pasta",
      category: "Italian",
      price: 150,
      available: false,
      imageUrl: "",
    },
  ]);

  const [newItem, setNewItem] = useState({
    name: "",
    description: "",
    category: "",
    price: "",
    available: true,
    image: "",
  });

  const [preview, setPreview] = useState("");

  const handleChange = (e) => {
    setNewItem({
      ...newItem,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setPreview(URL.createObjectURL(file));

      setNewItem({
        ...newItem,
        image: file.name,
      });
    }
  };

  const handleAddItem = () => {
    if (!newItem.name || !newItem.category || !newItem.price) return;

    const item = {
      id: Date.now(),
      ...newItem,
      imageUrl: preview,
    };

    setMenuItems([...menuItems, item]);

    setNewItem({
      name: "",
      description: "",
      category: "",
      price: "",
      available: true,
      image: "",
    });

    setPreview("");

    setOpen(false);
  };

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h2>Menu Management</h2>

        <button
          className={styles.addBtn}
          onClick={() => setOpen(true)}
        >
          + Add Item
        </button>
      </div>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {menuItems.map((item) => (
            <tr key={item.id}>
              <td>
                {item.imageUrl ? (
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className={styles.tableImage}
                  />
                ) : (
                  "No Image"
                )}
              </td>

              <td>{item.name}</td>

              <td>{item.category}</td>

              <td>{item.price} EGP</td>

              <td>
                {item.available ? (
                  <span className={styles.available}>
                    Available
                  </span>
                ) : (
                  <span className={styles.unavailable}>
                    Unavailable
                  </span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {open && (
        <div
          className={styles.overlay}
          onClick={() => setOpen(false)}
        >
          <div
            className={styles.modal}
            onClick={(e) => e.stopPropagation()}
          >
            <h3>Add New Item</h3>

            <input
              type="text"
              name="name"
              placeholder="Item Name"
              value={newItem.name}
              onChange={handleChange}
            />

            <textarea
              name="description"
              placeholder="Description"
              value={newItem.description}
              onChange={handleChange}
            />

            <select
              name="category"
              value={newItem.category}
              onChange={handleChange}
            >
              <option value="">Select Category</option>
              <option value="Burger">Burger</option>
              <option value="Pizza">Pizza</option>
              <option value="Pasta">Pasta</option>
              <option value="Drinks">Drinks</option>
              <option value="Desserts">Desserts</option>
            </select>

            <input
              type="number"
              name="price"
              placeholder="Price"
              value={newItem.price}
              onChange={handleChange}
            />

            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
            />

            {preview && (
              <img
                src={preview}
                alt="Preview"
                className={styles.preview}
              />
            )}

            <select
              name="available"
              value={newItem.available}
              onChange={(e) =>
                setNewItem({
                  ...newItem,
                  available: e.target.value === "true",
                })
              }
            >
              <option value="true">Available</option>
              <option value="false">Unavailable</option>
            </select>

            <div className={styles.actions}>
              <button onClick={() => setOpen(false)}>
                Cancel
              </button>

              <button
                className={styles.save}
                onClick={handleAddItem}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MenuManagement;