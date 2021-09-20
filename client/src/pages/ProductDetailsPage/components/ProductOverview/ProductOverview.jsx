import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { formatPrice } from '../../../../utils/formatUtils';
import * as Styles from './ProductOverviewStyles';
import Button from '../../../../components/Button';


function ProductOverview() {
    const product = useSelector(state => state.products.selectedProduct);
    const dispatch = useDispatch();

    return (
        <Styles.Root>
            <Styles.ImageContainer>
                <img src={product.imageURL} alt="product" />
            </Styles.ImageContainer>
            <Styles.TextInfo>
                <h1>{product.name}</h1>
                <p>{product.description}</p>
                <h2 dangerouslySetInnerHTML={{__html: formatPrice(product.price)}}></h2>
                <Button>ADD TO CART</Button>
            </Styles.TextInfo>
        </Styles.Root>
    );
}

export default ProductOverview;
