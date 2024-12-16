import React, { useState } from 'react';
import { createContext } from 'react';
import { useContext } from 'react';

export const Context = createContext();

export function ParentContext({children}) { 
       
        const [theme, setTheme] = useState(() => {   // khởi tạo giá trị bạn đầu 
                        let getdata = localStorage.getItem('theme'); // lấy giá trị từ key 
                        return getdata === 'true';
                       
        });
        const Dark_Bright = () => {
                setTheme((pre) => {
                        const setthemes = !pre;
                                localStorage.setItem('theme', setthemes); // thiết lập giá trị 
                        return setthemes;
                });
        }
    return (
        <Context.Provider value={{theme,Dark_Bright}}>
                                 {children}
        </Context.Provider>
       
    );
}
export const useValue = () => {  // thiết lập một custom hook 
        return  useContext(Context);
                
}


