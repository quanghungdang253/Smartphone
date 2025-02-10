import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../components/Loading';
import { Helmet } from 'react-helmet-async';
import { useValue } from '../../../Context/Settings/Theme/ThemeContext';
import styles from './styles/ShowInfo.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DefaultComponent } from '../../Pages/Products_list/ui-components/HandleComponent';
import {faHeart} from '@fortawesome/free-solid-svg-icons';
import {NameProducts , dataHome} from '../../Pages/Home/Components/Section/data/data-selection/data-selection';
import useHandledetailApi from '../../../Api/use-handle-detail-phone'; 
import { nameProduct } from '../componentEnpoint';
// =========================customs hook==========================================
import { use } from 'react';
function ShowInfo(props) {
    const { theme } = useValue();
    const id = props.id; // Sửa từ props.setId
    const namephone = props.namephone; // Dữ liệu hiển thị
    const enpoints = props.enpoint; // Tên dữ liệu đầu cuối
    
    const [loading, setLoading] = useState(true);
    const [index, setIndex] = useState(0);
    const [predata, setData] = useState([]);
    const [handledata, setHandle] = useState(dataHome);
    const [enpoint, setEnpoint] = useState("");
  
    let NameDataHome = ["saleProduct1", "saleProduct2", "saleProduct3", "saleProduct4", "saleProduct5", "saleProduct6", "saleProduct7", "saleProduct8"];
    let ListProduct = ["Tivi", "Đồ gia dụng", "Loa", "Laptop","product5", "product6","product7", "product8"]

    useEffect(() => {
      const fetchdata = dataHome.find((item , id) => id === index);
      // const fetchdata = handledata.find((item,id) => id === index);
      if (fetchdata && !enpoints) {
            setData(fetchdata);
      }else {
            setData(namephone);
      }
    }, [index, handledata]);
  
    useEffect(() => {
      if (namephone) {
          setHandle(namephone.data);
          setLoading(false);
      }
    }, [namephone]);
  
    useEffect(() => {
      if (namephone) {
        setLoading(false);
      }
    }, [namephone]);
  
    useEffect(() => {
      const nameEnpoint = {
           samsung: "dataSamsung",
           vivo: "dataVivo",
      };
    
  //  ================== thiết lập điểm cuối ==================================== 
      const getData = async () => {
        const getEnpoint = nameEnpoint[enpoints];

        if (getEnpoint) {
                setEnpoint(getEnpoint);
        } else if(ListProduct.includes(nameProduct,index)){
              setEnpoint(ListProduct[index] )
        }else {
             setEnpoint(ListProduct[index]); 
        }
      };
  
      getData();
    }, [enpoints, index]);
  
    if (loading) {
      return <Loading />;
    }
  
    const star = Array(5).fill(0);
    return (
        <div className={styles.hot__promotion}>
         <div className={`${styles.Wrapper} ${!theme ? styles.Dark : ''}`}>
         {enpoints ? ("") : (
            <div className={styles.image__promotion}>
                 <h3 className={styles.name_promotion}> Khuyến mãi online </h3>
           </div>
         )}
      

           {!enpoints ? (
            <ul className={styles.list_item}>  
                {NameProducts.map((Item) => (
                    <li
                        key={Item.id} 
                        className={`${styles.items} ${Item.id === index ? styles.addcolor : ""}`}
                         onClick={() => setIndex(Item.id)}
                                                            >
                              <img src={Item.image} className={styles.image} alt='' />
                              <h1 className={styles.name}> {Item.name} </h1>      
                    </li>
                ))}
            </ul>
           ): ("")}

                     <Helmet>
                         {enpoints && ( <title> {`Điện thoại ${enpoints} - Hùng Store`}   </title>)} 
                            
                     </Helmet>
        <div className={`${styles.Show_phone} ${theme ? styles.Bright_1 : styles.Dark_1} `}>
            
            {predata && predata.data && predata.data.length > 0 ? (
                predata.data.map((List) => (
                    <div key={List.id} className={`${styles.Showphone__Info} ${theme ? styles.Color__Bright : styles.Color__Dark}`}>     
                                 
                        <Link to={`/Detail/${encodeURIComponent(enpoint)}/${List.id}`} className={styles.Link}>
                           <div className={styles.box__body_link}> 
                                <div className={`${styles.Negotiate}`}>
                                      <span className={`${styles.discount} ${styles.promotion}`} > Giảm giá: {List.discount} </span>
                                      <span className={`${styles.installment} ${styles.promotion}`} > Trả góp: {List.installment} </span>
                                </div>
                                <div className={`${styles.image}`}>
                                      <img src={List.image} alt={List.titles} />
                                 </div>
                    <h2 className={`${styles.Showphone__title}`}> {List.titles} </h2>                      
                                <div className={`${styles.price_up_down}`}>
                                    <h3 className={`${styles.price}`}>{List.price}</h3>
                                    <h3 className={`${styles.pricedown}`}> {List.priceDown} </h3>
                                </div>
                <div className={`${styles.text}`}>  
                            <h3 className={`${styles.text} ${styles.title}`}> {List.title}</h3>
                            {console.log("tên  điện thoại "+List.title)}
                            <img src={List.image_1} alt='' className={`${styles.image_1}`}/>
                            <p 
                                className={`${styles.text}`}>  Không phí chuyển đổi khi trả góp 0% qua thẻ tín dụng kỳ hạn 3-6 tháng                                     
                            </p>
                        </div>
                    </div>
                <div className={styles.container_icon}>
                        <div className={`${styles.box__icon}`}> 
                           {star.map((_, index) => ( 
                             <img key={index}   src='https://uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-symbol-icon.png' alt='ngoisao' className={`${styles.icon}`}/>
                           ))}
                       </div>
                    <p>
                        <span> Yêu thích </span>   
                        <FontAwesomeIcon icon={faHeart} className={styles.icon__star}/>
                    </p> 
                  </div>
                </Link>
                    </div>
                ))  
            ) : (
                <p>No data available</p>
            )}
        </div>
    </div>
</div>

)
}

        //  ===================== phần thiết lập đổi màu nền ======================
        //===========================================================
     
// =================================phần chung ======================================


export default ShowInfo;


