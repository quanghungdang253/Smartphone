import React from 'react';
import {Listitem} from '../Products/name-product';
import styles from './show-menu-responsive.module.scss';
import { Link } from 'react-router-dom';
function ShowMenu({product , Showmenu}) {
  console.log("fefwfwffwfwefwefwfwefwewefwfew"+product);
    return (
        <div className={styles.mainBox}>
            <div className={styles.mainBox__box1}>
                            <h1> Xu hướng mua sắm </h1>
                <div className={styles.tabchoose}> 
                     {product.phonecompany && product.phonecompany.length > 0 ?  (
                          <>  
                             <h1 variant='h6' className={styles.label}> {product.name }  </h1>
                      <div 
                        className={
                          `${styles.tabchoose__product}
                           ${styles.common__format_product}
                           `
                        }
                      >   
                          {
                          product.phonecompany.map((list) => (
                                  <Link  
                                      onClick={() => Showmenu(false)}
                                       className={styles.Link}
                                       to={`/label/${list.name}`} 
                                       key={list.id}>                               
                                
                                            <img src={list.image} className={styles.image__menu}/>    
                                             {list.name}                          
                                  </Link>      
                            ))}
                      </div>
                         </>
                  ): (
                             <p>đang lấy dữ liệu </p>
                  )}               
            </div>
    </div>
    <div className={styles.mainBox__box2}> 
         <h1  className={styles.label} variant='h6'> Điện thoại hot 2025 </h1>
                     <div className={styles.tabchoose}> 
             
                  {product.phonecompany && product.phonecompany.length > 0 ?  (
                    product.hot__phone.map((list) => (
                         <Link  
                                className={styles.Link}
                                to={`/label/${list.name}`} 
                                 key={list.id}> 
                                 
                                    {list.name}     
                                                           
                         </Link>      
                    ))
                  ): (
                    <p>Đang lấy dữ liệu </p>
                  )}               
            </div>    
    </div>
        <div className={styles.mainBox__box3}> 
                        <div className={styles.tabchoose}> 
                            <h1  className={styles.label} variant='h6'> Mức giá </h1>
                              {product.price && product.price.length > 0 ? (
                                 product.price.map((list,id) => (
                             <Link key={list.id} className={styles.Link}> 
                                {list.price_level}
                            </Link>
                        ))
                    ) : (
                        <p>Đang lấy dữ liệu...</p>
                    )}
                  </div>   
        </div>
        </div>
    );
}

export default ShowMenu;