import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from './OrderConfirmation.module.css'
import Navbar from '../components/Navbar/Navbar'
import { useCart } from '../context/CartContext'

export default function OrderConfirmation() {
    const { clearCart } = useCart()
    const orderNumber = Math.floor(Math.random() * 900000) + 100000

    useEffect(() => {
        clearCart()
    }, [])

    return (
        <div className={styles.pageWrapper}>
            <Navbar />
            <div className={styles.content}>
                <div className={styles.card}>
                    <div className={styles.icon}>
                        <i className="bi bi-check-circle-fill"></i>
                    </div>
                    <h2 className={styles.title}>Order Placed Successfully!</h2>
                    <p className={styles.subtitle}>
                        Thank you for your order. We're preparing your food now!
                    </p>
                    <div className={styles.orderNumber}>
                        <p className={styles.orderNumberText}>Order Number</p>
                        <p className={styles.orderNumberValue}>#CR{orderNumber}</p>
                    </div>
                    <Link to="/" className={styles.homeBtn}>
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>
    )
}