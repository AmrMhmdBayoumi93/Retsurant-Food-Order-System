import React from 'react'
import styles from './HeroSection.module.css'
import heroImg from '../../assets/porger.png'

export default function HeroSection() {
    return (
        <section className={styles.hero}>
            <div className="container">
                <div className="row align-items-center">

                    {/* Content */}
                    <div className="col-lg-6">
                        <span className={styles.tag}>OUR CHEF'S SPECIAL</span>
                        <h1 className={styles.title}>
                            Taste the <br />
                            <span className={styles.titleRed}>Craving.</span>
                        </h1>
                        <p className={styles.description}>
                            Experience a curated symphony of flavors where traditional culinary mastery meets avant-garde presentation. Every dish is a story told through fire, spice, and soul.
                        </p>
                        <div className={styles.btnGroup}>
                            <a href="/menu" className={styles.orderBtn}>Order Now</a>
                            <a href="/menu" className={styles.menuBtn}>View Menu</a>
                        </div>
                    </div>

                    {/* Image */}
                    <div className="col-lg-6 d-flex justify-content-center">
                        <img src={heroImg} alt="Hero Food" className={styles.heroImage} />
                    </div>

                </div>
            </div>
        </section>
    )
}