
import { useEffect, useState } from "react";
import Slideimage from "./contact-map";
import { Link } from "react-router-dom";
import { useRef } from "react";
import ListimageProduct from "../../Products_list/components/ListimageProduct";
import ListChildComponents from "./list-child-components";
//===================================style===============================================================
import styles from '../styles/components/info-phone.module.scss';
import style__sale from '../styles/components/Sale.module.scss';
//========================data====================================
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Static_data from '../data/data-icon/Static_data.json';
import {faGift} from '@fortawesome/free-solid-svg-icons';
import RelatedProducts from "./related-products";
import ProductParameters from "./product-parameters";
import img1 from '../image/img1.jpg';
import img2 from '../image/img2.jpg';
import AttachedProduct from "./attached-product";
import ProductDescription from "./product-description";


//======================================hình ảnh============================================================
// áp dụng quy tắc  camelCase  để đặt tên 
 function InformationPhones({Data , id, nameEnpoint}) {
  
  const [customs, setCustoms] = useState(false);
  const [active, setActive] = useState(0);
  const [preindex , setIndex] = useState(0);

  const [indexproduct,setIndexProduct] = useState([]);

  const [total, setTotal] = useState(Data.price);
const [totalorginal , setTotalOriginal] = useState(Data.total_original);
const [original_price , setOriginal_Price] = useState([]);
const [product, setSumProduct] = useState(1);

const [isFixed, setIsFixed] = useState(false);
const [savedTop, setSavedTop] = useState(0);
const [allowScrollLeft, setAllowScrollLeft] = useState(false);
const [topPosition, setTopPosition] = useState(0);
const asideRef = useRef(null); 
const mainRef = useRef(null);
const [mainHeight, setMainHeight] = useState("auto");

const [allowScroll, setAllowScroll] = useState(false);
let moneysavings = parseFloat(Data.total_original) - parseFloat(Data.price);

  let  pre_money_savings =  moneysavings.toFixed(6)
  .replace(/\B(?=(\d{3})+(?!\d))/g, '.')
  .replace(/^0\./, ''); // Loại bỏ "0." ở đầu
const [totalsavings , setTotalSavings] = useState(pre_money_savings);

// Chuyển chuỗi có dấu chấm về số thực
const parseNumber = (value) => {
    return parseFloat(value.replace(/\./g, '')); 
  };
  

  const formatNumber = (value) => {
    const formatter = new Intl.NumberFormat('vi-VN', {
      style: 'decimal',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
    return formatter.format(value);
  };
  

  const handleActive = (id, ischecked) => {
    const product = Data.attached__product.find((item) => item.id === id);
    if (!product) return;
  
    const productPrice = parseNumber(product.price);
    const productDiscount = parseNumber(product.discount);
  
    if (ischecked) {
      
      setSumProduct((prev) => prev + 1);
      setIndexProduct((prev) => [...prev, id]);
  
      setTotal((prevTotal) => {
        const newTotal = parseNumber(prevTotal) + productPrice;
        return formatNumber(newTotal); 
      });
  
      setTotalOriginal((prevTotal) => {
        const newTotal = parseNumber(prevTotal) + productDiscount;
        return formatNumber(newTotal); 
      });
  
      setTotalSavings((prev) => {
        const savings = parseNumber(prev) + (productDiscount - productPrice);
        return formatNumber(savings); 
      });
    } else {
      setSumProduct((prev) => prev - 1);
      setIndexProduct((prevIndex) => prevIndex.filter((item) => item !== id));
  
      setTotal((prevTotal) => {
        const newTotal = parseNumber(prevTotal) - productPrice;
        return formatNumber(newTotal); 
      });
  
      setTotalOriginal((prevTotal) => {
        const newTotal = parseNumber(prevTotal) - productDiscount;
        return formatNumber(newTotal); 
      });
  
      setTotalSavings((prev) => {
        const savings = parseNumber(prev) - (productDiscount - productPrice);
        return formatNumber(savings); 
      });
    }
  };
        
  useEffect(() => {
    const handleScroll = () => {
        if (!asideRef.current) return;

        if (mainRef.current) {
          // Lấy chiều cao lớn nhất giữa aside và body
          const bodyHeight = mainRef.current.querySelector(`.${styles.body}`)?.scrollHeight || 0;
          const asideHeight = mainRef.current.querySelector(`.${styles.aside}`)?.scrollHeight || 0;
          
          // Cập nhật chiều cao dựa trên nội dung lớn hơn
          setMainHeight(Math.max(bodyHeight, asideHeight) + "px");
        }



        const aside = asideRef.current;
        const asideScrollHeight = aside.scrollHeight;
        const asideClientHeight = aside.clientHeight;
        const asideScrollTop = aside.scrollTop;
        
        // Kiểm tra điều kiện trước khi cập nhật state
    
        if (asideClientHeight + asideScrollTop >= asideScrollHeight - 10) {
            setAllowScrollLeft(true);
        }else {
          setAllowScrollLeft(false);
        }

      
        if (window.scrollY >= 150) {
                    setIsFixed(true);
                 
        }else if(window.scrollY > 800){
          console.log("da lon honw "+window.scrollY);
          if (asideRef.current) {
                      setSavedTop(800);
           }
              setIsFixed(false);
        }
        else {
                setSavedTop(0)
                setIsFixed(false);
               
        }

       
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    return () => {
        window.removeEventListener("scroll", handleScroll);
        window.removeEventListener("resize", handleScroll);
    };
}, [allowScrollLeft]);


console.log(window.scrollY);

     return (
    
      <div className={styles.Container}>
     <ListChildComponents Static_data={Static_data} Data={Data}/>
    <main>  
      <div className={styles.body} style={{display:'flex'}}> 
        <div   
            className={`${styles.body__aside}`} 
            style={
            { 
             height:'125vh',           
            position: isFixed ? 'sticky' : 'relative',
            top: isFixed ? '70px' : 'auto',
            left:0,
         
            transition: "top 2s easy",
            marginTop: !isFixed ? `${savedTop}px` : "0px", // Đặt lại vị trí khi relative
           background: "white",
            
            }
            }
            >
          <div className={styles.boxleft}>
                <Slideimage image={Data?.image} index={preindex}/>
             
            
          </div> 
        </div>  
        <aside 
             ref={asideRef}
            className={`${styles.aside}`} 
            style={{
                 height: '300vh',
               overflow: 'auto'
              
         
            }}
             >
            <div className={styles.Wrapper__aside}> 
                <div className={styles.details_top1}>
                  <div className={styles.details_top1__price}>
                    {Data.Item.map((Item,index) => (                     
                      <Link to={Item.Link}
                         onClick={() => handleActive(index)}
                         className={`${styles.memory__price__link} ${styles.link} ${active === index ? styles.active : ""}`}                    
                             > 
                              <h2>  {Item.item}   </h2> 
                              <p> {Item.price}  </p> 
                            </Link>                                                                                   
                    ))}
                  </div>
                </div>
                <div className={styles.details_top2}>
                <h1 className={styles.title__detail_top2}> Chọn màu để xem giá và chi nhánh có hàng  </h1>
                    <div className={styles.details_top2__product}>
                    
                          {Data.Typephone.map((Item,index) => (
                                  <a 
                                    key={Item.id} 
                                    className={`${styles.Link} ${index === preindex ? `${styles.addborder}`: ""}`}
                                    onClick={() => setIndex(Item.id)}
                                    > 
                                      <img src={Item.image} alt="" className={styles.img}/>
                                      <div className={styles.name__price}>   
                                            <h2 className={styles.title}> {Item.name} </h2>
                                             <p> {Item.price} </p>
                                      </div>
                                   </a>                           
                          ))}
                    </div>                     
                </div> 
                <div className={style__sale.sale}>
                            <div className={style__sale.choose__price}>
                                  <div className={`${style__sale.choose__price_1} ${style__sale.choose} ${!customs ? style__sale.old : style__sale.new} `}
                                       onClick={() => setCustoms(false)}       >
                                      <img src='https://cdn2.cellphones.com.vn/x35,webp/media/icon/pdp-trade-icon.png'  alt=""/>
                                        <div>  
                                            <p> Giá thu cũ lên đời </p>
                                            <h1> 12.990.000 đ</h1>
                                            <p> 29.785.000 đ </p>
                                        </div>
                                  </div>

                                  <div className={`${style__sale.choose__price_2}  ${style__sale.choose}  ${!customs ? style__sale.old : style__sale.new}`}
                                       onClick={() => setCustoms(true)}>
                                            <p> Giá mua ngay  </p>
                                            <h1> 12.990.000 </h1>
                                            <p> 29.785.000  </p>
                                  </div>                         
                            </div>
                            <div className={style__sale.listimage}> 
                                   <ListimageProduct image={Static_data.image__advertisement}/>            
                            </div> 
                            
                     </div>
                     <div>  
                            {!customs ? (<Link className={style__sale.btn__link}>  Lên đời ngay </Link>) 
                
                            : (
                              <>    
                                  <div className={style__sale.Box__buy__now}>
                                      <Link className={` ${style__sale.btn__buy}`}>  Mua ngay </Link>
                                      <button className={style__sale.btn__add__product}>
                                              <img src="https://cdn2.cellphones.com.vn/insecure/rs:fill:50:0/q:70/plain/https://cellphones.com.vn/media/wysiwyg/add-to-cart.png" alt=""/>
                                               Thêm giỏ hàng 
                                      </button>
                                  </div>
                                  <div className={style__sale.payment__method}>
                                      <Link className={style__sale.btn}>  
                                            <h1> Mua trả góp 0% </h1>
                                            <p> Trả chỉ từ 0đ</p>
                                      </Link>
                                      <Link className={style__sale.btn}>  
                                            <h1> Trả góp 0% Qua thẻ </h1>
                                            <p> Trả chỉ từ 0đ</p>
                                      </Link>
                                  </div>
                                </> 
                            )}
                            <div className={style__sale.sale_1}>
                                <div className={style__sale.Box}>
                                    <div className={style__sale.Box_gift_1}>    {/* box gift: hộp quà   */}
                                        <FontAwesomeIcon icon={faGift} className={style__sale.icon_gift}/>
                                              <h1> Khuyến mãi </h1>
                                    </div>                                                                       
                                </div>
                                <div className={style__sale.Box__gift_2}>
                                          {Static_data.gift__box.map((Item) => (                                                           
                                              <p key={Item.id} className={style__sale.gift__content}>
                                                    <Link className={style__sale.gift__text}>   {Item.content}   </Link>
                                               </p>
                                          ) )}
                                </div>                          
                            </div> 
                      </div>                                
                  <AttachedProduct Static_data={Static_data} />
                      <div className={style__sale.attached__product}>
                            <div className={style__sale.attach__child1}>
                               <div className={style__sale.title}> Ưu đã hấp dẫn khi mua kèm với <span> {Data.title} </span>   </div>  
                               <ul className={style__sale.list__product}>
                                    {Data.attached__product.map((Item) => (
                                            <li key={Item.id}>  
                                                <div className={style__sale.Box_1}> 
                                                     <img src={Item.image} alt="" className={style__sale.Box1__image}/>
                                        {Item.id === 0 ?    ('') :
                                                              
                                    (<input type="checkbox" onClick={(e) => handleActive(Item.id , e.target.checked)} className={style__sale.Box1_checkbox}/>)

                                        }                                              
                                                </div>
                                                <div  className={style__sale.Box_2}>  
                                                    <a>
                                                         {Item.id === 0 ? (<b> Đang xem </b>) : ('')}
                                                        {Item.id === 0 ? (Data.title) : (Item.name)}
                                                      
                                                   </a>
                                                  <div className={style__sale.Box_3}> 
                                                        <span className={style__sale.price}> {Item.price}  </span>
                                                        <span className={style__sale.discount}> {Item.discount} </span>
                                                        <a>
                                                        <img src="https://cdn2.cellphones.com.vn/insecure/rs:fill:50:0/q:70/plain/https://cellphones.com.vn/media/wysiwyg/add-to-cart.png" alt=""/>
                                                              Thêm vào giỏ hàng
                                                       </a>
                                                   </div>                                                
                                                </div>                                             
                                            </li>
                                    ))}
                               </ul>

                               </div>

                               <div className={style__sale.btn__product}>
                                    <div className={style__sale.Box__title}> 
                                            Tổng tiền : 
                                             <h1> {total} </h1>
                                            <h2> {totalorginal}</h2>
                                           
                                     </div>
                                        <div className={style__sale.Box__btn_buy}>
                                                <Link className={style__sale.Link__btn_buy}> 
                                                         <span>  Mua {product} Sản phẩm  </span> 
                                                        <span> Tiết kiệm {totalsavings}</span> 
                                                </Link>
                                        </div>   
                               </div>       
                      </div>                  
                </div>    
                       
                       <img src={img2} alt="" style={{objectFit:'cover', width: '100%'}}/>       
            </aside> 
          
          
          
            </div>
              
            </main> 
            <div>   
                <RelatedProducts id={id} dataPhone={Data}  nameEnpoint={nameEnpoint}/>
            </div>   
            <div> 
                <ProductDescription dataPhone={Data} /> 

            </div>
            
        </div>
      
       
      );
    }
    

      
//=======================================================






//============================css chung===========================


  
    
    export default InformationPhones;
// import React, { useState } from "react";
// import PhoneAPI from "./PhoneAPI"; // Import component mới
// import { Circles } from "react-loader-spinner";
// import styled from "styled-components";
// import InformationPhone from "../Home/Home__body/InformationPhone";

// function InformationPhones() {
//   const [data, setData] = useState(null); // State để nhận dữ liệu từ PhoneAPI
//   const [loading, setLoading] = useState(true);

//   // Hàm để cập nhật dữ liệu và trạng thái loading từ PhoneAPI
//   // hàm handleDataFetch có tham số là fetchData
//   const handleDataFetch = (fetchedData) => {  
//     setData(fetchedData);
//     setLoading(false);
//   };

//   return (
//     <div>
//       {/* Gọi component API và truyền hàm handleDataFetch */}
//       <PhoneAPI onDataFetch={handleDataFetch} />

//       {loading ? (
//         <Progressbar>
//           <Circles
//             height="400"
//             width="80"
//             color="blue"
//             ariaLabel="loading"
//           />
//         </Progressbar>
//       ) : (
//         data && (
//           <div>
//             <InformationPhone image={data.image} /> {/* Truyền dữ liệu vào component InformationPhone */}
//             <ul>
//               <li>
//                 <p>Kích thước màn hình:</p>
//                 <div>{data.Chipset}</div>
//               </li>
//             </ul>
//           </div>
//         )
//       )}
//     </div>
//   );
// }

// const Progressbar = styled.div`
//   text-align: end;
//   padding: 50px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// export default InformationPhones;


