//      import { createSlice } from "@reduxjs/toolkit";
// import classNames from "classnames";


//      const counterSlice = createSlice({
//                name: 'counter',
//                initialState: [],
//                     reducers: {
//                          // trong đây ta có thể định các hành động có thể xảy ra 
//                          increase(state,action) {
//                               const value = [...state]; // thực hiện clone mảng mới tránh lỗi tham chiếu 
//                                    value.push(action.payload);
                              
//                               return value;
//                          },
//                          decrease(state,action) {
//                               return state - 1;   
//                          }
//                     }
//      });

//      const {actions , reducer} = counterSlice;  // ở đây actions là thu
//      export const {increase , decrease} = actions;
//      // name export
//      export default reducer; // default export 


//      const name = () => {
//           return {
//                className: "xin chào "
//           }
//      }



// 1 thực hiện tạo action và reducer cùng 1 lúc với createSlice



import { createSlice } from "@reduxjs/toolkit";
import {v4 as uuidv4} from 'uuid';
// thực hiện định nghĩa một hàm tự động tạo action và reducer 
let initalState = {
    item : [
        { 
            id: uuidv4(),
            fullname: "Quang Hùng",
            age: 19,
            job: "Software Engineer"
        },
        {
            id: uuidv4(),
            fullname: "Quang Hùng",
            age: 19,
            job: "Software Engineer"
        }
    ],
    editId: null
   
}
const handleCreateSlice = createSlice({ 
    name: "count",
    initialState: initalState,
    reducers: {
        // hiện tại tôi đang định nghĩa hai reducer 
        increase(state, action) {
            const preData = [...state.item];
          
            const newId = preData.length > 0 ? preData[preData.length - 1].id + 1 : 1;
          
            const newItem = { ...action.payload, id: newId };
          
            preData.push(newItem);
          
            return {
              ...state,
              item: preData
            };
          },
          
        deletes(state,action){
                  
                    const filter = state.item.filter((Item) =>{
                   
                 return  Item.id !== action.payload;
                    
                     
                    })
          return {
            ...state,
            item: filter
          }
              
        },
        startEdit(state , action){
                state.editId = action.payload;
        },
        cancelEdit(state, action){
                state.editId = null;
        },
     
        updateEdit(state , action){

       const index = state.item.findIndex((Item) => Item.id === state.editId);
   alert(index);
       // ở đây không tìm thấy gì sẽ trả về -1
       if(index !== -1){
       
                state.item[index] = action.payload;
                state.editId = null;
       }
            
            


        }
          

        
    }
})

// thực hiện lấy action và redecer vừa mới tạo 
const {actions , reducer } = handleCreateSlice;
 export const {increase , deletes ,startEdit, cancelEdit, updateEdit } = actions;


 export default reducer;


