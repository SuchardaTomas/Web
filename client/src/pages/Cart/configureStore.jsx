import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './CartItems';

export const store = configureStore({
    reducer: {
        cart: cartReducer,
    }
})