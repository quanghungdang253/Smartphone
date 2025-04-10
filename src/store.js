// import {  createStore } from "redux";
// import rootReducer from "./reducer";


// const store = createStore(rootReducer);


// export default store;


import { createStore } from "redux";

import rootReducer from "./reducer";


const loadState = () => {
        try {
            const getData = localStorage.getItem('value');
            return getData ? JSON.parse(getData) : undefined;
        }
        catch(error) {
             console.log("lỗi khi lấy dữ liệu "+error);
             return error;
        }
}

const store = createStore(rootReducer, loadState()); 

// thực hiện đăng ký 1 hàm theo dõi sự thay đổi của state 
// ở đây để theo dõi ta sử dụng thuộc tính subscribe
// + thuộc tính này sẽ chạy khi giá trị state của store có sự thay đổi 
store.subscribe(() => {
        const fetchState = store.getState();
        localStorage.setItem('value', JSON.stringify(fetchState));
})

export default store;