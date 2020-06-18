import React from 'react';
import styles from '../css/header.module.css';
import phoneSvg from '../icons/phone.svg'
import sendSvg from '../icons/send.svg'
import deliverySvg from '../icons/delivery.svg'
import cartSvg from '../icons/cart.svg'



const Header = () => {
    return (
        <div className={styles['header']}>
            <div className={styles['top-row']}>
                <p><img src={phoneSvg} alt="phone" /> + 1235 2355 98</p>
                <p><img src={sendSvg} alt="send" />YOUREMAIL@EMAIL.COM</p>
                <p><img src={deliverySvg} alt="delivery" />3-5 BUSINESS DAYS DELIVERY & FREE RETURNS</p>
            </div>
            <div className={styles['bottom-row']}>
                <h1>WINKEL</h1>
                <div className={styles['nav-items']}>
                    <div>HOME</div>
                    <div>SHOP</div>
                    <div>ABOUT</div>
                    <div>BLOG</div>
                    <div>CONTACT</div>
                    <div><img src={cartSvg} alt="cart" /></div>
                </div>
            </div>
        </div>
    )
}

export default Header
