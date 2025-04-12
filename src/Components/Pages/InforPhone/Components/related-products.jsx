import React, { useCallback, useEffect, useRef, useState } from 'react';
import Loading from '../../../Common/components/Loading';
import { Link } from 'react-router-dom';
import styles from "../styles/components/related-products.module.scss";
import iconShoppingCart from '../image/add-to-cart.jpg';
import {faArrowRight, faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch } from 'react-redux';
import { addCart } from '../../../../features/cart/cartSlice';
import { useSelector } from 'react-redux';


function RelatedProducts(props) {
    const dataPhone = props.dataPhone;
    const id  = props.id;
    const dispatch = useDispatch();
    const nameEnpoint = props.nameEnpoint;
    const [data , setData] = useState();
    const  navigations = useRef(null);
    const useNavigationsRight = useRef(null);

    const NavigationRight = useCallback(() => {
      if (navigations.current) {
        setTimeout(() => {
          if (navigations.current.scrollLeft + navigations.current.clientWidth >= navigations.current.scrollWidth - 1) {
            navigations.current.scrollTo({
              left: 0,
              behavior: "smooth"
            });
          } else {
            navigations.current.scrollTo({
              left: navigations.current.scrollLeft + 550,
              behavior: "smooth"
            });
          }
        }, 0);
      }
    }, [navigations]);
  
      const NavigationLeft = () => {
        if(navigations.current) {
                navigations.current.scrollTo({
                    left: navigations.current.scrollLeft - 550,
                    behavior: "smooth"
                })
        }
}
useEffect(() => {
  const interval = setInterval(NavigationRight, 3000);
  return () => clearInterval(interval);
}, [NavigationRight]); // Bây giờ nó ổn định

 
  if(!dataPhone.related__products && !dataPhone) {
    return;
  }

    const fetchData = dataPhone.related__products.filter((item) => item.id !== Number(id));


    const topPages = () => {
       window.scrollTo({
        top: 0,
        behavior: 'smooth'
       })
    }
    return (
        <div className={styles.container}>
        
        <div className={styles.iconNavigation}>   
                <FontAwesomeIcon
                   icon={faArrowLeft} 
                   className={`${styles.icon} ${styles.iconLeft}`}
                   onClick={() => NavigationLeft()}
                  />     
               <FontAwesomeIcon 
                      onClick={() => NavigationRight()}
                      icon={faArrowRight} 
                      className={`${styles.icon} ${styles.iconRight}`}
                /> 
      </div>
                {!fetchData ? (
                        <Loading/>
                ) : (
          <div className={styles.styleProduct}>  
          <h1> Sản phẩm tương tự </h1>  
            <div className={styles.listProduct} ref={navigations}>
          
                    {fetchData.map((item) => (
                    <div key={item.id} className={styles.itemProduct}>
                        <Link to={`/Detail/${nameEnpoint}/${item.id}`} className={styles.LinkBtn} onClick={() => topPages()}>
                                <div className={styles.img_text}> 
                                    <img src={item.image} alt='' className={styles.img} />
                                    <p className={styles.text}> {item.title} </p>
                                </div>
                        <span className={styles.price}> 
                           {item.price} 
                             <strong> {item.priceDown} </strong> 

                        </span>   
                        <div 
                          className={styles.btn}
                                 > 
                              
                           Mua ngay
                        
                        </div> 
                        <div className={styles.textSale}>
                              <p> Trade-in tặng thêm đến <span> 2 triệu </span>  </p>
                              <p> Trả góp : Cam kết 0 lãi, <b> 0 phí phát sinh </b> </p>
                        </div>
                        </Link>                                        
                    </div>
                    ))}
                </div>
              </div>
                ) }
        </div>
    );
}

export default RelatedProducts;