// import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';
// import ShowInfo from '../../Common/Listproduct/ShowInfo';
// import { Suspense, lazy } from 'react';
// import useHandleApi from '../../../Api/useHandleApi';
// import categoryComponentsConfig from './services/categoryComponentsConfig';
// function Products_list(props) {  

//   const params = useParams();
//   let namephone = params.namephone;

// console.log(namephone);
// const [data, setData] = useHandleApi(namephone);

// const Vd1 = lazy(() => import('./components/Vd1'));
// const Vd2 = lazy(() => import('./components/Vd2'));
// const Vd3 = lazy(() => import('./components/Vd3'));
// const ShowInfo = lazy(() => import('../../Common/Listproduct/ShowInfo'));

// const renderComponentsByCategory = (category) => {
//     const components = categoryComponentsConfig[category];

//     if (!components) {
//       return <div>Danh mục không tồn tại</div>;
//     }

//     return components.map((Component, index) => (
//       <Suspense key={index} fallback={<div>Loading...</div>}>
//         {/* Kiểm tra nếu component là ShowInfo, truyền thêm props */}
//         {Component === ShowInfo ? (
//           <Component key={index} namephone={data} enpoint={namephone} {...props} />
//         ) : (
//           <Component key={index} {...props} />
//         )}
//       </Suspense>
//     ));
//   };

  
//   return (
//     <div>
//       {!namephone ? (
//         <h1>Chào mừng bạn!</h1>
//       ) : (
//         <div>
//           <h2>Danh mục: {namephone}</h2>
//           {renderComponentsByCategory(namephone)}
//         </div>
//       )}
//     </div>
//   );
// }


// export default Products_list;
// // HOC với Lazy Loading
// // const withLogger = (WrappedComponents, category) => {
// //     return (props) => {
// //       console.log(`Rendering components for category: ${category}`);
// //       return (
// //         <div>
// //           {WrappedComponents.map((Component, index) => (
// //             <Suspense key={index} fallback={<div>Loading...</div>}>
// //               <Component {...props} />
// //             </Suspense>
// //           ))}
// //         </div>
// //       );
// //     };
// //   };

// //   const SamsungWithLogger = withLogger(
// //     [Vd1, Vd2, ShowInfo(namephone), Vd3],
// //     "samsung"
// //   );
  


// //   const CategoryDisplay = ({ category }) => {
// //     const componentsMap = {
// //       samsung: <SamsungWithLogger />,
// //     //   oppo: <OppoWithLogger />,
// //     };
  
// //     return (
// //       <div>
// //         <h2>Danh mục: {category}</h2>
// //         {componentsMap[category] || <div>Danh mục không tồn tại</div>}
// //       </div>
// //     );
// //   };


// // console.log(namephone);
// //     return (

// //         <div>
// //         {console.log(namephone)}
// //             {!namephone ? (
              
// //                 <h1> xin chào </h1>
           
// //             ):
// //             (
// //                 <CategoryDisplay category={namephone} />
                
// //             )
            
// //             }
               
// //         </div>
// //     );
// // }

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ShowInfo from '../../Common/Listproduct/ShowInfo';
import useHandleApi from '../../../Api/useHandleApi';
import categoryComponentsConfig from './services/HandleComponent';
import Productads from '../Home/Components/Productads';
import RenderbyCategory from './services/RenderbyCategory';
import styled from 'styled-components';
import { useValue } from '../../../Context/Settings/Theme/ThemeContext';
import { Helmet } from 'react-helmet';
function Products_list(props) {  
  const params = useParams();
  let namephone = params.namephone;
 const { theme } = useValue();
  const [data, loading] = useHandleApi(namephone);

 if(!data){
            <p> đang lấy data </p>
 }
   {/* cú pháp desstructuring  RenderbyCategory*/}

       {/* cách 1 : render theo hàm javascript thông thường */}
        {/* {RenderbyCategory({namephone, data, ...props}) }  */}
        {/* cách 2: render theo cú pháp JSX  */}
        {/* <RenderbyCategory  {...{namephone,data,...props}} /> */}
        {/* cách 3: render theo jsx hay dùng */}
  return (
    <Product> 
      {!data ? (
                    <h1>Chào mừng bạn!</h1>
      ) : (
        <div>
          <RenderbyCategory namephone={namephone} data={data} {...props}/>
        </div>
      )}
    </Product>
  );
}
const Product = styled.div `
      


`

export default Products_list;




// const Vd1 = require('./components/SliceImage').default;
  // const Vd2 = require('./components/Vd2').default;
  // const Vd3 = require('./components/Vd3').default;


  // // Hàm render component bằng switch case
  // const renderComponentByCategory = (category) => {
  //   console.log(category);
  //   switch (category) {
  //     case 'samsung':
  //       return (
  //         <>  {/* thẻ frame  */} 
  //           <Vd1 {...props} />
  //           <Vd2 {...props} />
  //           <Productads/>
  //           <ShowInfo namephone={data} enpoint={namephone} {...props} />
  //           <Vd3 {...props} />
  //           <h1>fwefwjopfwefwioijijjifeijk  fefheuh</h1>
  //         </>
  //       );
  //     case 'oppo':
  //       return (  
  //         <>
  //           <Vd1 {...props} />
  //           <ShowInfo namephone={data} enpoint={namephone} {...props} />
  //          <h1> đầy là dòng điện thoại vivo đắt lắm </h1>
  //         </>
  //       );
  //     case 'xiaomi':
  //       return (
  //         <>
  //           <Vd2 {...props} />
  //           <Vd3 {...props} />
  //         </>
  //       );
  //     default:
       
  //       return   <ShowInfo namephone={data} enpoint={namephone} {...props} />
  //   }
  // };



// import React, { Suspense } from 'react';
// import { useParams } from 'react-router-dom';
// import useHandleApi from '../../../Api/useHandleApi';
// import Loading from '../../Common/components/Loading';

// // Lazy load components
// const Vd1 = React.lazy(() => import('./components/SliceImage'));
// const Vd2 = React.lazy(() => import('./components/Vd2'));
// const Vd3 = React.lazy(() => import('./components/Vd3'));
// const Productads = React.lazy(() => import('../Home/Components/Productads'));
// const ShowInfo = React.lazy(() => import('../../Common/Listproduct/ShowInfo'));

// function Products_list(props) {
//   const params = useParams();
//   let namephone = params.namephone;

//   const [data, loading] = useHandleApi(namephone);

//   // Display a loading message if data is still loading
//   if (loading) {
//     return <h1>Đang tải...</h1>;
//   }

//   // Function to render the component based on category
//   const renderComponentByCategory = (category) => {
//     switch (category) {
//       case 'samsung':
//         return (
//           <>
//             <Suspense fallback={<Loading />}>
//               <Vd1 {...props} />
//               <Vd2 {...props} />
//               <Productads />
//               <ShowInfo namephone={data} enpoint={namephone} {...props} />
//               <Vd3 {...props} />
//             </Suspense>
//           </>
//         );
//       case 'oppo':
//         return (
//           <>
//             <Suspense fallback={<Loading />}>
//               <Vd1 {...props} />
//               <ShowInfo namephone={data} enpoint={namephone} {...props} />
//             </Suspense>
//             <h1>Đây là dòng điện thoại Oppo đắt lắm</h1>
//           </>
//         );
//       case 'xiaomi':
//         return (
//           <>
//             <Suspense fallback={<Loading />}>
//               <Vd2 {...props} />
//               <Vd3 {...props} />
//             </Suspense>
//           </>
//         );
//       default:
//         return (
//           <Suspense fallback={<Loading />}>
//             <ShowInfo namephone={data} enpoint={namephone} {...props} />
//           </Suspense>
//         );
//     }
//   };

//   return (
//     <div>
//       {!data ? (
//         <h1>Chào mừng bạn!</h1>
//       ) : (
//         <div>{renderComponentByCategory(namephone)}</div>
//       )}
//     </div>
//   );
// }

// export default Products_list;




















// import React, { Suspense, lazy, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import useHandleApi from '../../../Api/useHandleApi';

// const Vd1 = lazy(() => import('./components/Vd1'));
// const Vd2 = lazy(() => import('./components/Vd2'));
// const Vd3 = lazy(() => import('./components/Vd3'));
// const ShowInfo = lazy(() => import('../../Common/Listproduct/ShowInfo'));

// function Products_list(props) {  
//   const params = useParams();
//   let namephone = params.namephone;

//   const [data, loading] = useHandleApi(namephone);

//   const renderComponentByCategory = (category) => {
//     const componentMap = {
//       samsung: [<Vd1 {...props} />, <Vd2 {...props} />, <ShowInfo namephone={namephone} {...props} />, <Vd3 {...props} />],
//       iphone: [<Vd1 {...props} />, <ShowInfo namephone={namephone} {...props} />],
//       xiaomi: [<Vd2 {...props} />, <Vd3 {...props} />],
//     };

//     return componentMap[category] || [<ShowInfo namephone={namephone} {...props} />];
//   };

//   return (
//     <div>
//       {!namephone ? (
//         <h1>Chào mừng bạn!</h1>
//       ) : (
//         <div>
//           <h2>Danh mục: {namephone}</h2>
//           <Suspense fallback={<h1> đang tải </h1>}>
//             {renderComponentByCategory(namephone).map((Component, index) => (
//                        <React.Fragment key={index}>{Component}</React.Fragment>
//             ))}
//           </Suspense>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Products_list;
