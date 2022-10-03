// src/redux/cartSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { useFetchProducts } from "../utlis/Product";

const initialState = {
  cart: [],

  product: [],
  numberCart: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    AddToCart: (state, action) => {
      const itemInCart = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (itemInCart) {
        itemInCart.quantity++;
        state.numberCart++;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
        state.numberCart++;
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      item.quantity++;
      state.numberCart++;
    },
    decrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item.quantity === 1) {
        item.quantity = 1;
        state.numberCart = 1;
      } else {
        item.quantity--;
        state.numberCart--;
      }
    },
    removeItem: (state, action) => {
      let quantity_ = state.cart[action.payload].quantity;
      state.numberCart = state.numberCart - quantity_;
      const removeItem = state.cart.filter(
        (item) => item.id !== action.payload
      );
      state.cart = removeItem;
    },
  },
});

export const { AddToCart, incrementQuantity, decrementQuantity, removeItem } =
  cartSlice.actions;

export default cartSlice.reducer;
