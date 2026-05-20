import React from 'react'
import RegisterForm from '../components/Register/RegisterForm'
import Footer from '../components/Login/Footer/Footer'
import styles from './Register.module.css'

export default function Register() {
    return (
        <div className={styles.pageWrapper}>

            <div className='d-flex justify-content-center align-items-center flex-grow-1'>
                <RegisterForm />
            </div>

            <Footer />

        </div>
    )
}