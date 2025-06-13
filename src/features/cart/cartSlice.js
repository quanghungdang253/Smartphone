import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  item: [],
  editId: null,
  totalPrice: 0,
  indexProduct: 0, // tổng số lượng sản phẩm
  indexCart: 0     // số loại sản phẩm trong giỏ
};

const createCartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCart(state, action) {
   
      const productKey = `${action.payload.id}-${action.payload.title}-${action.payload.brand}`;
      const price = parseFloat((action.payload.price || action.payload.discount).replace(/\./g, ''));

if(isNaN(price)){
  console.warn('Giá sản phẩm không hợp lệ:', price);
  return;
}
      const findIndex = state.item.findIndex(item => item.productKey === productKey);

      if (findIndex !== -1) {
    
        state.item[findIndex].quantity += 1;
      } else {
    
        const newProduct = {
          ...action.payload,
          productKey,
          quantity: 1,
        };
        state.item.push(newProduct);
        state.indexCart += 1;
    }
  
      state.indexProduct += 1;
      state.totalPrice += price;

    
    },

    deleteCart(state, action) {
      const findItem = state.item.find(item => item.productKey === action.payload);
      if (!findItem) return;

      const price = parseFloat((findItem.price || '0').replace(/\./g, ''));
      const quantity = findItem.quantity;

      state.item = state.item.filter(item => item.productKey !== action.payload);

      state.indexCart -= 1;
      state.indexProduct -= quantity;
      state.totalPrice -= price * quantity;
    },

    increaseQuantity(state, action) {
      const index = state.item.findIndex(item => item.productKey === action.payload);
      if (index !== -1) {
        const price = parseFloat((state.item[index].price || '0').replace(/\./g, ''));
        state.item[index].quantity += 1;
        state.indexProduct += 1;
        state.totalPrice += price;
      }
    },

    decreaseQuantity(state, action) {
      const index = state.item.findIndex(item => item.productKey === action.payload);
      if (index !== -1 && state.item[index].quantity > 1) {
        const price = Number((state.item[index].price || '0').replace(/\./g, ''));
        state.item[index].quantity -= 1;
        state.indexProduct -= 1;
        
        state.totalPrice -= price;
      } else if (index !== -1) {
   
        const price = Number((state.item[index].price || '0').replace(/\./g, ''));
        state.item.splice(index, 1);
        state.indexCart -= 1;
        state.indexProduct -= 1;
        state.totalPrice -= price;
      }
    }
  }
});

const { actions, reducer } = createCartSlice;
export const { addCart, deleteCart, increaseQuantity, decreaseQuantity } = actions;
export default reducer;
