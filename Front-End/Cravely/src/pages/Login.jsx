import Footer from '../components/Login/Footer/Footer'
import Loginform from '../components/Login/loginForm/Loginform'
import styles from './Login.module.css'

function Login() {
    return (
        <div className={styles.pageWrapper}>
            <div className='d-flex justify-content-center align-items-center flex-grow-1'>
                <Loginform/>
            </div>
            <Footer/>
        </div>
    )
}

export default Login