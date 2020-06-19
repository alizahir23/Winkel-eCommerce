import React from 'react'
import styles from '../css/login.module.css'
import 'aos/dist/aos.css';


const Login = () => {
    return (
        <div className={styles['login']}>

            <div className={styles['card-container']}>
                <div className={styles.card}>
                    <h1>Login</h1>
                    <p>Login to get exclusive member benifits and get instant updates to latest sales and discounts</p>
                    <button data-aos='fade-up' data-aos-duration='1000' data-aos-delay='100' className={styles.google}>Sign in with Google</button>
                    <button data-aos='fade-up' data-aos-duration='1000' data-aos-delay='300' className={styles.facebook}>Sign in with Facebook</button>
                </div>
            </div>
            <div className={styles['right-col']} />

        </div >
    )
}

export default Login
