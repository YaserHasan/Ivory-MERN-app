import React from 'react';

import * as Styles from './CartActionsStyles';


function CartActions() {
    return (
        <Styles.Root>
            <Styles.QuantityActions>
                <Styles.DecrementBtn className="clickable" />
                <Styles.ProductQuantity className="p-xlarge">1</Styles.ProductQuantity>
                <Styles.IncrementBtn className="clickable" />
            </Styles.QuantityActions>

            <Styles.CartRemoveBtn className="clickable" />
        </Styles.Root>
    );
}

export default CartActions;
