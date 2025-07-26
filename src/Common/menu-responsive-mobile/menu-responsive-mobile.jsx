import React, { useEffect, useState } from 'react';
import styles from './menu-responsive.module.scss';
import items from '../Products/name-product';
import { Link } from 'react-router-dom';
import {Listitem} from '../Products/name-product';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxOpen } from '@fortawesome/free-solid-svg-icons';
import useStatusUser from '../../hooks/use-status-user';
import Smartphone from '../Products/Smartphone';
import ShowMenu from './show-menu-responsive';
function MenuResponsiveMobile({Showmenu}) {
        const navigate = useNavigate();
        const [indexProduct, setIndexProduct] = useState(0);
        
        const [product  , setProduct] = useState(null);
        const [refresh, setRefresh] = useState(0);
        let [data] = useStatusUser(null , refresh);
        
       useEffect(() => {
           const handleCustomUpdate = () => {
                setRefresh(prev => prev + 1);
           };
           window.addEventListener("user-status-changed", handleCustomUpdate); // 👈 lắng nghe sự kiện tùy chỉnh
       
           return () => {
               window.removeEventListener("user-status-changed", handleCustomUpdate);
           };
       }, [data]);
        useEffect(() => {
                
                let products = Listitem.find((Item) => Item.id === indexProduct);
                console.log(products);
                if(products){
                          setProduct(products);
                }
              
        },[indexProduct])
      
        const handleNavigation  = () => {
         
            if(data){
                    navigate("ShowProduct");
            } else {
                    navigate("LookProduct")
            }
                 Showmenu(false);
        }
    return (
        <div className={styles.mainMobie}>
             <div className={styles.mainMobie__nameProduct}> 
                 <div className={styles.boxOpen}>  
                     <div className={styles.box}> 
                       <FontAwesomeIcon icon={faBoxOpen} />
                        <button  onClick={() => handleNavigation()}> Tra cứu đơn hàng </button>
                     </div>
                       <h2 onClick={() => Showmenu(false)}> X </h2>
                 </div>
                    <div className={styles.row1}>
                            <h1> Danh mục sản phẩm </h1>
                         
                    </div>
             </div>
             <div className={styles.mainMobie__column}>   
                <div className={styles.mainMobie__column_1}> 
                     <ul className={styles.list_nameProduct}>
                            {items.map((Item,index) => (
                                    <li 
                                        key={index} 
                                        className={`${styles.item}  ${indexProduct === Item.id ? styles.addHover : ""}
                                        
                                        ${Item.id % 2 === 0 
                                        ? styles.gradianRed : styles.gradianYellow
                                        
                                        }
                                        
                                        `
                                        
                                        
                                        }
                                        onClick={() => setIndexProduct(Item.id)}
                                     > 
                                     <img src={Item.img} />
                                        {Item.label}  
                                    </li>
                            ))}
                     </ul>
                </div>
                <div> 
                     {
                                product ? 
                                       <ShowMenu 
                                       Showmenu={Showmenu}
                                       product={product.items} /> : "Đang tải dữ liệu"
    
                     }

                </div>
            </div>
        </div>
    );
}

export default MenuResponsiveMobile;