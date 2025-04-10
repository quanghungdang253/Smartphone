


//thiết lập todo slice
// + giúp tạo reducer và action cùng 1 lúc mà k cần viết thủ công 

import { createSlice } from "@reduxjs/toolkit";



const todoSlice = createSlice({
    name: 'todos',  // tên của slice , hoặc tên của phần module mà ta đang quản lý trong state 
    initialState: [], // thiết lập giá trị khởi tạo ban đầu 
    reducers: {
        addTodo(state,action) {
            // ở đây nhận vào hai tham số là : 
            // + state : giá trị hiện tại trong store 
            // + action: ;mô tả hành động để cập nhật và dữ liệu bổ sunhg 
            state.push(action.payload)
        },
        removeTodo(state,action) {
                state.splice(action.payload)
        }
    }
});


const {actions, reducer} = todoSlice;   // tiến hành tự động tạo action create và reducer 


export const {addTodo , removeTodo} = actions;



export default reducer;


// export const {addTodo,removeTodo} = actions;