import { createSlice } from '@reduxjs/toolkit';

import {
    getUserCart,
    addProductToCart,
    incrementProductQuantity, 
    decrementProductQuantity,
    deleteProductFromCart } from './cartActions';  


const initialState = {
    loading: false,
    error: null,
    actionLoading: null,
    actionError: null,
    userCart: null,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        clearActionState: (state) => {
            state.actionError = null;
            state.actionLoading = null;
        }
    },
    extraReducers: {
        [getUserCart.pending]: (state) => {
            state.loading = true;
            state.error = null;
            state.userCart = null;
        },
        [getUserCart.fulfilled]: (state, action) => {
            state.loading = false;
            state.error = null;
            state.userCart = action.payload.data;
        },
        [getUserCart.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error.message;
            state.userCart = null;
        },

        [addProductToCart.pending]: (state, action) => {
            state.actionLoading = action.meta.arg;
            state.actionError = null;
        },
        [addProductToCart.fulfilled]: (state, action) => {
            state.actionLoading = null;
            state.actionError = null;
            if (state.userCart)
                state.userCart.push(action.payload);
            else
                state.userCart = [ action.payload ];
        },
        [addProductToCart.rejected]: (state, action) => {
            state.actionLoading = null;
            state.actionError = { id: action.meta.arg, message: action.error.message };
        },

        [incrementProductQuantity.pending]: (state, action) => {
            state.actionLoading = action.meta.arg;
            state.actionError = null;
        },
        [incrementProductQuantity.fulfilled]: (state, action) => {
            state.actionLoading = null;
            state.actionError = null;
            const currentProductIndex = state.userCart.findIndex(product => product.id === action.payload.id);
            state.userCart[currentProductIndex] = action.payload;
        },
        [incrementProductQuantity.rejected]: (state, action) => {
            state.actionLoading = null;
            state.actionError = { id: action.meta.arg, message: action.error.message };
        },

        [decrementProductQuantity.pending]: (state, action) => {
            state.actionLoading = action.meta.arg;
            state.actionError = null;
        },
        [decrementProductQuantity.fulfilled]: (state, action) => {
            state.actionLoading = null;
            state.actionError = null;
            const currentProductIndex = state.userCart.findIndex(product => product.id === action.payload.id);
            state.userCart[currentProductIndex] = action.payload;
        },
        [decrementProductQuantity.rejected]: (state, action) => {
            state.actionLoading = null;
            state.actionError = { id: action.meta.arg, message: action.error.message };
        },

        [deleteProductFromCart.pending]: (state, action) => {
            state.actionLoading = action.meta.arg;
            state.actionError = null;
        },
        [deleteProductFromCart.fulfilled]: (state, action) => {
            state.actionLoading = null;
            state.actionError = null;
            state.userCart = state.userCart.filter(product => product.id !== action.payload.id);
        },
        [deleteProductFromCart.rejected]: (state, action) => {
            state.actionLoading = null;
            state.actionError = { id: action.meta.arg, message: action.error.message };
        },
    }
});

export const { clearActionState } = cartSlice.actions;
export default cartSlice.reducer;