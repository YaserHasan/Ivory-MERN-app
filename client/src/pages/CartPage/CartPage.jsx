import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { getUserCart } from '../../redux/cart/cartActions';
import { clearActionState } from '../../redux/cart/cartSlice';
import { updatePageTitle } from '../../utils/metaTagsUtils';
import * as Styles from './CartPageStyles';
import HorizontalProductView from '../../components/HorizontalProductView';
import OrderInfo from './components/OrderInfo';
import Loading from '../../components/Loading';
import ErrorView from '../../components/ErrorView';
import OrderSuccessPage from '../OrderSuccessPage';


function CartPage() {
    const { loading, error, userCart } = useSelector(state => state.cart);
    const { success: checkoutSuccess } = useSelector(state => state.orders);
    const dispatch = useDispatch();

    useEffect(() => {
        updatePageTitle('Shopping Cart');
        dispatch(clearActionState());
        dispatch(getUserCart());
    }, []);

    if (checkoutSuccess)
        return <OrderSuccessPage />

    return (
        <Styles.Root expand centerVertically={(loading || error)} centerHorizontally={(loading || error)}>
            {(loading && !error) && <Loading />}
            {(!loading && error) && <ErrorView errorMesasge={error} />}

            {(!loading && !error && userCart) &&
            <>
                <h1>Shopping Cart</h1>
                <Styles.FlexContainer>
                    <Styles.CartProductsSection>
                        {userCart.map(product => (
                            <HorizontalProductView key={product.id} inCart product={product} />
                        ))}
                    </Styles.CartProductsSection>

                    <OrderInfo />
                </Styles.FlexContainer>
            </>
            }
        </Styles.Root>
    );
}

export default CartPage;
