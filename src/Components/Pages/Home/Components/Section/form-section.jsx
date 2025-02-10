import React, { useEffect, useState } from 'react';
import styles from './styles/form-section.module.scss';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
//===================================================
import image_sale from './image/image__sale/image_sale.gif';
import image_1 from './image/image__sale/Title.jpg';
//==================================================
import object_image from './data/data-label-product';
import { RenderProduct } from '../../../../Common/componentEnpoint';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircleChevronLeft} from '@fortawesome/free-solid-svg-icons'
import {faCircleChevronRight} from '@fortawesome/free-solid-svg-icons';
import ListimageProduct from '../../../Products_list/components/ListimageProduct';

// ==============================custom hook=================================

function FormSection(props) {
    const Toggle = props.Toggle;
   
    const [node , setNode] = useState(false);
    const Unordered_list = useRef(null);
    const [nameproduct , setNameProduct] = useState(false);
    const groupedItems = Object.entries(object_image).reduce((result, [productName, {image , category}], index) => {
        const groupIndex = Math.floor(index / 2);
                if(!result[groupIndex]){
                          result[groupIndex] = [];  
                }
                result[groupIndex].push({productName, image, category});
                return result;
    },[]);


    


   const HandleRight = () => {
        setNode(true);
    if(Unordered_list.current){
        Unordered_list.current.scrollTo({
                top: 0,
                left: Unordered_list.current.scrollWidth,
                behavior: 'smooth'
        })
      }
   }
   const HandleLeft = () => {
        setNode(false);
    if(Unordered_list.current){
        console.log( Unordered_list); 
        Unordered_list.current.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
        }
     ) 
    }
}
function RenderProduct(props) {
        let  setShowProduct = props.setShowProduct;
        return  setShowProduct;
        
}

    return (
        <div className={styles.Container}>
             <img src={image_1} alt='' className={`${styles.image} ${styles.image_1}`}/>
            <div className={styles.Box}>
                <div className={styles.Box_title}> 
                   <img src={image_sale} alt=''/>
                </div>
          
                <ul className={styles.list__item} ref={Unordered_list}>
                    <div className={styles.Box__icon}>
                    {node ? ( 
                        <FontAwesomeIcon 
                             icon={faCircleChevronLeft}
                             className={`${styles.icon} ${styles.icon__left}`}
                             onClick={() => HandleLeft()}
                        />
                        ) : (
                        <FontAwesomeIcon
                             icon={faCircleChevronRight} 
                             className={`${styles.icon} ${styles.icon__right}`}
                             onClick={() => HandleRight()}
                        />
                        )} 
                                    
                </div>
                    {groupedItems.map((group, index) => (
                        <li key={index} className={styles.itemGroup}>
                            {group.map(({productName, image, category}) => (
                                <div key={productName} className={styles.item}>
                                    <Link
                                     to={`/label/${category}`}
                                     className={styles.Link}
                                    onClick={() => Toggle(true)}
                                     >                                                                            
                                            <img src={image} alt={category} className={styles.image_product}/>
                                            {category}
                                    </Link>
                                </div>
                            ))}
                        </li>
                    ))}
                </ul> 
            </div>
        </div>
    );
}

export default FormSection;


