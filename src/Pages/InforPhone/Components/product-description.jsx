import React from "react";
import styles from '../styles/components/product-description.module.scss';
import { useState } from "react";
import ProductParameters from "./product-parameters";
import iconRight from '../image/iconRight.jpg';

const ProductDescription = (props) => {
    const dataPhone = props.dataPhone;
    const [openInfo , setOpenInfo] = useState(false);
    const [openContent , setOpenContent] = useState(null);
    const [booleanContent , setBooleanContent]= useState(false);
    const handleScroll = () => {
        console.log(openInfo);
        if(openInfo === true) {
            window.scrollTo({
                top: 2500,
                behavior:'smooth'
            })
        } 
    }
   const handleOpenContent = (item) => {
            setOpenContent(item);
            setBooleanContent((pre) => !pre);
            
   }
    return (
        <div className={styles.mainContent}> 
           <div className={styles.mainContent__first}> 
               <div className={styles.addBoxShadow}> 
                {openInfo ? (
                      <div className={styles.boxContent}>
                            {dataPhone && dataPhone.Content.map((Item) => (
                  
                            <div className={styles.paragraps}>
                                  <h2 className={styles.title}>  {Item.title} {dataPhone.title}  </h2>
                                      {
                                         Item.id === 2 ? (
                                    Item.content.Detail.map((Item) => (
                                    <div className={styles.paragraps__row1}>
                                        <h2 className={styles.title}> 
                                          <strong>   {Item.title} </strong>      
                                        </h2>
                                        <p className={`${styles.text}`}>    {Item.content_index_1}  </p>
                                        <img src={Item.img} alt="" />
                                        <p className={`${styles.text}`}>      {Item.content_index_2}   </p>
                                    </div> 
                                ))) : (
                                    (
                                        
                                       <div className={styles.paragraps__row2}> 
                                            <p className={`${styles.text}`}> {Item.content} </p>
                                            <img src={Item.img} alt="" />
                                        </div>
                                      
                                    )
                                )}  
                    </div>    
                 ))} 
                    </div>
           ) : (
            <div className={styles.paragraps__row2}> 
                                         <h2>   {dataPhone.Content[0].title}      </h2>
                                            <p className={`${styles.text}`}>  {dataPhone.Content[0].content}    </p>
                                            <img src={dataPhone.Content[0].img} alt="" />
                                            
            </div>
                  )}
                  <div className={styles.seeMore} onClick={() =>{
                     setOpenInfo((pre) => !pre);
                    handleScroll();
                  }}> 
                        {!openInfo ? ( "Xem thêm" ) : ("Ẩn bớt")}
                 </div>

                 <div className={styles.paragraps__row3}>
                        <h1> CÂU HỎI THƯỜNG GẶP   </h1>
                        <div className={styles.mainParagraps}> 
                             {dataPhone && dataPhone.questions.map((Item) => (
                                <div key={Item.id} className={styles.boxQuestion}>
                                        <div 
                                            className={styles.boxQuestion__question}
                                            onClick={() => handleOpenContent(Item.id)}                         > 
                                                {dataPhone.title} {Item.question} 
                                                <img src={iconRight} alt="" className={styles.iconRight} />
                                         </div>
                                        {(Item.id === openContent && booleanContent) ? (
                                            <div className={styles.boxQuestion__answer}>  {Item.content}  
                                             </div>
                                        ) : ("")}
                                        
                                </div>
                        ))}
                        </div>

                </div>
                </div>
            
                    <div className={styles.boxInfo}>
                              <ProductParameters Data={dataPhone} />
                    </div>
                 </div>
             
                    
       
          
        </div>
)}

export default ProductDescription;