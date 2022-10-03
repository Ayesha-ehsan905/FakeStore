import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./ProductSlice";
const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});
export default store;
