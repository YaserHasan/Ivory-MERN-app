import * as RequestUtils from '../utils/requestUtils';


export async function getCategories() {
    return await RequestUtils.get('/api/products/categories');
}

export async function getCategoryProducts(categoryID) {
    return await RequestUtils.get(`/api/products/categories/${categoryID}`);
}

export async function getProductDetails(productID) {
    return await RequestUtils.get(`/api/products/${productID}`);
}

export async function getFeaturedProducts() {
    return await RequestUtils.get('/api/products/featured');
}

export async function getMostPopularProducts() {
    return await RequestUtils.get('/api/products/mostPopular');
}