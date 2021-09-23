import { createAsyncThunk } from '@reduxjs/toolkit'

import { getUserData } from '../auth/authActions';
import * as OrdersService from '../../services/ordersService';

export const createOrderFromCart = createAsyncThunk(
    'orders/createOrderFromCart',
    async (_, { dispatch }) => {
        // to update the auth state
        await dispatch(getUserData());
        return await OrdersService.createOrderFromCart();
    }
);

export const getUserOrders = createAsyncThunk(
    'orders/getUserOrders',
    async (_, { dispatch }) => {
        // to update the auth state
        await dispatch(getUserData());
        return await OrdersService.getUserOrders();
    }
);