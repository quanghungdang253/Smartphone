import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../../ui/Loading';
import { Helmet } from 'react-helmet-async';
import { useValue } from '../../Context/Settings/Theme/ThemeContext';
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Criteria from '../../ui/criteria';

// ==============================file style =====================================

import styles1 from './styles/showPhone_1.module.scss';
import styles from "./styles/ShowInfo.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStart} from '@fortawesome/free-solid-svg-icons'
import { DefaultComponent } from '../../Pages/Products_list/ui-components/HandleComponent';
import img from './img/img.jpg';
import { useNavigate } from 'react-router-dom';
import {faHeart} from '@fortawesome/free-solid-svg-icons';
import dataNameFolder from './data/data-name-folder.json';
import {NameProducts , dataHome, dataHome_1} from '../../Pages/Home/Components/Section/data/data-selection/data-selection';
import icon_price from '../../Common/assets/icon/icon-price.png';
import useHandledetailApi from '../../hooks/use-handle-detail-phone'; 
import { nameProduct } from '../../Common/componentEnpoint';
import useEnpoint from '../../hooks/use-handle-enpoint';
import {listDataHome, ListProduct} from './data-name-folder';
// =========================customs hook==========================================
import { use } from 'react';
import styled from 'styled-components';
import { div } from '@tensorflow/tfjs';
import { red } from '@mui/material/colors';
function ShowInfo(props) {

const [nameProduct ,setNameProduct] = useState(listDataHome);

    const { theme } = useValue();    // chế độ sáng tối 
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
        
    const [arrayData , setArrayData] = useState([]);
    const [enpoint, setEnpoint] = useState("");
    const [getIndex , setGetIndex] = useState(null);
    const [customsNameFolder , setCustomsFolder] = useState(null);
    const [nameFolder , setNameFolder] = useState([]);
    const [visiblePhones, setVisiblePhones] = useState(10); 
    const dataEnpoint = props.dataEnpoint;

    const [loading, setLoading] = useState(true);
    const [index, setIndex] = useState(0);
    const [predata, setData] = useState([]);

    const [handledata, setHandle] = useState(namephone);

    



    useEffect(() => {
      if(!enpoints){
        const fetchdata = namephone.find((item , id) => id === index);
        if (fetchdata && !enpoints) {
              setData(fetchdata);
         }
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

    // thực hiện truyền dữ liệu cho component chon 

    

    return (
     <div className='mt-5'> 

      
      <Helmet>
                         {enpoints && ( <title> {`Điện thoại ${enpoints} - Hùng Store`}   </title>)} 
                            
                     </Helmet>
          <div 
               style={ 
                  idElement === 0 ?  {backgroundColor: '#B4DEF4'} 
                : idElement === 2 ? {backgroundColor:'#1C4782'} 
                : idElement === 1 ? {backgroundColor:'#fe0000'} 
                : {backgroundColor: ""}
         
            }>

         {enpoints ? ("") : (
            <div className='flex justify-center'>
                  <img src={showimg } alt="" />
            </div>
         )}
           {!enpoints ? (
            <ul className={`flex justify-around mx-auto p-4   ${styles.listProduct}`}>

                {dataChoose.map((Item) => (
                    //  className={`${styles.items} ${Item.id === index ? styles.addcolor : ""}`
                    <li
                        key={Item.id} 
                        className=
                        {`       
                                      
                           inline-block                                                 
                           font-sans  font-bold p-2
                           hover:translate-y-[-5px] 
                           transition-all
                            duration-200 ease-in-out
                           lg: rounded-xl
                               cursor-pointer
                               text-center
                               text-[14px]
                              ${Item.id === index ? 'bg-[#f2f2f2] border border-white' : ''}  
                              
                            
                            `
                        }
                         onClick={() => setIndex(Item.id)}
                         to={''}  
                    >                                           
                              <img src={Item.image} className='h-[3rem] max-w-[5rem]' alt='' />
                              <Link to={''}> </Link>
                              <h1 className='mt-2 text-black font-black'> {Item.name} </h1>      
                    </li>
                ))}
            </ul>
           ): ("")}

     {/* <div className={`${styles.Show_phone} ${theme ? styles.Bright_1 : styles.Dark_1} `} */}
                     

      <div className={` grid grid-cols-2 lg:grid-cols-4 gap-y-4 `}>   
               {predata && predata.data && predata.data.length > 0 ? (
                predata.data.slice(0 , visiblePhones).map((List) => (
                 
                  <div className='bg-white shadow-[0_2px_3px_black]  lg:max-w-[250px] rounded-2xl p-1 ml-6'>
                               <div className="lg: flex justify-between items-center">          
                                    <h3 className="p-2 text-white" style={{ backgroundImage: `url(${icon_price})`}}>                        
                                                 Giảm:{List.discount}
                                    </h3>                                                                       
                                             <h3 className='text-blue-800 font-extrabold'> Trả góp: {List.installment} </h3>

                                </div>

                             <div key={List.id} 
                                      className='                
                                         relative mt-4 mx-auto  pr-[0.5rem]
                                         pb-[1rem] pl-[0.5rem] w-[97%] max-h-[42em] 
                                         cursor-pointer rounded-lg  '
                                        >          
                        <Link to={`/Detail/${encodeURIComponent(enpoint)}/${List.id}`} 
                             className='h-[100%]'
                             onMouseEnter={() => setGetIndex(List.indexCategory)}
                        >
                           <div> 
                       
                              
                              
                                      <img src={List.image} alt={List.titles} />
                            
                                    <img 
                                      src={List.image1 ? List.image1 : ""}
                                      alt=''
                                      className='lg:mt-4'
                                      
                                      />
                                  
                                <h3 
                                style={{lineHeight: 1.5}}
                                className='text-[18px] text-[#18181b] font-bold mb-4 font-sans'> {List.title}</h3>

                                       
                           

                                <div className='lg:flex items-center  mb-4'>
                                    <h3 className="sm:text-medium text-primary-600 text-2xl font-bold text-[#fa001d]">{List.price}</h3>
                                    <h3 className="text-[10px] text-gray-500 line-through sm:text-[16px]"> {List.priceDown} </h3>
                                </div>
                                  <img src={List.image_1 || img } alt='' className="mb-4"/>
                  
                            
                  
                            <p className='p-2 bg-[#f2f2f3] mb-4'>  Không phí chuyển đổi khi trả góp 0% qua thẻ tín dụng kỳ hạn 3-6 tháng                                     
                            </p>
                    </div>
                         {/* <div className={styles.container_icon}></div> */}
                     <div className="flex justify-between">
                        <div> 
                           {star.map((_, index) => ( 
                              <FontAwesomeIcon 
                                icon={faStar} 
                                className="text-yellow-400"
                                
                              />
                           ))}
                       </div>
                          <div>    
                                <strong className='font-bold'> Yêu thích </strong>   
                                <FontAwesomeIcon 
                                  icon={faHeart} 
                                  className="text-red-600 max-w-[2rem]"
                                />
                          </div>
                       
                   </div>
                </Link>
               
                    </div>

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
           <button  className={`${styles1.link} ${styles1.linkShow}`}
                 onClick={() => setVisiblePhones((pre) => {
               if(pre < predata.data.length){
                       return pre + 10;
                  }
                    return pre;
             })}>  Xem thêm {predata?.data ? predata.data.length - visiblePhones : ""} Sản phẩm 
            </button>
        </div>
      ) : (
        <div className={styles1.hidden}>   
      <button onClick={() => setVisiblePhones(10)} className={`${styles1.link}  ${styles1.linkHidden}`}>   Ẩn bớt  </button>  
          </div>
      )}         
    </div>
  </div>


)
}
const HotPromotion = styled.div `


`
       

export default ShowInfo;


