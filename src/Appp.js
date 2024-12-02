// // import React from 'react';
// import Vd1 from './vd1';
// import { useState } from 'react';
// import './Apps.css';
// // Theme: Dark
// function Appp(props) {
//     const [theme, setTheme] = useState("dark")
//     console.log(theme);
//     const toggleTheme = () => {
//             setTheme(theme === "dark" ? 'light' : 'dark');
//     }
//     return (
//         <div style={{padding: 20}}>
//                 <button onClick={() => toggleTheme()}> Toggle theme </button>
//                 <Vd1 theme={theme}/>
//         </div>
//     );
// }

// export default Appp
  
// import React from "react";

// // Các component sản phẩm
// const SamsungComponent = () => (
//   <div>
//     <h3>Samsung Galaxy S23</h3>
//     <p>Điện thoại cao cấp với màn hình AMOLED.</p>
//   </div>
// );

// const iPhoneComponent = () => (
//   <div>
//     <h3>iPhone 15 Pro</h3>
//     <p>Điện thoại flagship của Apple với camera 48MP.</p>
//   </div>
// );

// const OthersComponent = () => (
//   <div>
//     <h3>Điện thoại khác</h3>
//     <p>Các điện thoại không thuộc các danh mục trên.</p>
//   </div>
// );

// // HOC thêm chức năng ghi log
// const withLogger = (WrappedComponent, category) => {
//   return (props) => {
//     console.log(`Rendering component for category: ${category}`);
//     // ta bổ dung thêm các chức năng ở đây 
//     return <WrappedComponent {...props} />;
//   };
// };

// // Sử dụng HOC để bọc các component
// const SamsungWithLogger = withLogger(SamsungComponent, "Samsung");
// const iPhoneWithLogger = withLogger(iPhoneComponent, "iPhone");
// const OthersWithLogger = withLogger(OthersComponent, "Others");

// // Định nghĩa đối tượng componentsMap với HOCs
// const componentsMap = {
//   Samsung: <SamsungWithLogger />,
//   iPhone: <iPhoneWithLogger />,
//   Others: <OthersWithLogger />,
// };

// // Component hiển thị danh mục
// const CategoryDisplay = ({ category }) => {
//   const component = componentsMap[category] || componentsMap["Others"];
//   return (
//     <div>
//       <h2> Danh mục: {category}</h2>
//       {component}
//     </div>
//   );
// };

// // App
// const App = () => {
//   return (
//     <div>
//       <CategoryDisplay category="Samsung" />
//       <CategoryDisplay category="iPhone" />
//       <CategoryDisplay category="Others" />
//     </div>
//   );
// };

// export default App;

// import React from 'react';



// const Samsungs = () => {   // {name} : nghĩa là props.name
//                 <h1> Điện thoại Samsung </h1>
// }
// const OPPO = () => {   // {name} : nghĩa là props.name
//                 <h1> Điện thoại OPPO  </h1>
// }
// const Xiomio = () => {   // {name} : nghĩa là props.name
//                 <h1> Điện thoại Xiamio </h1>
// }


// const Widroid = (Component , index) => {   // truyền data xuống cho <Component {...props} />
//         return(props) => {
//                 return <Component {...props} />
//         }
// }

//   // định nghĩa 1 hàm hiển thị danh mục 
//   const Samsung = Widroid(Samsung, "samsung");
// const Maps = {      
//         Samsung: <Samsungs/>
//         oppo: <OPPO/>
//         xiamio: <Xiomio/>
// }

//   const Display = ({category}) => {
//           let component = Map[category] || Maps["xiamio"];

//           return (
//                  <div>   
//                                 <h2> Danh mục {category}</h2>
//                                 {component}
//                </div>

//           )
//   }


// //tạo HOC



// function Appp(props) {
//     return (
//          <Display category="samsung" />
//     );
// }

// export default Appp;



import React from 'react';
import  { useReducer } from 'react';

    // Định nghĩa reducer
// ở đây nhận vào hai tham số state : là trạng thái hiện tại của ứng dụng 
// action : là một đối tượng mô tả hành động thực hiện . 
    function reducer(state, action) {  
        switch (action.type) {  // kiếm tra thuôc tính type trong action
          case 'increment':
            return { count: state.count + 1 };
          case 'decrement':
            return { count: state.count - 1 };
          case 'reset':
            return { count: 0 };
          default:
            throw new Error('Unknown action');
        }
      }
function Appp(props) {


    
   
      const initialState = { count: 0 };
      const [state, dispatch] = useReducer(reducer, initialState); // reducer: nhận vào hai tham số 
    
      return (
        <div>
          <h3>Count: {state.count}</h3>
          <button onClick={() => dispatch({ type: 'increment' })}>+</button>
          <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
          <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
        </div>
      );
    }
    
  
    


export default Appp;