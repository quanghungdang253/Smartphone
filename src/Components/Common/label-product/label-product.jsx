import React from 'react';
import  styles from './label-product.module.scss';
import Loading from '../components/Loading';
import { Link } from 'react-router-dom';
function LabelProduct(props) {
     const labelProduct = props.labelProduct;
 
    
     
    return (
        <div className={styles.boxlabel}>
                <div className={styles.box_row_1}>
                        {labelProduct.map((Item) => {
                                console.log(`/label/${Item.Link}`);
                                return (
                        <Link key={Item.id} to={`/label/${Item.Link}`} className={styles.Link}>
                             <img  src={Item.img} alt='' className={styles.img_product}/>
                          </Link>  
                     
                        )})}
                </div>
        </div>
    );
}

export default LabelProduct;