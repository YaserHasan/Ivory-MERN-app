import { createSlice } from '@reduxjs/toolkit';

import { createOrderFromCart, getUserOrders } from './ordersActions';


const initialState = {
    loading: false,
    error: null,
    actionLoading: false,
    actionError: null,
    success: false,
    userOrders: null,
};

const ordersSlice = createSlice({
    name: 'orders',
    initialState: initialState,
    reducers: {
        clearState: (state) => initialState,
        clearErrorState: (state) => {
            state.actionError = null;
        },
    },
    extraReducers: {
        [createOrderFromCart.pending]: (state) => {
            state.actionLoading = true;
            state.actionError = null;
            state.success = false;
        },
        [createOrderFromCart.fulfilled]: (state) => {
            state.actionLoading = false;
            state.actionError = null;
            state.success = true;
        },
        [createOrderFromCart.rejected]: (state, action) => {
            state.actionLoading = false;
            state.actionError = action.error.message;
            state.success = false;
        },

        [getUserOrders.pending]: (state) => {
            state.loading = true;
            state.error = null;
            state.userOrders = null;
        },
        [getUserOrders.fulfilled]: (state, action) => {
            state.loading = false;
            state.error = null;
            state.userOrders = action.payload.data;
        },
        [getUserOrders.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error.message;
            state.userOrders = null;
        },
    }
});

export default ordersSlice.reducer;
export const { clearState, clearErrorState } = ordersSlice.actions;