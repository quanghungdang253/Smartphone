// import React from 'react';
// import Swal from 'sweetalert2' 
// import {Phoneitem} from '../../../Home/Home__body/Phoneitem';
// import {ListPhone} from '../../../phone/Data/Listphone'
// import styled from 'styled-components';
// import { useState } from 'react';
// import { useEffect } from 'react';
// import Information from '../../../phone/Data/Informationphone';
// import InformationPhone from '../../../phone/Data/Informationphone';
// import { Link } from 'react-router-dom';
// import classNames from 'classnames';

// import  {Circles}  from 'react-loader-spinner';
// import useHandleApi from '../../../../Api/useHandleApi';

// const Phonedisplay = () => {    // Phonedisplay gửi cho component cha một hàm 

//     const [Prephone, Setphone] = useState([]);
//     const [loading, Setloading] = useState(true);

   
// const [dataPhone] = useHandleApi();
// useEffect(() => {
//     if(dataPhone){
//           Setphone(dataPhone);
//             Setloading(false);
//             console.log(dataPhone);
          
//     }
// },[dataPhone])
// return (
//   <Wrapper>  
//         <ShowPhone>  
//          {loading ? ( <Circles
//                   height="400"
//                   width="80"
//                   color="blue"
//                   ariaLabel="loading"
//               /> 
//          ):(
//              Prephone.map((List) => (
         
//          <div key={List.id} className='Showphone__Info'>  
//              <Link to= {`/Detail/dataPhone/${List.id}`} >      {/*  lấy id động  */}
//                       <Negotiate>                 
//                            <span> Giảm giá : {List.discount} </span>
//                            <span> Trả góp : {List.installment}</span>
//                        </Negotiate> 
//                    <Image>  
//                        <img src={List.image} alt=''/>
//                    </Image>
//                        <h2 className='Showphone__title'> {List.title} </h2>
//                        <h3> {List.price}</h3>
           
//              </Link>
//          </div>
// ))
//          )
//          }
                
//         </ShowPhone>
//       </Wrapper>
// )}
      
                             
                               
               
           
     
   

// const Wrapper = styled.div`

// `


// const ShowPhone = styled.div `

//     display: grid;
//     grid-template-columns: 20% repeat(4, 20%);
//     margin: 0px 7% 0% 7%;
//       grid-row-gap: 1rem;
//    .Showphone__Info {
//             padding: 1rem 1rem;
//             height: 350px;
//             width: 90%;
//             cursor: pointer;
//             background-color: white;
//             border-radius: 2rem;
//             box-shadow: 5px 5px 0.5px black;
            
//    }
//    .Showphone__Info:hover {
//            transform: translateY(-5px);
//            transition: all ease 0.5s;
//    }
//   .Showphone__Info span {
//           border: 1px solid black;
//           font-weight:600;
//           background:#ed6040;
//           color: white;
//           height:1.4rem;
//           width: 5rem;
//           border-top-right-radius: 10px;
//           border-bottom-right-radius:10px;
//           font-size:0.7rem;
//           text-align: center;
  
//   }
// .Showphone__Info a {
//   text-decoration: none;
//   color: black;
//   display: grid;
//   gap: 12px;
// }
// .Showphone__title {
//       font-size:1.1rem;
//       font-weight:700;

// }
// .Showphone__Info h3 {
//       color: red;
//       font-weight: 600;

// }

//     img {
//       width:100%;
//     }
 
  

// `
// const Negotiate  = styled.div `
//         display: flex;
//         grid-column-gap: 2.5em;

// `
// const Image = styled.div `
//           width: 75%;
//           margin-left: 1.5em;
//          display: flex;
//          justify-content:center;

// `


 
   

        
// // state giúp thiết lập giá trị người dùng click



// export  {Phonedisplay};



// // import React from 'react';
// // import Swal from 'sweetalert2';
// // import { Phoneitem } from './Phoneitem';
// // import { ListPhone } from '../phone/Data/Listphone';
// // import styles from '../phone/HeaderStyle/Showphone.module.css';
// // import information from '../phone/Data/Informationphone';
// // import { useState } from 'react';

// // const Phonedisplay = () => {
// //   const { phone, addPhone } = ListPhone();
// //   const [preinfor, setinfor] = useState(false);

// //   const Customs = (assignment) => {
// //     setinfor(assignment);
// //   };

// //   return (
// //     <div>
// //       <div className={styles.Wrapper}>
// //         {phone.map((phone) => (
// //           <Phoneitem
// //             key={phone.id}
// //             image={phone.image}
// //             title={phone.title}
// //             price={phone.price}
// //             buy={
// //               <button className='node' onClick={() => Call(phone.title, phone.price)}>
// //                 {phone.buy}
// //               </button>
// //             }
// //           />
// //         ))}
// //         {information.map((Value, index) => (
// //           <Phoneitem
// //             key={index}
// //             information={
// //               <button className='node' onClick={() => Customs(Value)}>
// //                 Thông tin điện thoại
// //               </button>
// //             }
// //           />
// //         ))}
// //       </div>
// //       <button onClick={addPhone}>Thêm điện thoại </button>
// //     </div>
// //   );

// //   function Call(title, price) {
// //     return Swal.fire({
// //       title: "Đã Mua Thành Công (Successfully Purchased)",
// //       text: "SmartPhone " + title + " Giá (Price): " + price,
// //       icon: "success",
// //       position: "top",
// //       timer: 7000,
// //       timerProgressBar: true,
// //       customClass: {
// //         popup: 'popup',
// //         text: "text",
// //         icon: "icon",
// //         title: "title",
// //       },
// //     });
// //   }
// // };

// // export default Phonedisplay;







// // import React, { useState } from 'react';
// // import Swal from 'sweetalert2';
// // import { Phoneitem } from './Phoneitem';
// // import { ListPhone } from '../phone/Data/Listphone';
// // import styles from '../phone/HeaderStyle/Showphone.module.css';

// // const Phonedisplay = ({ onShowCustoms }) => {
// //   const phone = ListPhone();

// //   const handleCall = (title, price) => {
// //     Swal.fire({
// //       title: "Đã Mua Thành Công (Successfully Purchased)",
// //       text: "SmartPhone " + title + " Giá (Price): " + price,
// //       icon: "success",
// //       position: "top",
// //       timer: 7000,
// //       timerProgressBar: true,
// //       customClass: {
// //         popup: 'popup',
// //         text: "text",
// //         icon: "icon",
// //         title: "title",
// //       },
// //     });
// //   };

// //   return (
// //     <div>
// //       <div className={styles.Wrapper}>
// //         {phone.map((phone, index) => (
// //           <Phoneitem
// //             key={phone.id}
// //             image={phone.image}
// //             title={phone.title}
// //             price={phone.price}
// //             buy={
// //               <button className='node' onClick={() => handleCall(phone.title, phone.price)}>
// //                 {phone.buy}
// //               </button>
// //             }
// //             information={
// //               <button key={index} onClick={() => onShowCustoms(phone)}>
// //                 Thông tin sản phẩm
// //               </button>
// //             }
// //           />
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // const Customs = ({ phone }) => {
// //   return (
// //     <div>
// //       <div>
// //         <h1 className="namephone">Tên điện thoại: {phone.title}</h1>
// //       </div>
// //       <div>
// //         <h5 className="price">Giá: {phone.price}</h5>
// //       </div>
// //       <div>
// //         <img src={phone.image} alt={phone.title} />
// //       </div>
// //     </div>
// //   );
// // };

// // export { Phonedisplay, Customs };
