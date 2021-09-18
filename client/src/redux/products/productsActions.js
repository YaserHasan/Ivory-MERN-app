import { createAsyncThunk } from '@reduxjs/toolkit';

import * as ProductsService from '../../services/productsService';


export const getCategories = createAsyncThunk(
    'products/getCategories',
    ProductsService.getCategories,
);

export const getCategoryProducts = createAsyncThunk(
    'products/getCategoryProducts',
    ProductsService.getCategoryProducts,
);

export const getProductDetails = createAsyncThunk(
    'products/getProductDetails',
    ProductsService.getProductDetails,
);

export const getFeaturedProducts = createAsyncThunk(
    'products/getFeaturedProducts',
    ProductsService.getFeaturedProducts,
);

export const getMostPopularProducts = createAsyncThunk(
    'products/getMostPopularProducts',
    ProductsService.getMostPopularProducts,
);
