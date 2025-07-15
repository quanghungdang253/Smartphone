import React from 'react';
import style__sale from '../styles/components/attached-product.module.scss';
import { Link } from 'react-router-dom';
function AttachedProduct({Static_data}) {
    return (
        <div className={style__sale.boxPromition}>
        <div className={style__sale.name__promotion}> Ưu đãi thêm </div> 
               <div className={style__sale.boxPromition__render}>
                    <ul>
                          {Static_data.add__promotion.map((Item) => (
                            <li className={style__sale.list__promotion}>
                                <div className={style__sale.content}>  
                                    <img src={Item.icon} alt="" className={style__sale.image__icon}/>
                                     <Link key={Item.id} className={style__sale.Link__promotion}> {Item.content}  </Link>
                                </div> 
                            </li>
                          ))} 
                    </ul>           
               </div>               
        </div> 
    );
}

export default AttachedProduct;