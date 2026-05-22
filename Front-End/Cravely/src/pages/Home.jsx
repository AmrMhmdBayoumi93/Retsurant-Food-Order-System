import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import HeroSection from '../components/HeroSection/HeroSection'
import ChefsSpecials from '../components/ChefsSpecials/ChefsSpecials'
import CraveStories from '../components/CraveStories/CraveStories'
import HomeFooter from '../components/HomeFooter/HomeFooter'
import styles from './Home.module.css'


export default function Home() {
    return (
        <div className={styles.pageWrapper}>
            <Navbar />
            <HeroSection />
            <hr className="section-divider" />
            <ChefsSpecials />
            <hr className="section-divider" />
            <CraveStories />
            <hr className="section-divider" />
            <HomeFooter />
        </div>
    )
}