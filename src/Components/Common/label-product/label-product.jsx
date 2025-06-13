import React from 'react';
import  styles from './label-product.module.scss';
import Loading from '../components/Loading';
import { Link } from 'react-router-dom';
function LabelProduct(props) {
     const labelProduct = props.labelProduct;
  if (!Array.isArray(labelProduct)) {
        return null; // hoặc <Loading />
    }

    return (
        <div className={styles.boxLabel}>
            <div className={styles.boxRow}>
              {labelProduct.map((Item) => {    
                    return (
                        <Link key={Item.id} to={`/label/${Item.Link}`} className={styles.boxRow__Link}>
                             <img  src={Item.img} alt='' className={styles.boxRow__Img}/>
                          </Link>  
                     
                        )})}
                </div>
        </div>
    );
}

export default LabelProduct;