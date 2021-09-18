import { createSlice } from '@reduxjs/toolkit';

import {
    getCategories,
    getCategoryProducts,
    getProductDetails,
    getFeaturedProducts,
    getMostPopularProducts } from './productsActions';


const initialState = {
    loading: false,
    error: null,
    categories: null,
    categoryProducts: null,
    selectedProduct: null,
    featuredProducts: null,
    mostPopularProducts: null,
};

const productsSlice = createSlice({
    name: 'products',
    initialState: initialState,
    extraReducers: {
        [getCategories.pending]: (state) => {
            state.loading = true;
            state.error = null;
            state.categories = null;
        },
        [getCategories.fulfilled]: (state, action) => {
            state.loading = false;
            state.error = null;
            state.categories = action.payload.data;
        },
        [getCategories.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error.message;
            state.categories = null;
        },

        [getCategoryProducts.pending]: (state) => {
            state.loading = true;
            state.error = null;
            state.categoryProducts = null;
        },
        [getCategoryProducts.fulfilled]: (state, action) => {
            state.loading = false;
            state.error = null;
            state.categoryProducts = action.payload.data;
        },
        [getCategoryProducts.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error.message;
            state.categoryProducts = null;
        },

        [getProductDetails.pending]: (state) => {
            state.loading = true;
            state.error = null;
            state.selectedProduct = null;
        },
        [getProductDetails.fulfilled]: (state, action) => {
            state.loading = false;
            state.error = null;
            state.selectedProduct = action.payload.data;
        },
        [getProductDetails.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error.message;
            state.selectedProduct = null;
        },

        [getFeaturedProducts.pending]: (state) => {
            state.loading = true;
            state.error = null;
            state.featuredProducts = null;
        },
        [getFeaturedProducts.fulfilled]: (state, action) => {
            state.loading = false;
            state.error = null;
            state.featuredProducts = action.payload.data;
        },
        [getFeaturedProducts.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error.message;
            state.featuredProducts = null;
        },

        [getMostPopularProducts.pending]: (state) => {
            state.loading = true;
            state.error = null;
            state.mostPopularProducts = null;
        },
        [getMostPopularProducts.fulfilled]: (state, action) => {
            state.loading = false;
            state.error = null;
            state.mostPopularProducts = action.payload.data;
        },
        [getMostPopularProducts.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error.message;
            state.mostPopularProducts = null;
        },
    },
});


export default productsSlice.reducer;