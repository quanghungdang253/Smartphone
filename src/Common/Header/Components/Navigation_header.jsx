import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
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
import styles from '../assets/styles/navigation-header.module.scss';
import { useNavigate } from 'react-router-dom';
import { indexCart } from '../../../features/cart/cartSlice';
import useStatusUser from '../../../hooks/use-status-user';
function Navigation_header(props) {
        const selectId = useSelector(state => state.cart.indexCart);
        const [refresh, setRefresh] = useState(0);
         let [data] = useStatusUser(null , refresh);
           const getDataLocal = localStorage.getItem("currentUser");
  
         let navigate = useNavigate();

useEffect(() => {
    const handleCustomUpdate = () => {
        setRefresh(prev => prev + 1);
    };
    window.addEventListener("user-status-changed", handleCustomUpdate); // 👈 lắng nghe sự kiện tùy chỉnh

    return () => {
        window.removeEventListener("user-status-changed", handleCustomUpdate);
    };
}, []);


//=====================================style=================================
const styleOne = " p-2 flex items-center gap-2 justify-center font-bold hover:bg-red-600"
const textLink = "font-bold";

    return (
     <div 
        className={`lg:text-[1rem] text-white flex gap-x-2 ${styles.navigation}`}
    >
  
        <Link className={`${styleOne} `} to='/StoreInfo'> 
            <FontAwesomeIcon icon={faStore} size="2x" className="text-[1.2rem]" />
            <h1 className={styles.linkIntroduce}>Giới thiệu cửa hàng </h1>
        </Link>
    

    
        <Link
            className={`${styleOne} ${styles.Link} `}
            to='/GoogleMap'
            target='_blank'
            rel='noopener noreferrer'
        >
            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-[1.2rem]"  />
            <h1>Cửa hàng gần bạn</h1>
        </Link>

        <Link className={`${styleOne} `}>
            <FontAwesomeIcon icon={faTruck} className="text-[1.2rem]"  />
            <h1 className={`${textLink} font-normal` }>Tra cứu đơn hàng</h1>
        </Link>
    

 
        <Link className={`${styleOne}`} to='/Cart'>
            {/* <div className={styles.iconCart}>
                   className={selectId === 0 ? styles.noColor : styles.index}
            
                    {selectId === 0 ? null : selectId}
                </div> */}
                <FontAwesomeIcon icon={faCartShopping} className="text-[1.2rem]" />
                <h1 className={styles.textShoppingCart}>Giỏ hàng</h1>
        </Link>
   


        <Link  to="/Login" className={`${styleOne} `}>
            <FontAwesomeIcon className="text-[1.2rem]"  icon={faUser} />
            <h1>Đăng Nhập</h1>
        </Link>
    
</div>

    );
}

const Navigation = styled.div `
  

   // =============================phần style chung =================================================

                  
                  

   //===================================================================

   // ==================icon ==============================


`
export default Navigation_header;