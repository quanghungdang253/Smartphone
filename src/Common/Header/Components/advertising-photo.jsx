import React, { useEffect, useState } from 'react';
import {faArrowRight,faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import img1 from '../image/img-quangcao-1.jpg';
import img2 from '../image/img-quangcao-2.jpg';
import img3 from '../image/img-quangcao.jpg';
import styles from '../styles/advertising-photo.module.scss';

function AdvertisiPhoto(props) {
    const [index , setIndex] = useState(0);
let arrayImage = [img1, img2, img3];


const rightArrow = () => {
        if(index > 2){
            setIndex(0);
        }
        setIndex((pre) => pre + 1);
}

const leftArrow = () => {
    if(index <= 0 ){
            setIndex(arrayImage.length);
    }
    setIndex((pre) => pre - 1);
    console.log(arrayImage.length);
}
useEffect(() => {
    if(index >= 3){
        setIndex(0);
    }
        let timeout = setInterval(() => {
                setIndex((preIndex) => {
                        return preIndex + 1;
                })
        },2000)
        return () => clearInterval(timeout);
},[index])
    return (
        <div className={styles.container}>
            <div className={styles.container__boxImg}> 
       
                <img src={arrayImage[index]} alt='' className={styles.img}/>
                 <div className={styles.boxBtn}>
                        <button onClick={() => leftArrow()} className={`${styles.btn} ${styles.btnLeft} `}> 
                                 <FontAwesomeIcon icon={faArrowLeft} /> 
                         </button>
                        <button onClick={() => rightArrow()}  className={`${styles.btn} ${styles.btnRight} `}>   
                                 <FontAwesomeIcon icon={faArrowRight} /> 
                       </button>
                 </div>
            </div>  
        </div>
    );
}

export default AdvertisiPhoto;

  
