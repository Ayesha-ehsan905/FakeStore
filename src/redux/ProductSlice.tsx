// src/redux/cartSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { useFetchCart } from "../utlis/CartFetch";

const { listCart, isLoading, isError } = useFetchCart();
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: listCart,
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
