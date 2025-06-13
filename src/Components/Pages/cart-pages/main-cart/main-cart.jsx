import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCart } from '../../../../features/cart/cartSlice';
import imgCart from '../image/empty_cart.jpeg';
import styles from './main-cart.module.scss';
import InfoClient from './info-client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { deleteCart } from '../../../../features/cart/cartSlice';
import { useDispatch } from 'react-redux';
import { increaseQuantity, decreaseQuantity } from '../../../../features/cart/cartSlice';
import { useLayoutEffect } from 'react';
import { removeFromLocalStorage } from '../../../../app/local-storage';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useRef } from 'react';
function MainCart(props) {
 
const location = useLocation();
const pathName = location.pathname;
    // thực hiện lấy toàn bộ danh sách 
    let selector = useSelector(state => state.cart);

    let dispatch = useDispatch();
    // const navigate = useNavigate();
    const headerRef = useRef();
   
  useEffect(() => {
   window.scrollTo({
        top: 0,
        behavior:'smooth'
   })
  }, []);
    const handleDelete = (id) => {
       
            dispatch(deleteCart(id));
            removeFromLocalStorage('cart');
    }
    
    const handleIncrease = (id) => {
        dispatch(increaseQuantity(id));
    };

    const handleDecrease = (id) => {
        dispatch(decreaseQuantity(id));
    };
    return (
    
        <div ref={headerRef}>
            { selector.item.length === 0 ? (
        
                <div className={styles.cartEmpty}>  
                   {console.log(selector.totalPrice)}
                    <div className={styles.cartEmpty__cart1}> 
                            <img src={imgCart} alt='' className={styles.img} />
                            <h1> Giỏ hàng trống </h1>
                            <h2> Không có sản phẩm nào trong giỏ hàng </h2>
                            <Link to='/' className={styles.Link}> Về trang chủ </Link>
                    </div>
                
                </div>
            ) : (
                        <div className={styles.listCart}> 
                        <h1 className={styles.title}> Giỏ Hàng </h1>
                            <div className={styles.listCart__box1}>
                                    
                                    {selector.item.map((Item) => (
                                            <div key={Item.id} className={styles.box1Element}>
                                                    <img src={(Item.imgCart || Item.image)} alt='' className={styles.img}/>
                                                    <div className={styles.mainRow}> 
                                                    <div className={styles.row1}>  
                                                         <p className={styles.nameProduct}> {(Item.title || Item.name)} </p>
                                                        <big> {Item.price || Item.discount}    </big>
                                                         <span className={styles.downPrice}> ({Item.total_original} )  </span>
                                                   </div>
                                                    <div className={styles.row2}> 
                                                         <div>  
                                                            <button onClick={() => handleIncrease(Item.productKey)}>  + </button>
                                                            <span> {Item.quantity} </span>
                                                            <button onClick={() => handleDecrease(Item.productKey)}>  - </button>
                                                         </div>
                                                        <FontAwesomeIcon 
                                                            icon={faTrash}
                                                            className={styles.bin}
                                                            onClick={() => handleDelete(Item.productKey)}
                                                         />
                                                    </div>                                                 
                                                    </div>
                                            </div>
                                            
                                    ))}
                                   
                            </div>

                            <div className={styles.listCart__box2}>
                                            <h1> CHI TIẾT THANH TOÁN  </h1>
                                                <div className={styles.showInfo}> 
                                                <div className={styles.row}>  
                                                     <h1> Tiền hàng:  
                                                    </h1>
                                                    <h1>
                                                    {(selector.totalPrice).toLocaleString('vi-VN')} đ</h1> 
                                                </div>
                                                  <div className={styles.row}>  
                                                     <h1> Phí vận chuyển:     </h1>
                                                     <h1> Miễn phí </h1>
                                                  </div>
                                                  <div className={styles.row}> 
                                                     <h1> Khuyễn mãi  </h1>
                                                     <h1> 0đ </h1>
                                                    </div>
                                                  
                                                
                                                </div>
                                              <InfoClient Sum={selector.totalPrice.toLocaleString('vi-VN')} selector={selector}/>

                                                
                                               
                            </div>
                        </div>
            )}

        </div>
    );
}

export default MainCart;