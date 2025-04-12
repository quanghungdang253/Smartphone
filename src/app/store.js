import { configureStore } from "@reduxjs/toolkit";
import reducers from "../features/cart/cartSlice";
import { saveToLocalStorage, loadFromLocalStorage  } from "./local-storage";
import formReducer from '../features/cart/cartApi';
const cartData = loadFromLocalStorage('cart'); 

const rootReducer = {
        cart: reducers,
        infoClient: formReducer
}



const store = configureStore({
      reducer : rootReducer,
     
      preloadedState: {
            cart: cartData || undefined
          }

})

store.subscribe(() => {
      saveToLocalStorage('cart', store.getState().cart);
   
   
})


export default store;