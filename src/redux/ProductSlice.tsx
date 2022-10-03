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
      // if (state.numberCart == 0) {
      //   let cart = {
      //     id: action.payload.id,
      //     quantity: 1,
      //     name: action.payload.name,
      //     image: action.payload.image,
      //     price: action.payload.price,
      //   };
      //   state.Carts.push(cart);
      //   state.numberCart += 1;
      // }
      const itemInCart = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
  },
});

export const { AddToCart } = cartSlice.actions;

export default cartSlice.reducer;
