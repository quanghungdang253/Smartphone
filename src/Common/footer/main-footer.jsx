import React from 'react';
import styles from './main-footer.module.scss';

import img1 from "./assets/img/img1.jpg";
import img2 from "./assets/img/img2.jpg";
import img3 from "./assets/img/img3.jpg";
import img4 from "./assets/img/img4.jpg";
import img5 from "./assets/img/img5.jpg";
import img6 from "./assets/img/img6.jpg";
import img7 from "./assets/img/img7.jpg";
import img8 from "./assets/img/img8.jpg";
import img9 from "./assets/img/img9.jpg";
import qr from "./assets/img/qr.jpg";
import iconFacebook from "./assets/img/icon-facebook.png";


function MainFooter(props) {
    return (
       <div className='bg-[#f1f1f1]'>      
             <div className={styles.mainFooterOne}>
                    <div className={styles.mainFooterOne__column}>  
                        <div className={styles.box1}> 
                                <h1 class="text-sm md:text-xl mb-3 font-semibold"> Tổng đài hỗ trợ miễn phí </h1>
                                <div> 
                                      Mua hàng - Bảo hành 
                                        <span> 180029603</span>
                                        (7h30 - 21h)
                                </div>
                                <div> 
                                         Khiếu nại <span>  1800.2063   </span> (8h00 - 21h30)
                                </div>
                                <h1 class="text-sm lg:text-xl mb-3 font-semibold mt-10"> Phương thức thanh toán </h1>
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
                                <h1 class="text-sm md:text-xl mb-3 font-semibold">Thông tin và Chính sách </h1>
                               <a href="#">Chính sách bảo hành</a>
<a href="#">Chính sách bảo mật</a>
<a href="#">Chính sách sử dụng</a>
<a href="#">Chính sách kiểm hàng</a>
<a href="#">Trung tâm bảo hành Apple tại Việt Nam</a>

                        </div>


                <div className={styles.box1}> 
                    <h1 class=" sm: text-sm lg:text-xl mb-3 font-semibold"> Dịch vụ thông tin khác </h1>
                   
                   <a href="#">Khách hàng doanh nghiệp (B2B)</a>
<a href="#">Ưu đãi thanh toán</a>
<a href="#">Quy chế hoạt động</a>
<a href="#">Chính sách bảo mật thông tin cá nhân</a>
<a href="#">Chính sách Bảo hành</a>
<a href="#">Liên hệ hợp tác kinh doanh</a>
<a href="#">Tuyển dụng</a>
<a href="#">Dịch vụ bảo hành mở rộng</a>

                 </div>


                         <div className={styles.box2}> 
                                 <h1 className={styles.title} class=" text-sm   lg:text-xl mb-3 font-semibold">Kết nối với Quang Hùng Store </h1>
                        <div className={styles.iconCall}> 
                                        <img src={img1} alt='' />
                                        <img src={img2} alt='' />
                                        <img src={img3} alt='' />
                                        <img src={img4} alt='' />
                                        <img src={img5} alt='' />
                        
                          </div>
                                 <h1> Tải ngay ứng dụng để nhận về nhiều ưu đãi </h1>
                            <div className={styles.imgdownload}> 
                                    <img src={qr} alt='' /> 
                                <div>    
                                    <img src={img6} alt='' /> <br/>
                                    <img src={img7} alt='' /> 
                                </div>
                             </div>
                        </div>
                    </div>
                </div>
       
        </div>
    );
}

export default MainFooter;