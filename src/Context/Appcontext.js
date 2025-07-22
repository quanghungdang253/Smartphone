
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