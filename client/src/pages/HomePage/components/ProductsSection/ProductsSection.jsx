import React from 'react';

import * as Styles from './ProductsSectionStyles';
import VerticalProductViewGrid from '../../../../components/VerticalProductViewGrid';
import VerticalProductView from '../../../../components/VerticalProductView';
import HorizontalProductView from '../../../../components/HorizontalProductView';
import { useIsOnDevice, DEVICE_SIZES } from '../../../../hooks/useIsOnDevice';


function ProductsSection(props) {
    const { title, products } = props;
    const isOnMobile = useIsOnDevice(DEVICE_SIZES.mobileDevices);

    return (
        <Styles.Root>
            <h1>{title}</h1>
            
            {isOnMobile && products.map(product => (
                <HorizontalProductView key={product.id} product={product} />
            ))}

            {!isOnMobile && <VerticalProductViewGrid>
                {products.map(product => (
                    <VerticalProductView key={product.id} product={product}/>
                ))}
            </VerticalProductViewGrid>}
        </Styles.Root>
    );
}

export default ProductsSection;
