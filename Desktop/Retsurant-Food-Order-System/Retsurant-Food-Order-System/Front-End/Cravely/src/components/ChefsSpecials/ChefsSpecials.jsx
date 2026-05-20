import React from 'react'
import styles from './ChefsSpecials.module.css'
import img1 from '../../assets/plela.png'
import img2 from '../../assets/tome.png'
import img3 from '../../assets/gato.png'
import { useCart } from '../../context/CartContext'
import { useWishlist } from '../../context/WishlistContext'

const items = [
    {
        id: 1,
        title: 'Truffle Umami Risotto',
        price: '$62',
        desc: 'Aged carnaroli rice infused with rich forest truffles, finished with 24-month Parmigiano and gold leaf.',
        img: img1
    },
    {
        id: 2,
        title: 'Burgundy Crust Lamb',
        price: '$48',
        desc: 'Frenched rack of lamb with a reduction of vintage burgundy and hazelnut nut tapenade.',
        img: img2
    },
    {
        id: 3,
        title: 'Miso Glazed Sea Bass',
        price: '$58',
        desc: 'Miso-aged sea bass has marinated in sweet miso, steamed to perfection and served over black iris foam.',
        img: img3
    }
]

export default function ChefsSpecials() {
    const { addToCart } = useCart()
    const { addToWishlist, isInWishlist } = useWishlist()

    return (
        <section className={styles.section}>
            <div className="container">

                <div className={styles.sectionHeader}>
                    <div>
                        <h2 className={styles.sectionTitle}>Chef's Specials</h2>
                        <p className={styles.sectionSubtitle}>Hand-picked selections for the discerning palate.</p>
                    </div>
                    <a href="/menu" className={styles.seeAll}>See All &gt;</a>
                </div>

                <div className="row g-4">
                    {items.map(item => (
                        <div className="col-lg-4 col-md-6" key={item.id}>
                            <div className={styles.card}>
                                <img src={item.img} alt={item.title} className={styles.cardImg} />
                                <div className={styles.cardBody}>
                                    <div className={styles.cardTop}>
                                        <h5 className={styles.cardTitle}>{item.title}</h5>
                                        <span className={styles.cardPrice}>{item.price}</span>
                                    </div>
                                    <p className={styles.cardDesc}>{item.desc}</p>
                                </div>
                                <div className={styles.cardActions}>
                                    <button
                                        className={styles.wishlistBtn}
                                        onClick={() => addToWishlist(item)}
                                        style={{ color: isInWishlist(item.id) ? 'var(--primary-color)' : '' }}
                                    >
                                        <i className={`bi ${isInWishlist(item.id) ? 'bi-heart-fill' : 'bi-heart'}`}></i>
                                    </button>
                                    <button
                                        className={styles.addBtn}
                                        onClick={() => addToCart(item)}
                                    >
                                        <i className="bi bi-plus"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}