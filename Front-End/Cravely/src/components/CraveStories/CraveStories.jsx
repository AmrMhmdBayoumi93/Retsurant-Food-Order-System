import React from 'react'
import styles from './CraveStories.module.css'
import manImg from '../../assets/man.png'
import womanImg from '../../assets/woman.png'

const reviews = [
    {
        id: 1,
        stars: 5,
        quote: '"The atmosphere is as sharp and refined as the flavors. The Wagyu was life-changing — perfectly seared with a depth of flavor I\'ve never experienced before. Truly a new-age gourmet experience."',
        name: 'Yousef Asaad',
        title: 'Food Critic',
        img: manImg
    },
    {
        id: 2,
        stars: 5,
        quote: '"Cravely isn\'t just a meal, it\'s a performance. From the presentation of the Miso Glazed Sea Bass to the impeccable service, everything screams precision and prestige. My favorite spot in the city."',
        name: 'Youlyana Asaad',
        title: 'Lifestyle Blogger',
        img: womanImg
    }
]

export default function CraveStories() {
    return (
        <section className={styles.section}>
            <div className="container">
            <div>
                <h2 className={styles.sectionTitle}>Crave Stories</h2>
                <p className={styles.sectionSubtitle}>Voices of those who have delved into our world of culinary excellence.</p>
            </div>

            <div className="row g-4">
                {reviews.map(review => (
                    <div className="col-lg-6" key={review.id}>
                        <div className={styles.card}>
                            <div className={styles.stars}>
                                {[...Array(review.stars)].map((_, i) => (
                                    <i key={i} className="bi bi-star-fill me-1"></i>
                                ))}
                            </div>
                            <p className={styles.quote}>{review.quote}</p>
                            <div className={styles.author}>
                                <img src={review.img} alt={review.name} className={styles.authorImg} />
                                <div>
                                    <p className={styles.authorName}>{review.name}</p>
                                    <p className={styles.authorTitle}>{review.title}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            </div>
        </section>
    )
}