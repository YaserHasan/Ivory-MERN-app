import React from 'react';

import { useSelector } from 'react-redux';
import * as Styles from './ProductSpecsStyles';


function ProductSpecs() {
    const { specs } = useSelector(state => state.products.selectedProduct);

    return (
        <Styles.Root>
            <Styles.Table>
                {specs.map(spec => (
                    <tbody key={spec.name}>
                        <tr>
                            <td><h4>{spec.name}</h4></td>
                            <td><p>{spec.value}</p></td>
                        </tr>
                    </tbody>
                ))}
            </Styles.Table>
        </Styles.Root>
    );
}

export default ProductSpecs;
