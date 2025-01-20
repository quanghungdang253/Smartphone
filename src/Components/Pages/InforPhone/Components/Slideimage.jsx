import { Button } from '@mui/material';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Slideimage.module.scss';
import imagesale1 from '../image/imagesale1.jpg';
const Slideimage = (props) => {   //ở đây {phone} là viết tắt    const InformationPhone = (props)
         const image = props.image;
         let indexs = props.index;   
        
                                                // const {image= p
        const [preimage , setimage] = useState(image);
        const [preindex , setindex] = useState(indexs);
        
        let content = [
                {id: 0, image: "https://24hstore.vn/upload_images/images/2023/02/28/may-moi_(1)(1).png", content: "Máy được thu lại từ khách, nguồn gốc rõ ràng, xuất VAT (+10%)"},
                {id: 1, image: "https://24hstore.vn/upload_images/images/2023/02/28/vat.jpg", content: "Máy trần không hộp, đã qua sử dụng, được tuyển chọn kỹ lưỡng"},
                {id: 2, image: "https://24hstore.vn/upload_images/images/2023/02/27/icon-gh.png",content: " Giao hàng toàn quốc - Miễn phí giao hàng nội thành"},
                {id: 3,image: "https://24hstore.vn/upload_images/images/2023/02/27/icon-gh.png", "content":  "Dùng thử 7 ngày miễn phí - Đổi mới trong 34 ngày đầu nếu lỗi"},
                {id: 4, image: "https://24hstore.vn/upload_images/images/2023/05/31/cs-pin.jpeg", content: "Miễn phí đến 12 tháng Bảo hành Pin 1 đổi"},
                {id: 5, image: "https://24hstore.vn/upload_images/images/2023/06/01/ic-bh.jpg", content: " Bảo hành đến 24 tháng lỗi NFC" }
        ]
           
        useEffect(() => {
                        setindex(indexs);
        },[indexs])
       
       

        useEffect(() => {
           
                setindex((preindex) => {
                        if(preindex === preimage.length -1){
                                return 0;
                         }else{
                                return  preindex + 1;                                                  
                        }
                })
                         
                       
        },[preimage.length])
        const Left = () => {
                        setindex((preindex) =>(
                                (preindex === 0 ? preindex = preimage.length - 1 : preindex - 1) // cách 2
                        ))
                   
                }      
        const Right = () => {
                        setindex((preindex) => {
                                if(preindex === preimage.length - 1){
                                        return preindex = 0;
                                }
                                return preindex + 1;
                        })     
        }
        return(
            <aside className={styles.Wrapper}> 
                <div className={styles.HandleImage}>
                        <div className={styles.HandleImage__image}>
                                <div className={styles.HandleImage__node}>  
                                        <Button variant='outlined' onClick={() => Left()}> ⬅ </Button>
                                        <Button variant='outlined'  onClick={() => Right()}> ➡ </Button>
                                </div>
                                <div className={styles.list__image}>  
                                {console.log(preindex)}
                                <img src={
                                        process.env.PUBLIC_URL + (preindex === 0 ?  preimage[4].image : preimage[preindex].image)  

                                     } alt='' className={`${styles.main__image} ${preindex === 0 ? styles.small__image : ""}`}/> 
                                                {preindex === 0 ? (
                                                <ul>  
                                             
                                                       { preimage[0].content.map((item, index) => (
                                                                <li key={item.id}>   {item}     </li>
                                                        ))  }
                                                </ul>
                                                ) : ""}
                                              
                                                      
                                                      
                                                      
                                </div>   
                        </div>
                <div className={styles.HandleImage_Slide}>
                    {preimage.map((image,index) => {   // index của map tính từ 0 
                        return(    
                            <a key={index} 
                                onClick={() =>setindex(index)} 
                                className={`${styles.HandleImage__button} ${index === preindex ? styles.selected : ''}`} >
                            
                                <img  src={image.image} className={`${styles.btn} ${styles.btn__image} `}alt=''/>
                             </a>   
                        )
                })}             
                 </div> 
                 
                               {/* Truyền dữ liệu vào component InformationPhone */}
                                    
   </div>  
   <div className={styles.aside1}>    
        <div className={`${styles.Wrapper__contact2}`}>
                                        {content.map((Item) => (
                                                <div className={styles.Item}>   
                                                   <img src={Item.image} /> 
                                                   <p> {Item.content}</p>
                                               </div>           
                                        ))}
        </div> 
        <div className={styles.Wrapper__sale1}>
            <Link className={styles.imagesale1}>
                <img src={imagesale1} alt='' className={styles.image}/>
            </Link>
        </div>

   </div>         
</aside>
         
)}



export default Slideimage;







































































