import React, { useEffect, useState } from 'react';
import styles from './list-history.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList,faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';

function ListHistory({data , setdataProduct, setIndexs}) {

 
    const [dataProduct , setDataProduct] = useState(null);
    const [showData , setShowData] = useState(false);
    const [underlineColor , setUnderlineColor] = useState(0);

 const [indexProduct , setIndexProduct] = useState(null);
const [idReder , setIdRender] = useState(null);
const [Product , setProduct] = useState(null);
const [handleForm , setHandleForm] = useState(false);

 const handleIndexProduct = (id) => {
           setIndexProduct(id);
 }
 if(data !== null ){
      let arrayData = Object.entries(data);
    
 }
 
 const handlesetData = () => {
        
 }

// useEffect(() => {
//     console.log(data);
//     if(!data){
//             return;
//     }else {
//         // let ArrayProduct = Object.entries(data);
//         let findProduct = Object.entries(data).find(([id, item]) => id === idReder);
//                  console.log(findProduct);
//                    console.log(idReder)
//         if(findProduct){
//             console.log(findProduct)
          
//              setdataProduct(findProduct);
//         }
       
//     }
// }, [idReder,data])

// useEffect(() => {
//     if (!data || idReder === null) return;

//     let findProduct = Object.entries(data).find(([id, item]) => id === idReder);
//     if (findProduct) {
//         setdataProduct(findProduct);
//     }
// }, [data, idReder]);




    let sumProduct = 0;
    if(!data){
                 return;
    }
   
let dataNavigation = [
    {
        id: 0, name:"Tất cả", data: data
    },
    {
        id: 1, name:"Chờ xác nhận đặt hàng", data: []
    },
     {
        id: 2, name:"Đã đặt hàng ",data: []
    },
     {
        id: 3, name:"Đang vận chuyển ",data: []
    },
     {
        id: 4, name:"Đã giao hàng",data: []
    },
     {
        id: 5, name:"Đã hủy",data: []
    }
]

let nameData = [
    {
        id: 0,
        icon: faList,
         content: "Tổng quan",data: data , dataNavigation: dataNavigation
    },
    {
         "id": 1, 
         icon: "", 
         "content": "Lịch sử mua hàng ",data: Product, dataNavigation: dataNavigation
    }
]

    return (
        <div className={styles.container}>
            {
                            <div 
                className={styles.container__boxRight}>
                                    <div className={styles.navigation}>
                                        <div className={styles.navigation__navOne}>    
                                          {dataNavigation.map((item) => (
                                                <div
                                                     className={`${styles.item} ${item.id === underlineColor ? styles.styleItem : styles.addBorder} `}
                                                     onClick={() => setUnderlineColor(item.id)}> 
                                                     <h1>     {item.name}   </h1>
                                                                   
                                                 </div>                                                                
                                          ))}
                                          </div>
                                    
                                        
                                               <div className={styles.navigation__navTwo}>
                                                  {
                                                    underlineColor === 0 ? (
                                                     <div className={styles.listProduct}>   
                                                           {  
                                                              dataNavigation.map((item) => (
                                                               Object.entries(item.data).map(([key , value]) => {
                                                                console.log(key)
                                                                    return (
                                                          
                                                            <div>    
                                                                        <div 
                                                                            className={styles.mainInFo}
                                                                            onClick={() => {
                                                                                    setdataProduct([key,value])  
                                                                                    // setIdRender(key)
                                                                                    setHandleForm(true)
                                                                                    setIndexs(false)
                                                                            }}
                                                                                  
                                                                        > 
                                                                          <div className={styles.mainInFo__BoxOne}>  
                                                                             <p> Khách hàng: <strong> {value.fullname} </strong>  </p>
                                                                            <span className={styles.date}> Ngày đặt hàng : {value.date}</span>
                                                                            <span className={styles.status}> Đã đặt hàng </span>
                                                                           
                                                                        </div>
                                                                         
                                                                             <div className={styles.mainInFo__BoxTwo}>
                                                                                {value.dataProduct.map((item) => (
                                                                               
                                                                                     <div className={styles.content}>
                                                                                        <div>  
                                                                                            <img src={item.imgCart} alt="" className={styles.imgProduct} />
                                                                                        </div>
                                                                                             
                                                                                     <div> 
                                                                                     <p>   
                                                                                            <span className={styles.title}> {item.title}  </span>
                                                                                            
                                                                                    </p>
                                                                                           <p className={styles.price}> {item.price}đ <span className={styles.priceDown}> {item.total_original}đ </span>  </p>
                                                                                           
                                                                                    </div>
                                                                                 </div>
                                                                                
                                                                         
                                                                                ))}

                                                                            <div className={styles.sumMoney}>
                                                                                     <p> Tổng thanh toán: <big>  {value.sumMoney.toLocaleString('vi-VN')} Vnđ </big> </p>

                                                                                     <p className={styles.viewDetail}> Xem chi tiết  <FontAwesomeIcon icon={faArrowRight} />  </p>
                                                                            </div>
                                                                               
                                                                             
                                                                        </div>
                                                                            


                                                                        </div>
                                                            </div>
                                                                    )
                                                               })
                                                            ))  
                                                           }
                                                           
                                                        
                                                     
                                                        <h1> Đơn hàng gần đây </h1>
                                                        
                                                        </div>
                                                    ) : (
                                                        []
                                                    )                                                                                                           
                                                }
                                         </div>
                                      
                                        
                                    
                                       
                                              
                                  </div>
                       
            </div>
                
            }
          
        </div>
    );
}

export default ListHistory;