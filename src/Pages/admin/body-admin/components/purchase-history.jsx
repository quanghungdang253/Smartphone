import React, { useEffect, useState } from 'react';
import styles from './purchase-history.module.scss';
import BodyAdmin from '../body-admin';
import Loading from '../../../../Common/components/Loading';
import ListHistory from './list-history';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import DetailProduct from './detail-product';
function PurchaseHistory({data , isOpen, Product, openForm}) {
    const [index , setIndex] = useState(true); 
    const [loading , setLoading] = useState(isOpen);
    const [dataProduct , setDataProduct] = useState(null);
 
    console.log("giá trị loading là " + loading)
     console.log("giá trị isOpen là " + isOpen)
      console.log("giá trị index là " + index)

      console.log("dữ liệu dataProduct "+ dataProduct);
        console.log("dữ liệu Product "+ Product);
           let displayProduct = null;
     if(!dataProduct) {
           displayProduct = Product;
     }else {
             displayProduct =  dataProduct;
     }

 useEffect(() => {
           
    },[index, dataProduct])
   if(!data){
        return;
   }
    return (    
        <div className={styles.mainHistory}> 
             <div className={styles.mainBox}> 
               {
             
                ( loading && index) ? (
                               <div className={styles.mainBox__boxOne}>
                               
                                <ListHistory data={data} setIndexs={setIndex} setdataProduct={setDataProduct}/>
                            
                            </div>

                ) : (     
    (displayProduct) ? (
        <div>
        <div className={styles.boxBtn}> 
                    <div 
                        className={styles.btn}
                        onClick={() => {
                          setLoading(true);
                          setIndex(true)
                     
                     }
                 }> 
                         <FontAwesomeIcon
                             icon={faArrowLeft}
                             className={styles.icon}
                        />   Quay lại 
                     </div>
         </div>
     
          <div>
                    <DetailProduct data={displayProduct[1]} />

          </div>
        </div>
) : (
        <div>
             <span>Không có thông tin đơn hàng.</span>
        </div>
)

)
                 
                
                
            }
       
            

            </div>
           
     
               
        
       
          
         
        </div>
    );
}

export default PurchaseHistory;       