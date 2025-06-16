import React, { useEffect } from 'react';
import styles from './detail-product.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
function DetailProduct({data}) {
   useEffect(() => {
        window.scrollTo({
             top: 0,
             behavior:'smooth'
        })
   },[])

    if(!data){
               return;
    }
    return (
        <div className={styles.mainDetail}>
            <div className={styles.mainDetail__rowOne}>
            <div className={styles.boxOne}>
                <span > Tổng quan </span>
                <span className={styles.date}> Ngày đặt hàng: {data.date} </span>
            </div>
            
        {data.dataProduct.map((item) => (
                <div className={styles.product}>
                    <div className={styles.product__item}>
                         <img src={item.imgCart} alt="" />                      
                        <div>
                            <h1> {item.title} </h1>
                            <p> {item.price}   <span> {item.total_original} </span>  </p>
                            <p className={styles.vat}> Đã xuất VAT </p>
                        </div>                               
                    </div>
                </div>
        ))}
                <h1 className={styles.quantity}> Số lượng : {data.dataProduct.length}</h1>
            </div>
            <div className={styles.mainDetail__rowTwo}>
                <div className={styles.columnOne}>
                    <div className={styles.columnOne__childOne}>
                        <h1> Thông tin khách hàng </h1>
                        <div className={styles.infoClient}>
                            <p>
                                Họ và tên (Anh/Chị) <span> {data.fullname}  </span>
                            </p>
                            <p>
                                Số điện thoại: <span> {data.phoneNumber} </span>
                            </p>
                            <p>
                                Địa chỉ:  <span>  {data.province}</span>
                            </p>
                            <p> 
                                 Ghi chú : <span> {data.note} </span>
                            </p>
                        </div>
                    </div>
                    <div className={styles.columnOne__childTwo}>
                    <div className={styles.boxOne}>   
                         <h1> Thông tin hỗ trợ </h1>
                         <span>
                                 <FontAwesomeIcon 
                                    icon={faLocationDot} 
                                    className={styles.iconAddress}    

                                    />
                                 Địa chỉ cửa hàng 
                         </span>
                         <p> 95/50/1 Phạm đăng giảng bình hưng hòa quận bình tân </p>
                     </div>
                     <hr></hr>
                     <div className={styles.boxTwo}>
                            <span> 
                               <FontAwesomeIcon icon={faPhone} className={styles.iconPhone} />
                                    Số điện thoại : 0123456788
                         
                            </span>   
                    </div>
                         </div>
                    </div>
                    <div className={styles.columnTwo}>
                      <h1> Thông tin thanh toán </h1>
                        <div className={styles.inforProduct}>
                            <h1> Sản phẩm  </h1>
                             <p>
                                    Số lượng sản phẩm: <span> {data.dataProduct.length} </span>
                             </p>
                             <p>
                                Tổng tiền hàng : <span> {data.sumMoney} </span>
                             </p>
                             <p>
                                Phí vận chuyển : <span> Miễn phí    </span> 
                             </p>
                             <h1> Thanh toán </h1>
                             <p>
                                Tổng số tiền : <big> {data.sumMoney} </big>
                             </p>
                        </div>
                    </div>
                </div>
            </div>
          
       
    );
}

export default DetailProduct;