import React from 'react';
import styles from '../assets/styles/Img-sale.module.scss';
function ImgSale({img}) {
    return (
        <div className={styles.mainImg} >
             <img src={img} alt='' className={styles.ImgSale} /> 
        </div>
    );
}

export default ImgSale;