import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  cart: [],
};
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload);
    },
    removeItem(state, action) {
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increasQuantity(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decreasQuantity(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;
      if(item.quantity===0) cartSlice.caseReducers.removeItem(state,action)
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  removeItem,
  increasQuantity,
  decreasQuantity,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;

export const getCart = (state) => state.cart.cart;

export const getCurrentQuantityById = (id) => (state) =>
  state.cart.cart.find((item) => item.pizzaId === id)?.quantity ?? 0;

export const getTotalQuantity = (state) =>
  state.cart.cart.reduce((sum, item) => item.quantity + sum, 0);

export const getTotalPrice = (state) =>
  state.cart.cart.reduce((sum, item) => item.totalPrice + sum, 0);
