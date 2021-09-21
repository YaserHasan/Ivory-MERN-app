import { configureStore } from '@reduxjs/toolkit';

import authReducer from './auth/authSlice';
import productsReducer from './products/productsSlice';
import cartReducer from './cart/cartSlice';


const store = configureStore({
    reducer: {
        auth: authReducer,
        products: productsReducer,
        cart: cartReducer,
    }
});

export default store;