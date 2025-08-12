import React, { useEffect } from 'react';
import styles from './header-admin.module.scss';
import imgAdmin from './image/admin.jpg';
import Loading from '../../../ui/Loading';
function HeaderAdmin({dataStore}) {


    console.log(dataStore);
    return (
     <div>   
     {dataStore && Object.entries(dataStore).length > 0 ? (
                 <div className={styles.mainHeader}>
            <div className={styles.mainBox}>
                <div className={`${styles.mainBox__One} ${styles.Box}`} >
                    <div> 
                         <img src={imgAdmin} alt="imgAdmin"  className={styles.imgAdmin}/>
                    </div>
                    <div className={styles.text}>
                         <h1 className={styles.adminMobie}> Admin </h1>
                         <p> Cập nhật lại sau 01/01/2026 </p>
                    </div>
                </div>
                <div className={`${styles.mainBox__Two} ${styles.Box}`}>
                        <img src="https://cdn-static.smember.com.vn/_next/static/media/cart-icon.3e4e1d83.svg" alt="" className={styles.iconShoppingCart} />
                        <div className={styles.boxText}>
                            <h1>  {Object.entries(dataStore).length}</h1>
                            <h2 className={styles.textWeb}>Tổng số lượng khách hàng đã mua sản phẩm </h2>
                            <h2 className={styles.textMobie}> Khách hàng đã mua sản phẩm </h2>
                        </div>
                </div>
            </div>
        </div>
     ) : (
        <>  
                    <Loading/>
            <h1> Đang tải dữ liệu </h1>
        </>
     )}
       
    </div>
    );
}

export default HeaderAdmin; 