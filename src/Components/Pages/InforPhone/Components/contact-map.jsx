import { Button } from '@mui/material';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/components/contact-map.module.scss'
import staticData  from '../data/data-icon/Static_data.json';
import imagesale1 from '../image/imagesale1.jpg';
import iconMap from '../image/map.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';


const Slideimage = (props) => {   //ở đây {phone} là viết tắt    const InformationPhone = (props)
         const image = props.image;
         let indexs = props.index;   
         const [index , setIndex] = useState(0);
         const [province , setProvinces] = useState(null);
          const [idcitys, setIdCity] = useState(0);                                   // const {image= p
        const [preimage , setimage] = useState(image);
        const [preindex , setindex] = useState(0);
        console.log(preindex);
        
        let content = [
                {id: 0, image: "https://24hstore.vn/upload_images/images/2023/02/28/may-moi_(1)(1).png", content: "Máy được thu lại từ khách, nguồn gốc rõ ràng, xuất VAT (+10%)"},
                {id: 1, image: "https://24hstore.vn/upload_images/images/2023/02/28/vat.jpg", content: "Máy trần không hộp, đã qua sử dụng, được tuyển chọn kỹ lưỡng"},
                {id: 2, image: "https://24hstore.vn/upload_images/images/2023/02/27/icon-gh.png",content: " Giao hàng toàn quốc - Miễn phí giao hàng nội thành"},
                {id: 3,image: "https://24hstore.vn/upload_images/images/2023/02/27/icon-gh.png", "content":  "Dùng thử 7 ngày miễn phí - Đổi mới trong 34 ngày đầu nếu lỗi"},
                {id: 4, image: "https://24hstore.vn/upload_images/images/2023/05/31/cs-pin.jpeg", content: "Miễn phí đến 12 tháng Bảo hành Pin 1 đổi"},
                {id: 5, image: "https://24hstore.vn/upload_images/images/2023/06/01/ic-bh.jpg", content: " Bảo hành đến 24 tháng lỗi NFC" }
        ]
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
        useEffect(() => {
                
            let provinces = staticData.mapAddress.find((Item) => Item.id === index); 
            if(provinces){
                        setProvinces(provinces);
            } 
                  
        },[index])

        return(
            <aside className={styles.Wrapper}> 
                <div className={styles.HandleImage}>
                 <div className={`${styles.HandleImage__image} ${preindex === 0 ? styles.addcolor : ""}`}>
                                <div className={styles.HandleImage__node}>  
                                        <Button variant='outlined' onClick={() => Left()}> ⬅ </Button>
                                        <Button variant='outlined'  onClick={() => Right()}> ➡ </Button>
                                </div>
                                <div className={styles.list__image}>  
                        
                                <img 
                                   src={
                                        process.env.PUBLIC_URL + (preindex === 0 ?  preimage[4].image : preimage[preindex].image)  
                                     } 
                                   alt='' className={`${styles.main__image} ${preindex === 0 ? styles.small__image : ""}`}/> 
                                     
                                                {preindex === 0 ? (
                                                      
                                                <ul className={styles.List__item} >                                          
                                                       { preimage[0].content.map((item, index) => (
                                                                <li key={item.id} className={styles.item}>   {item}     </li>
                                                        ))  }
                                                </ul>
                                                ) : ""}                                                                                                      
                                </div>   
                        </div>
                <div className={styles.HandleImage_Slide}>
                    {preimage.map((image,index) => {  
                        return(    
                            <div key={index} 
                                onClick={() =>setindex(index)}                             
                                className={`${styles.HandleImage__button} ${index === preindex ? styles.selected : ''}`} >
                                       <img  src={image.image} className={`${styles.btn} ${styles.btn__image} `}alt=''/> 
                                
                             </div>   
                        )
                })}             
                 </div> 
                                         
         </div>  
   <div className={styles.aside1}>    
        <div className={`${styles.aside1__contact1}`}>
                        {content.map((Item) => (
                                <div className={styles.Item}>   
                                 <img src={Item.image} className={styles.img}/> 
                                                   <p className={styles.text}> {Item.content}</p>
                        </div>           
                ))}
        </div> 
 
        <div className={styles.Wrapper__contact2}>  
                <div className={styles.listItem1}>
                    <div className={styles.boxContact}>    
                       <div className={styles.boxContact__box1}>  
                                   
                         <select 
                                onChange={(e) => setIndex(e.target.value)}
                                className={ ` ${styles.column1} ${styles.column}`}
                                > 
                            {
                                   staticData.mapAddress.map((Item) => (
                                    <option key={Item.id} value={Item.id}>
                                         {Item.province}
                                    </option>
                                )  )
                             }
                        </select>
                        </div>  
                        <div className={styles.boxContact__box2}> 
                    
                          <select 
                                onChange={(e) => setIdCity(e.target.value)}
                                className={`${styles.column2}  ${styles.column}`}
                        > 
                         {
                               staticData.mapAddress[index].city.map((Item) => (
                                    <option key={Item.id} value={Item.id}>
                                         {Item.name}
                                    </option>       
                                )  
                          )}
                          </select>
                          </div>
                          
                    </div>
                    <h1 style={{marginLeft: 100, padding: 10}}> có {staticData.mapAddress[idcitys].city[idcitys].addressStore.length} cửa hàng có sản phẩm  </h1>
                    <div className={styles.boxContact__box3}>
                 
                        { staticData.mapAddress[idcitys].city[idcitys].addressStore.map((Item) => (
                                <> 
                           
                                 <div  key={Item.id} className={styles.box3__child}>
                                  
                                   <div className={styles.child1}>   
                                        <Link className={`${styles.link} ${styles.linkcall}`}>
                                                 <FontAwesomeIcon icon={faPhone} /> 
                                                 <span>  0675925432 </span>
                                         </Link>
                                   </div>
                                   {/* <FontAwesomeIcon icon={faLocationDot} style={{color:'red'}}/>  */}
                                   <img src={iconMap} alt='' style={{width: 20, height: 20}} />
                                  <div className={styles.child2}> 
                                        <Link to={Item.linkMap} className={`${styles.link} ${styles.linkMap} `}> 
                                          -
                                              {Item.name}
                                        </Link>
                                  </div>
                                   </div> 
                                   </>    
                        ))}
                      </div>
                </div>  
        </div>
      

   </div>         
</aside>
         
)}



export default Slideimage;







































































