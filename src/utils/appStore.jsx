import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const appStore = configureStore({
  reducer: {
    // Add all your slices here
    cart: cartReducer,
  },
});

export default appStore;
