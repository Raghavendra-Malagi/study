import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "Cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItems: (store, action) => {
      store.items.push(action.payload);
    },
    removeItems: (store, action) => {
      store.items.pop();
    },
    clearItems: (store, action) => {
      store.items.length = 0;
    },
  },
});

export const { addItems, removeItems, clearItems } = cartSlice.actions;
export default cartSlice.reducer;
