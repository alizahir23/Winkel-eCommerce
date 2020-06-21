import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from '../css/shop.module.css'
import firebase from '../config/Firebase'



const Shop = () => {

    const [Loading, setLoading] = useState(true)
    const [Products, setProducts] = useState(null)
    const db = firebase.firestore();
    const storage = firebase.storage();
    const [img, setImage] = useState(null)


    useEffect(() => {
        storage.ref('products').child('man.jpg').getDownloadURL().then(url => {
            setImage(url)
            console.log(url)
        })
        setLoading(false)
    }, [])


    db.collection('products').get().then((result) => {
        setProducts(result.docs)

    })


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
                    {Loading && <p>Loading</p>}
                    {Products && Products.map(product => {


                        return (
                            <div>
                                {/* <p>{product.data().name}</p>
                                <p>{product.data().price}</p> */}

                                {/* <img src={img || "https://via.placeholder.com/400x300"} alt="man" height="300" width="400" /> */}
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Shop
