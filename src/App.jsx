//       import React, { useEffect, useRef, useState } from 'react';
//       import './App.css';
//       import './Components/phone/HeaderStyle/reset.css';
//       import {  Routes, Route,  } from 'react-router-dom';
//   import { Typography, Button } from '@mui/material';
//     import Render from './Api/samsung';
//   import Home from './Api/home';
//  import CategoryApi from './Api/MenuApi';
// import styled from 'styled-components';



//       export default function App(){  
//             const [isOverlayVisible, setIsOverlayVisible] = useState(false);

          
                 
//       return ( 
//          <Style> 
      
//                         <Routes>
//                                           <Route path="/" element={<Home/>}></Route>
//                                           <Route path='/phone/:link' element={<Render/>}></Route>
//                                           <Route path='/phone/:link/:id' element={<CategoryApi/>}></Route>
//                         </Routes>
            
           
          
                   
                              
                              
//             </Style>
//       );
//       }
//       const Style = styled.div `

      
      
//       `
      
   // =====================ứng dụng chạy chính ==================

import React, { useEffect, useState } from 'react';
import './App.css';
import './Components/phone/HeaderStyle/reset.css';
import Home from './Components/Pages/Home/Home';
import { Routes, Route } from 'react-router-dom';
// import InformationPhones from './Components/informationPhone/informationPhone';
import styled from 'styled-components';
import Overlay from './Components/Overlayer';
import InforPhone from './Components/Pages/InforPhone/InforPhone';

import MainHeader from './Components/Header/MainHeader';

export default function App() {
    return (
        <Style>
            <div> 
                <MainHeader />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/Inphone/:id' element={<InforPhone />} />
                </Routes>
              
            </div>
        </Style>
    );
}

const Style = styled.div`
    /* Your styles here */

`;
const Navigations = styled.div`
      


`






      // import React, { useEffect, useState } from 'react';
      // import './App.css';
      // import './Components/phone/HeaderStyle/reset.css';
      // import Main_home from './Components/Home/Main__Home/Main__home';
      // import { Routes, Route } from 'react-router-dom';
      
      // import InformationPhones from './Components/informationPhone/informationPhone';
      // import categoryApi from './api/categoryApi';
      // import Home from './api/home';
      // import Render from './api/samsung';
      // import CategoryApi from './api/categoryApi';
      
      // export default function App() {
      //   const url = '/samsung.json';
      //   const [Prevalue, Setvalue] = useState('');
      //   const [data, Setdata] = useState([]);
      //   const [data1, Setdata1] = useState([]);
      //   const [show, setShow] = useState(false);
      
      //   // Hàm gọi dữ liệu từ API khi component được mount
      //   useEffect(() => {
      //     const FunctionAsync = async () => {
      //       const fetchdata = await fetch(url);
      //       const data = await fetchdata.json();
      //       Setdata(data);
      //       console.log("đã nhận data");
      //     };
      //     FunctionAsync();
      //   }, []);
      
      //   // Cập nhật giá trị và tìm kiếm gợi ý
      //   function Update(e) {
      //     const value = e.target.value.toLowerCase();
      //     Setvalue(value);
          
      //     if (value.length > 0) {
      //       const first = data.filter((item) =>
      //         item.name.toLowerCase().includes(value)
      //       );
      //       Setdata1(first);
      //       setShow(true);
      //     } else {
      //       setShow(false); // Ẩn gợi ý khi không có giá trị
      //     }
      //   }
      
      //   // Hàm xử lý sự kiện nhấp chuột để ẩn gợi ý
      //   function handleDown(event) {
      //     const suggestionss = document.querySelector('.suggestions');
      //     const forminput = document.querySelector(".forminput");
      
      //     if (suggestionss && !suggestionss.contains(event.target) && forminput !== event.target) {
      //       setShow(false);
      //     }
      //   }
      
      //   // Thêm sự kiện lắng nghe mousedown
      //   useEffect(() => {
      //     document.addEventListener("mousedown", handleDown);
      
      //     return () => {
      //       document.removeEventListener("mousedown", handleDown);
      //     };
      //   }, []);
      
      //   return (
      //     <div>
      //       <input type="text" onChange={Update} className='forminput' /> {/* Sử lý khi người dùng nhập dữ liệu */}
      //       {show && data1.length > 0 && (
      //         <div className='suggestions'> {/* suggestions: gợi ý */}
      //           {data1.map((item) => (
      //             <p key={item.id} className='name'>{item.name}</p>
      //           ))}
      //         </div>
      //       )}
      //       {/* Các Route có thể được thêm vào đây nếu cần */}
      //       {/* <Routes>
      //         <Route path="/" element={<Home/>}></Route>
      //         <Route path='/phone/:link' element={<Render/>}></Route>
      //         <Route path='/phone/:link/:id' element={<CategoryApi/>}></Route>
      //       </Routes> */}
      //     </div>
      //   );
      // }
      

     


// =================================================================================
// import React from 'react';
// import { Routes, Route, Link } from 'react-router-dom';
// import PropTypes from 'prop-types'
// import { useEffect,useState } from 'react';
// import Informationcar from './Components/Body/informationcar';
// import List from './Components/Body/List';


// function App(props) {
//   return (
//     <div>
//     <Routes>
//               <Route path='/'  element={<List/>} />
//               <Route path='/listcard/:id' element={<Informationcar/>} /> 
//     </Routes>
      
//     </div>
//   );
// }

// export default App;




// import React, { useEffect, useState } from 'react';
// import './App.css';
// import './Components/phone/HeaderStyle/reset.css';
// import Main_home from './Components/Home/Main__Home/Main__home';
// import { Routes, Route } from 'react-router-dom';
// import InformationPhones from './Components/informationPhone/informationPhone';
// import styled from 'styled-components';
// import Overlay from './Components/Overlayer';
// import Listnameproducts from './Components/Listnameproducts'; // Make sure to import

// export default function App() {
//     const [isOverlayVisible, setIsOverlayVisible] = useState(false);

//     const toggleOverlay = () => {
//         setIsOverlayVisible(!isOverlayVisible);
//     };

//     return (
//         <Style>
//             <div>
//                 <Listnameproducts showOverlay={toggleOverlay} />
//                 {isOverlayVisible && <Overlay />}
//                 <Routes>
//                     <Route path='/' element={<Main_home />} />
//                     <Route path='/Inphone/:id' element={<InformationPhones />} />
//                 </Routes>
//             </div>
//         </Style>
//     );
// }

// const Style = styled.div`
//     /* Your styles here */
// `;


