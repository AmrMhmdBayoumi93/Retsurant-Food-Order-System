import React from 'react'
import styles from "./Footer.module.css"
function Footer() {
  return (
    <div>
       <div className={`d-flex justify-content-between align-items-center ${styles.footer}`}>
                    <div>
                        <h6 className={styles.footerBrand}>Cravely</h6>
                        <small className={styles.footerCopy}>© 2024 Cravely. All rights reserved.</small>
                    </div>
                    <div className='d-flex gap-3'>
                        <span className={styles.footerLink}>POLICY</span>
                        <span className={styles.footerLink}>LOCATIONS</span>
                        <span className={styles.footerLink}>CAREERS</span>
                    </div>
                </div>
    </div>
  )
}

export default Footer
