import { createSlice } from "@reduxjs/toolkit"



const initalState = {
    item: [],
    editId: null,
    totalPrice: 0,  
    indexCart: null // chỉ số của giỏ hàng 
}

const createCartSlice = createSlice({
        name: 'cart',
        initialState: initalState,
        reducers: {
                addCart(state , action){
                        
                }
        }
})

