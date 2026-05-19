import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'
import { useCart } from '../../context/CartContext'
import { useWishlist } from '../../context/WishlistContext'
import { useAuth } from '../../context/AuthContext'

export default function Navbar() {
    const { cartCount } = useCart()
    const { wishlistCount } = useWishlist()
    const { user, isLoggedIn, logout } = useAuth()

    return (
        <nav className={styles.navbar}>

            {/* Logo */}
            <Link to="/" className={styles.logo}>Cravely</Link>

            {/* Nav Links */}
            <ul className={styles.navLinks}>
                <li><Link to="/" className={`${styles.navLink} ${styles.active}`}>Home</Link></li>
                <li><Link to="/menu" className={styles.navLink}>Menu</Link></li>
            </ul>

            {/* Icons & Buttons */}
            <div className={styles.navIcons}>
                <Link to="/wishlist" className={styles.icon}>
                    <div className={styles.iconWrapper}>
                        <i className="bi bi-heart"></i>
                        {wishlistCount > 0 && (
                            <span className={styles.badge}>{wishlistCount}</span>
                        )}
                    </div>
                </Link>
                <Link to="/cart" className={styles.icon}>
                    <div className={styles.iconWrapper}>
                        <i className="bi bi-bag"></i>
                        {cartCount > 0 && (
                            <span className={styles.badge}>{cartCount}</span>
                        )}
                    </div>
                </Link>

                {isLoggedIn ? (
                    <>
                        <div className={styles.userInfo}>
                            <i className="bi bi-person-circle"></i>
                            <span className={styles.userName}>{user.name}</span>
                        </div>
                        <button className={styles.logoutBtn} onClick={logout}>
                            Logout
                        </button>
                    </>
                ) : (
                    <>
                        <Link to="/login" className={styles.loginBtn}>Login</Link>
                        <Link to="/register" className={styles.loginBtn}>Register</Link>
                        <Link to="/menu" className={styles.registerBtn}>Order Now</Link>
                    </>
                )}
            </div>

        </nav>
    )
}