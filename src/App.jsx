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
      
   // =====================Map ==================
//    import React, { useRef } from "react";
//    import { Canvas, useFrame } from "@react-three/fiber";
//    import { OrbitControls } from "@react-three/drei";
//    import * as THREE from "three";
   
//    const OscillatingSphere = () => {
//      const sphereRef = useRef();
//      let time = useRef(0); // Dùng để theo dõi thời gian
   
//      useFrame(() => {
//        if (sphereRef.current) {
//          time.current += 0.05; // Tăng thời gian dần dần
//          sphereRef.current.rotation.y = Math.sin(time.current) * 1; // Lắc qua lắc lại
//        }
//      });
   
//      const texture = new THREE.TextureLoader().load(
//        "https://scontent.fsgn2-3.fna.fbcdn.net/v/t39.30808-6/472720365_929193129316415_8568559914425964959_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=9eae26&_nc_ohc=xhCiBE6loq8Q7kNvgEIINZc&_nc_oc=AdhPxnaAjkOuQTBUnE8_wCK5TocPIsrgEMRZ9-9ock9h7zw3-D6eSvT9PCAh-M8wMaw&_nc_zt=23&_nc_ht=scontent.fsgn2-3.fna&_nc_gid=AzzxswOZR27zilN68hpcYc0&oh=00_AYAzmgvxOu-enwAHCdZURetyJu6EBst-NvxSmasdbK_S4Q&oe=67BA0763"
//      );
   
//      return (
//        <mesh ref={sphereRef}>
//          <sphereGeometry args={[2, 40, 10]} />
//          <meshBasicMaterial map={texture} side={THREE.BackSide} />
//        </mesh>
//      );
//    };
   
//    const App = () => {
//      return (
//        <Canvas style={{ width: 1000, height: 900 }}>
//          <OrbitControls enableZoom={false} />
//          <OscillatingSphere />
//        </Canvas>
//      );
//    };
   
//    export default App;
   
   
//============================ ứng dụng chạy chính =====================================
import './App.css';

import './Components/phone/HeaderStyle/reset.css';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import MainHeader from './Components/Header/MainHeader';
import React, { Suspense, lazy } from 'react';
import Loading from './Components/Common/components/Loading';
import { HelmetProvider } from 'react-helmet-async';
import CommunicationSettings from './Components/CommunicationSettings/CommunicationSettings';
import { ParentContext } from './Context/Settings/Theme/ThemeContext';
import Products_list from './Components/Pages/Products_list/Products_list';
import Home from './Components/Pages/Home/Home';
import  InforPhone from './Components/Pages/InforPhone/InforPhone';
import MainStoreInfo from './Components/Header/store-map-info/main-store-info';
import MainStoreMapInfo from './Components/Header/store-map-info/main-store-map';
import { Provider } from 'react-redux';
import store from './app/store';
import MainChatbox from './Components/Chat/main-chatbot';
import MainCart from './Components/Pages/cart-pages/main-cart/main-cart';
import HandleAlert from './Components/Common/components/handle-alert';
import MainFooter from './Components/Common/footer/main-footer';
import Breadcrumb from './Components/Common/location/location';
import MainLogin from './Components/Pages/login/main-login';
import { BreadcrumbProvider } from './Context/share-data-bread-crumb/share-data-bread-crumb';
import MainAdmin from './Components/Pages/admin/main-admin';
import LookUpOrders from './Components/Pages/look-up-orders/look-up-orders';
import ShowProduct from './Components/Pages/look-up-orders/components/show-product/show-product';
// import CounterExample from './app/CouterExample';
// import storeExample from './app/storeExample';
// =========================================chatbot==============================================

export default function App() {
    return (
      <BreadcrumbProvider>  
       <Provider store={store}>  
        <Style>
          <ParentContext>
            <HelmetProvider>   
          
              <MainHeader />
              <ContentWrapper>
           
                <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='label/:namephone' element={<Products_list/>} />
                  <Route path='/Detail/:link/:id' element={<InforPhone />} />  
                  <Route path='/StoreInfo' element={<MainStoreInfo/>} />
                  <Route path='/GoogleMap' element={<MainStoreMapInfo/>} />
                  <Route path='/Cart' element={<MainCart />} />
                  <Route path='/Login' element={<MainLogin/>} />
                  <Route path='/Admin' element={<MainAdmin/> } />
                  <Route path='/LookProduct' element={<LookUpOrders/>} />
                  <Route path='/ShowProduct' element={<ShowProduct />} />
                </Routes>
              </ContentWrapper>
            </HelmetProvider>             
                    
            <div className='CommunicationSetting'>  
              <CommunicationSettings/>     
            </div> 
            <div className='chatBot'> 
        <div className="bg-">

        </div>
              <MainChatbox/>
        
            </div>
          </ParentContext>    
        </Style>
              <FooterWrapper>
                     <MainFooter />
              </FooterWrapper>
              {/* <CounterExample/> */}
        </Provider>

    </BreadcrumbProvider>
    );
  }
  
  const Style = styled.div`
    position: relative;
    /* min-height: 100vh; */
    padding-bottom: 100px; /* Adjust this value based on your footer height */
    
    .chatBot {
      position: fixed;
      bottom: 10px;
      right: -20px;
      z-index: 1500;
    }
    @media (max-width:768px) {
        .CommunicationSetting {
          display: none;
      }
    }
    .CommunicationSetting {
      /* Your styles here */
    }
  `;
  
  const ContentWrapper = styled.div`
    flex: 1;
    padding-bottom: 50px; /* Add some padding at the bottom */
  `;
  
  const FooterWrapper = styled.div`
 
  
  `;











      // ===========================================================


// import React from 'react';
// import store from './ExampleReact_Toolkit/app/store';
// import { Provider } from 'react-redux';
// import { NavLink, Route, Routes } from 'react-router-dom';
// import CounterFeature from './ExampleReact_Toolkit/Counter/index';
// import albumSlice from './ExampleReact_Toolkit/Album/albumSlice';
// import { Navigate } from 'react-router-dom';
// import Pages from './ExampleReact_Toolkit/Counter/pages';
// import HandleTodoform from './ExampleReact_Toolkit/todo/todoform';
// import TodoList from './ExampleReact_Toolkit/todo/todoList';
// import { cancelEdit } from './ExampleReact_Toolkit/Counter/counterSlice';
// import { useDispatch } from 'react-redux';
// function App(props) {

//     const dispatch = useDispatch();
//     return (
//        <div className='App'> 
//             <p> 
//             <NavLink to="/todoForm"activeClassName="active-menu"> 
//                     Thêm thông tin
//             </NavLink> 
                
//             </p>
//             <p>   
//                 <NavLink to="/todoList" activeClassName="active"
//                 onClick={() => dispatch(cancelEdit())}
//                 >
//                     Danh sách thông tin
//                 </NavLink>

//             </p>
//         <Routes>    
//             <Route path='/post-list/:postId' to='/' exact />
//                 {/* thực hiện thay đổi đường dẫn  */}
//             <Route path='/home' element={<Navigate to="/new-path" replace />} /> 
//             <Route path='/todoList' element={<TodoList/>} />
//             <Route path='/todoForm' element={<HandleTodoform/>  } />
//             <Route path='/todoForm/:index' element={<HandleTodoform/>} />
            
//         </Routes>
//         </div>
//     );
// }

// export default App;










// import React from 'react';
// import Count from './Components/Pages/ReduxExample/reducer';
// import HomePages from './pages/home-pages';

// function App(props) {
//     return (
//         <div>
//                 <HomePages/>
//         </div>
//     );  
// }

// export default App;




// import React, { useEffect, useRef, useState } from "react";
// import './App.css'
// const App = () => {
//   const [isFixed, setIsFixed] = useState(false);
//   const [topPosition, setTopPosition] = useState(0);
//   const asideRef = useRef(null); 
//   const [allowScrollLeft, setAllowScrollLeft] = useState(false);
//   useEffect(() => {
//     const scrollY = window.scrollY;
//     const handleScroll = () => {


//         const aside = asideRef.current;
//         console.log("aside" + aside);

//         if (aside) {
//           const asideScrollHeight = aside.scrollHeight; 
//           const asideClientHeight = aside.clientHeight; // Chiều cao hiển thị của aside
//           const asideScrollTop = aside.scrollTop; // Vị trí cuộn hiện tại của aside
      
//           // Kiểm tra nếu aside đã cuộn hết
//           if (asideScrollTop + asideClientHeight >= asideScrollHeight - 10) {
//             setAllowScrollLeft(true); // Cho phép phần bên trái cuộn tiếp
//           } else {
//             setAllowScrollLeft(false);
//           }
//         }


//         if(window.scrollY >= 150){
//                 setIsFixed(true);
//                 setTopPosition(scrollY - 150); 
//         }else {
//             setIsFixed(false);
//             setTopPosition(0); // Reset về vị trí ban đầu
//           }
    
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [allowScrollLeft]);

//   return (
//     <div style={{ display: "flex", height: "200vh", padding: "20px" }}>
//      <p> phần bên trái  </p> 
//       <div
//         style={{
//           flex: 1,
//           height: "100vh",
//            border: '2px solid black',
//           padding: "20px",
//           borderRight: "2px solid black",
//           position: isFixed ? 'sticky' : "relative", // Đổi vị trí khi cuộn xuống
//           top: isFixed ? window.scrollY - 300 : "auto",
//           left: "0",
//           width: isFixed ? "calc(100% - 320px)" : "auto", // Trừ chiều rộng của aside
//           background: "white",
//         }}
//       >
//         <h2>Khu vực bên trái</h2>
//         <p style={{ height: "300vh", background: "lightgray" }}>
//           Nội dung dài... Phần bên trái đứng yên sau khi cuộn 100px. fwefewfew
//           fwefwefwe
//           fwefwefwewefwef

//           f
//           ưefwefwefwe
//           fwefwefwefwefwefwe
//           fweergergerger
//           egergergergerger
//         </p>
//       </div>

//       {/* Phần bên phải */}
//       <aside className="aside"
//          ref={asideRef}
//         style={{
//           width: "300px",
//           height: "100vh",
//           overflowY: isFixed ? 'auto' : 'hidden' , // Cuộn bình thường
//           border: "2px solid black",
//           marginLeft: "20px",
//         }}
//       >
//         <div style={{ height: "200vh", background: "linear-gradient(white, gray)" }}>
//           Nội dung dài... Phần bên phải cuộn bình thường.
//         </div>
//       </aside>
//     </div>/ơ]
//   );
// };

// export default App;














// `
// import React, { useRef, useState } from "react";

// const ImageScroller = () => {
//   const containerRef = useRef(null);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const images = [
//    "https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/samsung-s25-pha-gia-moi-home.png",
//    "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/x/i/xiaomi-mi-pad-6-8gb-128gb_4__1.jpg",
//    "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/t/e/tecno-pova-6-1.png",
//    "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/d/i/dien-thoai-itel-p55_96_.png",
//    "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/d/i/dien-thoai-realme-c61_2__2.png"
//   ];

//   const imgWidth = 110; // 100px ảnh + 10px khoảng cách

//   const scrollNext = () => {
//     if (!containerRef.current) return;
//     setCurrentIndex((prevIndex) => {
//         const newIndex = prevIndex + 1;
//         const container = containerRef.current;
//         const maxScroll = container.scrollWidth - container.clientWidth;
  
//         // Kiểm tra nếu ảnh cuối cùng trong viewport mới cuộn tiếp
//         if (container.scrollLeft < maxScroll) {
//           container.scrollLeft += imgWidth;
//         }
  
//         return newIndex < images.length ? newIndex : prevIndex; // Không vượt quá số ảnh
//       });
  
//   };
//   const scrollLeft = () => {
//     if (!containerRef.current) return;

//     setCurrentIndex((prevIndex) => {
//       const newIndex = prevIndex - 1;
//       if (newIndex >= 2 && newIndex < images.length) {
//         // Chỉ cuộn khi đến ảnh thứ 4 trở đi
//         containerRef.current.scrollLeft -= imgWidth;
//       }
//       return newIndex < images.length ? newIndex : prevIndex; // Không vượt quá số ảnh
//     });
//   };

//   return (
//     <div style={{ textAlign: "center" }}>
//      <img src={images[currentIndex]} alt="" style={{width: '200px' , height: '200px'}}/>
//       <button onClick={scrollNext} style={{ margin: "10px", padding: "5px 10px", cursor: "pointer" }}>
//         Left
//       </button>
//       <button onClick={scrollLeft } style={{ margin: "10px", padding: "5px 10px", cursor: "pointer" }}>
//         Right
//       </button>
//       <div
//         ref={containerRef}
//         style={{
//           width: "200px",
//           overflowX: "auto", // Ẩn thanh cuộn khi chưa cuộn
//           whiteSpace: "nowrap",
//           scrollBehavior: "smooth",
//           border: "2px solid #333",
//           margin: "0 auto",
//         }}
//       >
//         <div style={{ display: "flex" }}>
//           {images.map((src, index) => (
//             <img key={index} src={src} alt={`img-${index}`} style={{ width: "100px", height: "100px", marginRight: "10px" }} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ImageScroller;


// import React, { useRef, useState } from "react";

// const ImageScroller = () => {
//   const containerRef = useRef(null);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const images = [
//     "https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/samsung-s25-pha-gia-moi-home.png",
//     "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/x/i/xiaomi-mi-pad-6-8gb-128gb_4__1.jpg",
//     "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/t/e/tecno-pova-6-1.png",
//     "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/d/i/dien-thoai-itel-p55_96_.png",
//     "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/d/i/dien-thoai-realme-c61_2__2.png",
//   ];

//   const imgWidth = 110; // 100px ảnh + 10px khoảng cách
//   const visibleImages = 3; // Số ảnh hiển thị trên màn hình

//   const scrollNext = () => {

//     if (!containerRef.current) return;

//     setCurrentIndex((prevIndex) => {
//       const newIndex = prevIndex + 1;
//       if (newIndex < images.length) { 
//         if (newIndex >= 3) {
//           containerRef.current.scrollLeft += imgWidth;
//         }
//         return newIndex;
//       }
//       return prevIndex;
//     });
//   };

//   const scrollLeft = () => {
    
//     setCurrentIndex((prevIndex) => {
//       const newIndex = prevIndex - 1;
//       if (newIndex >= 0) {
//         if (newIndex < images.length - 3) {
//           containerRef.current.scrollLeft -= imgWidth;
//         }
//         return newIndex;
//       }
//       return prevIndex;
//     });
//   };

//   return (
//     <div style={{ textAlign: "center" }}>
//     <img src={images[currentIndex]} />
//       <button onClick={scrollLeft} style={{ margin: "10px", padding: "5px 10px", cursor: "pointer" }}>
//              Left
//       </button>
//       <button onClick={scrollNext} style={{ margin: "10px", padding: "5px 10px", cursor: "pointer" }}>
//               Next
//       </button>
//       <div
//         ref={containerRef}
//         style={{
//           width: `${visibleImages * imgWidth}px`,
//           overflowX: "hidden",    
//           whiteSpace: "nowrap",  // không có xuống dòng 
//           scrollBehavior: "smooth",
//           border: "2px solid #333",
//           margin: "0 auto",
//         }}
//       >
//         <div style={{ display: "flex" }}>
//           {images.map((src, index) => (
//             <img key={index} src={src} alt={`img-${index}`} style={{ width: "100px", height: "100px", marginRight: "10px" }} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ImageScroller;
