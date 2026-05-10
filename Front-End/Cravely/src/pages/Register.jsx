import React, { useState } from 'react'
import styles from './Register.module.css'
export default function Register() {
    const [showPassword, setShowPassword] = useState(false)
    const [agreed, setAgreed] = useState(false)
    return (
        <>
            <div className={styles.pageWrapper}>

                <div className='d-flex justify-content-center align-items-center flex-grow-1 '>
                    <div className={styles.card}>

                        <div className='text-center mb-2'>
                            <h2 className={styles.logo}>Cravely</h2>
                        </div>

                        <div className='text-center mb-4'>
                            <h4 className='text-white fw-bold'>Create Account</h4>
                            <p className={styles.subtitle}>JOIN THE MIDNIGHT KINGDOM</p>
                        </div>

                        <div className='mb-3'>
                            <label className={styles.label}>FULL NAME</label>
                            <div className={`input-group ${styles.inputGroup}`}>
                                <span className='input-group-text'>
                                    <i className='bi bi-person'></i>
                                </span>
                                <input type="text" placeholder='Yousef Asaad' className={`form-control ${styles.input}`} />
                            </div>
                        </div>

                        <div className='mb-3'>
                            <label className={styles.label}>EMAIL ADDRESS</label>
                            <div className={`input-group ${styles.inputGroup}`}>
                                <span className='input-group-text'>
                                    <i className='bi bi-envelope'></i>
                                </span>
                                <input type="email" placeholder='name@example.com' className={`form-control ${styles.input}`} />
                            </div>
                        </div>

                        <div className='mb-3'>
                            <label className={styles.label}>PHONE NUMBER</label>
                            <div className={`input-group ${styles.inputGroup}`}>
                                <span className='input-group-text'>
                                    <i className='bi bi-telephone'></i>
                                </span>
                                <input type="text" placeholder='+1 (123) 456-7890' className={`form-control ${styles.input}`} />
                            </div>
                        </div>
                        <div className="mb-3">
                            <label className={styles.label}>PASSWORD</label>
                            <div className={`input-group ${styles.inputGroup}`}>
                                <span className="input-group-text">
                                    <i className="bi bi-lock"></i>
                                </span>
                                <input type={showPassword ? 'text' : 'password'} placeholder="••••••••" className={`form-control ${styles.input}`} />
                                <span className={`input-group-text ${styles.eyeBtn}`} onClick={() => setShowPassword(!showPassword)}>
                                    <i className={`bi ${showPassword ? 'bi-eye-slash' : 'bi-eye'}`}></i>
                                </span>
                            </div>
                        </div>

                        <div className="mb-4 d-flex align-items-center gap-2">
                            <input type="checkbox" id="terms" checked={agreed} onChange={() => setAgreed(!agreed)} style={{ accentColor: '#e8442a' }} />
                            <label htmlFor="terms" className={styles.termsText}>I agree to the{' '}
                                <span className={styles.termsLink}>Terms of Service</span>
                                {' '}and{' '}
                                <span className={styles.termsLink}>Privacy Policy</span>
                            </label>
                        </div>

                        <button className={`btn w-100 ${styles.submitBtn}`}>CREATE ACCOUNT</button>

                        <div className="text-center mt-3">
                            <span className={styles.loginText}>Already have an account?{' '}
                                <span className={styles.loginLink}>Log in here</span>
                            </span>
                        </div>

                    </div>
                </div>

                <div className={`d-flex justify-content-between align-items-center ${styles.footer}`}>
                    <div>
                        <h6 className={styles.footerBrand}>Cravely</h6>
                        <small className={styles.footerCopy}>© 2024 Cravely. All rights reserved.</small>
                    </div>
                    <div className="d-flex gap-3">
                        <span className={styles.footerLink}>POLICY</span>
                        <span className={styles.footerLink}>LOCATIONS</span>
                        <span className={styles.footerLink}>CAREERS</span>
                    </div>
                </div>

            </div>
        </>
    )
}
