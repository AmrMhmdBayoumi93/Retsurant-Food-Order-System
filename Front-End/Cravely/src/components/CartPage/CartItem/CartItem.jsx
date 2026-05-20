import React from 'react';
import { useCart } from '../../../context/CartContext';
import styles from './CartItem.module.css';

export default function CartItem({ item }) {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <div className={styles.card}>
      <div className={styles.imageWrap}>
        <img src={item.image} alt={item.name} className={styles.image} />
      </div>

      <div className={styles.info}>
        <h3 className={styles.name}>{item.name}</h3>
        <div className={styles.tags}>
          {item.tags.map((tag) => (
            <span key={tag} className={styles.tag}>{tag}</span>
          ))}
        </div>

        <div className={styles.bottom}>
          <div className={styles.qty}>
            <button
              className={styles.qtyBtn}
              onClick={() => updateQuantity(item.id, -1)}
              aria-label="Decrease quantity"
            >
              −
            </button>
            <span className={styles.qtyNum}>{item.quantity}</span>
            <button
              className={styles.qtyBtn}
              onClick={() => updateQuantity(item.id, 1)}
              aria-label="Increase quantity"
            >
              +
            </button>
          </div>
          <span className={styles.price}>${(item.price * item.quantity).toFixed(2)}</span>
        </div>
      </div>

      <button
        className={styles.deleteBtn}
        onClick={() => removeFromCart(item.id)}
        aria-label="Remove item"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <polyline points="3 6 5 6 21 6" />
          <path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6" />
          <path d="M10 11v6M14 11v6" />
          <path d="M9 6V4a1 1 0 011-1h4a1 1 0 011 1v2" />
        </svg>
      </button>
    </div>
  );
}
