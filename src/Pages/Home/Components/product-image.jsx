
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import styled from 'styled-components';
import styles from './styles/product-image.module.scss';
import { faL } from '@fortawesome/free-solid-svg-icons';
import arrayImage from './image/img-product-image/img-product-image';
// import  styles from '../HeaderStyle/Productads.module.css'
const Productads = () => {
    const [openNode , setOpenNode] = useState(false);
    const Preimage = arrayImage;

   
  
   let title = [
        {id: 0, title: "TECNO SPARK 30 PRO" , namesale: "Lên đời tặng AirPods 4" },
        {id: 1, title: "GALAXY S25 ULTRA", namesale: "Đặt trước ngay"},
        {id: 2, title: "TECNO CAMON 30S", namesale: "Mở lộc chỉ 4.49 triệu"},
        {id: 3, title: "LOA JBL", namesale: "Sôi động đón xuân"},
        {id: 4, title: "OPPO RENO13 F ", namesale: " Mở bán ưu đãi tốt"},
        {id: 5, title: "ĐỒNG HỒ HUAWEI", namesale: "Khai xuân sale đỉnh"},
        {id: 6, title: "ĐỒNG HỒ HUAWEI", namesale: "Khai xuân sale đỉnh"},
        {id: 7, title: "ĐỒNG HỒ HUAWEI", namesale: "Khai xuân sale đỉnh"},
        {id: 8, title: "ĐỒNG HỒ HUAWEI", namesale: "Khai xuân sale đỉnh"}
   ]

   const [Preindex, Setindex] = useState(0);
   const [currentIndex, setCurrentIndex] = useState(0);
   const sliderRef = useRef(null);
   const containerRef = useRef(null);

   const imgWidth = 110;

   const visibleImage = 3;

   const scrollLeft = () => {
    if(!containerRef.current) return;
    setCurrentIndex((preIndex) => {
            const newIndex = preIndex - 1;
            if(newIndex >= 0 ){
                if(newIndex < arrayImage.length - 4){
                        containerRef.current.scrollLeft -= imgWidth;
                }
                return newIndex;
            }
        return preIndex;
    })
}
  const scrollRight = () => {

    setCurrentIndex((preIndex) => {
            const newIndex = preIndex + 1;
            if(currentIndex >= arrayImage.length - 1){
                if(containerRef.current){
                       containerRef.current.scrollLeft = 0;
                }
                return 0;
            }
            
            if(newIndex < arrayImage.length){
                if(newIndex > 3){
                            containerRef.current.scrollLeft += imgWidth;
                }
                return newIndex;
            }
            return newIndex;
    })      
}

useEffect(() => {
        const handleTime = setTimeout(() => {
        //     if(currentIndex >= arrayImage.length - 1){
        //             setCurrentIndex(0);
        //              if (containerRef.current) {
        //             containerRef.current.scrollLeft = 0;
        //              }
        //     }
        //     else {
        //           scrollRight();
        //  }
           scrollRight();
        },2000)
    

        return () => clearTimeout(handleTime)
},[currentIndex])
    return(
    <div className={styles.boxContainer}>   
        <div className={styles.Container}>  {/*className='Wrapper'  */}
                <div className={styles.Aside}> 
                     <img src={Preimage[currentIndex]} alt=''
                      className={styles.imageSlice}
                      onMouseEnter={() => setOpenNode(true)}
                      onMouseLeave={() => setOpenNode(false)}
                      />
                          {/* className={styles.navigation} */}
            <div className={`${styles.btnNavigation} ${openNode ? styles.openNode : ""}`}>
                <div> 
                    <button
                        variant='outlined'
                        className= {`${styles.Navigation__iconLeft} ${styles.icon} ${openNode && styles.transitionLeft} `}
                        data-nodeLeft
                        onClick={() => scrollLeft()}
                        onMouseEnter={() => setOpenNode(true)}
                        onMouseLeave={() => setOpenNode(false)}
                    >
                                          🢤 
                    </button>
              </div>
              <div>
                <button 
                    variant='outlined' 
    className={`${styles.Navigation__iconRight} ${ styles.icon}  ${openNode && styles.transitionRight}`}
                    data-nodeRight 
                    onClick={() => scrollRight()}
                    onMouseEnter={() => setOpenNode(true)}
                    onMouseLeave={() => setOpenNode(false)}
                    
                    > 🢧
                </button>
            </div>
             </div> 
                       <div 
                        className={styles.listItem} 
                        ref={containerRef}>
                            {title.map((Item) => (
                            <div 
                            key={Item.id} 
                            className={`${styles.Item} `}
                             onClick={() => setCurrentIndex(Item.id)}
                            >                                     
                                         {Item.title}
                                         <br></br>
                                        <p className={`${styles.nameSale}`}>  {Item.namesale} </p>
                                       <div className={`${Item.id === currentIndex ? styles.Hightlight : ""}`}> </div>
                            </div>
                           
                            ))}
                       </div>
                    </div>                       
        </div>
    </div>
    )
}
const Wrapper = styled.div  `
       
      
        .icon {
           
        }
     
/* Thiết kế thanh cuộn trên Chrome */
 


`
const Aside = styled.div`
           
            

`

export default Productads;

