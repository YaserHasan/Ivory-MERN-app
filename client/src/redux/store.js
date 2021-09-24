import { configureStore } from '@reduxjs/toolkit';

import authReducer from './auth/authSlice';
import productsReducer from './products/productsSlice';
import cartReducer from './cart/cartSlice';
import ordersReducer from './orders/ordersSlice';


const store = configureStore({
    devTools: process.env.NODE_ENV !== 'production',
    reducer: {
        auth: authReducer,
        products: productsReducer,
        cart: cartReducer,
        orders: ordersReducer,
    }
});

export default store;