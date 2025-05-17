import React, { useEffect, useState } from 'react';
import styles from './menu-responsive.module.scss';
import items from '../name-product';
import {Listitem} from '../name-product';
import Smartphone from '../Products/Smartphone';
import ShowMenu from './show-menu-responsive';
function MenuResponsiveMobie({Showmenu}) {
        const [indexProduct, setIndexProduct] = useState(0);
        const [product  , setProduct] = useState(null);

       
        useEffect(() => {
                
                let products = Listitem.find((Item) => Item.id === indexProduct);
                if(products){
                          setProduct(products);
                }
              
        },[indexProduct])
      
    return (
        <div className={styles.mainMobie}>
             <div className={styles.mainMobie__nameProduct}> 
                    <div className={styles.row1}>
                            <h1> Danh mục sản phẩm </h1>
                            <h2 onClick={() => Showmenu(false)}> X </h2>
                    </div>
             </div>
             <div className={styles.mainMobie__column}>   
                <div className={styles.mainMobie__column_1}> 
                     <ul className={styles.list_nameProduct}>
                            {items.map((Item,index) => (
                                    <li 
                                        key={index} 
                                        className={`${styles.item} ${indexProduct === Item.id ? styles.addHover : ""}`}
                                        onClick={() => setIndexProduct(Item.id)}
                                     > 
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

export default MenuResponsiveMobie;