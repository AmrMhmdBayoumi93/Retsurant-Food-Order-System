import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import { useCart } from '../../../context/CartContext';
import styles from './OrderSummary.module.css';

const TAX_RATE = 0.085;
const KITCHEN_FEE = 2.5;

export default function OrderSummary() {
  const { subtotal } = useCart();

  const navigate = useNavigate();

  const tax = subtotal * TAX_RATE;
  const total = subtotal + tax + KITCHEN_FEE;

  const handleCheckout = () => {
    navigate('/checkout'); 
  };

  return (
    <div className={styles.box}>
      <h2 className={styles.title}>Order Summary</h2>

      <div className={styles.rows}>
        <div className={styles.row}>
          <span className={styles.label}>Subtotal</span>
          <span className={styles.value}>${subtotal.toFixed(2)}</span>
        </div>

        <div className={styles.row}>
          <span className={styles.label}>Tax (8.5%)</span>
          <span className={styles.value}>${tax.toFixed(2)}</span>
        </div>

        <div className={styles.row}>
          <span className={styles.label}>Kitchen Fee</span>
          <span className={styles.value}>${KITCHEN_FEE.toFixed(2)}</span>
        </div>
      </div>

      <div className={styles.divider} />

      <div className={styles.totalRow}>
        <span className={styles.totalLabel}>Total</span>
        <span className={styles.totalValue}>${total.toFixed(2)}</span>
      </div>

      <button
        className={styles.checkoutBtn}
        onClick={handleCheckout} 
      >
        Proceed to Checkout

        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </button>

      <p className={styles.secure}>
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0110 0v4" />
        </svg>

        Secure Encrypted Checkout
      </p>
    </div>
  );
}