import { createAsyncThunk } from '@reduxjs/toolkit'

import { getUserData } from '../auth/authActions';
import * as CartService from '../../services/cartService';


export const getUserCart = createAsyncThunk(
    'cart/getUserCart',
    async (_, { dispatch }) => {
        // to update the auth state
        await dispatch(getUserData());
        return await CartService.getUserCart();
    }
);

export const addProductToCart = createAsyncThunk(
    'cart/addProductToCart',
    async (productID, { dispatch }) => {
        // to update the auth state
        await dispatch(getUserData());
        return await CartService.addProductToCart(productID);
    }
);

export const incrementProductQuantity = createAsyncThunk(
    'cart/incrementProductQuantity',
    async (productID, { dispatch }) => {
        // to update the auth state
        await dispatch(getUserData());
        return await CartService.incrementProductQuantity(productID);
    }
);

export const decrementProductQuantity = createAsyncThunk(
    'cart/decrementProductQuantity',
    async (productID, { dispatch }) => {
        // to update the auth state
        await dispatch(getUserData());
        return await CartService.decrementProductQuantity(productID);
    }
);

export const isProductInCart = createAsyncThunk(
    'cart/isProductInCart',
    async (productID, { dispatch }) => {
        // to update the auth state
        await dispatch(getUserData());
        return await CartService.isProductInCart(productID);
    }
);

export const deleteProductFromCart = createAsyncThunk(
    'cart/deleteProductFromCart',
    async (productID, { dispatch }) => {
        // to update the auth state
        await dispatch(getUserData());
        return await CartService.deleteProductFromCart(productID);
    }
);