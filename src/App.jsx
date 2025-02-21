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

export default function App() {
  // const Products_list  = React.lazy(() => import('./Components/Pages/Products_list/Products_list'))
  // const Home = React.lazy(() => import("./Components/Pages/Home/Home"));
  // const InforPhone = React.lazy(() => import("./Components/Pages/InforPhone/InforPhone"));

  
    return (
        <Style>
         <ParentContext>  
            <div>
             <HelmetProvider>   
                <MainHeader />
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='label/:namephone' element={<Products_list/>} />
                        <Route path='/Detail/:link/:id' element={<InforPhone />} />  
                        <Route path='/StoreInfo' element={<MainStoreInfo/>} />
                    </Routes>
               
                </HelmetProvider>             
            </div> 
                  <div className='CommunicationSetting'>  
                      <CommunicationSettings/>     
                  </div> 
              </ParentContext>          
             
              
        </Style>
    );
}

const Style = styled.div`
  
    .CommunicationSeting{
           
    }

`;
const Navigations = styled.div`
      


`
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
