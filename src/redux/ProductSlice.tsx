// src/redux/cartSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { FetchCart } from "../utlis/CartFetch";

const { ListCart, isLoading, isError } = FetchCart();
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: ListCart,
  },
  reducers: {
    incrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      item.quantity++;
    },
    decrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
      }
    },
  },
});

export const { incrementQuantity, decrementQuantity } = cartSlice.actions;

export default cartSlice.reducer;
