
import { useState } from "react";
import  {Circles}  from 'react-loader-spinner';
import styled from "styled-components";
import { Helmet } from "react-helmet-async";
// import InformationPhone from "../Pages/InforPhone/Components/Slideimage";
import FetchAPI from "../services/PhoneAPI";
// import { Overlayer } from "../Home/Main__Home/Home";
 function InformationPhones({Data}) {
     return (
        <Description>
    {/* truyền cho component PhoneAPI một hàm  */}
                <Helmet>
                            <title>   {Data.title}    </title>
                </Helmet>
              <PhoneDescription>
                    <section className="Wrapper">                                                                    
                      <figure  className="Wrapper__figure ">  
                          <aside className="Wrapper__row-top"> 
                              <div className="Wrapper__left">  
                                  <div className="Wrapper__title"> 
                                        <figcaption className=""> {Data.title} </figcaption>
                                  </div>

                                <div className="Wrapper__icon"> 
                                    <img src="https://uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-symbol-icon.png" alt="" />
                                    <img src="https://uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-symbol-icon.png" alt="" />
                                    <img src="https://uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-symbol-icon.png" alt="" />
                                    <img src="https://uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-symbol-icon.png" alt="" />
                                    <img src="https://uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-symbol-icon.png" alt="" />                                
                                </div>
                                          <span> 170 Đánh giá </span>
                                </div>
                                <section className="Wrapper__Address">
                                        <select className="Wrapper__call">
                                            <option> Địa chỉ còn hàng </option>
                                            <option> 123 Nguyễn Văn Lượng Gò Vấp Liên Hệ : 01234856889 </option>
                                            <option> 456 Phan Huy Ích Tân Phú Liên Hệ : 0123456789 </option>
                                            <option> 108 Nguyễn Chí Thanh Bình Thạnh Liên Hệ : 05467456789 </option>                   
                                            <option> 123 Nguyễn Văn Lượng Gò Vấp Liên Hệ : 01235435899</option>
                                        </select>
                                </section>
                              
                            </aside>
                            <hr/>
              <Wrapper__rowbody> 
                         
                  <section className="Wrapper__Content">   
                      <h1 className="Wrapper__Title"> Thông số kĩ thuật </h1>
                        <table className="Wrapper__table">
                                <tr className="table_row table_row--color ">
                                      <td className="table__row--title">Màn hình:</td>
                                      <td className="table__row--content"> {Data.screen_size}</td>
                                </tr>
                                <tr className="table_row">
                                      <td className="table__row--title">Công nghệ màn hình </td>
                                      <td className="table__row--content"> {Data.screen_technology} </td>
                                </tr>
                                <tr className="table_row table_row--color">
                                      <td className="table__row--title">Camera Sau </td>
                                      <td className="table__row--content"> {Data.rear_camera}</td>
                                </tr>
                                <tr className="table_row">
                                    <td className="table__row--title">Camera trước </td>
                                    <td className="table__row--content">{Data.Front_camera}</td>
                                </tr>
                                <tr className="table_row table_row--color">
                                  <td className="table__row--title">Chipset</td>
                                  <td className="table__row--content"> {Data.Chipset}</td>
                                </tr>

                                <tr className="table_row">
                                  <td className="table__row--title">Công nghệ NFC</td>
                                  <td className="table__row--content">{Data.NFC_technology}</td>
                                </tr>
                                <tr className="table_row table_row--color">
                                  <td className="table__row--title">Bộ nhớ trong</td>
                                  <td className="table__row--content">{Data.internal_memory}</td>
                                </tr>
                                <tr className="table_row">
                                  <td className="table__row--title">Thẻ sim</td>
                                  <td className="table__row--content">{Data.SIM_card}</td>
                                </tr>
                                <tr className="table_row table_row--color">
                                    <td className="table__row--title">Hệ điều hành </td>
                                    <td className="table__row--content">{Data.OperatingSystem}</td>
                                </tr>
                                <tr className="table_row">
                                      <td className="table__row--title"> Độ phân giải màn hình </td>
                                      <td className="table__row--content"> {Data.Screen_resolution}</td>
                                </tr>
                                <tr className="table_row table_row--color">
                                  <td className="table__row--title">Tính năng màn hình</td>
                                  <td className="table__row--content">{Data.Screen_features}</td>
                                </tr>
                                <tr className="table_row">
                                  <td className="table__row--title">Loại CPU </td>
                                  <td className="table__row--content"> {Data.CPU_Type}</td>
                                </tr>
                                <tr className="table_row table_row--color">
                                  <td className="table__row--title">Cân nặng </td>
                                  <td className="table__row--content"> {Data.Weight} </td>
                                </tr>
                                <tr className="table_row">
                                  <td className="table__row--title">Cổng sạc</td>
                                  <td className="table__row--content">{Data.Charging_port}</td>
                                </tr>
                      
                        </table>
                        <div className="btn btnBuy">
                                <button className="btn__Buy"> Mua ngay </button>
                        </div>
                      
                     </section>
                   
                  </Wrapper__rowbody>
                     </figure>

                 
                </section>
              </PhoneDescription>
            
          
        </Description>
      );
    }
    
   
const PhoneDescription = styled.div `
    
        z-index: 2;
        .Wrapper {
             
              max-width: 1250px;
              height: 100%;
            
              margin: 0 auto; 
        }
        .Wrapper__figure {
                 text-align:center;
        }
        .Wrapper__row-top {
             display: flex;
             align-items: center;
             justify-content: space-between;
             padding: 2rem 0rem 0rem 4rem;
             grid-column-gap: 1rem;
        }
        .Wrapper__row-top span {
                color: #03fe03;
                font-weight:400;
                font-family: 'Times New Roman', Times, serif
        }
        .Wrapper__title figcaption {
              font-size: 1.4rem;
              color: white;
              font-weight: 500;
            
              

        }
        .Wrapper__icon {
          display: flex;

        }
        .Wrapper__icon img {
                width:15px;
                height:14px;
        }
        hr {
          color: #ffffff;
          height:2px;
          font-weight:700;
        }
        .Wrapper__call {
          background: transparent;
          color: white;

          text-align: center;
          
        }
        .Wrapper__call option {
          color: #000000;
        }
        .Wrapper__left {
              display: flex;
              justify-content: center;
              align-items: center;
              grid-column-gap: 10px;
        }
        //====================css chung =======================================
        table {
          color: white;
        }
        .btnBuy {
                margin-top: 1rem;
                
      
        }
        .btn__Buy {
          padding: 0.6rem 1rem 0.6rem 1rem;
          border-radius: 1rem;
          background-color: yellow;
          color: black;
          font-weight: 800;
        }

//=======================================================



`
const Wrapper__rowbody = styled.div `
display: flex;
z-index: 0;

//============================css chung===========================
td {
    padding: 1rem 1rem;
}
.contact {
    text-align:start;
   
}
.contact p {
       display: flex;
       align-items: center;
}
// áp dụng padding-bottom cho tất cả các thẻ trừ thẻ p đầu tiền 
.contact p:not(:last-of-type) {
            padding-bottom: 10px;
}




//================================================================
  .Wrapper__contact {
  max-width: 585px;
    display: flex;
    background-color:white;
    padding: 1rem 1rem;
    border-radius: 10px;
  }
  .Wrapper__Content {
            max-width:40rem;
            background-color: white;
            padding: 1rem 1rem;
            border-radius: 3rem;
}
.Wrapper__Title {
  font-family: "Oswald", sans-serif;
  font-optical-sizing: auto;
  font-size: 1.6rem;
  color: #000000;
  text-align:start;
  margin-bottom: 1rem;
}
.Wrapper__table {
        border-radius: 4rem;
        display: table-row;
        border: 2px solid white;
        background-color: #edebeb;
}
.table_row {
      height:2rem;
     color: #000000;
     margin: 0 0 2rem 0;
}
.table_row--color {
      background-color: #878383
}
.table__row--content {
    width: 400px;
}

`
    const Description = styled.div `


    `
    const Progressbar = styled.div`
      text-align: end;
      padding: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
    `;
    
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
