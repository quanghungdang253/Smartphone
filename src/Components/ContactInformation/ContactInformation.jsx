import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import iconZalo from './icon/icon-zalo.webp'
import iconMessage from './icon/icon-message.png';
import styles from './styles/ContactInformation.module.scss'
import Setting from '../../Context/Settings/Setting';
import { Link } from 'react-router-dom';


function ContactInformation(props) {
    return (
        <div className={styles.Container}>
                     <Link to='tel:+84388985737'>   
                                <button className={`${styles.Btn} ${styles.Btn__Contact}`}>
                                         <FontAwesomeIcon icon={faPhone} shake className={styles.icon}/>
                                </button>
                   
                    </Link>
                         <Link to="https://www.facebook.com/">
                                <button className={`${styles.Btn} ${styles.Btn__Facebook}`}>
                                        <FontAwesomeIcon icon={faFacebook} className={styles.icon} />                         
                                </button>
                         </Link>  
                    <Link to='https://m.me/quang.hungg.382310'>  
                        <button className={`${styles.Btn} ${styles.Btn__Contact}`}>
                                <img src={iconMessage} alt='' className={styles.icon}/>
                        </button>
                    </Link>
                    <Link to='https://zalo.me/s/qrwallet?gidzl=5_p7OCmWfnyMuivlp3gc7npWoMtRFFTE0EBDRDyyzqu2vfriZJFm6rFfcshPOV8OLBcJQZJfx5X7pIAd50'>  
                                <button className={`${styles.Btn} ${styles.Btn__Zalo}`}>
                                         <img src={iconZalo} alt='' className={styles.icon}/>
                                 </button>
                    </Link>
                    <Link>  
                        <button className={`${styles.Btn} ${styles.Btn__Setting}`}>
                                <Setting/>
                        </button>
                    </Link>
        </div>
    );
}

export default ContactInformation;