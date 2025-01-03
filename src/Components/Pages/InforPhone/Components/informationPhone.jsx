
import { useState } from "react";
import  {Circles}  from 'react-loader-spinner';
import styled from "styled-components";
import { Helmet } from "react-helmet-async";
// import InformationPhone from "../Pages/InforPhone/Components/Slideimage";
import FetchAPI from "../services/PhoneAPI";
import Slideimage from "./Slideimage";
import { Link } from "react-router-dom";
import styles from '../styles/InformationPhone.module.scss';
 function InformationPhones({Data}) {
  const [active, setActive] = useState(0);
  const handleActive = (id) => {
                 setActive(id);
  }
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
                <h1> {Data.title} </h1> 
                <div className={styles.Wrapper__icon}> 
                    <img src="https://uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-symbol-icon.png" alt="" className={styles.icon}/>
                    <img src="https://uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-symbol-icon.png" alt="" className={styles.icon} />
                    <img src="https://uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-symbol-icon.png" alt="" className={styles.icon} />
                    <img src="https://uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-symbol-icon.png" alt="" className={styles.icon}/>
                    <img src="https://uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-symbol-icon.png" alt="" className={styles.icon} />                                
                </div>
                <h1> 170 Đánh giá </h1>
              </div>              
              <aside className={styles.Wrapper__row__top}> 
                  <div className={styles.Wrapper__left}>                                                                                                                  
                                </div>
                                <section className={styles.Wrapper__Address}>
                                        <select className={styles.Wrapper__call}>
                                            <option> Địa chỉ còn hàng </option>
                                            <option> 123 Nguyễn Văn Lượng Gò Vấp Liên Hệ : 01234856889 </option>
                                            <option> 456 Phan Huy Ích Tân Phú Liên Hệ : 0123456789 </option>
                                            <option> 108 Nguyễn Chí Thanh Bình Thạnh Liên Hệ : 05467456789 </option>                   
                                            <option> 123 Nguyễn Văn Lượng Gò Vấp Liên Hệ : 01235435899</option>
                                        </select>
                                </section>                             
                   </aside>             
        </div>
        <div className={`${styles.body__aside}`}>
                <Slideimage image={Data?.image}/>
        <aside className={`${styles.aside}`}>
            <div className={styles.Wrapper__aside}> 
                <div className={styles.details_top1}>
                  <div className={styles.memory__price}>
                    {Data.Item.map((Item,index) => (
                      <Link 
                         onClick={() => handleActive(index)}
                         className={`${styles.memory__price__link} ${styles.link} ${active === index ? styles.active : ""}`}                    
                             > 
                           {Item.item} 
                      </Link>
                    ))}
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
