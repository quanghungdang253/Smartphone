import React from 'react';
import styles from './footer-column-1.module.scss';
import img1 from '../../assets/img-footer-column-1/img1.jpg';
import img2 from '../../assets/img-footer-column-1/img2.jpg';
import img3 from '../../assets/img-footer-column-1/img3.jpg';
import img4 from '../../assets/img-footer-column-1/img4.jpg';
import img5 from '../../assets/img-footer-column-1/img5.jpg';
import img6 from '../../assets/img-footer-column-1/img6.jpg';
import img7 from '../../assets/img-footer-column-1/img7.jpg';
import img8 from '../../assets/img-footer-column-1/img8.jpg';
import img9 from '../../assets/img-footer-column-1/img9.jpg';
function FooterColumnOne(props) {
    return (
   
                 <div className={styles.mainFooterOne}>
                    <div className={styles.mainFooterOne__column}>  
                        <div className={styles.box1}> 
                                <h1> Tổng đài hỗ trợ miễn phí </h1>
                                <div> 
                                        Mua hàng - Bảo hành 
                                        <span> 180029603</span>
                                        (7h30 - 21h)
                                </div>
                                <div> 
                                         Khiếu nại <span>  1800.2063   </span> (8h00 - 21h30)
                                </div>
                                <h1> Phương thức thanh toán </h1>
                                <div className={styles.payment}>   
                                        <img src={img1} alt='img1' /> 
                                        <img src={img2} alt='img2' /> 
                                        <img src={img3} alt='img3' /> 
                                        <img src={img4} alt='img4' /> 
                                        <img src={img5} alt='img5' /> 
                                        <img src={img6} alt='img6' /> 
                                        <img src={img7} alt='img7' /> 
                                        <img src={img8} alt='img8' /> 
                                        <img src={img9} alt='img9' /> 
                                </div>
                                

                        </div>
                        <div className={styles.box2}>  
                                <h1>Thông tin và Chính sách </h1>
                                 <h2> Chính sách bảo hành </h2>
                                 <h2> Chính sách bảo mật </h2>
                                  <h2>Chính sách sử dụng </h2>
                                  <h2> Chính sách kiểm hàng </h2>
                                 <h2> Trung tâm bảo hành Apple tại Việt Nam </h2>

                        </div>
                        </div>
                </div>
       
    );
}

export default FooterColumnOne;