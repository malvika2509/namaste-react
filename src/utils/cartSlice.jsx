import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducer: {
    addItem: (state, action) => {
      // mutating our state
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.items.pop();
    },
    clearCart: () => {
      state.items.length = 0; // []
    },
  },
});
export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
