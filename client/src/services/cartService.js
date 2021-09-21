import * as RequestUtils from '../utils/requestUtils';


export async function getUserCart() {
    return await RequestUtils.get('/api/cart');
}

export async function addProductToCart(productID) {
    return await RequestUtils.post(`/api/cart/${productID}`);
}

export async function incrementProductQuantity(productID) {
    return await RequestUtils.put(`/api/cart/incrementQuantity/${productID}`);
}

export async function decrementProductQuantity(productID) {
    return await RequestUtils.put(`/api/cart/decrementQuantity/${productID}`);
}

export async function isProductInCart(productID) {
    return await RequestUtils.get(`/api/cart/${productID}`);
}

export async function deleteProductFromCart(productID) {
    return await RequestUtils._delete(`/api/cart/${productID}`);
}