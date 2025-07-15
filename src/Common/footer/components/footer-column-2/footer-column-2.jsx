import React from 'react';
import styles from './footer-column-2.module.scss';
import img1 from '../../assets/img-footer-column-2/iconfacebook.png';
import img2 from '../../assets/img-footer-column-2/iconintergram.png';
import img3 from '../../assets/img-footer-column-2/icontictok.png';
import img4 from '../../assets/img-footer-column-2/iconyoutube.png';
import img5 from '../../assets/img-footer-column-2/iconzalo.png';
import qr from '../../assets/img-footer-column-2/qr.jpg';
import img6 from '../../assets/img-footer-column-2/imggoogleplay.jpg';
import img7 from '../../assets/img-footer-column-2/appstore.jpg';
function FooterColumnTwo(props) {

    return (
        <div className={styles.mainFooterTwo}>
                <div className={styles.box1}> 
                    <h1> Dịch vụ thông tin khác </h1>
                    <h2>Khách hàng doanh nghiệp (B2B)</h2>
                    <h2>Ưu đãi thanh toán</h2>
                    <h2>Quy chế hoạt động</h2>
                    <h2>Chính sách bảo mật thông tin cá nhân</h2>
                    <h2>Chính sách Bảo hành</h2>
                    <h2>Liên hệ hợp tác kinh doanh</h2>
                    <h2>Tuyển dụng</h2>
                    <h2> Dịch vụ bảo hành mở rộng</h2>

                 </div>
                <div className={styles.box2}> 
                        <h1 className={styles.title}>Kết nối với Quang Hùng Store </h1>
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
    );
}

export default FooterColumnTwo;