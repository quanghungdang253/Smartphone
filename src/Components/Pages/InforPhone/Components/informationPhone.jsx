
import { useState } from "react";
import Slideimage from "./Slideimage";
import { Link } from "react-router-dom";
import ListimageProduct from "../../Products_list/components/ListimageProduct";
//===================================style===============================================================
import styles from '../styles/InformationPhone.module.scss';
import style__sale from '../styles/Sale.module.scss';
//========================data====================================
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Static_data from '../data/data-icon/Static_data.json';
import {faGift} from '@fortawesome/free-solid-svg-icons';
//======================================hình ảnh============================================================
// áp dụng quy tắc  camelCase  để đặt tên 
 function InformationPhones({Data}) {
  
  const [customs, setCustoms] = useState(false);
  const [active, setActive] = useState(0);
  const [preindex , setIndex] = useState(0);

  const [indexproduct,setIndexProduct] = useState([]);
  const [total, setTotal] = useState(Data.price);
const [totalorginal , setTotalOriginal] = useState(Data.total_original);
const [original_price , setOriginal_Price] = useState([]);
const [product, setSumProduct] = useState(1);
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
          let Information = [
            {id: 0, title: "Màn hình", content: Data.screen_size, },
            {id: 1, title: "Công nghệ màn hình", content: Data.screen_technology},
            {id: 2, title: "Camera Sau", content: Data.rear_camera},
            {id: 3, title: "Camera trước", content: Data.Front_camera},
            {id: 4, title: "Chipset", content: Data.Chipset},
            {id: 5, title: "Công Nghệ NFC ",content: Data.NFC_technology},
            {id: 6, title: "Bộ nhớ trong", content: Data.internal_memory},
            {id: 7, title: "Thẻ sim", content: Data.SIM_card},
            {id: 8, title: "Hệ điều hành ",content: Data.OperatingSystem},
            {id: 9, title: "Độ phân giải màn hình", content: Data.Screen_resolution},
            {id: 10, title: "Tính năng màn hình", content: Data.Screen_features},
            {id: 11, title: "Loại CPU", content: Data.CPU_Type},
            {id: 12, title: "Cân năng", content: Data.Weight},
            {id: 13, title: "Cổng sạc", content: Data.Charging_port}
          ]
     return (
      <div className={styles.Container}>  
        <div className={styles.nameProduct}>
            <div className={styles.title__icon}>  
                <h1 className={styles.namephone}> {Data.title} </h1> 
                <div className={styles.Wrapper__icon}> 
                      {Static_data.icon__star.map((Item) => (
                            <img key={Item.id} src={Item.icon} alt="" className={styles.icon__star}/>
                      ))}
                </div>
                <h1> 170 Đánh giá </h1>
              </div>              
              <aside className={styles.Wrapper__row__top}> 
                  <div className={styles.Wrapper__left}>                                                                                                                  
                                </div>
                        <section className={styles.Wrapper__Address}>
                                <select className={styles.Wrapper__call}>
                                          {Static_data.address.map((Item) => (
                                                <option key={Item.id}> {Item.content} </option>
                                          ))}
                                </select>
                        </section>                             
                </aside>             
        </div>
        <div className={`${styles.body__aside}`}>
                <Slideimage image={Data?.image} index={preindex}
                
                />
        <aside className={`${styles.aside}`}>
            <div className={styles.Wrapper__aside}> 
                <div className={styles.details_top1}>
                  <div className={styles.memory__price}>
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
                    <div className={styles.Box}>
                    
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
                     <div>  
                            {!customs ? (<Link className={style__sale.btn__link}>  Lên đời ngay </Link>) : (
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
                      </div>                                
                      <div className={style__sale.Box_promition}>
                      <div className={style__sale.name__promotion}> Ưu đãi thêm </div> 
                             <div className={style__sale.Render__promotion}>
                                  <ul>
                                        {Static_data.add__promotion.map((Item) => (
                                          <li className={style__sale.list__promotion}>
                                              <div>  
                                                  <img src={Item.icon} alt="" className={styles.image__icon}/>
                                                   <Link key={Item.id} className={style__sale.Link__promotion}> {Item.content}  </Link>
                                              </div> 
                                          </li>
                                        ))}
                                  </ul>           
                             </div>               
                      </div> 
                      <div className={style__sale.attached__product}>
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
            </aside>      
        </div>
        <section className={styles.Wrapper__Content}>                          
                     <div> 
                        <h1 className={styles.Wrapper__Title}> Thông số kĩ thuật </h1>
                           <table className={styles.Wrapper__table}>                      
                              {Information.map((Item) => (
                                  <tr className={`${styles.table_row} ${styles.table_row__color}`} key={Item.id}>
                                      <td td className={styles.table__row__title}>{Item.title}</td>
                                      <td className={styles.table__row__content}> {Item.content}</td>
                                  </tr>
                                ))}                                            
                            </table>
                        </div>                    
        </section>  
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
