import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { addProductToCart, deleteProductFromCart } from '../../../../redux/cart/cartActions';
import { clearActionState } from '../../../../redux/cart/cartSlice';
import { formatPrice } from '../../../../utils/formatUtils';
import * as Styles from './ProductOverviewStyles';
import Button from '../../../../components/Button';
import Loading from '../../../../components/Loading';
import ErrorMessage from '../../../../components/ErrorMessage';


function ProductOverview() {
    const product = useSelector(state => state.products.selectedProduct);
    const cartState = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const isProductInCart = cartState.userCart?.find(prod => prod.id === product.id);
    
    useEffect(() => {
        dispatch(clearActionState());
    }, []);

    function toggleProductCart() {
        if (isProductInCart)
            dispatch(deleteProductFromCart(product.id));
        else
            dispatch(addProductToCart(product.id));
    }

    return (
        <Styles.Root>
            <Styles.ImageContainer>
                <img src={product.imageURL} alt="product" />
            </Styles.ImageContainer>
            <Styles.TextInfo>
                <h1>{product.name}</h1>
                <Styles.Description>{product.description}</Styles.Description>
                <h2 dangerouslySetInnerHTML={{__html: formatPrice(product.price)}}></h2>

                {cartState.actionLoading ?
                <Loading med /> :
                <Button onClick={toggleProductCart} danger={isProductInCart}>
                    {isProductInCart ? 'REMOVE FROM CART' : 'ADD TO CART'}
                </Button>}
                {cartState.actionError?.id === product.id && <ErrorMessage>{cartState.actionError.message}</ErrorMessage>}
            </Styles.TextInfo>
        </Styles.Root>
    );
}

export default ProductOverview;
