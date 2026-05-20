import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import HomeFooter from '../components/HomeFooter/HomeFooter';
import CartItem from '../components/CartPage/CartItem/CartItem';
import OrderSummary from '../components/CartPage/OrderSummary/OrderSummary';
import { useCart } from '../context/CartContext';
import styles from './CartPage.module.css';

export default function Cart() {
  const { cartItems, totalItems } = useCart();

  return (
    <div className={styles.pageWrapper}>
      <Navbar />

      <main className={styles.main}>
        <div className={styles.container}>

          <section className={styles.leftCol}>
            <div className={styles.header}>
              <h1 className={styles.heading}>Your Cart</h1>
              <span className={styles.badge}>{totalItems} {totalItems === 1 ? 'item' : 'items'}</span>
            </div>
            <p className={styles.sub}>Review your items before proceeding to checkout</p>

            {cartItems.length === 0 ? (
              <div className={styles.empty}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#444" strokeWidth="1.2">
                  <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
                  <path d="M1 1h4l2.68 13.39a2 2 0 001.99 1.61h9.72a2 2 0 001.99-1.61L23 6H6" />
                </svg>
                <p>Your cart is empty</p>
                <Link to="/menu" className={styles.browseLink}>Browse Menu</Link>
              </div>
            ) : (
              <div className={styles.itemsList}>
                {cartItems.map((item) => (
                  <CartItem key={item.id} item={item} />
                ))}
              </div>
            )}

            <Link to="/menu" className={styles.backLink}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M19 12H5M12 5l-7 7 7 7" />
              </svg>
              Back to Menu
            </Link>
          </section>

          <aside className={styles.rightCol}>
            <OrderSummary />
          </aside>

        </div>
      </main>

      <HomeFooter />
    </div>
  );
}
