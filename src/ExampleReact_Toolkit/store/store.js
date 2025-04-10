
import { configureStore } from "@reduxjs/toolkit";

import todoReducer from '../todoSlice/todoSlice';


const store = configureStore({
    reducer : {
        todos: todoReducer 
    }
})

export default store;