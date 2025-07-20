import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../components/Loading';
import { Helmet } from 'react-helmet-async';
import { useValue } from '../../Context/Settings/Theme/ThemeContext';
import { faStar } from "@fortawesome/free-solid-svg-icons";


// ==============================file style =====================================
import styles from './styles/ShowInfo.module.scss';
import styles1 from './styles/showPhone_1.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStart} from '@fortawesome/free-solid-svg-icons'
import { DefaultComponent } from '../../Pages/Products_list/ui-components/HandleComponent';
import img from './img/img.jpg';
import { useNavigate } from 'react-router-dom';
import {faHeart} from '@fortawesome/free-solid-svg-icons';
import dataNameFolder from './data/data-name-folder.json';
import {NameProducts , dataHome, dataHome_1} from '../../Pages/Home/Components/Section/data/data-selection/data-selection';
import icon_price from '../icon/icon-price.png';
import useHandledetailApi from '../../Api/use-handle-detail-phone'; 
import { nameProduct } from '../componentEnpoint';
import useEnpoint from '../../Api/use-handle-enpoint';
import ChildComponent from '../../Api/handle-enpoint';
import {listDataHome, ListProduct} from './data-name-folder';
// =========================customs hook==========================================
import { use } from 'react';
import styled from 'styled-components';

function ShowInfo(props) {

const [nameProduct ,setNameProduct] = useState(listDataHome);

    const { theme } = useValue();
    const id = props.id; // Sửa từ props.setId
    const [ nameEnpointss , setNameEnpoint] = useState();
    
    const namephone = props.namephone; // Dữ liệu hiển thị
    const index_2 = props.index_2;
// ==========================list props ===================
    const enpoints = props.enpoint; // Tên dữ liệu đầu cuối
    const dataChoose = props.dataChoose;
    const title = props.title;
    const showimg = props.showimg;
    const handleImg = props.handleImg;
    const idElement = props.idElement;

    //======================================================
    const [loading, setLoading] = useState(true);
    const [index, setIndex] = useState(0);
    const [predata, setData] = useState([]);
    const [handledata, setHandle] = useState(namephone);

    const [arrayData , setArrayData] = useState([]);
    const [enpoint, setEnpoint] = useState("");
    const [getIndex , setGetIndex] = useState(null);
    const [customsNameFolder , setCustomsFolder] = useState(null);
    const [nameFolder , setNameFolder] = useState([]);
    const [visiblePhones, setVisiblePhones] = useState(10); 
  const dataEnpoint = props.dataEnpoint;
    useEffect(() => {
      if(!enpoints){
        const fetchdata = namephone.find((item , id) => id === index);
        if (fetchdata && !enpoints) {
              setData(fetchdata);
    }
      }
      // const fetchdata = handledata.find((item,id) => id === index);
     else {
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
    if(!predata){
            <Loading/>
 }
 useEffect(() => {
  if(dataNameFolder.nameProduct.enpointSmartphone.includes(enpoints)){
          setNameFolder(dataNameFolder.nameProduct.SmartPhone);
  }
  else {
          setNameFolder([]);
}

 },[enpoints])

    useEffect(() => {
  //  ================== thiết lập điểm cuối ==================================== 
  

      const getData = async () => {
     
      const getEnpoint = !nameFolder  ? null : nameFolder[enpoints];
        if (getEnpoint) {
                 setEnpoint(getEnpoint);
        } 
        else if(ListProduct.includes(enpoints)){
                setEnpoint(enpoints);
        }
        else {
             setArrayData(nameProduct[getIndex ? getIndex : 0]);
             setEnpoint(arrayData[index]);
        }
      };
      getData();
    }, [enpoints, index, dataEnpoint, arrayData, getIndex]);

    const star = Array(5).fill(0);

    return (
        <HotPromotion
             className={styles.hot__promotion}>           
      <div className={`${styles.Wrapper} ${!theme ? styles.Dark : ''}`}>
         <div style={ idElement === 0 ?  {backgroundColor: '#B4DEF4'} 
              : idElement === 2 ? {backgroundColor:'#1C4782'} 
              : idElement === 1 ? {backgroundColor:'#fe0000'} 
              : {backgroundColor: ""}
            }>
         {enpoints ? ("") : (
            <div 
              className={!handleImg ?  styles.image__promotion : styles.img}
              style={handleImg ? 
                 {     backgroundImage: `url(${showimg})`,
                        height: idElement === 2 ? 90 : 200,
                       objectFit:'contain', marginLeft: 50,
                        backgroundRepeat:'no-repeat'
                  
                   }
                  
                   : {}}
              >
                 <h3 className={styles.name_promotion}> {title}  </h3>
           </div>
         )}
           {!enpoints ? (
            <ul className={styles.list_item}>  
                {dataChoose.map((Item) => (
                    <li
                        key={Item.id} 
                        className={`${styles.items} ${Item.id === index ? styles.addcolor : ""}`}
                         onClick={() => setIndex(Item.id)}
                         to={''}                                   >
                              <img src={Item.image} className={styles.image} alt='' />
                              <Link to={''}></Link>
                              <h1 className={styles.name}> {Item.name} </h1>      
                    </li>
                ))}
            </ul>
           ): ("")}
                     <Helmet>
                         {enpoints && ( <title> {`Điện thoại ${enpoints} - Hùng Store`}   </title>)} 
                            
                     </Helmet>
        <div className={`${styles.Show_phone} ${theme ? styles.Bright_1 : styles.Dark_1} `}
        >
            
            {predata && predata.data && predata.data.length > 0 ? (
                predata.data.slice(0 , visiblePhones).map((List) => (
                  
                    <div key={List.id} 
                    className={`${styles.Showphone__Info} ${theme ? styles.Color__Bright : styles.Color__Dark}`}
                     
                            >     
                                
                        <Link to={`/Detail/${encodeURIComponent(enpoint)}/${List.id}`} 
                        
                        className={styles.Link}
                        onMouseEnter={() => setGetIndex(List.indexCategory)}
                   
                        >
                           <div className={styles.box__body_link}> 
                             <div style={{height: '240px'}}>   
                                <div className={`${styles.Negotiate}`}>
                                
                                      <span className={ `${styles.discount} ${styles.promotion}`}> Giảm:{List.discount} </span>
                                      <span className={`${styles.installment} ${styles.promotion}`} > Trả góp: {List.installment} </span>
                                </div>
                          
                                <div className={`${styles.image}` }>
                                      <img src={List.image} alt={List.titles} />
                                 </div>
                                <div style={{position:'absolute', top: '-9px'}}>  
                                    <img src={List.image1 ? List.image1 : ""} alt='' />
                                </div>
                    <h2 className={`${styles.Showphone__title}`}> {List.titles} </h2>          
                    </div>            
                                <div className={`${styles.price_up_down}`}>
                                    <h3 className={`${styles.price}`}>{List.price}</h3>
                                    <h3 className={`${styles.pricedown} ${theme ? styles.colorPricedown : ""}`}> {List.priceDown} </h3>
                                </div>
                             
                         <div className={`${styles.text}`}>  
                            <h3 className={`${styles.text} ${styles.title}`}> {List.title}</h3>
                            
                            <img src={List.image_1 || img } alt='' className={`${styles.image_1}`}/>
                            <p 
                                className={`${styles.text}`}>  Không phí chuyển đổi khi trả góp 0% qua thẻ tín dụng kỳ hạn 3-6 tháng                                     
                            </p>
                        </div>
                    </div>
                     <div className={styles.container_icon}>
                        <div className={`${styles.box__icon}`}> 
                           {star.map((_, index) => ( 
                              <FontAwesomeIcon icon={faStar} className={styles.iconStar} />
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
    <div className={styles1.boxShowHidden}>   
      {visiblePhones < (predata?.data && predata.data.length) ? (
        <div className={styles1.viewMore}>  
           <Link  className={`${styles1.link} ${styles1.linkShow}`}
                 onClick={() => setVisiblePhones((pre) => {
               if(pre < predata.data.length){
                       return pre + 10;
                  }
                    return pre;
             })}>  Xem thêm {predata?.data ? predata.data.length - visiblePhones : ""} Sản phẩm 
            </Link>
        </div>
      ) : (
        <div className={styles1.hidden}>   
      <Link onClick={() => setVisiblePhones(10)} className={`${styles1.link}  ${styles1.linkHidden}`}>   Ẩn bớt  </Link>  
          </div>
      )}         
    </div>
  </div>
</HotPromotion>

)
}
const HotPromotion = styled.div `


`
        //  ===================== phần thiết lập đổi màu nền ======================
        //===========================================================
     
// =================================phần chung ======================================


export default ShowInfo;


