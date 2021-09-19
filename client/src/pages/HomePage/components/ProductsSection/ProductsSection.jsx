import React from 'react';

import * as Styles from './ProductsSectionStyles';
import ProductsListView from '../../../../components/ProductsListView';


function ProductsSection(props) {
    const { title, products } = props;

    return (
        <Styles.Root>
            <h1>{title}</h1>
            <ProductsListView products={products} />
        </Styles.Root>
    );
}

export default ProductsSection;
