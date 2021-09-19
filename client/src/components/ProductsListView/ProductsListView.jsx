import React from 'react';

import { useIsOnDevice, DEVICE_SIZES } from '../../hooks/useIsOnDevice';
import VerticalProductViewGrid from '../VerticalProductViewGrid';
import VerticalProductView from '../VerticalProductView';
import HorizontalProductViewList from '../HorizontalProductViewList';
import HorizontalProductView from '../HorizontalProductView';


function ProductsListView(props) {
    const { products } = props;
    const isOnMobile = useIsOnDevice(DEVICE_SIZES.mobileDevices);

    return (
        <>
            {isOnMobile ? 
            <HorizontalProductViewList>
                {products.map(product => (
                    <HorizontalProductView key={product.id} product={product} />
                ))}
            </HorizontalProductViewList>
            :   
            <VerticalProductViewGrid>
                {products.map(product => (
                    <VerticalProductView key={product.id} product={product}/>
                ))}
            </VerticalProductViewGrid>}
        </>
    );
}

export default ProductsListView;
