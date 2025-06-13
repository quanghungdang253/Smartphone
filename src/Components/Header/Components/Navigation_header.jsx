import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import {faPhone} from '@fortawesome/free-solid-svg-icons'
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'
import {faUser} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { faTruck } from '@fortawesome/free-solid-svg-icons';
import { faStore } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from 'react-redux';
import styles from '../styles/navigation-header.module.scss';
import { useNavigate } from 'react-router-dom';
import { indexCart } from '../../../features/cart/cartSlice';
import useStatusUser from '../../../hooks/use-status-user';
function Navigation_header(props) {
        const selectId = useSelector(state => state.cart.indexCart);
         let [data] = useStatusUser(null);
         console.log(data);
         let navigate = useNavigate();

    return (
     <Navigation className={styles.navigation}>
    <div className={styles.navigation__call}> 
        <Link className={styles.Link} to='/StoreInfo'> 
            <FontAwesomeIcon icon={faStore} size="2x" className={styles.icon} />
            <h1 className={styles.linkIntroduce}>Giới thiệu cửa hàng <br /> Visual 360°</h1>
        </Link>
    </div>

    <div className={styles.navigation__googleMap}>
        <Link
            className={`${styles.Link} ${styles.Link__map}`}
            to='/GoogleMap'
            target='_blank'
            rel='noopener noreferrer'
        >
            <FontAwesomeIcon icon={faMapMarkerAlt} className={styles.icon} />
            <h1>Cửa hàng gần bạn</h1>
        </Link>
    </div>

    <div className={styles.navigation__shopping_cart}>
        <Link className={styles.Link} to={`${data ? "ShowProduct" : "LookProduct"}`}>
            <FontAwesomeIcon icon={faTruck} className={styles.icon} />
            <h1>Tra cứu đơn hàng</h1>
        </Link>
    </div>

    <div className={styles.navigation__shoppingCart}>
        <Link className={styles.LinkShoppingCart} to='/Cart'>
            <div className={styles.iconCart}>
                <div className={selectId === 0 ? styles.noColor : styles.index}>
                    {selectId === 0 ? null : selectId}
                </div>
                <FontAwesomeIcon icon={faCartShopping} className={styles.icon} />
                <h1 className={styles.textShoppingCart}>Giỏ hàng</h1>
            </div>
        </Link>
    </div>

    <div className={styles.navigation__User}>
        <Link className={styles.Link} to="/Login">
            <FontAwesomeIcon className={`${styles.icon} ${styles.icon__user}`} icon={faUser} />
            <h1>Đăng Nhập</h1>
        </Link>
    </div>
</Navigation>

    );
}

const Navigation = styled.div `
  

   // =============================phần style chung =================================================

                  
                  

   //===================================================================

   // ==================icon ==============================


`
export default Navigation_header;