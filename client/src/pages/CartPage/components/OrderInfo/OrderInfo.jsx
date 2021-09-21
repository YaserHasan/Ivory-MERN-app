import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { formatPrice } from '../../../../utils/formatUtils';
import * as Styles from './OrderInfoStyles';
import Divider from "../../../../components/Divider";
import Button from "../../../../components/Button";


function OrderInfo() {
    const { userCart } = useSelector(state => state.cart);

    const totalPrice = userCart.reduce((currentTotal, product) => {
        return currentTotal + product.productTotalPrice;
    }, 0);
    const subTotalPrice = totalPrice * 0.83;
    const taxesPrice = totalPrice * 0.17;

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

                <Button small>CHECKOUT</Button>
            </Styles.OrderInfoCard>
        </Styles.Root>
    );
}

export default OrderInfo;
