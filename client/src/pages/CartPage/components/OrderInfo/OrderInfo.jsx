import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { createOrderFromCart } from '../../../../redux/orders/ordersActions';
import { formatPrice } from '../../../../utils/formatUtils';
import * as Styles from './OrderInfoStyles';
import Divider from "../../../../components/Divider";
import ErrorMessage from "../../../../components/ErrorMessage";
import Button from "../../../../components/Button";
import Loading from '../../../../components/Loading';


function OrderInfo() {
    const { userCart } = useSelector(state => state.cart);
    const { actionLoading: loading, actionError: error } = useSelector(state => state.orders);
    const dispatch = useDispatch();

    const totalPrice = userCart.reduce((currentTotal, product) => {
        return currentTotal + product.productTotalPrice;
    }, 0);
    const subTotalPrice = totalPrice * 0.83;
    const taxesPrice = totalPrice * 0.17;

    async function checkout() {
        dispatch(createOrderFromCart());
    }

    return (
        <Styles.Root>
            <Styles.OrderInfoCard>
                <h3>Order Summary</h3>

                <Styles.OrderInfoRow>
                    <p>Subtotal</p>
                    <p dangerouslySetInnerHTML={{__html: formatPrice(subTotalPrice)}}></p>
                </Styles.OrderInfoRow>

                <Styles.OrderInfoRow>
                    <p>Taxes</p>
                    <p dangerouslySetInnerHTML={{__html: formatPrice(taxesPrice)}}></p>
                </Styles.OrderInfoRow>

                <Divider />
                
                <Styles.OrderInfoRow>
                    <p>Total</p>
                    <p className="p-large" dangerouslySetInnerHTML={{__html: formatPrice(totalPrice)}}></p>
                </Styles.OrderInfoRow>

                
                {loading && <Loading med />}
                {!loading && <Button small disabled={loading} onClick={checkout}>CHECKOUT</Button>}
                {(error && !loading) && <ErrorMessage>{error}</ErrorMessage>}
            </Styles.OrderInfoCard>
        </Styles.Root>
    );
}

export default OrderInfo;
