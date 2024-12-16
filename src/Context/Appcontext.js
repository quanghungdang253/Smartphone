    // import React, { Children, useEffect, useState } from 'react';
    // import { createContext } from 'react';
    // import { useContext } from 'react';

    // //tạo một context Object để chia sẽ dữ liệu giữa các component với giá trị mặc định là các object 
    // export const Appcontext = createContext({}) // ở đây createContext nhận vào một giá trị mặc định createContext(Giá trị mặc định)
    
    // // tạo một hàm Privider để bao bọc và tất cả các component bên trong provider để các component con bên trong có thể truy xuất được dữ liệu từ context

    // // ở đây các component nằm trong AppProvider sẽ được cung cấp giá trị 
    // export const AppProvider = ({children}) => {
    //             const [data, setData] = useState([]);
    //         const [custom_color, setCustomcolor] = useState(false);

    //             const Toggle = () => {
    //                         setCustomcolor((custom_color) => !custom_color);
    //             }
    //         // <Appcontext.Provider> là nơi giá trị context được cung cấp 
    //         // tất cả các component con nằm trong sẽ truy cập được giá trị 
    //         // ở đây Appcontext.Provider value={{custom_color, Toggle} đang cung cấp giá trị cho context 
    //         return <Appcontext.Provider value={{custom_color, Toggle}} >  {/*Appcontext.Provider:dùng để chia sẽ dữ liệu xuống các component con */}
    //             {children}
    //         </Appcontext.Provider>
            
    // }
    // //đĩnh nghĩa một customs hook
    // // export const useTheme = () => {
    // //             return <Appcontext/>
    // // }



//     import React, { useState, createEffect, createContext, useEffect } from 'react';

// // Tạo một Context Object
// export const Appcontext = createContext({});

// // Tạo Provider để bao bọc các component con
// export const AppProvider = ({ children }) => {
//     // Lấy trạng thái theme từ localStorage hoặc đặt mặc định là false
//     let data = null;
//     useEffect(() => {
//         const boolean = () => {
//             const savedTheme = localStorage.getItem('theme');
//             return savedTheme === 'true'; // Convert string to boolean
//         }
//        data = boolean();
       
//     },[])
//     const [custom_color, setCustomcolor] = useState(data);
//         //  lấy dữ liệu từ localStorage 
     
    

//     // Toggle theme và lưu vào localStorage
//     const Toggle = () => {
//         setCustomcolor((prev) => {
//             const newTheme = !prev;
//             // thiết lập lưu trữ giá trị với key = 'theme' và value = newTheme
//             localStorage.setItem('theme', newTheme); 
//             return newTheme;
//         });
//     };

//     return (
//         <Appcontext.Provider value={{ custom_color, Toggle }}>
//             {children}
//         </Appcontext.Provider>
//     );
// };


import { createContext, useState } from "react";
import React from "react";

// 1. tạo Context api
export const Createcontext = createContext();

// Thiết lập nhà cung cấp để cung cấp data cho các component con 

export const Provider = ({children}) => {
        // khởi tạo state với giá trị ban đầu là localStores
    const [bool, setBool] = useState(() => {
        const localStorages = localStorage.getItem('theme');

            return localStorages === 'true';
    })
    const Button = () => {
            setBool((pre) => {
                    const data = !pre;
                    localStorage.setItem('theme', data);
                    return data;
            })
    }

     
    return (
            <Createcontext.Provider value={{bool,Button}}> {/*chia sẽ dữ liệu  */}
                    {children}       
            </Createcontext.Provider>
    )

}