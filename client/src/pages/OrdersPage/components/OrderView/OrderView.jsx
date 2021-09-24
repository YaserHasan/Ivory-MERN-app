import React from 'react';

import { formatDate, formatPrice } from '../../../../utils/formatUtils';
import * as Styles from './OrderViewStyles';
import HorizontalProductView from '../../../../components/HorizontalProductView';
import VerticalFlexList from '../../../../components/VerticalFlexList';

function OrderView(props) {
    const { order } = props;

    return (
        <Styles.Root>
            <Styles.OrderInfo>
                <Styles.OrderInfoRow>
                    <h3>Order ID:</h3>
                    <p className="p-xlarge">{order.id}</p>
                </Styles.OrderInfoRow>

                <Styles.AlignLeft>
                    <Styles.OrderInfoRow>
                        <h3>Order Date:</h3>
                        <p className="p-xlarge">{formatDate(order.date)}</p>
                    </Styles.OrderInfoRow>

                    <Styles.OrderInfoRow>
                        <h3>Order Amount:</h3>
                        <p className="p-xlarge" dangerouslySetInnerHTML={{__html: formatPrice(order.totalPrice)}}></p>
                    </Styles.OrderInfoRow>
                </Styles.AlignLeft>
            </Styles.OrderInfo>

            <VerticalFlexList>
                {order.products.map(product => (
                    <HorizontalProductView key={product.id} inOrders product={product} />
                ))}
            </VerticalFlexList>
        </Styles.Root>
    );
}

export default OrderView;
