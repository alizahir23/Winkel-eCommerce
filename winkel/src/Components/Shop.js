import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../css/shop.module.css'


const Shop = () => {
    return (
        <div>
            <div className={styles.head}>
                <h1>Products</h1>
                <p>Explore a wide range of products from our store.</p>
            </div>
            <div className={styles.shop}>
                <div className={styles['left-col']}>
                    <div>
                        <h2>CLOTHING</h2>
                        <p>Shirts</p>
                        <p>Tops</p>
                        <p>Jeans</p>
                        <p>Jackets</p>
                        <p>Winter Coats</p>
                        <p>Trousers</p>
                        <p>Hoodies</p>
                        <p>Jumpsuits</p>
                    </div>
                    <div>
                        <h2>JEANS</h2>
                        <p>Denims</p>
                        <p>Zara</p>
                        <p>Lee Cooper</p>
                        <p>BHS</p>
                    </div>
                    <div>
                        <h2>BAGS &<br /> ACCESSORIES</h2>
                        <p>Cluthes</p>
                        <p>Backpacks</p>
                        <p>Purses</p>
                    </div>
                    <div>
                        <h2>SHOES</h2>
                        <p>Nike</p>
                        <p>Adidas</p>
                        <p>Bahamas</p>
                        <p>Skechers</p>
                        <p>Puma</p>
                        <p>Reebok</p>
                        <p>Bata</p>
                        <p>Lapel</p>
                    </div>
                </div>
                <div className={styles['right-col']}>
                    <Link to={'/shop/1232'}>Product 1232</Link>
                </div>
            </div>
        </div>
    )
}

export default Shop
