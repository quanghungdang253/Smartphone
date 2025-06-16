import React, { useEffect, useState } from 'react';
import styles from './look-up-orders.module.scss';
import img from './img/imgBackground.png';
import imgPhone from './img/iconSmartphone.jpg';
import { Link } from 'react-router-dom';
import ShowProduct from './components/show-product/show-product';
import datas from './data.json';
import imgdonhang from './img/donhang1.jpg';
import { useNavigate } from 'react-router-dom';
import useStatusUser from '../../../hooks/use-status-user';
function LookUpOrders(props) {
    const [dataInput , setDataInput] = useState("");
    // lỗi =======================================
    // const [dataValue , setData ]   = useState(datas);
     const [dataValue , setData ]   = useState(() => {
        try {
               const local = localStorage.getItem("value");
               if(!local || local === "null" || local.trim() === ""){
                return datas
               }
                 // nếu JSON.parse(local) lỗi, sẽ vào catch
        const parsed = JSON.parse(local);
          if (!parsed || typeof parsed !== "object") {
            return datas;
        }
            return parsed;
        }
        catch (err) {
            console.error("Lỗi parse dữ liệu localStorage:", err);
            return datas;
        }
     
        // console.log(local)
        // if (local) {
        //     return JSON.parse(local);
        // } else {
        //     return datas; // fallback khi không có local
        // }
    });

    const [Product , setProduct] = useState(null);

    let navigate = useNavigate();
    const getDataInput = (e) => {
                const data = e.target.value;
                setDataInput(data);
        }

    let data = useStatusUser(dataValue);

    // useEffect(() => {
    //     window.scrollTo({
    //             top: 0,
    //             behavior:'smooth'
    //     })
    //         fetch("https://hungserver1.vercel.app/getUsers")
    //         .then((res) => {
    //                 return res.json();
    //         })
    //         .then((data) => {
    //                 setData(data);
    //         })
    //         .catch(error => {
    //                     console.log("lỗi lấy dữ liệu " + error)
    //         })
    // },[])

    const handleFindClient  = () => {
       if(!dataValue){
        return;
       }
            let data  = Object.entries(dataValue);
          

            let findProduct = data.find(([key,value]) => value.phoneNumber === dataInput)
         if( dataInput  && findProduct){
            localStorage.setItem("currentUser", JSON.stringify(findProduct));
                  navigate("/ShowProduct", {state: {product: findProduct}});
         }
        //  else {
        //           navigate("/ShowProduct", {state: {product: null}});
        //  }
        
        
  //     setProduct(findProduct);

    }
    
    return (
     <div className={styles.mainLookup}>  
            <div className={styles.mainLookup__columnLeft}>
                    <img src={img} alt="" />   
            </div>
            <div className={styles.mainLookup__columnRight}>
                 <div className={styles.formInput}>
                        <h1> Tra cứu thông tin đơn hàng </h1>
                        <div className={styles.imgOrder}>
                                <img src={imgdonhang} alt="" />
                        </div>
                        <div className={styles.img}>
                             <img src={imgPhone} alt="" />
                             <input type="number" placeholder='Nhập số điện thoại mua hàng'  onChange={getDataInput} />
                        </div>
                        <div className={styles.input}>
                                
                        </div>
                        <div className={styles.btn}>
                            <button 
                                onClick={() => {
                                    handleFindClient()

                            } }> Tiếp tục  </button>
                        </div>
                 </div>
            </div>
         </div>
    );
}

export default LookUpOrders;