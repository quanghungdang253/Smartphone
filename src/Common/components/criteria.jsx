import React from 'react';
import styles from './style/criteria.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faCarSide, faMoneyBill, faCaretDown  } from '@fortawesome/free-solid-svg-icons';
function Criteria(props) {
        let nameBtn = ["Bộ nhớ trong", "Dung lượng RAM","Kích thước màn hình","Nhu cầu sử dụng ","Kiểu màn hình","Tính năng cammera","tần số quét","Tính năng đặc biệt"]
    return (
        <div className={styles.container}>
                <div className={styles.container__rowOne}> 
                        <h1 className={styles.titleRowOne}> Chọn theo tiêu chí </h1>
                        <div className={styles.mainCriteria}> 
                            <div className={`${styles.Boxitem} ${styles.addIcon} ${styles.addPadding}`}>  
                                <FontAwesomeIcon icon={faFilter} />  
                                <Link className={styles.item}>        Bộ lọc     </Link>
                            </div>
                            <div className={`${styles.Boxitem} ${styles.addIcon} ${styles.addPadding}`}> 
                                  <FontAwesomeIcon icon={faCarSide} />
                                  <Link className={styles.item}>  Sẵn hàng      </Link>               
                            </div>
                            <div className={`${styles.Boxitem} ${styles.addIcon} ${styles.addPadding}`}> 
                                <FontAwesomeIcon icon={faMoneyBill} />
                                 <Link className={styles.item}>  Giá </Link>                                                                         
                             </div>
                               
                             {nameBtn.map((item) => {
                                        return (
                                                   <div className={`${styles.Boxitem} ${styles.addIcon} ${styles.addWidth}`}> 
                                               
                                                         <Link className={styles.item}> {item}  </Link>
                                                            <FontAwesomeIcon icon={faCaretDown} />

                                                </div>
                                        )
                             })}
                        
                        </div>

                </div>
        </div>
    );
}

export default Criteria;