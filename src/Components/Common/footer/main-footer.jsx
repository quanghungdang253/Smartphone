import React from 'react';
import styles from './main-footer.module.scss';
import FooterColumnOne from './components/footer-column-1/footer-column-1';
import FooterColumnTwo from './components/footer-column-2/footer-column-2';
function MainFooter(props) {
    return (
        <div className={styles.MainFooter}>
            <div className={styles.box1}>  
                <FooterColumnOne />
                <FooterColumnTwo />
            </div>
        </div>
    );
}

export default MainFooter;