import React from 'react'
import styles from './HomeFooter.module.css'

export default function HomeFooter() {
    return (
        <footer className={styles.footer}>
            <div className="row">

                {/* Logo & Description */}
                <div className="col-lg-3">
                    <h3 className={styles.logo}>Cravely</h3>
                    <p className={styles.description}>
                        Crafting culinary experiences delivered straight to your door. Fresh ingredients, bold flavors.
                    </p>
                    <div className={styles.socialIcons}>
                        <button className={styles.socialBtn}>
                            <i className="bi bi-globe"></i>
                        </button>
                        <button className={styles.socialBtn}>
                            <i className="bi bi-share"></i>
                        </button>
                        <button className={styles.socialBtn}>
                            <i className="bi bi-envelope"></i>
                        </button>
                    </div>
                </div>

                {/* Quick Links */}
                <div className="col-lg-3">
                    <h6 className={styles.colTitle}>QUICK LINKS</h6>
                    <a href="/menu" className={styles.link}>Our Menu</a>
                    <a href="/offers" className={styles.link}>Special Offers</a>
                    <a href="/store" className={styles.link}>Store Locator</a>
                    <a href="/track" className={styles.link}>Track Order</a>
                </div>

                {/* Support */}
                <div className="col-lg-3">
                    <h6 className={styles.colTitle}>SUPPORT</h6>
                    <a href="/help" className={styles.link}>Help Center</a>
                    <a href="/privacy" className={styles.link}>Privacy Policy</a>
                    <a href="/terms" className={styles.link}>Terms of Service</a>
                    <a href="/contact" className={styles.link}>Contact Us</a>
                </div>

                {/* Newsletter */}
                <div className="col-lg-3">
                    <h6 className={styles.colTitle}>NEWSLETTER</h6>
                    <p className={styles.newsletterText}>Get exclusive deals and recipes.</p>
                    <div className={styles.newsletterForm}>
                        <input
                            type="email"
                            placeholder="Email address"
                            className={styles.newsletterInput}
                        />
                        <button className={styles.newsletterBtn}>
                            <i className="bi bi-arrow-right"></i>
                        </button>
                    </div>
                </div>

            </div>

            <hr className={styles.divider} />

            <div className={styles.bottomBar}>
                <p className={styles.copyright}>© 2024 Cravely. All rights reserved.</p>
                <div className={styles.bottomLinks}>
                    <a href="/cookies" className={styles.bottomLink}>POLICY</a>
                    <a href="/sitemap" className={styles.bottomLink}>LOCATIONS</a>
                    <a href="/accessibility" className={styles.bottomLink}>CAREERS</a>
                </div>
            </div>

        </footer>
    )
}