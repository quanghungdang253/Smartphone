

// import { createSlice } from "@reduxjs/toolkit";

// const counterSlice = createSlice({
//         // thực hiện định nghĩa tên reducer 
//         name:"counter",
//         // giá trị khởi đầu 
//         initialState: {value : 0},
//         reducers: {
//             "increment": (state) => {state.value += 1},
//             "decrement": (state) => {state.value -= 1},
//             "reset": (state) => {state.value = 0}
//         }
     
// })
// // + action : dùng dể thực hiện một hành động như cập nhật 

// // thực hiện xuất actions 
// export const {increment , decrement, reset} = counterSlice.actions;
// // action là chuỗi mô tả hành động 
// export default counterSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

// thực hiện định nghia để khởi tạo action và reducer
const createSlide = createSlice({
        // thực hiện định nghĩa tên của reducer 
        name : "counter",
        initialState: {value : 0},
        reducers: {
            "increment": (state => state.value += 1),
            "decrement": (state => state.value -= 1),
            "reset": (state => state.value = 0)
        }
})

export const {increment,decrement,reset} = createSlice.actions;
export default {increment}
