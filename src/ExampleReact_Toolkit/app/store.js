
// import { configureStore } from "@reduxjs/toolkit";



// import todoReducer from '../Counter/counterSlice';


// const rootReducer = {
//     counter: todoReducer
// }
// const store = configureStore({ // khởi tạo store cho redux 
//     reducer : rootReducer
            
    
// })


// export default store;


// tiến hành tạo store từ reducer 



import { configureStore } from "@reduxjs/toolkit";
import todoReducer from '../Counter/counterSlice';
const rootReducer = {
    count: todoReducer // ở đây count là tên của phần state trong reducer 
}
const store = configureStore({      
        reducer : rootReducer
})


export default store;