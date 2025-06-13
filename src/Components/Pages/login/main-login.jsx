import React, { useEffect, useState } from 'react';
import styles from './main-login.module.scss';
import imgIcon from './image/img.jpg';
import imgStore from './image/imgStore.png';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGift } from '@fortawesome/free-solid-svg-icons';

import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
function MainLogin(props) {
    let navigate = useNavigate();
    const [password , setPassWord] = useState(false);
    const [dataValueInput , setValueInput] = useState({
            nameLogin: "",
            passWord: ""
    });
    useEffect(() => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
    },[])
    const getDataInput = (e) => {
          const {name , value} = e.target;
          setValueInput((pre) => {
            return {
               ...pre,
                [name] : value
            }
          })
    }

    const HandleSubmitLogin = () => {
            if(dataValueInput.nameLogin === "Hung" && dataValueInput.passWord === "123"){   
                localStorage.setItem("isAdmin","true")
                    navigate("/Admin")
            }else {
                alert("Mật khẩu chưa chính xác ")
            }
    }
//    <FontAwesomeIcon icon={faEye} />


    return (
        <div className={styles.mainLogin}>
            <div className={styles.boxLogin}>
                <div className={styles.boxLeft}>
                        <div className={styles.rowOne}>
                            <div className={styles.boxOne}>   
                                <h1 className={styles.nameboxOne}> Quang Hùng Store </h1>                            
                             </div>
                             <div className={styles.boxTwo}>
                                <img src={imgIcon} alt=' ' className={styles.img} />
                             </div>
                        </div>
                        <div className={styles.rowTwo}>
                                 <h1 className={styles.textOne}> Nhập hội khách hàng thành viên</h1>
                                 <h1 className={styles.textTwo}>  Để không bỏ lỡ các ưu đãi hấp dẫn từ Quang Hùng Store </h1>
                        </div>
                        <div className={styles.rowThree}> 
                            <div className={styles.topLeft}> </div>
                             <div className={styles.topRight}> </div>
                                <div className={styles.row}>
                                 <FontAwesomeIcon icon={faGift} className={styles.icon} />
                                    <strong>    Chiết khấu đến 5% </strong>
                                     khi mua các sản phẩm mua tại Quang 
                                </div>
                                <div className={styles.row}> 
                                 <FontAwesomeIcon icon={faGift} className={styles.icon} />
                                        <strong> Miễn phí giao hàng </strong>
                                         cho thành viên SMEM, SVIP và cho đơn hàng từ 300.000đ        
                                </div>
                                <div className={styles.row}>
                                 <FontAwesomeIcon icon={faGift} className={styles.icon} />
                                        <strong> Tặng voucher sinh nhật đến 500.000đ </strong>
                                         cho khách hàng thành viên
                                </div>
                                <div className={styles.row}>
                                 <FontAwesomeIcon icon={faGift} className={styles.icon} />
                                    Trợ giá thu cũ lên đời
                                    <strong>  đến 1 triệu </strong>
                                </div>
                                <div className={styles.row}>
                                 <FontAwesomeIcon icon={faGift} className={styles.icon} />
                                     Thăng hạng nhận voucher
                                     <strong>
                                          đến 300.000đ
                                     </strong>
                                </div>
                                <div className={styles.row}>
                                 <FontAwesomeIcon icon={faGift} className={styles.icon} />
                                    Đặc quyền S-Student/S-Teacher
                                    <strong>  ưu đãi thêm đến 10% </strong>
                                </div>
                                <div className={styles.row}>
                                 <FontAwesomeIcon icon={faGift} className={styles.icon} />
                                    <span> Xem chi tiết chính sách ưu đãi Smember</span>
                                </div>
                        
                        </div>
                        <div className={styles.rowFour}>
                              <img src={imgStore} alt="imgStore" className={styles.imgStore}/>
                        </div>
                </div>
                <div className={styles.boxRight}>
                    <div className={styles.titleBoxRight}>
                            <h1> Đăng Nhập Quang Hùng Store </h1>
                    </div>
                    <div className={styles.boxInput}>
                        <div className={styles.boxInput__one}>
                                <label htmlFor=""> Tên đăng nhập </label>
                                <div>
                                    <input 
                                        value={dataValueInput.nameLogin}
                                        type="text" 
                                        placeholder='Nhập vào tên đăng nhập' 
                                        name="nameLogin"
                                    onChange={ getDataInput }
                                    />
                                </div>
                        </div>
                        <div className={styles.boxInput__two}>
                            <label htmlFor=""> Mật khẩu </label>
                            <div className={styles.WrapInput}>
                                <input 
                                type={`${password ? 'text' : 'password'}`} 
                                name='passWord'
                                value={dataValueInput.passWord}
                                className={styles.inputPassword} placeholder='Nhập vào mật khẩu ' 
                                     onChange={(e) =>  getDataInput(e)}
                                 />
                                {password ? (
                                       <FontAwesomeIcon 
                                            icon={faEye}
                                            onClick={
                                              () =>  setPassWord(false)
                                         } 
                                         className={styles.iconEye}
                                         />
                                ) : (
                                    <FontAwesomeIcon
                                         icon={faEyeSlash}
                                         onClick={() => setPassWord(true)
                                         
                                         }
                                         className={styles.iconEye}
                                    />
                                )}
                            
                                
                            </div>

                        </div>
                        <div className={styles.boxInput__three}>
                                Trải nghiệm đăng nhập liền mạch với Quang Hùng Store ưu tiên dùng tài khoản Quang Hùng Store(nếu có)
                        </div>
                        <div className={styles.boxInput__four}>
                                <button 
                                    className={styles.btn}
                                    onClick={() => HandleSubmitLogin()}
                                > Đăng nhập </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainLogin;