import React, { useEffect, useState } from 'react';
import styles from './body-admin.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList,faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import ShowDetailProduct from './components/purchase-history';
import { Link } from 'react-router-dom';
import Loading from '../../../Common/components/Loading';
import imgSale from './img/sale.jpg';
function BodyAdmin({data}) {

    const [index , setIndex] = useState(true);
    const [indexForm1, setIndexForm1] = useState(0);
    const [dataProduct , setDataProduct] = useState(null);
    const [showData , setShowData] = useState(false);
    const [underlineColor , setUnderlineColor] = useState(0);
   const [openForm , setOpenForm] = useState(false);
 const [indexProduct , setIndexProduct] = useState(null);
const [idReder , setIdRender] = useState(null);
const [Product , setProduct] = useState(null);



 if(data !== null ){
      let arrayData = Object.entries(data);
    
 }

useEffect(() => {
    if(!data){
            return
    }else {
        // let ArrayProduct = Object.entries(data);
        let findProduct = Object.entries(data).find(([id, item]) => id === idReder);
        if(findProduct){
             setProduct(findProduct);
        }else {
             
        }
    }
}, [idReder,data])

const handleIndex = (bool , index) => {
           setIndex(bool)
           setIndexForm1(index)
}
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
    },
     {
         "id": 2, 
         icon: "", 
         "content": "Thêm sản phẩm",data: Product, dataNavigation: dataNavigation
    },
     {
         "id": 3, 
         icon: "", 
         "content": "Thống kê sản phẩm",data: Product, dataNavigation: dataNavigation
    },
     {
         "id": 4, 
         icon: "", 
         "content": "Xóa sản phẩm ",data: Product, dataNavigation: dataNavigation
    },
    {
         "id": 5, 
         icon: "", 
         "content": "Cập nhật sản phẩm ",data: Product, dataNavigation: dataNavigation
    },
        {
         "id": 6, 
         icon: "", 
         "content": "Thống kê ",data: Product, dataNavigation: dataNavigation
    },
    
]
 
console.log(Product);
    return (

        <div className={styles.container}>
      
        
         <div className={styles.container__boxLeft}>  
            {nameData.map((item) => {
                    return (
                        <div className={styles.mainBox}> 
                            <div className={`${styles.itemBtn} ${ item.id === indexForm1 ?  styles.addHover : styles.noneHover}`}
                                onClick={() => {
                                        handleIndex(true , item.id)
                                        setOpenForm(true);
                                       
                                 }}> 
                                     <h1> 
                                         <FontAwesomeIcon icon={item.icon} className={styles.icon} />
                                             {item.content}
                                     </h1>
                                        
                            </div>
                        </div>
                    )
            })}
            </div>
            {
              (indexForm1 === 0) ? (
            <div 
                className={styles.container__boxRight}>
                            <h1 className={styles.titleBoxRight}> Đơn hàng gần đây </h1>
                                    <div className={styles.navigation}>
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
                                                                                    setIdRender(key)
                                                                                    handleIndex(false, 1)
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
                                                           
                                                        
                                                
                                                        
                                                        </div>
                                                    ) : (
                                                        []
                                                    )                                                                                                           
                                                }
                                         </div>
                                              
                                  </div>
                                
                       
            </div>
            
              ) : indexForm1 === 1 ?  (
                          <ShowDetailProduct data={data} isOpen={index} Product={Product} openForm={openForm}/>
              ) : null

                
          
              
                    
               
            }
          
        </div>
    );
}

export default BodyAdmin;
