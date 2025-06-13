// import { configureStore } from "@reduxjs/toolkit";
// import counterSlide from "./counterSlideExample";
// //thực hiện tạo Redux store một cách dễ dàng và tự động 

// const createConfigureStore = configureStore({
//         reducer: {
//              counter: counterSlide
//         }
// })

// export default createConfigureStore;

import { configureStore } from "@reduxjs/toolkit";
 // nên đặt đúng tên phản ánh là reducer
import CounterExample from "./counterSlideExample";
// Tạo Redux store một cách dễ dàng và tự động
const storeExample = configureStore({
  reducer: {
    counter: CounterExample
  }
});

export default storeExample;
