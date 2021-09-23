import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { getUserOrders } from '../../redux/orders/ordersActions';
import { clearState } from '../../redux/orders/ordersSlice';
import * as Styles from './OrdersPageStyles';
import ErrorView from '../../components/ErrorView';
import Loading from '../../components/Loading';
import OrderView from './components/OrderView';


function OrdersPage() {
    const { loading, error, userOrders } = useSelector(state => state.orders);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUserOrders());

        return () => dispatch(clearState());
    }, []);

    return (
        <Styles.Root expand centerVertically={(loading || error)} centerHorizontally={(loading || error)}>
             {(loading && !error) && <Loading />}
            {(!loading && error) && <ErrorView errorMesasge={error} />}

            {(!loading && !error && userOrders) &&
            <>
                <h1>My Orders</h1>
                <Styles.OrdersSection>
                    {userOrders.map(order => (
                        <OrderView key={order.id} order={order} />
                    ))}
                </Styles.OrdersSection>
            </>
            }
        </Styles.Root>
    );
}

export default OrdersPage;
