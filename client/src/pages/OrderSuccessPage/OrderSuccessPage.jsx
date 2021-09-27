import React, { useEffect } from 'react';

import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { clearState } from '../../redux/orders/ordersSlice';
import { updatePageTitle } from '../../utils/metaTagsUtils';
import * as Styles from './OrderSuccessPageStyles';
import Button from '../../components/Button';


function OrderSuccessPage() {
    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {
        updatePageTitle('Thank you for your order');

        return () => dispatch(clearState());
    }, []);

    return (
        <Styles.Root expand centerHorizontally centerVertically>
            <Styles.SuccessIcon src="../assets/images/checked.png" alt="success" />
            <h1>Thank you for your order</h1>
            <p class="p-large">
                We are currently processing your order.<br/>Your order will arrive within 15 days
            </p>
            <Button small onClick={() => history.replace('/')}>CONTINUE SHOPPING</Button>
        </Styles.Root>
    );
}

export default OrderSuccessPage;
