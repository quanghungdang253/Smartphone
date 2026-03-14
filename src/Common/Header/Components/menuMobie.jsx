    import React from "react";
    import { faBars } from '@fortawesome/free-solid-svg-icons';
    import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
    import styles from "../assets/styles/menuMobie.module.scss";
    import { useState } from "react";
    function MenuMobie({shows, showmenu}){
        
    const [isNavVisible, setIsNavVisible] = useState(false);

        const handleMenuClick = (event) => {
            event.stopPropagation(); // Prevent event from bubbling up to document
            setIsNavVisible((prev) => !prev); // Toggle the visibility of the menu and overlay
            shows(true);
            showmenu(true);
        };
        return (
            <div className={styles.mainBtn}>
            
                <button  onClick={handleMenuClick} className={styles.mainBtn__btnMenu}>
                        <FontAwesomeIcon icon={faBars}  className={styles.iconMenu}/>
                </button>


            </div>

        )
    }


    export default MenuMobie;