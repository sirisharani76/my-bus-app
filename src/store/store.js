import { configureStore } from "@reduxjs/toolkit";
import cartSlice from '../redux/slice/cartSlice';

const store = configureStore({
  reducer: {
    bus: cartSlice,
  },
});

export default store;