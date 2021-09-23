import * as RequestUtils from '../utils/requestUtils';


export async function getUserOrders() {
    return await RequestUtils.get('/api/orders');
}

export async function createOrderFromCart() {
    return await RequestUtils.post(`/api/orders`);
}