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
    selectedCategory: null,
    selectedProduct: null,
    featuredProducts: null,
    mostPopularProducts: null,
};

const productsSlice = createSlice({
    name: 'products',
    initialState: initialState,
    reducers: {
        clearSelectedCategory: (state) => {
            state.loading = false;
            state.error = null;
            state.selectedCategory = null;
        },
        clearSelectedProduct: (state) => {
            state.loading = false;
            state.error = null;
            state.selectedProduct = null;
        },
    },
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
            state.selectedCategory = null;
        },
        [getCategoryProducts.fulfilled]: (state, action) => {
            state.loading = false;
            state.error = null;
            state.selectedCategory = action.payload.data;
        },
        [getCategoryProducts.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error.message;
            state.selectedCategory = null;
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
export const { clearSelectedCategory, clearSelectedProduct } = productsSlice.actions;