import React, { useState } from 'react'
import styles from "./loginForm.module.css"

function Loginform() {
    const [showPassword, setShowPassword] = useState(false)
    return (
        <div className={styles.card}>

            <div className='text-center mb-4'>
                <h2 className='text-white fw-bold'>Welcome Back</h2>
                <p className={styles.subtitle}>Please enter your details to continue</p>
            </div>

            <div className='mb-3'>
                <label className={styles.label}>EMAIL ADDRESS</label>
                <div className={`input-group ${styles.inputGroup}`}>
                    <span className='input-group-text'>
                        <i className='bi bi-envelope'></i>
                    </span>
                    <input type='email' placeholder='maiar@gmail.com' className={`form-control ${styles.input}`} />
                </div>
            </div>

            <div className='mb-4'>
                <div className={`d-flex justify-content-between align-items-center mb-1`}>
                    <label className={styles.label} style={{ marginBottom: 0 }}>PASSWORD</label>
                    <span className={styles.forgotLink}>FORGOT PASSWORD?</span>
                </div>
                <div className={`input-group ${styles.inputGroup}`}>
                    <span className='input-group-text'>
                        <i className='bi bi-lock'></i>
                    </span>
                    <input type={showPassword ? 'text' : 'password'} placeholder='••••••••' className={`form-control ${styles.input}`} />
                    <span className={`input-group-text ${styles.eyeBtn}`} onClick={() => setShowPassword(!showPassword)}>
                        <i className={`bi ${showPassword ? 'bi-eye-slash' : 'bi-eye'}`}></i>
                    </span>
                </div>
            </div>

            <button className={`btn w-100 ${styles.submitBtn}`}>
                Login <i className='bi bi-arrow-right'></i>
            </button>

            <div className={`text-center my-3 ${styles.dividerWrapper}`}>
                <span className={styles.dividerText}>OR LOGIN WITH</span>
            </div>

            <div className='d-flex gap-3'>
                <button className={`btn flex-grow-1 ${styles.socialBtn}`}>
                    <i className='bi bi-google me-2'></i>Google
                </button>
                <button className={`btn flex-grow-1 ${styles.socialBtn}`}>
                    <i className="bi bi-facebook me-2"></i>Facebook
                </button>
            </div>

        </div>
    )
}

export default Loginform