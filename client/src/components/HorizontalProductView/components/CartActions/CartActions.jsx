import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { incrementProductQuantity, decrementProductQuantity, deleteProductFromCart } from '../../../../redux/cart/cartActions';
import Loading from '../../../Loading';
import ErrorMessage from '../../../ErrorMessage';
import * as Styles from './CartActionsStyles';


function CartActions(props) {
    const { quantity, id } = props.product;
    const { actionLoading, actionError } = useSelector(state => state.cart);
    const dispatch = useDispatch();

    function incrementQuantity() {
        if (actionLoading === id) return;
        dispatch(incrementProductQuantity(id));
    }
    
    function decrementQuantity() {
        if (actionLoading === id) return;
        dispatch(decrementProductQuantity(id));
    }

    function deletefromCart() {
        if (actionLoading === id) return;
        dispatch(deleteProductFromCart(id));
    }

    return (
        <Styles.Root>
            <Styles.Actions>
                <Styles.QuantityActions>
                    <Styles.DecrementBtn className="clickable" onClick={decrementQuantity} />
                    <Styles.ProductQuantity className="p-xlarge">
                        {actionLoading === id ? <Loading small/> : quantity}
                    </Styles.ProductQuantity>
                    <Styles.IncrementBtn className="clickable" onClick={incrementQuantity} />
                </Styles.QuantityActions>

                <Styles.CartRemoveBtn className="clickable" onClick={deletefromCart} />
            </Styles.Actions>
            {actionError?.id === id && <ErrorMessage>{actionError.message}</ErrorMessage>}
        </Styles.Root>
    );
}

export default CartActions;
