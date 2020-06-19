import React, { useState } from 'react'
import styles from '../css/product.module.css'
import manJpg from '../icons/man.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const Product = ({ match }) => {

    const [Quantity, setQuantity] = useState(1);

    const handleChange = (e) => {
        setQuantity(e.target.value);
    }

    const add = () => {
        let quant = Quantity;
        setQuantity(++quant);
    }

    const subtract = () => {
        let quant = Quantity;
        if (quant > 1)
            setQuantity(--quant);
    }

    return (
        <div className={styles.product}>
            <div className={styles['left-col']} data-aos='fade-down' data-aos-duration='1000'>
                <img draggable='false' src={manJpg} alt="man" />
            </div>
            <div className={styles['right-col']} data-aos='fade-up' data-aos-duration='1000'>
                <h1>Niagra Denim Jacket</h1>
                <div className={styles.numbers}>
                    <p style={{ color: 'gray' }}><b style={{ color: 'black' }}>100</b> Rating</p>
                    <p style={{ color: 'gray' }}><b style={{ color: 'black' }}>580</b> Sold</p>
                </div>
                <div className={styles.price}>
                    <h3>$500.00</h3>
                </div>
                <p className={styles['description']}>
                    A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your <br /><br />
                    On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country. But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their.
                </p>
                <div className={styles['size-border']}>
                    <select name="size" id="size">
                        <option value="x-small">x-small</option>
                        <option value="small">small</option>
                        <option value="medium">medium</option>
                        <option value="large">large</option>
                        <option value="x-large">x-large</option>
                    </select>
                </div>
                <div className={styles.quantity}>
                    <button onClick={subtract}>-</button>
                    <input type="number" onChange={(e) => handleChange(e)} value={Quantity} />
                    <button onClick={add}>+</button>
                </div>
                <p className={styles.availability}>80 piece available</p>
                <button className={styles['add-to-cart']}>Add to Cart</button>
            </div>
        </div>
    )
}

export default Product
